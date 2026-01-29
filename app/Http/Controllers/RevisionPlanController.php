<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\ActivityProject;
use App\Models\AnnualInvestmentPlanInstitutional;
use App\Models\Appropriation;
use App\Models\BudgetPrep;
use App\Models\BudgetRequirement;
use App\Models\CurrentAipYear;
use App\Models\FFUNCCOD;
use App\Models\HGDG_Checklist;
use App\Models\ImplementationPlan;
use App\Models\Implementing_team;
use App\Models\MajorFinalOutput;
use App\Models\Monitoring_and_evaluation;
use App\Models\OOE;
use App\Models\PopspAgency;
use App\Models\ProgramAndProject;
use App\Models\RevisionPlan;
use App\Models\RevisionPlanComment;
use App\Models\Risk_manangement;
use App\Models\SharedProgramAndProject;
use App\Models\Signatory;
use App\Models\Strategy;
use App\Models\Activity;
use App\Models\ExpectedRevisedOutput;
use App\Models\StrategyProject;
use App\Models\Target;
use App\Models\TeamPlan;
use App\Models\User;
use Box\Spout\Writer\Common\Creator\Style\StyleBuilder;
use Box\Spout\Writer\Common\Creator\WriterEntityFactory;
use Carbon\Carbon;
use Illuminate\Foundation\Http\Middleware\TrimStrings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class RevisionPlanController extends Controller
{
    protected $model;
    protected $imp;
    protected $budget;
    public function __construct(RevisionPlan $model, ImplementationPlan $imp, BudgetRequirement $budget)
    {
        $this->model = $model;
        $this->imp = $imp;
        $this->budget = $budget;
    }
    public function index(Request $request, $idpaps)
    {
        // dd($idpaps);
        // if(auth()->user()->popsp_agency){
        //     return redirect('/forbidden')->with('error', 'You are not allowed to access this page');
        // }
        // dd($request->source);
        $myid = auth()->user()->recid;
        $dept_id = auth()->user()->department_code;
        $FFUNCCOD = FFUNCCOD::where('department_code', $dept_id)->first()->FFUNCCOD;

        if ($request->year_period) {
            $year_period = $request->year_period;
        } else {
            $year_period = CurrentAipYear::first()->year_period;
        }
        $AIPInstitutional = AnnualInvestmentPlanInstitutional::where('year_period', $year_period)->first();
        if ($request->source == 'sip') {
            // dd($request->source, $AIPInstitutional->sp_approved, $AIPInstitutional->sip_period);
            if ($AIPInstitutional) {
                if ($AIPInstitutional->sp_approved != '1') {
                    return redirect()->back()->with('error', 'The AIP is not yet finalized');
                }
                if (intval($AIPInstitutional->sip_period) < 1) {
                    return redirect()->back()->with('error', 'SIP preparation has not commenced yet.');
                }
            } else {
                return redirect()->back()->with('error', 'The AIP is not yet finalized');
            }
        }
        // dd($FFUNCCOD);
        $paps = ProgramAndProject::where('id', $idpaps)->first();
        $paps_type = "";
        if ($paps) {
            $paps_type = $paps->type;
        }
        $budget_controller = new BudgetRequirementController($this->budget);
        // dd("revision");
        if ($paps_type === "GAS") {
            return redirect('/revision/general/administration/services/' . $FFUNCCOD . '/plan');
        } else if ($idpaps == "0") {
            // dd($idpaps);
            $sharedPaps = SharedProgramAndProject::where('destination_department_code', $dept_id)->get()->pluck('idpaps');

            $popsp_agency = PopspAgency::where('agency_code', auth()->user()->popsp_agency)->first();
            $department_code_actual = null;
            if ($popsp_agency) {
                $department_code_actual = $popsp_agency->department_code_actual;
            }
            // dd($popsp_agency);
            $data = [];
            if ($popsp_agency) {

                $data = $this->getPopsPProfilesDirect($request, $budget_controller, $dept_id, $popsp_agency);
            } else {
                if ($request->source == 'sip') {
                    $data = $this->getSip($request, $dept_id, $popsp_agency, $budget_controller);
                } else {
                    $gas = $this->forGas($FFUNCCOD, 2026);
                    // dd($gas);
                    $gas2 = $this->forGas($FFUNCCOD, 2027);
                    // dd($gas2);
                    $data = $this->getDirect($request, $dept_id, $popsp_agency, $budget_controller);

                    if(count($gas)>0){
                        $data = $data->concat($gas);
                    }
                    if(count($gas2)>0){
                        $data = $data->concat($gas2);
                    }
                }
            }
            // dd($data);
            return inertia('RevisionPlans/Index', [
                // "filters" => $request->only(['search']),
                'data' => $data,
                "idpaps" => $idpaps,
                "paps" => $paps,
                "filters" => $request->only(['search', 'type_filter']),
                "source" => $request->source,
                'can' => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        } else {
            // dd(RevisionPlan::where('idpaps', $idpaps)->get());
            $data = RevisionPlan::with(['paps', 'paps.office'])
                ->where('idpaps', '=', $idpaps)
                ->get()
                ->map(function ($item) use ($budget_controller) {
                    // COUNT THE COMMENTS
                    $revision_comment = RevisionPlanComment::where('table_row_id', $item->id)->where('table_name', 'revision_plans')->count();
                    // dd($revision_comment);

                    // BUDGERTARY REQUIREMENTs
                    $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                        ->sum('amount');

                    $imp_amount = 0.00;
                    // DB::table('targets')
                    //     ->where('implementation_plans.idrev_plan', $item->id)
                    //     ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                    //     ->select('targets.*', 'implementation_plans.*')
                    //     ->sum('targets.planned_budget');
                    $total = [];
                    // dd($item);
                    if ($item->is_strategy_based == 1) {
                        $total = $budget_controller->getStratTotal($item->id);
                    } else {
                        $total = $budget_controller->getActivityTotal($item->id);
                    }
                    // dd($item->is_strategy_based);
                    if ($total) {
                        $imp_amount = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
                            $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
                            $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4') +
                            $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');
                    }
                    // dd($total);
                    // dd($imp_amount);
                    return [
                        // 'FFUNCTION' => $item->FFUNCTION,
                        'FFUNCTION' => optional(optional(optional($item)->paps)->office)->FFUNCTION,
                        'idpaps' => $item->idpaps,
                        'id' => $item->id,
                        'project_title' => $item->project_title,
                        'type' => $item->type,
                        'version' => $item->version,
                        'budget_sum' => $budgetary_requirement,
                        'imp_amount' => $imp_amount,
                        'status' => $item->status
                    ];
                });


            // dd($data);
            return inertia('RevisionPlans/Index', [
                'data' => $data,
                "idpaps" => $idpaps,
                "paps" => $paps,
                "filters" => $request->only(['search']),
                'can' => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        }
    }
    public function forGas($FFUNCCOD, $currentYear){
        // dd($FFUNCCOD);
        // dd(RevisionPlan::where('revision_plans.FFUNCCOD', $FFUNCCOD)->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'revision_plans.FFUNCCOD')->where('revision_plans.scope', 'GAS')->get());
        $data = RevisionPlan::select(
            'revision_plans.id',
            'revision_plans.project_title',
            'revision_plans.version',
            'revision_plans.type',
            'revision_plans.year_period',
            'ff.FFUNCTION',
            'status',
        )
            ->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'revision_plans.FFUNCCOD')
            ->where('revision_plans.FFUNCCOD', $FFUNCCOD)
            ->where('revision_plans.year_period', $currentYear)
            // ->where('revision_plans.idpaps', '0')
            // ->where('revision_plans.idmfo', '0')
            // ->where('revision_plans.idmfo', '0')
            ->where('revision_plans.scope', 'GAS')
            ->get()
            ->map(function ($item) use($currentYear) {
                $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                    ->sum('amount');
                // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                //                 ->join('targets', 'targets.id','implementation_plans.id')
                //                 ->sum('targets.planned_budget');
                // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                //                 ->join('targets', 'targets.id','implementation_plans.id')
                //                 ->get();
                $imp_amount = DB::table('targets')
                    ->where('implementation_plans.idrev_plan', $item->id)
                    ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                    ->select('targets.*', 'implementation_plans.*')
                    ->sum('targets.planned_budget');

                // dd($item);
                return [
                    'FFUNCTION' => $item->FFUNCTION,
                    'id' => $item->id,
                    'project_title' => $item->project_title,
                    'type' => $item->type,
                    'version' => $item->version,
                    'budget_sum' => $budgetary_requirement,
                    'imp_amount' => $imp_amount,
                    'scope' => $item->scope,
                    'year_period' => $item->year_period,
                    'status' => $item->status,
                    'number_of_clones' => 0,
                    'return_request_status' => $item->return_request_status,
                    'year'=>$currentYear
                ];
            });
        return $data;
    }
    public function getSip(Request $request, $dept_id, $popsp_agency, $budget_controller)
    {
        return RevisionPlan::with(['paps', 'paps.office', 'clonedVersions'])
            ->whereHas('paps', function ($query) use ($dept_id, $popsp_agency) {
                $query->where('department_code', $dept_id);
                // ->orWhere('department_code', optional($popsp_agency)->department_code_actual);
            })
            ->when(auth()->user()->popsp_agency, function ($query) use ($dept_id, $popsp_agency) {
                // dd("may agency", $popsp_agency);
                $query->where('agency_name', $popsp_agency->agency_code);
            })
            ->when($request->has_comments == 1, function ($query) {
                $query->whereExists(function ($sub) {
                    $sub->select(DB::raw(1))
                        ->from('revision_plan_comments as rpc')
                        ->where(function ($inner) {
                            $inner->where('rpc.table_name', 'revision_plans')
                                ->whereColumn('rpc.table_row_id', 'revision_plans.id');
                        })
                        // activity_projects
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc2', 'rpc2.table_row_id', '=', 'ap.id')
                                ->where('rpc2.table_name', 'activity_projects');
                        })
                        // strategy_projects
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('strategy_projects as sp')
                                ->whereColumn('sp.project_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc3', 'rpc3.table_row_id', '=', 'sp.id')
                                ->where('rpc3.table_name', 'strategy_projects');
                        })
                        // 4️⃣ expected_revised_outputs comments
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('expected_revised_outputs as ero2', 'ero2.activity_project_id', '=', 'ap.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'ero2.id')
                                ->where('rpc4.table_name', 'expected_revised_outputs');
                        })

                        // 3️⃣ expected_revised_outcomes comments
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('expected_revised_outcomes as ero', 'ero.activity_project_id', '=', 'ap.id')
                                ->join('revision_plan_comments as rpc3', 'rpc3.table_row_id', '=', 'ero.id')
                                ->where('rpc3.table_name', 'expected_revised_outcomes');
                        })
                        // budget_requirements
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('budget_requirements as br')
                                ->whereColumn('br.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'br.id')
                                ->where('rpc4.table_name', 'budget_requirements');
                        })
                        // team plans
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('team_plans as tp')
                                ->whereColumn('tp.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'tp.id')
                                ->where('rpc4.table_name', 'team_plans');
                        })

                        // monitoring and evaluation
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('monitoring_and_evaluations as me')
                                ->whereColumn('me.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'me.id')
                                ->where('rpc4.table_name', 'monitoring_and_evaluations');
                        })

                        // risk managements
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('risk_manangements as rm')
                                ->whereColumn('rm.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'rm.id')
                                ->where('rpc4.table_name', 'risk_manangements');
                        });
                });
            })
            ->where(function ($q) {
                $q->where(function ($q2) {
                    $q2->where('type', 'd')
                        ->where('status', 1);
                })
                    ->orWhere('type', 'sip');
            })
            ->get()
            ->map(function ($item) use ($budget_controller) {
                // COUNT THE COMMENTS
                // dd($item);
                $year = Carbon::parse($item->date_start)->year;
                $revision_comment = RevisionPlanComment::where('table_row_id', $item->id)->where('table_name', 'revision_plans')->count();
                // dd($revision_comment);

                // BUDGERTARY REQUIREMENTs
                $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                    ->sum('amount');

                $imp_amount = 0.00;
                // DB::table('targets')
                //     ->where('implementation_plans.idrev_plan', $item->id)
                //     ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                //     ->select('targets.*', 'implementation_plans.*')
                //     ->sum('targets.planned_budget');
                $total = [];
                // dd($item);
                if ($item->is_strategy_based == 1) {
                    $total = $budget_controller->getStratTotal($item->id);
                } else {
                    $total = $budget_controller->getActivityTotal($item->id);
                }
                // dd($item->is_strategy_based);
                if ($total) {
                    $imp_amount = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
                        $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
                        $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4') +
                        $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');
                }
                return [
                    // 'FFUNCTION' => $item->FFUNCTION,
                    'FFUNCTION' => optional(optional(optional($item)->paps)->office)->FFUNCTION,
                    'idpaps' => $item->idpaps,
                    'id' => $item->id,
                    'project_title' => $item->project_title,
                    'type' => $item->type,
                    'version' => $item->version,
                    'budget_sum' => $budgetary_requirement,
                    'imp_amount' => $imp_amount,
                    'status' => $item->status,
                    'number_of_clones' => $item->clonedVersions->count(),
                    'year'=>$year
                    // 'paps'=>$item->paps
                ];
            });
    }
    public function getDirect(Request $request, $dept_id, $popsp_agency, $budget_controller)
    {
        return RevisionPlan::with(['paps', 'paps.office', 'clonedVersions'])
            ->whereHas('paps', function ($query) use ($dept_id, $popsp_agency) {
                $query->where('department_code', $dept_id);
                // ->orWhere('department_code', optional($popsp_agency)->department_code_actual);
            })
            ->when(auth()->user()->popsp_agency, function ($query) use ($dept_id, $popsp_agency) {
                // dd("may agency", $popsp_agency);
                $query->where('agency_name', $popsp_agency->agency_code);
            })
            ->when($request->has_comments == 1, function ($query) {
                $query->whereExists(function ($sub) {
                    $sub->select(DB::raw(1))
                        ->from('revision_plan_comments as rpc')
                        ->where(function ($inner) {
                            $inner->where('rpc.table_name', 'revision_plans')
                                ->whereColumn('rpc.table_row_id', 'revision_plans.id');
                        })
                        // activity_projects
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc2', 'rpc2.table_row_id', '=', 'ap.id')
                                ->where('rpc2.table_name', 'activity_projects');
                        })
                        // strategy_projects
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('strategy_projects as sp')
                                ->whereColumn('sp.project_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc3', 'rpc3.table_row_id', '=', 'sp.id')
                                ->where('rpc3.table_name', 'strategy_projects');
                        })
                        // 4️⃣ expected_revised_outputs comments
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('expected_revised_outputs as ero2', 'ero2.activity_project_id', '=', 'ap.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'ero2.id')
                                ->where('rpc4.table_name', 'expected_revised_outputs');
                        })

                        // 3️⃣ expected_revised_outcomes comments
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('expected_revised_outcomes as ero', 'ero.activity_project_id', '=', 'ap.id')
                                ->join('revision_plan_comments as rpc3', 'rpc3.table_row_id', '=', 'ero.id')
                                ->where('rpc3.table_name', 'expected_revised_outcomes');
                        })
                        // budget_requirements
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('budget_requirements as br')
                                ->whereColumn('br.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'br.id')
                                ->where('rpc4.table_name', 'budget_requirements');
                        })
                        // team plans
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('team_plans as tp')
                                ->whereColumn('tp.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'tp.id')
                                ->where('rpc4.table_name', 'team_plans');
                        })

                        // monitoring and evaluation
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('monitoring_and_evaluations as me')
                                ->whereColumn('me.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'me.id')
                                ->where('rpc4.table_name', 'monitoring_and_evaluations');
                        })

                        // risk managements
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('risk_manangements as rm')
                                ->whereColumn('rm.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'rm.id')
                                ->where('rpc4.table_name', 'risk_manangements');
                        });
                });
            })
            ->when($request->search, function ($query) use ($request) {
                $query->where('project_title', 'LIKE', '%' . $request->search . '%');
            })
            ->where('type', '<>', 'sip')
            ->when($request->type_filter, function ($query) use ($request) {
                $query->where('type', $request->type_filter);
            })
            ->get()
            ->map(function ($item) use ($budget_controller) {
                $year = Carbon::parse($item->date_start)->year;
                // COUNT THE COMMENTS
                // dd($item);
                $revision_comment = RevisionPlanComment::where('table_row_id', $item->id)->where('table_name', 'revision_plans')->count();
                // dd($revision_comment);

                // BUDGERTARY REQUIREMENTs
                $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                    ->sum('amount');

                $imp_amount = 0.00;
                // DB::table('targets')
                //     ->where('implementation_plans.idrev_plan', $item->id)
                //     ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                //     ->select('targets.*', 'implementation_plans.*')
                //     ->sum('targets.planned_budget');
                $total = [];
                // dd($item);
                if ($item->is_strategy_based == 1) {
                    $total = $budget_controller->getStratTotal($item->id);
                } else {
                    $total = $budget_controller->getActivityTotal($item->id);
                }
                // dd($item->is_strategy_based);
                if ($total) {
                    $imp_amount = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
                        $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
                        $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4') +
                        $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');
                }
                // dd($total);
                // dd($item);
                // dd($item->project_title);
                // if ($item->id == 201) {
                //     dd($item);
                // }
                return [
                    // 'FFUNCTION' => $item->FFUNCTION,
                    'FFUNCTION' => optional(optional(optional($item)->paps)->office)->FFUNCTION,
                    'idpaps' => $item->idpaps,
                    'id' => $item->id,
                    'project_title' => $item->project_title,
                    'type' => $item->type,
                    'version' => $item->version,
                    'budget_sum' => $budgetary_requirement,
                    'imp_amount' => $imp_amount,
                    'status' => $item->status,
                    'number_of_clones' => $item->clonedVersions->count(),
                    'return_request_status' => $item->return_request_status,
                    'year'=>$year
                    // 'paps'=>$item->paps
                ];
            });
    }
    public function exportAIP()
    {
        // Create a temporary file path
        $filePath = storage_path('app/public/users.xlsx');

        // Create writer
        $writer = WriterEntityFactory::createXLSXWriter();
        $writer->openToFile($filePath);

        // (Optional) Create header style
        $headerStyle = (new StyleBuilder())
            // ->setBold()
            ->build();

        // Write header
        $headerRow = WriterEntityFactory::createRowFromArray(
            ['ID', 'Name', 'Email'],
            $headerStyle
        );
        $writer->addRow($headerRow);

        // Write data rows
        $users = User::all(['recid', 'UserName', 'email']);
        // dd($users);
        foreach ($users as $user) {
            $row = WriterEntityFactory::createRowFromArray([
                $user->recid,
                $user->UserName,
                $user->email,
                // $user->created_at,
            ]);
            $writer->addRow($row);
        }

        $writer->close();

        // Return file as download response
        return response()->download($filePath)->deleteFileAfterSend(true);
    }
    public function create(Request $request, $id)
    {
        // dd($request->source);
        // dd($id, auth()->user()->department_code);


        $paps = ProgramAndProject::with('MFO')->where('id', $id)->get();
        // dd($paps,"PAPS");
        $dept_code = auth()->user()->department_code;
        $paps_all = [];
        // dd(auth()->user()->department_code);
        if (!isset($paps)) {
            $paps_all = ProgramAndProject::with('MFO')
                ->where(function ($query) use ($dept_code) {
                    $query->whereHas('MFO', function ($query) use ($dept_code) {
                        $query->where('department_code', $dept_code);
                    })
                        ->orWhere('department_code', $dept_code);
                })

                ->get();
            // dd("wala si paps", $paps);
            // $all_paps = Progr
        }
        $hgdg = HGDG_Checklist::get();
        $count = RevisionPlan::where('idpaps', $id)->count();
        $max_id = RevisionPlan::where('idpaps', $id)->max('id');
        // dd($max_id);
        $duplicate = RevisionPlan::where('id', $max_id)->get();
        $popsp_agencies = PopspAgency::all();
        // dd($paps_all);
        if ($count > 0) {

            return inertia('RevisionPlans/Create', [
                "idpaps" => $id,
                "hgdgs" => $hgdg,
                "paps" => $paps,
                "popsp_agencies" => $popsp_agencies,
                "duplicate" => $duplicate,
                "can" => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        } else {
            //dd("Duplicate is empty");
            return inertia('RevisionPlans/Create', [
                "idpaps" => $id,
                "hgdgs" => $hgdg,
                "paps" => $paps,
                "paps_all" => $paps_all,
                "source" => $request->source,
                "popsp_agencies" => $popsp_agencies,
                "can" => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        }
        //dd($duplicate);

    }
    public function store(Request $request)
    {
        // dd($request);
        //$idpaps=$request->idpaps;
        $attributes = $request->validate([
            'idpaps' => 'required',
            'project_title' => 'required',
            'project_location' => 'required',
            'list_of_lgu_covered' => 'required',
            'date_start' => 'required',
            'date_end' => 'required',
            'beneficiary_male' => 'required',
            'beneficiary_female' => 'required',
            'baseline_male' => 'required',
            'baseline_female' => 'required',
            'baseline_total' => 'required',
            'data_source' => 'required',
            'rationale' => 'required',
            'objective' => 'required',
            'beneficiaries' => 'required',
            'checklist_id' => 'required',
            // 'implementing_team'=>'required',
            'partnership' => 'required',

            // 'monitoring'=>'required',
            // 'risk_management'=>'required'
        ]);
        // REDIRECT URL
        $red_url = '';
        if ($request->source == 'direct') {
            $red_url = '/revision/0?' . $request->source;
        } else {
            $red_url = '/revision/' . $request->idpaps;
        }
        // dd($red_url);
        $version = RevisionPlan::where('idpaps', '=', $request->idpaps)->max('version');
        if ($version) {
            $version = $version + 1;
        } else {
            $version = 1;
        }

        $rev = new RevisionPlan();
        $rev->idpaps = $attributes['idpaps'];
        $rev->project_title = $attributes['project_title'];
        $rev->project_location = $attributes['project_location'];
        $rev->list_of_lgu_covered = $attributes['list_of_lgu_covered'];
        $rev->date_start = $attributes['date_start'];
        $rev->date_end = $attributes['date_end'];
        $rev->beneficiary_male = $attributes['beneficiary_male'];
        $rev->beneficiary_female = $attributes['beneficiary_female'];
        $rev->baseline_male = $attributes['baseline_male'];
        $rev->baseline_female = $attributes['baseline_female'];
        $rev->baseline_total = $attributes['baseline_total'];
        $rev->data_source = $attributes['data_source'];
        $rev->rationale = $attributes['rationale'];
        $rev->objective = $attributes['objective'];
        $rev->beneficiaries = $attributes['beneficiaries'];
        $rev->implementing_team = $request->implementing_team;
        $rev->partnership = $attributes['partnership'];
        $rev->monitoring = $request->monitoring;
        $rev->risk_management = $request->risk_management;
        // $rev->implementing_team=$attributes['implementing_team'];
        // $rev->monitoring=$attributes['monitoring'];
        // $rev->risk_management=$attributes['risk_management'];
        //$rev->checklist_id=$attributes['checklist_id'];
        $rev->amount = '0.00';
        $rev->attributed_amount = '0.00';
        $rev->checklist_id = $attributes['checklist_id'];
        $rev->hgdg_score = '0';
        $rev->version = $version;
        $rev->type = 'p';
        $rev->final = '0';
        $rev->supplemental = '0';
        $rev->is_strategy_based = $request->is_strategy_based;
        $rev->aip_code = $request->aip_code;
        $rev->user_id = auth()->user()->recid;
        $rev->save();
        // if($attributes){
        //     dd('all validated');
        // }
        //$this->model->create($attributes);
        //$request->pass='';
        return redirect($red_url)
            ->with('message', 'Revision Plan added');
        // if($request->source=='direct'){
        //     return redirect($red_url)
        //     ->with('message', 'Revision Plan added');
        // }else{
        //     return redirect('/revision/' . $request->idpaps)
        //     ->with('message', 'Revision Plan added');
        // }

    }
    public function view(Request $request, $id)
    {
        // dd($id);
        // dd(env('DB_DATABASE'));
        // dd(config('database.connections.mysql.database'));
        $src = $request->source;

        if (auth()->user()->department_code != '04' && $src == 'rev_app') {
            return redirect('/forbidden')
                ->with('error', 'You do not have access to this page.');
        }
        //REVISION PLANS
        $paps = RevisionPlan::with(['comments', 'comments.user', 'paps', 'checklist'])
            ->where('id', $id)
            ->first();
        // dd($paps);
        $scope = $paps->scope;
        $idpaps = $paps->idpaps;
        $idmfo = $paps->idmfo;
        $department_code = "";
        //PROGRAMS AND PROJECTS & FUNCTIONS
        $ppa = [];
        $functions = [];
        if ($scope == 'GAS') {
            $functions = AccountAccess::where('iduser', auth()->user()->recid)
                ->where('ff.FFUNCCOD', $paps->FFUNCCOD)
                ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
                ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
                ->with('func')->first();
        } else if ($idpaps != 0) {
            $department_code = optional(optional($paps)->paps)->department_code;
            $ppa = ProgramAndProject::findOrFail($paps->idpaps);
            if (auth()->user()->department_code == '04') {
                $functions = FFUNCCOD::where('FFUNCCOD', $ppa->FFUNCCOD)->first();
            } else {
                $functions = FFUNCCOD::where('FFUNCCOD', $ppa->FFUNCCOD)->first();
                // $functions = AccountAccess::where('iduser', auth()->user()->recid)
                //     ->where('ff.FFUNCCOD', $ppa->FFUNCCOD)
                //     ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
                //     ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
                //     ->with('func')->first();
            }
        } else if ($idmfo != 0) {
            $mfoss = MajorFinalOutput::findOrFail($paps->idmfo);
            if (auth()->user()->department_code == '04') {
                $functions = FFUNCCOD::where('FFUNCCOD', $mfoss->FFUNCCOD)->first();
            } else {
                $functions = FFUNCCOD::where('FFUNCCOD', $mfoss->FFUNCCOD)->first();
                // $functions = AccountAccess::where('iduser', auth()->user()->recid)
                //     ->where('ff.FFUNCCOD', $mfoss->FFUNCCOD)
                //     ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
                //     ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
                //     ->with('func')->first();
            }
        }

        //IMPLEMENTATION PLANS
        $implement = Strategy::with([
            'strategyProject' => function ($query) use ($id) {
                $query->where('project_id', $id)
                    ->where('is_active', '1');
            },
            'strategyProject.expected_output',
            'strategyProject.expected_output.comments',
            'strategyProject.expected_outcome',
            'strategyProject.expected_outcome.comments',
            'strategyProject.comments',
            'strategyProject.comments.user',
            'activity' => function ($query) use ($paps, $id) {
                if ($paps->is_strategy_based == 0) {
                    $query->whereHas('activityProject', function ($q) {
                        $q->where('is_active', '1');
                    });
                }
            },
            'activity.activityProject' => function ($q) use ($id) {
                $q->where('project_id', $id)
                    ->where('is_active', '1');
            },
            'activity.activityProject.expected_output',
            'activity.activityProject.expected_output.comments',
            'activity.activityProject.expected_outcome',
            'activity.activityProject.expected_outcome.comments',
            'activity.activityProject.comments',
            'activity.activityProject.comments.user'
        ])->whereHas('strategyProject', function ($query) {
            $query->where('is_active', '1');
        })
            ->where('idpaps', $idpaps)
            ->get()
            ->map(function ($item) {
                // dd($item);
                $item->activity = $item->activity->map(function ($activity) {
                    $activity->is_selected = $activity->activityProject->count() > 0;
                    $ps_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q1 > 0 ? $activity->activityProject[0]->ps_q1 : 0) : 0;
                    $ps_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q2 > 0 ? $activity->activityProject[0]->ps_q2 : 0) : 0;
                    $ps_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q3 > 0 ? $activity->activityProject[0]->ps_q3 : 0) : 0;
                    $ps_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->ps_q4 > 0 ? $activity->activityProject[0]->ps_q4 : 0) : 0;
                    $mooe_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q1 > 0 ? $activity->activityProject[0]->mooe_q1 : 0) : 0;
                    $mooe_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q2 > 0 ? $activity->activityProject[0]->mooe_q2 : 0) : 0;
                    $mooe_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q3 > 0 ? $activity->activityProject[0]->mooe_q3 : 0) : 0;
                    $mooe_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->mooe_q4 > 0 ? $activity->activityProject[0]->mooe_q4 : 0) : 0;
                    $co_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q1 > 0 ? $activity->activityProject[0]->co_q1 : 0) : 0;
                    $co_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q2 > 0 ? $activity->activityProject[0]->co_q2 : 0) : 0;
                    $co_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q3 > 0 ? $activity->activityProject[0]->co_q3 : 0) : 0;
                    $co_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->co_q4 > 0 ? $activity->activityProject[0]->co_q4 : 0) : 0;
                    $fe_q1 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->fe_q1 > 0 ? $activity->activityProject[0]->fe_q1 : 0) : 0;
                    $fe_q2 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->fe_q2 > 0 ? $activity->activityProject[0]->fe_q2 : 0) : 0;
                    $fe_q3 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->fe_q3 > 0 ? $activity->activityProject[0]->fe_q3 : 0) : 0;
                    $fe_q4 = $activity->activityProject->count() > 0 ? ($activity->activityProject[0]->fe_q4 > 0 ? $activity->activityProject[0]->fe_q4 : 0) : 0;
                    $act_comments = $activity->activityProject->count() > 0 ? $activity->activityProject[0]->comments : [];
                    $ps_total = floatval($ps_q1) + floatval($ps_q2) + floatval($ps_q3) + floatval($ps_q4);
                    $mooe_total = floatval($mooe_q1) + floatval($mooe_q2) + floatval($mooe_q3) + floatval($mooe_q4);
                    $co_total = floatval($co_q1) + floatval($co_q2) + floatval($co_q3) + floatval($co_q4);
                    $fe_total = floatval($fe_q1) + floatval($fe_q2) + floatval($fe_q3) + floatval($fe_q4);
                    // dd($activity->activityProject);
                    return [
                        "id" => $activity->id,
                        "date_from" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->date_from : null,
                        "date_to" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->date_to : null,
                        "description" => $activity->description,
                        "target_indicator" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->target_indicator : null,
                        "activity_id" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->id : null,
                        "project_id" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->project_id : null,
                        "ps_q1" => $ps_q1,
                        "ps_q2" => $ps_q2,
                        "ps_q3" => $ps_q3,
                        "ps_q4" => $ps_q4,
                        "ps_total" => $ps_total,
                        "mooe_q1" => $mooe_q1,
                        "mooe_q2" => $mooe_q2,
                        "mooe_q3" => $mooe_q3,
                        "mooe_q4" => $mooe_q4,
                        "mooe_total" => $mooe_total,
                        "co_q1" => $co_q1,
                        "co_q2" => $co_q2,
                        "co_q3" => $co_q3,
                        "co_q4" => $co_q4,
                        "co_total" => $co_total,
                        "fe_q1" => $fe_q1,
                        "fe_q2" => $fe_q2,
                        "fe_q3" => $fe_q3,
                        "fe_q4" => $fe_q4,
                        "fe_total" => $fe_total,
                        "gad_issue" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->gad_issue : null,
                        "ccet_code" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->ccet_code : null,
                        "responsible" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->responsible : null,
                        "activityProject" => $activity->activityProject,
                        "activity" => $activity->activity,
                        "finance_visible" =>   0,
                        "is_active" => $activity->activityProject->count() > 0 ? $activity->activityProject[0]->is_active : 0,
                        "comments" => $act_comments
                    ];
                });
                $ps_q1 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q1 > 0 ? $item->strategyProject[0]->ps_q1 : 0) : 0;
                $ps_q2 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q2 > 0 ? $item->strategyProject[0]->ps_q2 : 0) : 0;
                $ps_q3 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q3 > 0 ? $item->strategyProject[0]->ps_q3 : 0) : 0;
                $ps_q4 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->ps_q4 > 0 ? $item->strategyProject[0]->ps_q4 : 0) : 0;
                $mooe_q1 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q1 > 0 ? $item->strategyProject[0]->mooe_q1 : 0) : 0;
                $mooe_q2 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q2 > 0 ? $item->strategyProject[0]->mooe_q2 : 0) : 0;
                $mooe_q3 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q3 > 0 ? $item->strategyProject[0]->mooe_q3 : 0) : 0;
                $mooe_q4 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->mooe_q4 > 0 ? $item->strategyProject[0]->mooe_q4 : 0) : 0;
                $co_q1 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q1 > 0 ? $item->strategyProject[0]->co_q1 : 0) : 0;
                $co_q2 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q2 > 0 ? $item->strategyProject[0]->co_q2 : 0) : 0;
                $co_q3 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q3 > 0 ? $item->strategyProject[0]->co_q3 : 0) : 0;
                $co_q4 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->co_q4 > 0 ? $item->strategyProject[0]->co_q4 : 0) : 0;
                $fe_q1 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->fe_q1 > 0 ? $item->strategyProject[0]->fe_q1 : 0) : 0;
                $fe_q2 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->fe_q2 > 0 ? $item->strategyProject[0]->fe_q2 : 0) : 0;
                $fe_q3 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->fe_q3 > 0 ? $item->strategyProject[0]->fe_q3 : 0) : 0;
                $fe_q4 = $item->strategyProject->count() > 0 ? ($item->strategyProject[0]->fe_q4 > 0 ? $item->strategyProject[0]->fe_q4 : 0) : 0;
                $comments = $item->strategyProject->count() > 0 ? $item->strategyProject[0]->comments : [];
                $ps_total = floatval($ps_q1) + floatval($ps_q2) + floatval($ps_q3) + floatval($ps_q4);

                $mooe_total = floatval($mooe_q1) + floatval($mooe_q2) + floatval($mooe_q3) + floatval($mooe_q4);
                $co_total = floatval($co_q1) + floatval($co_q2) + floatval($co_q3) + floatval($co_q4);
                $fe_total = floatval($fe_q1) + floatval($fe_q2) + floatval($fe_q3) + floatval($fe_q4);
                // dd($co_total);
                // dd($item->strategyProject[0]);
                return [
                    "id" => $item->id,
                    "description" => $item->description,
                    "target_indicator" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->target_indicator : null,
                    "strategy_id" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->id : null,
                    "project_id" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->project_id : null,
                    "date_from" => $item->strategyProject->count() > 0
                        ? ($item->strategyProject[0]->date_from
                            ? $item->strategyProject[0]->date_from
                            : null)
                        : null,
                    "date_to" => $item->strategyProject->count() > 0
                        ? ($item->strategyProject[0]->date_to
                            ? Carbon::parse($item->strategyProject[0]->date_to)->format('Y-m-d')
                            : null)
                        : null,
                    "ps_q1" => $ps_q1,
                    "ps_q2" => $ps_q2,
                    "ps_q3" => $ps_q3,
                    "ps_q4" => $ps_q4,
                    "ps_total" => $ps_total,
                    "mooe_q1" => $mooe_q1,
                    "mooe_q2" => $mooe_q2,
                    "mooe_q3" => $mooe_q3,
                    "mooe_q4" => $mooe_q4,
                    "mooe_total" => $mooe_total,
                    "co_q1" => $co_q1,
                    "co_q2" => $co_q2,
                    "co_q3" => $co_q3,
                    "co_q4" => $co_q4,
                    "co_total" => $co_total,
                    "fe_q1" => $fe_q1,
                    "fe_q2" => $fe_q2,
                    "fe_q3" => $fe_q3,
                    "fe_q4" => $fe_q4,
                    "fe_total" => $fe_total,
                    "gad_issue" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->gad_issue : null,
                    "ccet_code" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->ccet_code : null,
                    "responsible" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->responsible : null,
                    "strategyProject" => $item->strategyProject,
                    "activity" => $item->activity,
                    "finance_visible" => 0,
                    "is_active" => $item->strategyProject->count() > 0 ? $item->strategyProject[0]->is_active : 0,
                    "activity_visible" => 0,
                    "comments" => $comments
                ];
            });
        //Budget Revised

        // $budgetRequirements = $this->budgetRequirements($id);
        $budgetRequirements = $this->budgetRequirementsUngrouped($id);
        // dd($id);
        // dd($budgetRequirements);
        // dd("jjj");
        // Split results into separate variables
        $capitalOutlay = $budgetRequirements->where('category', 'Capital Outlay')->values();
        $maintenanceOperating = $budgetRequirements->where('category', 'Maintenance, Operating, and Other Expenses')->values();
        $personnelServices = $budgetRequirements->where('category', 'Personnel Services')->values();
        $financialExpenses = $budgetRequirements->where('category', 'Financial Expenses')->values();
        // dd($financialExpenses);
        //SUM
        $s_mooe_gad = (float) number_format($budgetRequirements->where('category', 'Maintenance, Operating, and Other Expenses')->sum('GAD_amount'), 2, '.', '');
        $s_mooe_non = (float) number_format($budgetRequirements->where('category', 'Maintenance, Operating, and Other Expenses')->sum('NONGAD_amount'), 2, '.', '');

        $s_cap_gad = (float) number_format($budgetRequirements->where('category', 'Capital Outlay')->sum('GAD_amount'), 2, '.', '');
        $s_cap_non = (float) number_format($budgetRequirements->where('category', 'Capital Outlay')->sum('NONGAD_amount'), 2, '.', '');

        $s_ps_gad = (float) number_format($budgetRequirements->where('category', 'Personnel Services')->sum('GAD_amount'), 2, '.', '');
        $s_ps_non = (float) number_format($budgetRequirements->where('category', 'Personnel Services')->sum('NONGAD_amount'), 2, '.', '');

        $s_fe_gad = (float) number_format($budgetRequirements->where('category', 'Financial Expenses')->sum('GAD_amount'), 2, '.', '');
        $s_fe_non = (float) number_format($budgetRequirements->where('category', 'Financial Expenses')->sum('NONGAD_amount'), 2, '.', '');
        //IMPLEMENTING TEAM
        $team_members = TeamPlan::with('userEmployee', 'comments', 'comments.user')
            ->where('revision_plan_id', $id)
            ->get()
            ->map(function ($item) {
                // dd($item);
                return [
                    "id" => $item->id,
                    "name" => $item->userEmployee ? $item->userEmployee->employee_name : $item->name,
                    "gender" => $item->userEmployee ? $item->userEmployee->gender : $item->gender,
                    "status" => $item->userEmployee ? $item->userEmployee->employment_type_descr : $item->status,
                    "position" => $item->userEmployee ? $item->userEmployee->position_long_title : $item->position,
                    "empl_id" => $item->userEmployee ? $item->userEmployee->empl_id : $item->empl_id,
                    "competency" => $item->competency,
                    "role" => $item->role,
                    "with_gad_training" => $item->with_gad_training,
                    "comments" => $item->comments,
                    "specify_GAD_training" => $item->specify_GAD_training
                ];
            });
        // dd($team_members);
        // TeamPlan::where('revision_plan_id', $id)
        //     ->get()
        //     ->map(function ($item) {
        //         $people = Implementing_team::where('id', $item->implementing_team_id)
        //             ->first();
        //         return [
        //             "id" => $item->id,
        //             "name" => $people->name,
        //             "position" => $people->position,
        //             "competency" => $people->competency,
        //             "role" => $item->role
        //         ];
        //     });
        //MONITORING AND EVALUATION
        $monitoring = Monitoring_and_evaluation::with(['comments', 'comments.user'])
            ->where('revision_plan_id', $id)
            ->orderBy('created_at', 'asc')
            ->get();
        //RISK MANAGEEMNT
        $risks = Risk_manangement::with(['comments', 'comments.user'])->where('revision_plan_id', $id)->get();

        $type=($paps)?$paps->type:'';
        $signatories = Signatory::with(['comments'])->where('revision_plan_id', $id)
            ->when($type === 'p', function ($query) {
                $query->whereNotIn('acted', [
                    'As to AIP Inclusion',
                    'As to AIP Appropriation',
                ]);
            })
            ->orderByRaw("FIELD(acted, 'Prepared', 'Reviewed', 'Noted', 'Recommending Approval','Approved','As to AIP Inclusion','As to AIP Appropriation')")
            ->get();
        // dd($signatories);
        //PREPARED
        // $sig_app =[];
        // $sig_prep = [];
        // $sig_rev = [];

        // $sig_prep = Signatory::where('revision_plan_id', $id)
        //     ->where('acted', 'Prepared')->first();

        // //REVIEWED
        // $sig_rev = Signatory::where('revision_plan_id', $id)
        //     ->where('acted', 'Reviewed')->first();

        // //APPROVED
        // $sig_app =  Signatory::where('revision_plan_id', $id)
        //     ->where('acted', 'Approved')->get();
        //IMPLEMENTATION PLAN
        $imp_amount = "0.00";
        // http: //192.168.160.9:8076/revision/view/project/paps/1?source=direct
        // dd($paps);
        if ($paps->is_strategy_based == 1) {
            $imp_amount = StrategyProject::where('project_id', $id)->where('is_active', '1')
                ->sum(DB::raw('ps_q1 + ps_q2 + ps_q3 + ps_q4 + mooe_q1 + mooe_q2 + mooe_q3 + mooe_q4 + co_q1 + co_q2 + co_q3 + co_q4 + fe_q1 + fe_q2 + fe_q3 + fe_q4'));
        } else {

            foreach ($implement as $item) {
                // dd($item);
                foreach ($item['activity'] as $activity) {
                    $imp_amount +=
                        $activity['ps_q1'] + $activity['ps_q2'] + $activity['ps_q3'] + $activity['ps_q4'] +
                        $activity['mooe_q1'] + $activity['mooe_q2'] + $activity['mooe_q3'] + $activity['mooe_q4'] +
                        $activity['co_q1'] + $activity['co_q2'] + $activity['co_q3'] + $activity['co_q4'] +
                        $activity['fe_q1'] + $activity['fe_q2'] + $activity['fe_q3'] + $activity['fe_q4'];
                }
            }
        }
        // dd($functions);
        $all_comments = $this->getAllRevisionPlanComments($id);
        // ->sortByDesc('created_at')
        // dd($all_comments->pluck('created_at'));
        // dd($paps);
        // dd($budgetRequirements);
        // dd($paps);
        $view_returned = $paps->gad_version == '1' ? 'RevisionPlans/View' : 'RevisionPlans/View2';

        return inertia($view_returned, [
            "all_comments" => $all_comments,
            "paps" => $paps,
            "office" => $functions->FFUNCTION,
            "implementation" => $implement,
            "department_code_project" => $department_code,
            "department_code_user" => auth()->user()->department_code,
            // "mooe_gad" => $mooe_gad,
            // "mooe_non" => $mooe_non,
            // "cap_gad" => $cap_gad,
            // "cap_non" => $cap_non,
            // "ps_gad" => $ps_gad,
            // "ps_non" => $ps_non,
            "s_mooe_gad" => $s_mooe_gad,
            "s_mooe_non" => $s_mooe_non,
            "s_cap_gad" => $s_cap_gad,
            "s_cap_non" => $s_cap_non,
            "s_ps_gad" => $s_ps_gad,
            "s_ps_non" => $s_ps_non,
            "s_fe_gad" => $s_fe_gad,
            "s_fe_non" => $s_fe_non,
            "team_members" => $team_members,
            "monitors" => $monitoring,
            "risks" => $risks,
            // "sig_rev" => $sig_rev,
            // "sig_prep" => $sig_prep,
            // "sig_app" => $sig_app,
            "signatories" => $signatories,
            //BUDGET REVISED
            "capitalOutlay" => $capitalOutlay,
            "maintenanceOperating" => $maintenanceOperating,
            "personnelServices" => $personnelServices,
            "financialExpenses" => $financialExpenses,
            "budget_requirements" => $budgetRequirements,
            // "data" => $data,
            "src" => $src,
            "imp_amount" => $imp_amount,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    function getAllRevisionPlanComments(int $revisionPlanId)
    {
        // 1️⃣ Comments directly on revision_plans
        $revisionPlanComments = RevisionPlanComment::where('table_name', 'revision_plans')
            ->where('table_row_id', $revisionPlanId);

        // 2️⃣ activity_projects comments
        $activityProjectIds = DB::table('activity_projects')
            ->where('project_id', $revisionPlanId)
            ->pluck('id');

        $activityComments = RevisionPlanComment::where('table_name', 'activity_projects')
            ->whereIn('table_row_id', $activityProjectIds);

        // 3️⃣ expected_revised_outcomes / outputs linked to activity_projects
        $outcomeIds = DB::table('expected_revised_outcomes')
            ->whereIn('activity_project_id', $activityProjectIds)
            ->pluck('id');

        $outputIds = DB::table('expected_revised_outputs')
            ->whereIn('activity_project_id', $activityProjectIds)
            ->pluck('id');

        $activityOutcomeComments = RevisionPlanComment::where('table_name', 'expected_revised_outcomes')
            ->whereIn('table_row_id', $outcomeIds);

        $activityOutputComments = RevisionPlanComment::where('table_name', 'expected_revised_outputs')
            ->whereIn('table_row_id', $outputIds);

        // 4️⃣ strategy_projects comments
        $strategyProjectIds = DB::table('strategy_projects')
            ->where('project_id', $revisionPlanId)
            ->pluck('id');

        $strategyComments = RevisionPlanComment::where('table_name', 'strategy_projects')
            ->whereIn('table_row_id', $strategyProjectIds);

        // strategy outcomes / outputs
        $strategyOutcomeIds = DB::table('expected_revised_outcomes')
            ->whereIn('strategy_project_id', $strategyProjectIds)
            ->pluck('id');

        $strategyOutputIds = DB::table('expected_revised_outputs')
            ->whereIn('strategy_project_id', $strategyProjectIds)
            ->pluck('id');

        $strategyOutcomeComments = RevisionPlanComment::where('table_name', 'expected_revised_outcomes')
            ->whereIn('table_row_id', $strategyOutcomeIds);

        $strategyOutputComments = RevisionPlanComment::where('table_name', 'expected_revised_outputs')
            ->whereIn('table_row_id', $strategyOutputIds);

        // 5️⃣ budget_requirements
        $budgetIds = DB::table('budget_requirements')
            ->where('revision_plan_id', $revisionPlanId)
            ->pluck('id');

        $budgetComments = RevisionPlanComment::where('table_name', 'budget_requirements')
            ->whereIn('table_row_id', $budgetIds);

        // 6️⃣ monitoring_and_evaluations
        $monitoringIds = DB::table('monitoring_and_evaluations')
            ->where('revision_plan_id', $revisionPlanId)
            ->pluck('id');

        $monitoringComments = RevisionPlanComment::where('table_name', 'monitoring_and_evaluations')
            ->whereIn('table_row_id', $monitoringIds);

        // 7️⃣ risk_manangements
        $riskIds = DB::table('risk_manangements')
            ->where('revision_plan_id', $revisionPlanId)
            ->pluck('id');

        $riskComments = RevisionPlanComment::where('table_name', 'risk_manangements')
            ->whereIn('table_row_id', $riskIds);

        // 8️⃣ team_plans
        $teamIds = DB::table('team_plans')
            ->where('revision_plan_id', $revisionPlanId)
            ->pluck('id');

        $teamComments = RevisionPlanComment::where('table_name', 'team_plans')
            ->whereIn('table_row_id', $teamIds);

        // Signatories
        $signatories = Signatory::where('revision_plan_id', $revisionPlanId)->pluck('id');
        $signatoryComments = RevisionPlanComment::where('table_name', 'signatories')
            ->whereIn('table_row_id', $signatories);
        // dd($signatories);

        // 9️⃣ Merge all queries using union
        $unionQuery = $revisionPlanComments
            ->unionAll($activityComments)
            ->unionAll($activityOutcomeComments)
            ->unionAll($activityOutputComments)
            ->unionAll($strategyComments)
            ->unionAll($strategyOutcomeComments)
            ->unionAll($strategyOutputComments)
            ->unionAll($budgetComments)
            ->unionAll($monitoringComments)
            ->unionAll($riskComments)
            ->unionAll($teamComments)
            ->unionAll($signatoryComments);
        $allComments = DB::table(DB::raw("({$unionQuery->toSql()}) as comments"))
            ->mergeBindings($unionQuery->getQuery()) // important to merge bindings
            ->orderBy('comment_status', 'asc')
            ->orderBy('created_at', 'desc')
            ->get();

        return $allComments;
    }

    public function budgetRequirements($id)
    {
        $groupByAccountCodeCount = BudgetRequirement::where('revision_plan_id', $id)
            ->whereIn('category', [
                'Capital Outlay',
                'Financial Expenses',
                'Maintenance, Operating, and Other Expenses',
                'Personnel Services',
            ])
            ->select('account_code')
            ->groupBy('account_code')
            ->get()
            ->count();
        // Step 2: Use appropriate groupBy field
        $groupByField = floatval($groupByAccountCodeCount) > 1 ? 'account_code' : 'particulars';
        $budgetRequirements = BudgetRequirement::with(['comments', 'comments.user'])
            ->select(
                DB::raw('MAX(id) as id'),
                'account_code',
                DB::raw('MAX(particulars) as particulars'),
                DB::raw('SUM(CASE WHEN category_gad = "GAD" THEN amount ELSE 0 END) as GAD_amount'),
                DB::raw('SUM(CASE WHEN category_gad = "NON-GAD" THEN amount ELSE 0 END) as NONGAD_amount'),
                DB::raw('SUM(amount) as Total'),
                DB::raw('MAX(source) as Source'),
                'category'
            )
            ->where('revision_plan_id', $id)
            ->whereIn('category', [
                'Capital Outlay',
                'Financial Expenses',
                'Maintenance, Operating, and Other Expenses',
                'Personnel Services',
            ])
            ->groupBy($groupByField) // group by either account_code or particulars + category
            ->get();
        // dd($groupByField);
        // dd($budgetRequirements);
        return $budgetRequirements;
    }

    public function budgetRequirementsUngrouped($id)
    {
        return BudgetRequirement::with(['comments' => function ($query) {
            $query->where('table_name', 'budget_requirements');
        }])
            ->select('id', 'revision_plan_id', 'particulars', 'account_code', 'amount', 'proposed_budget', 'category', 'category_gad', 'source')
            ->where('revision_plan_id', $id)
            ->orderBy('category') // optional: keep some order
            ->orderBy('category_gad')
            ->get();
    }
    public function edit(Request $request, $id)
    {
        $data = RevisionPlan::where('id', $id)->first();
        // dd($data);
        if ($data) {
            $tp = $data->type == "p" ? "profile" : "design";
            if ($data->status >= 0) {
                return redirect()->back()->with('error', 'Project ' . $tp . ' locked from editing');
            }
        }
        $paps = ProgramAndProject::where('id', $data->idpaps)->get();
        $idpaps = $data->idpaps;
        if (count($paps) > 0) {
            $idpaps = $paps[0]->id;
        }
        // dd($paps);
        // dd($idpaps);
        $hgdg = HGDG_Checklist::get();
        $popsp_agencies = PopspAgency::all();
        $source = $request->source;
        // $count = RevisionPlan::where('idpaps', $id)->count();
        // $max_id = RevisionPlan::where('idpaps', $id)->max('id');
        if ($source == 'direct') {
            $dept_code = auth()->user()->department_code;
            if (isset($paps)) {
                $paps_all = ProgramAndProject::with('MFO')
                    ->where(function ($query) use ($dept_code) {
                        $query->whereHas('MFO', function ($query) use ($dept_code) {
                            $query->where('department_code', $dept_code);
                        })
                            ->orWhere('department_code', $dept_code);
                    })

                    ->get();
                // dd("wala si paps");
                // $all_paps = Progr
            }
            return inertia('RevisionPlans/Create', [
                "idpaps" => $idpaps,
                "hgdgs" => $hgdg,
                "paps" => $paps,
                "paps_all" => $paps_all,
                "editData" => $data,
                "source" => $request->source,
                "popsp_agencies" => $popsp_agencies,
                "can" => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        } else {
            return inertia('RevisionPlans/Create', [
                "idpaps" => $idpaps,
                "hgdgs" => $hgdg,
                "paps" => $paps,

                "editData" => $data,
                "source" => $request->source,
                "popsp_agencies" => $popsp_agencies,
                "can" => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        }
    }
    public function update(Request $request)
    {
        // dd($request);
        if ($request->source == 'direct') {
            $red_url = '/revision/0?source=direct';
        } else {
            $red_url = '/revision/' . $request->idpaps;
        }
        $rev = RevisionPlan::where('id', $request->id)->first();
        if ($rev) {
            $rev->idpaps = $request->idpaps;
            // $rev->idmfo = $request->idmfo;
            // $rev->FFUNCCOD = $request->FFUNCCOD;
            // $rev->year_period = $request->year_period;
            // $rev->scope = $request->scope;
            // $rev->aip_code = $request->aip_code;
            $rev->project_title = $request->project_title;
            $rev->project_location = $request->project_location;
            $rev->list_of_lgu_covered = $request->list_of_lgu_covered;
            $rev->date_start = $request->date_start;
            $rev->date_end = $request->date_end;
            $rev->beneficiary_male = $request->beneficiary_male;
            $rev->beneficiary_female = $request->beneficiary_female;
            $rev->baseline_male = $request->baseline_male;
            $rev->baseline_female = $request->baseline_female;
            $rev->baseline_total = $request->baseline_total;
            $rev->data_source = $request->data_source;
            // $rev->amount = $request->amount;
            // $rev->attributed_amount = $request->attributed_amount;
            $rev->checklist_id = $request->checklist_id;
            // $rev->hgdg_score = $request->hgdg_score;
            // $rev->hgdg_percent = $request->hgdg_percent;
            $rev->rationale = $request->rationale;
            $rev->objective = $request->objective;
            $rev->beneficiaries = $request->beneficiaries;
            $rev->implementing_team = $request->implementing_team;
            $rev->partnership = $request->partnership;
            $rev->monitoring = $request->monitoring;
            $rev->risk_management = $request->risk_management;
            // $rev->supplemental = $request->supplemental;
            $rev->aip_code = $request->aip_code;
            $rev->is_strategy_based = $request->is_strategy_based;
            $rev->is_activity_based = $request->is_activity_based;
            $rev->save();
            return redirect($red_url)
                ->with('info', 'Revision Plan updated');
        } else {
            return redirect('/revision/' . $request->idpaps)
                ->with('error', 'Revision Plan not found');
        }

        // $rev->breakdown_by_expected_output = $request->breakdown_by_expected_output;


    }
    public function gas(Request $request, $FFUNCCOD)
    {
        $myid = auth()->user()->recid;
        $currentYear = date('Y');
        //dd($currentYear);
        //dd($idpaps);
        // ->select('revision_plans.id', 'revision_plans.project_title',
        //                     'revision_plans.version','revision_plans.type',
        //                     'ff.FFUNCTION')
        $data = RevisionPlan::select(
            'revision_plans.id',
            'revision_plans.project_title',
            'revision_plans.version',
            'revision_plans.type',
            'revision_plans.year_period',
            'ff.FFUNCTION'
        )
            ->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'revision_plans.FFUNCCOD')
            ->where('revision_plans.FFUNCCOD', $FFUNCCOD)
            ->where('revision_plans.year_period', $currentYear)
            ->where('revision_plans.idpaps', '0')
            ->where('revision_plans.idmfo', '0')
            ->where('revision_plans.idmfo', '0')
            ->where('revision_plans.scope', 'GAS')
            ->get()
            ->map(function ($item) {
                $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                    ->sum('amount');
                // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                //                 ->join('targets', 'targets.id','implementation_plans.id')
                //                 ->sum('targets.planned_budget');
                // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                //                 ->join('targets', 'targets.id','implementation_plans.id')
                //                 ->get();
                $imp_amount = DB::table('targets')
                    ->where('implementation_plans.idrev_plan', $item->id)
                    ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                    ->select('targets.*', 'implementation_plans.*')
                    ->sum('targets.planned_budget');


                return [
                    'FFUNCTION' => $item->FFUNCTION,
                    'id' => $item->id,
                    'project_title' => $item->project_title,
                    'type' => $item->type,
                    'version' => $item->version,
                    'budget_sum' => $budgetary_requirement,
                    'imp_amount' => $imp_amount,
                    'scope' => $item->scope,
                    'year_period' => $item->year_period,
                ];
            });

        //$paps = ProgramAndProject::where('id', $idpaps)->first();
        //dd($data);
        return inertia('RevisionPlans/GAS/Index', [
            'data' => $data,
            'FFUNCCOD' => $FFUNCCOD,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function gas_create(Request $request, $FFUNCCOD)
    {
        //dd($FFUNCCOD);
        $currentYear = date('Y');
        //$myid=auth()->user()->recid;
        //$paps=ProgramAndProject::where('id',$id)->get();
        $hgdg = HGDG_Checklist::get();
        $count = RevisionPlan::where('idmfo', '0')
            ->where('idpaps', '0')
            ->where('year_period', $currentYear)
            ->where('FFUNCCOD', $FFUNCCOD)
            ->count();
        $max_id = RevisionPlan::where('idmfo', '0')
            ->where('idpaps', '0')
            ->where('year_period', $currentYear)
            ->where('FFUNCCOD', $FFUNCCOD)
            ->max('id');
        //dd($max_id);
        $duplicate = RevisionPlan::where('id', $max_id)->get();

        if ($count > 0) {
            //dd("Duplicate is not empty");
            return inertia('RevisionPlans/GAS/Create', [
                //"idpaps"=>$id,
                "FFUNCCOD" => $FFUNCCOD,
                "hgdgs" => $hgdg,
                "duplicate" => $duplicate,
                "can" => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        } else {
            //dd("Duplicate is empty");
            return inertia('RevisionPlans/GAS/Create', [
                //"idpaps"=>$id,
                "FFUNCCOD" => $FFUNCCOD,
                "hgdgs" => $hgdg,

                "can" => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        }
    }
    public function gas_store(Request $request, $FFUNCCOD)
    {
        //dd($request->objective);
        $currentYear = date('Y');
        //dd("store: ".$currentYear);
        $attributes = $request->validate([
            //'FFUNCCOD'=>'required',
            'project_title' => 'required',
            'project_location' => 'required',
            'list_of_lgu_covered' => 'required',
            'date_start' => 'required',
            'date_end' => 'required',
            'beneficiary_male' => 'required',
            'beneficiary_female' => 'required',
            'baseline_male' => 'required',
            'baseline_female' => 'required',
            'baseline_total' => 'required',
            'rationale' => 'required',
            'objective' => 'required',
            'beneficiaries' => 'required',
            'checklist_id' => 'required',
            'partnership' => 'required',
        ]);
        //dd("diri");
        $version = RevisionPlan::where('idpaps', '=', '0')
            ->where('FFUNCCOD', $FFUNCCOD)
            ->where('idmfo', '0')
            ->max('version');

        if ($version) {
            $version = $version + 1;
        } else {
            $version = 1;
        }
        //dd($version);
        $rev = new RevisionPlan();
        $rev->FFUNCCOD = $FFUNCCOD;
        $rev->idpaps = "0";
        // $rev->idpaps = $request->idpaps;
        $rev->year_period = $currentYear;
        $rev->scope = "GAS";
        $rev->project_title = $attributes['project_title'];
        $rev->project_location = $attributes['project_location'];
        $rev->list_of_lgu_covered = $attributes['list_of_lgu_covered'];
        $rev->date_start = $attributes['date_start'];
        $rev->date_end = $attributes['date_end'];
        $rev->beneficiary_male = $attributes['beneficiary_male'];
        $rev->beneficiary_female = $attributes['beneficiary_female'];
        $rev->baseline_male = $attributes['baseline_male'];
        $rev->baseline_female = $attributes['baseline_female'];
        $rev->baseline_total = $attributes['baseline_total'];
        $rev->rationale = $attributes['rationale'];
        $rev->objective = $attributes['objective'];
        $rev->beneficiaries = $attributes['beneficiaries'];
        $rev->implementing_team = $request->implementing_team;
        $rev->partnership = $attributes['partnership'];
        $rev->monitoring = $request->monitoring;
        $rev->risk_management = $request->risk_management;
        // $rev->implementing_team=$attributes['implementing_team'];
        // $rev->monitoring=$attributes['monitoring'];
        // $rev->risk_management=$attributes['risk_management'];
        //$rev->checklist_id=$attributes['checklist_id'];
        $rev->amount = '0.00';
        $rev->attributed_amount = '0.00';
        $rev->checklist_id = $attributes['checklist_id'];
        $rev->hgdg_score = '0';
        $rev->version = $version;
        $rev->type = 'p';
        $rev->final = '0';
        $rev->supplemental = '0';
        $rev->user_id = auth()->user()->recid;
        $rev->save();
        // if($attributes){
        //     dd('all validated');
        // }
        //$this->model->create($attributes);
        //$request->pass='';
        return redirect('/revision/general/administration/services/' . $FFUNCCOD . '/plan')
            ->with('message', 'Revision Plan added');
    }
    //PAPS
    public function getPopsPProfilesDirect(Request $request, $budget_controller, $dept_id, $popsp_agency)
    {
        $popsp_related_agency = PopspAgency::where('agency_code', auth()->user()->popsp_agency)->first();
        $sharedPAPS = SharedProgramAndProject::where('destination_department_code', auth()->user()->department_code)
            ->when(auth()->user()->popsp_agency, function ($query) use ($popsp_related_agency) {
                $query->where(function ($query) use ($popsp_related_agency) {
                    $query->where('destination_department_code', $popsp_related_agency->department_code)
                        ->Where('origin_department_code', $popsp_related_agency->department_code_actual);
                    // dd($popsp_related_agency);
                });
                // $query->wjere
                // $query->orWhere('origin_department_code', $popsp_related_agency->agency_code);
            })
            ->get()
            ->pluck('idpaps');
        // dd($popsp_agency);
        $PAPS = ProgramAndProject::where('department_code', auth()->user()->department_code)
            // ->where('agency_name', auth()->user()->agency_name)
            ->where('department_code', auth()->user()->department_code)
            ->get()
            ->pluck('id');

        $idpaps_all = $sharedPAPS->concat($PAPS);
        return RevisionPlan::with(['paps', 'paps.office'])
            ->whereIn('idpaps', $idpaps_all)
            // ->where('department_code', auth()->user()->department_code)
            ->get()
            ->map(function ($item) use ($budget_controller) {
                // COUNT THE COMMENTS
                // dd($item);
                $revision_comment = RevisionPlanComment::where('table_row_id', $item->id)->where('table_name', 'revision_plans')->count();
                // dd($revision_comment);

                // BUDGERTARY REQUIREMENTs
                $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                    ->sum('amount');

                $imp_amount = 0.00;
                // DB::table('targets')
                //     ->where('implementation_plans.idrev_plan', $item->id)
                //     ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                //     ->select('targets.*', 'implementation_plans.*')
                //     ->sum('targets.planned_budget');
                $total = [];
                // dd($item);
                if ($item->is_strategy_based == 1) {
                    $total = $budget_controller->getStratTotal($item->id);
                } else {
                    $total = $budget_controller->getActivityTotal($item->id);
                }
                // dd($item->is_strategy_based);
                if ($total) {
                    $imp_amount = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
                        $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
                        $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4') +
                        $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');
                }
                // if($item->id==233){
                //     dd($budgetary_requirement, $imp_amount);
                // }
                // dd($total);
                // dd($item);
                // dd($item->project_title);
                // if ($item->id == 201) {
                //     dd($item);
                // }
                return [
                    // 'FFUNCTION' => $item->FFUNCTION,
                    'FFUNCTION' => optional(optional(optional($item)->paps)->office)->FFUNCTION,
                    'idpaps' => $item->idpaps,
                    'id' => $item->id,
                    'project_title' => $item->project_title,
                    'type' => $item->type,
                    'version' => $item->version,
                    'budget_sum' => $budgetary_requirement,
                    'imp_amount' => $imp_amount,
                    'status' => $item->status,
                    'return_request_status' => $item->return_request_status
                    // 'paps'=>$item->paps
                ];
            });
        // dd($idpaps_all);
    }
    //MFO Revision Plans
    public function mfo_index(Request $request, $idmfo)
    {
        // dd(auth()->user());

        $myid = auth()->user()->recid;
        //dd($idpaps);
        // ->select('revision_plans.id', 'revision_plans.project_title',
        //                     'revision_plans.version','revision_plans.type',
        //                     'ff.FFUNCTION')
        if (auth()->user()->department_code == "04") {
            $data = RevisionPlan::select(
                'revision_plans.id',
                'revision_plans.project_title',
                'revision_plans.version',
                'revision_plans.type',
                'ff.FFUNCTION'
            )
                ->Join(DB::raw('major_final_outputs mfos'), 'mfos.id', '=', 'revision_plans.idmfo')
                ->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'mfos.FFUNCCOD')
                ->where('idmfo', '=', $idmfo)
                ->get()
                ->map(function ($item) {
                    $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                        ->sum('amount');
                    $imp_amount = DB::table('targets')
                        ->where('implementation_plans.idrev_plan', $item->id)
                        ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                        ->select('targets.*', 'implementation_plans.*')
                        ->sum('targets.planned_budget');


                    return [
                        'FFUNCTION' => $item->FFUNCTION,
                        'id' => $item->id,
                        'project_title' => $item->project_title,
                        'type' => $item->type,
                        'version' => $item->version,
                        'budget_sum' => $budgetary_requirement,
                        'imp_amount' => $imp_amount
                    ];
                });
        } else {
            $data = RevisionPlan::select(
                'revision_plans.id',
                'revision_plans.project_title',
                'revision_plans.version',
                'revision_plans.type',
                'ff.FFUNCTION'
            )
                ->Join(DB::raw('major_final_outputs mfos'), 'mfos.id', '=', 'revision_plans.idmfo')
                ->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'mfos.FFUNCCOD')
                ->Join(DB::raw('fms.accountaccess acc'), 'acc.ffunccod', '=', 'ff.FFUNCCOD')
                ->where('acc.iduser', '=', $myid)
                ->where('idmfo', '=', $idmfo)
                ->get()
                ->map(function ($item) {
                    $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                        ->sum('amount');
                    // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                    //                 ->join('targets', 'targets.id','implementation_plans.id')
                    //                 ->sum('targets.planned_budget');
                    // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                    //                 ->join('targets', 'targets.id','implementation_plans.id')
                    //                 ->get();
                    $imp_amount = DB::table('targets')
                        ->where('implementation_plans.idrev_plan', $item->id)
                        ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                        ->select('targets.*', 'implementation_plans.*')
                        ->sum('targets.planned_budget');


                    return [
                        'FFUNCTION' => $item->FFUNCTION,
                        'id' => $item->id,
                        'project_title' => $item->project_title,
                        'type' => $item->type,
                        'version' => $item->version,
                        'budget_sum' => $budgetary_requirement,
                        'imp_amount' => $imp_amount
                    ];
                });
        }

        //dd($data);
        $mfos = MajorFinalOutput::where('id', $idmfo)->first();
        //dd($data);
        return inertia('RevisionPlans/MFO/Index', [
            'data' => $data,
            "idmfo" => $idmfo,
            "mfos" => $mfos,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function mfo_create(Request $request, $id)
    {
        // dd('idmfo: '.$id);
        $mfos = MajorFinalOutput::where('id', $id)->get();
        $hgdg = HGDG_Checklist::get();
        $count = RevisionPlan::where('idmfo', $id)->count();
        $max_id = RevisionPlan::where('idmfo', $id)->max('id');
        //dd($max_id);
        $duplicate = RevisionPlan::where('id', $max_id)->get();

        if ($count > 0) {
            //dd("Duplicate is not empty");
            return inertia('RevisionPlans/MFO/Create', [
                "idmfo" => $id,
                "hgdgs" => $hgdg,
                "mfos" => $mfos,
                "duplicate" => $duplicate,
                "can" => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        } else {
            //dd("Duplicate is empty");
            return inertia('RevisionPlans/MFO/Create', [
                "idmfo" => $id,
                "hgdgs" => $hgdg,
                "mfos" => $mfos,
                "can" => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        }
    }
    public function mfo_store(Request $request)
    {

        $attributes = $request->validate([
            'idmfo' => 'required',
            'project_title' => 'required',
            'project_location' => 'required',
            'list_of_lgu_covered' => 'required',
            'date_start' => 'required',
            'date_end' => 'required',
            'beneficiary_male' => 'required',
            'beneficiary_female' => 'required',
            'baseline_male' => 'required',
            'baseline_female' => 'required',
            'baseline_total' => 'required',
            'rationale' => 'required',
            'objective' => 'required',
            'beneficiaries' => 'required',
            'checklist_id' => 'required',
            // 'implementing_team'=>'required',
            'partnership' => 'required',
            // 'monitoring'=>'required',
            // 'risk_management'=>'required'
        ]);
        //dd($attributes);
        $version = RevisionPlan::where('idmfo', '=', $request->idmfo)->max('version');
        if ($version) {
            $version = $version + 1;
        } else {
            $version = 1;
        }

        $rev = new RevisionPlan();
        $rev->idmfo = $attributes['idmfo'];
        $rev->idpaps = '0';
        $rev->project_title = $attributes['project_title'];
        $rev->project_location = $attributes['project_location'];
        $rev->list_of_lgu_covered = $attributes['list_of_lgu_covered'];
        $rev->date_start = $attributes['date_start'];
        $rev->date_end = $attributes['date_end'];
        $rev->beneficiary_male = $attributes['beneficiary_male'];
        $rev->beneficiary_female = $attributes['beneficiary_female'];
        $rev->baseline_male = $attributes['baseline_male'];
        $rev->baseline_female = $attributes['baseline_female'];
        $rev->baseline_total = $attributes['baseline_total'];
        $rev->rationale = $attributes['rationale'];
        $rev->objective = $attributes['objective'];
        $rev->beneficiaries = $attributes['beneficiaries'];
        $rev->implementing_team = $request->implementing_team;
        $rev->partnership = $attributes['partnership'];
        $rev->monitoring = $request->monitoring;
        $rev->risk_management = $request->risk_management;
        // $rev->implementing_team=$attributes['implementing_team'];
        // $rev->monitoring=$attributes['monitoring'];
        // $rev->risk_management=$attributes['risk_management'];
        //$rev->checklist_id=$attributes['checklist_id'];
        $rev->amount = '0.00';
        $rev->attributed_amount = '0.00';
        $rev->checklist_id = $attributes['checklist_id'];
        $rev->hgdg_score = '0';
        $rev->version = $version;
        $rev->type = 'p';
        $rev->final = '0';
        $rev->supplemental = '0';
        $rev->user_id = auth()->user()->recid;
        $rev->save();
        // if($attributes){
        //     dd('all validated');
        // }
        //$this->model->create($attributes);
        //$request->pass='';
        return redirect('/mforevision/' . $request->idmfo)
            ->with('message', 'Revision Plan added');
    }
    public function mfo_view(Request $request, $id)
    {
        //REVISION PLANS
        $paps = RevisionPlan::where('id', $id)->with('checklist')->first();
        $scope = $paps->scope;

        //PROGRAMS AND PROJECTS & FUNCTIONS
        $ppa = [];
        $functions = [];
        if ($scope == 'GAS') {
            $functions = AccountAccess::where('iduser', auth()->user()->recid)
                ->where('ff.FFUNCCOD', $paps->FFUNCCOD)
                ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
                ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
                ->with('func')->first();
        } else {
            $ppa = ProgramAndProject::findOrFail($paps->idpaps);
            $functions = AccountAccess::where('iduser', auth()->user()->recid)
                ->where('ff.FFUNCCOD', $ppa->FFUNCCOD)
                ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
                ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
                ->with('func')->first();
        }

        //IMPLEMENTATION PLANS
        $implement = $this->imp->select(
            'implementation_plans.id AS id',
            'strategies.description AS strategy',
            'implementation_plans.idrev_plan',
            'implementation_plans.date_from',
            'implementation_plans.date_to',
            'implementation_plans.idstrategy',
            'implementation_plans.cc_topology',
            'implementation_plans.person_responsible',
            'issues.description AS issue'
        )
            ->where('idrev_plan', $id)
            ->where('idstrategy', '<>', NULL)
            ->Join('strategies', 'strategies.id', 'implementation_plans.idstrategy')
            ->leftJoin('issues', 'issues.id', 'implementation_plans.idissue')
            ->get()
            ->map(function ($item) {
                //dd($item->idrev_plan);
                $activity_implementation = $this->imp
                    ->select(
                        'implementation_plans.id AS id',
                        'activities.description AS activity',
                        'implementation_plans.idrev_plan',
                        'implementation_plans.date_from',
                        'implementation_plans.date_to',
                        'implementation_plans.cc_topology',
                        'issues.description AS issue',
                        'strategies.id AS stratt_id',
                        'implementation_plans.person_responsible',
                    )
                    ->Join('activities', 'activities.id', 'implementation_plans.idactivity')
                    ->Join('strategies', 'strategies.id', '=', 'activities.strategy_id')
                    ->leftJoin('issues', 'issues.id', 'implementation_plans.idissue')
                    ->where('idrev_plan', $item->idrev_plan)
                    ->where('strategies.id', $item->idstrategy)
                    ->get()
                    ->map(function ($item) {
                        return [
                            'id' => $item->id,
                            'idrev_plan' => $item->idrev_plan,
                            'date_from' => convertDateString($item->date_from),
                            'date_to' => convertDateString($item->date_to),
                            'stratt_id' => $item->stratt_id,
                            'cc_topology' => $item->cc_topology,
                            'issue' => $item->issue,
                            'activity' => $item->activity,
                            'person_responsible' => $item->person_responsible,
                        ];
                    });

                return [
                    'id' => $item->id,
                    'idrev_plan' => $item->idrev_plan,
                    'date_from' => convertDateString($item->date_from),
                    'date_to' => convertDateString($item->date_to),
                    'idstrategy' => $item->idstrategy,
                    'cc_topology' => $item->cc_topology,
                    'issue' => $item->issue,
                    'strategy' => $item->strategy,
                    'activity_implementation' => $activity_implementation,
                    'person_responsible' => $item->person_responsible,
                ];
            });


        //MOOE
        $mooe_gad = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Maintenance, Operating, and Other Expenses')
            ->where('category_gad', 'GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $mooe_non = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Maintenance, Operating, and Other Expenses')
            ->where('category_gad', 'NON-GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $s_mooe_gad = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Maintenance, Operating, and Other Expenses')
            ->where('category_gad', 'GAD')
            ->sum('amount');
        $s_mooe_non = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Maintenance, Operating, and Other Expenses')
            ->where('category_gad', 'NON-GAD')
            ->sum('amount');
        //Capital Outlay
        $cap_gad = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Capital Outlay')
            ->where('category_gad', 'GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $cap_non = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Capital Outlay')
            ->where('category_gad', 'NON-GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $s_cap_gad = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Capital Outlay')
            ->where('category_gad', 'GAD')
            ->sum('amount');
        $s_cap_non = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Capital Outlay')
            ->where('category_gad', 'NON-GAD')
            ->sum('amount');
        //Personnel Services
        $ps_gad = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Personnel Services')
            ->where('category_gad', 'GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $ps_non = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Personnel Services')
            ->where('category_gad', 'NON-GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $s_ps_gad = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Personnel Services')
            ->where('category_gad', 'GAD')
            ->sum('amount');
        $s_ps_non = BudgetRequirement::where('revision_plan_id', '=', $id)
            ->where('category', 'Personnel Services')
            ->where('category_gad', 'NON-GAD')
            ->sum('amount');


        //IMPLEMENTING TEAM
        $team_members = TeamPlan::where('revision_plan_id', $id)
            ->get()
            ->map(function ($item) {
                $people = Implementing_team::where('id', $item->implementing_team_id)
                    ->first();
                return [
                    "id" => $item->id,
                    "name" => $people->name,
                    "position" => $people->position,
                    "competency" => $people->competency,
                    "role" => $item->role
                ];
            });
        //MONITORING AND EVALUATION
        $monitoring = Monitoring_and_evaluation::where('revision_plan_id', $id)
            ->orderBy('created_at', 'asc')
            ->get();
        //RISK MANAGEEMNT
        $risks = Risk_manangement::where('revision_plan_id', $id)->get();

        //PREPARED
        $sig_prep = Signatory::where('revision_plan_id', $id)
            ->where('acted', 'Prepared')->first();

        //REVIEWED
        $sig_rev = Signatory::where('revision_plan_id', $id)
            ->where('acted', 'Reviewed')->first();

        //APPROVED
        $sig_app =  Signatory::where('revision_plan_id', $id)
            ->where('acted', 'Approved')->get();
        //IMPLEMENTATION PLAN
        //$implementation_plan = new ImplementationPlan();
        $data = ImplementationPlan::select(
            'implementation_plans.id AS id',
            'strategies.description AS strategy',
            'implementation_plans.idrev_plan',
            'implementation_plans.date_from',
            'implementation_plans.date_to',
            'implementation_plans.idstrategy',
            'implementation_plans.cc_topology',
            'implementation_plans.person_responsible',
            'issues.description AS issue'
        )
            ->where('idrev_plan', $id)
            ->where('idstrategy', '<>', NULL)
            ->Join('strategies', 'strategies.id', 'implementation_plans.idstrategy')
            ->leftJoin('issues', 'issues.id', 'implementation_plans.idissue')
            ->get()
            ->map(function ($item) {
                //dd($item->idrev_plan);
                $activity_implementation = ImplementationPlan::select(
                    'implementation_plans.id AS id',
                    'activities.description AS activity',
                    'implementation_plans.idrev_plan',
                    'implementation_plans.date_from',
                    'implementation_plans.date_to',
                    'implementation_plans.cc_topology',
                    'issues.description AS issue',
                    'strategies.id AS stratt_id',
                    'implementation_plans.person_responsible',
                )
                    ->Join('activities', 'activities.id', 'implementation_plans.idactivity')
                    ->Join('strategies', 'strategies.id', '=', 'activities.strategy_id')
                    ->leftJoin('issues', 'issues.id', 'implementation_plans.idissue')
                    ->where('idrev_plan', $item->idrev_plan)
                    ->where('strategies.id', $item->idstrategy)
                    ->get()
                    ->map(function ($item) {
                        $targets = Target::where('idimplementation', $item->id)
                            ->select(
                                'indicators.description AS indicator_description',
                                'targets.description AS target_description',
                                'targets.planned_budget AS budget'
                            )
                            ->join('indicators', 'indicators.id', 'targets.idindicator')
                            ->get();
                        return [
                            'id' => $item->id,
                            'idrev_plan' => $item->idrev_plan,
                            'date_from' => convertDateString($item->date_from),
                            'date_to' => convertDateString($item->date_to),
                            'stratt_id' => $item->stratt_id,
                            'cc_topology' => $item->cc_topology,
                            'issue' => $item->issue,
                            'activity' => $item->activity,
                            'person_responsible' => $item->person_responsible,
                            'targets' => $targets,
                        ];
                    });
                $targets = Target::where('idimplementation', $item->id)->get();
                return [
                    'id' => $item->id,
                    'idrev_plan' => $item->idrev_plan,
                    'date_from' => convertDateString($item->date_from),
                    'date_to' => convertDateString($item->date_to),
                    'idstrategy' => $item->idstrategy,
                    'cc_topology' => $item->cc_topology,
                    'issue' => $item->issue,
                    'strategy' => $item->strategy,
                    'activity_implementation' => $activity_implementation,
                    'person_responsible' => $item->person_responsible,
                    'targets' => $targets,
                ];
            });
        $imp_amount = DB::table('targets')
            ->where('implementation_plans.idrev_plan', $id)
            ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
            ->select('targets.*', 'implementation_plans.*')
            ->sum('targets.planned_budget');
        return inertia('RevisionPlans/View', [
            "paps" => $paps,
            "office" => $functions->FFUNCTION,
            "implementation" => $implement,

            "mooe_gad" => $mooe_gad,
            "mooe_non" => $mooe_non,
            "cap_gad" => $cap_gad,
            "cap_non" => $cap_non,
            "ps_gad" => $ps_gad,
            "ps_non" => $ps_non,
            "s_mooe_gad" => $s_mooe_gad,
            "s_mooe_non" => $s_mooe_non,
            "s_cap_gad" => $s_cap_gad,
            "s_cap_non" => $s_cap_non,
            "s_ps_gad" => $s_ps_gad,
            "s_ps_non" => $s_ps_non,

            "team_members" => $team_members,
            "monitors" => $monitoring,
            "risks" => $risks,
            "sig_rev" => $sig_rev,
            "sig_prep" => $sig_prep,
            "sig_app" => $sig_app,
            "data" => $data,
            "imp_amount" => $imp_amount,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function direct(Request $request)
    {
        $myid = auth()->user()->recid;
        $dept_id = auth()->user()->department_code;
        $source = $request->source;
        // if ($dept_id !== "04" && $source === 'rev_app') {
        //     return redirect()->back()->with(
        //         'error',
        //         'You are not allowed to access the review process for Project Profiles/Designs.'
        //     );
        // }
        $gad_reviewers = config('gad.reviewers');

        if (auth()->user()->popsp_agency) {
            return redirect('/forbidden')->with('error', 'You are not allowed to access this page');
        }
        // dd(auth()->user()->cats, $source);
        if ($source != 'budget') {
            // if ($dept_id != '04' && $dept_id != '01' ) {
            //     return redirect('/forbidden')->with('error', 'You are not allowed to access this page');
            // }
            $empl_id = auth()->user()->cats;
            // dd($empl_id);
            $empl_id = trim($empl_id);
            $dept_id = trim($dept_id);

            $allowed = (
                $dept_id === '04' ||
                $dept_id === '01' ||
                ($empl_id == '1399')
            );

            if (!$allowed) {
                return redirect('/forbidden')
                    ->with('error', 'You are not allowed to access this page');
            }
        }

        $per_page = 10;
        if ($request->per_page) {
            $per_page = $request->per_page;
        }
        $ooes = OOE::all();
        $ooe_description = $ooes->pluck('FOOEDESC')->toArray();
        $ooe_id = $ooes->pluck('recid')->toArray();
        $ooe_codes = $ooes->pluck('FACTCODE')->toArray();
        $funcc = FFUNCCOD::with('office.pgHead')->where('department_code', $dept_id)->first();
        $FFUNCCOD = optional($funcc)->FFUNCCOD;
        $pg_details = optional(optional($funcc)->office)->pgHead;
        $suffix =  optional($pg_details)->suffix_name;
        $postfix_name =  optional($pg_details)->postfix_name;
        $mname = optional($pg_details)->middle_name ? substr(optional($pg_details)->middle_name, 0, 1) . '. ' : null;
        $pgHead = optional($pg_details)->first_name . ' ' . $mname . optional($pg_details)->last_name;
        if ($suffix) {
            $pgHead = $pgHead . ", " . $suffix;
        }
        if ($postfix_name) {
            $pgHead = $pgHead . ", " . $postfix_name;
        }
        // dd($pgHead);
        $offices = FFUNCCOD::where(function ($query) {
            $query->where('FFUNCTION', 'LIKE', '%Office%')
                ->orWhere('FFUNCTION', 'LIKE', '%Hospital%');
        })
            ->orderBy('FFUNCTION', 'ASC')
            ->get();


        $budget_controller = new BudgetRequirementController($this->budget);
        $year_period = CurrentAipYear::first()->year_period;
        if ($request->year_period) {
            $year_period = $request->year_period;
        }
        $aip = AnnualInvestmentPlanInstitutional::where('year_period', $year_period)->first();

        $data = RevisionPlan::with(['budget', 'paps', 'paps.office', 'clonedVersions'])
            ->whereHas('budget', function ($query) {
                $query->select(DB::raw('revision_plan_id'))
                    ->groupBy('revision_plan_id')
                    ->havingRaw('SUM(amount) > 0');
            })
            ->when($request->source == 'rev_app', function ($query)use ($myid, $gad_reviewers)  {

                $query->where(function ($q) {
                    $q->where('status', '0')
                        ->orWhere('status', '7')
                        ->orWhere('return_request_status', '0');
                });

                 // GAD visibility rules
                $query->whereHas('paps', function ($q) use ($myid, $gad_reviewers) {

                    if (in_array($myid, $gad_reviewers, true)) {
                        // ✅ GAD reviewer → see ONLY gad_status = 0
                        $q->where('gad_status', 0);
                    } else {
                        // ❌ Not a reviewer → see ONLY gad_status = 1
                        $q->where('gad_status', 1);
                    }

                });
            })
            ->when($request->FFUNCCOD, function ($query) use ($request) {
                $query->whereHas('paps', function ($query_inner) use ($request) {
                    $query_inner->where('FFUNCCOD', $request->FFUNCCOD);
                });
            })
            ->when($request->search, function ($query) use ($request) {
                // dd($request->search);
                $query->where('project_title', 'LIKE', '%' . $request->search . '%');
            })
            ->whereHas('paps', function ($query) use ($request, $source, $dept_id) {
                $query->when($source == 'budget', function ($query) use ($dept_id) {
                    $query->where('department_code', $dept_id);
                });
            })
            // ->when($source == 'budget', function ($query) use ($dept_id) {
            //     $query->whereHas('paps', function ($q) use ($dept_id) {
            //         $q->where('department_code', $dept_id);
            //     });
            // })
            ->when($request->has_comments == 1, function ($query) {
                $query->whereExists(function ($sub) {
                    $sub->select(DB::raw(1))
                        ->from('revision_plan_comments as rpc')
                        ->where(function ($inner) {
                            $inner->where('rpc.table_name', 'revision_plans')
                                ->whereColumn('rpc.table_row_id', 'revision_plans.id');
                        })
                        // activity_projects
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc2', 'rpc2.table_row_id', '=', 'ap.id')
                                ->where('rpc2.table_name', 'activity_projects');
                        })
                        // strategy_projects
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('strategy_projects as sp')
                                ->whereColumn('sp.project_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc3', 'rpc3.table_row_id', '=', 'sp.id')
                                ->where('rpc3.table_name', 'strategy_projects');
                        })
                        // 4️⃣ expected_revised_outputs comments
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('expected_revised_outputs as ero2', 'ero2.activity_project_id', '=', 'ap.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'ero2.id')
                                ->where('rpc4.table_name', 'expected_revised_outputs');
                        })

                        // 3️⃣ expected_revised_outcomes comments
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('activity_projects as ap')
                                ->whereColumn('ap.project_id', 'revision_plans.id')
                                ->join('expected_revised_outcomes as ero', 'ero.activity_project_id', '=', 'ap.id')
                                ->join('revision_plan_comments as rpc3', 'rpc3.table_row_id', '=', 'ero.id')
                                ->where('rpc3.table_name', 'expected_revised_outcomes');
                        })
                        // budget_requirements
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('budget_requirements as br')
                                ->whereColumn('br.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'br.id')
                                ->where('rpc4.table_name', 'budget_requirements');
                        })
                        // team plans
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('team_plans as tp')
                                ->whereColumn('tp.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'tp.id')
                                ->where('rpc4.table_name', 'team_plans');
                        })

                        // monitoring and evaluation
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('monitoring_and_evaluations as me')
                                ->whereColumn('me.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'me.id')
                                ->where('rpc4.table_name', 'monitoring_and_evaluations');
                        })

                        // risk managements
                        ->orWhereExists(function ($inner) {
                            $inner->select(DB::raw(1))
                                ->from('risk_manangements as rm')
                                ->whereColumn('rm.revision_plan_id', 'revision_plans.id')
                                ->join('revision_plan_comments as rpc4', 'rpc4.table_row_id', '=', 'rm.id')
                                ->where('rpc4.table_name', 'risk_manangements');
                        });
                });
            })
            ->paginate(10)
            ->withQueryString();

        // dd($request->search);
        $data->through(function ($item) use ($budget_controller, $aip) {
            $all_comments = $this->getAllRevisionPlanComments($item->id);
            $commentCount = $all_comments->where('comment_status', 0)->count();
            // dd($commentCount);
            $revision_comment = RevisionPlanComment::where('table_row_id', $item->id)
                ->where('table_name', 'revision_plans')
                ->count();

            $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                ->sum('amount');

            $imp_amount = 0.00;
            if ($item->is_strategy_based == 1) {
                $total = $budget_controller->getStratTotal($item->id);
            } else {
                $total = $budget_controller->getActivityTotal($item->id);
            }

            if ($total) {
                $imp_amount = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
                    $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
                    $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4') +
                    $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');
            }
            // dd($item->type);
            return [
                'aip' => $aip,
                'comments_count' => $commentCount,
                'comments' => $all_comments,
                'FFUNCTION' => optional(optional($item->paps)->office)->FFUNCTION,
                'id' => $item->id,
                'project_title' => $item->project_title,
                'type' => $item->type,
                'version' => $item->version,
                'budget_sum' => $budgetary_requirement,
                'imp_amount' => $imp_amount,
                'idpaps' => $item->idpaps,
                'status' => $item->status,
                'gad_status' => $item->gad_status,
                'number_of_clones' => $item->cloned_versions_count, // ❗ special name
                'return_request_status' => $item->return_request_status
            ];
        });
        // dd($data);
        $year_c = date('Y');
        $year_n = intval($year_c) + 1;
        $year_p = intval($year_c) - 1;
        $functions = $this->getFunctions($myid);
        $programs = $this->getPrograms($year_c);

        $latestRevisionPlanIds = DB::table('revision_plans as rp1')
            ->select('rp1.id')
            ->whereRaw('NOT EXISTS (
                SELECT 1 FROM revision_plans rp2
                WHERE rp2.idpaps = rp1.idpaps AND rp2.version > rp1.version
            )')
            ->join('program_and_projects', 'program_and_projects.id', 'rp1.idpaps')
            ->where('program_and_projects.department_code', auth()->user()->department_code)
            ->pluck('id')
            ->toArray();

        $total_budget = BudgetRequirement::select('amount')
            ->whereIn('revision_plan_id', $latestRevisionPlanIds)
            ->sum('amount');
        $totals = Appropriation::selectRaw("FORMAT(IFNULL(SUM(appropriations.past_year), 0), 2, 'en_US') AS past_year")
            ->selectRaw("FORMAT(IFNULL(SUM(appropriations.first_sem), 0), 2, 'en_US') AS first_sem")
            ->selectRaw("FORMAT(IFNULL(SUM(appropriations.second_sem), 0), 2, 'en_US') AS second_sem")
            ->selectRaw("FORMAT(IFNULL(SUM(appropriations.first_sem + appropriations.second_sem), 0), 2, 'en_US') AS total")
            ->selectRaw("FORMAT(IFNULL(" . $total_budget . ", 0), 2, 'en_US') AS budget_year")
            ->join('program_and_projects', 'program_and_projects.id', 'appropriations.idpaps')
            ->where('program_and_projects.department_code', auth()->user()->department_code)
            ->first();


        $acc = DB::connection('mysql2')->table('chartofaccounts')->get();

        $dept_code = auth()->user()->department_code;
        $functions2 = FFUNCCOD::where('department_code', $dept_code)->first();



        $baseUrl = app()->environment('production')
            ? 'http://122.53.120.18:8067/images/'
            : asset('storage/');
        $disk = app()->environment('production') ? 'custom_uploads' : 'public';
        $has_comments = $request->has_comments;
        return inertia('RevisionPlans/Direct', [
            'data' => $data,
            'FFUNCCOD' => $FFUNCCOD,
            'FFUNCCOD2' => $functions2,
            'offices' => $offices,
            // "idpaps" => $idpaps,
            // "paps" => $paps,
            "ooes" => $ooes,
            "ooe_description" => $ooe_description,
            "ooe_codes" => $ooe_codes,
            "ooe_id" => $ooe_id,
            "my_source" => $source,
            "dept_id" => $dept_id,
            "filters" => $request->only(['search']),
            "functions" => $functions,
            "programs" => $programs,
            "totals" => $totals,
            'pgHead' => $pgHead,
            "acc" => $acc,
            'fileBaseUrl' => $baseUrl,
            'disk' => $disk,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    protected function getFunctions($idn)
    {
        $functions = DB::connection('mysql2')->table('accountaccess')
            ->select(DB::raw('TRIM(accountaccess.ffunccod) AS FFUNCCOD'), 'functions.FFUNCTION')
            ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
            ->join('functions', 'functions.FFUNCCOD', 'accountaccess.ffunccod')
            ->where('systemusers.recid', $idn)
            ->get();
        return $functions;
    }
    public function getPrograms($year_c)
    {
        //PROGRAMS
        // ->join('raaohs', 'raaohs.idprogram','programs.recid')
        // ->groupBy('programs.recid')
        $programs = DB::connection('mysql2')->table('programs')
            ->select(
                'raaohs.recid AS raohsid',
                'programs.FPROGRAM',
                'programs.factcode',
                'programs.ftype',
                'raaohs.tyear',
                'programs.recid',
                DB::raw('TRIM(raaohs.FFUNCCOD) AS FFUNCCOD')
            )
            ->join('raaohs', 'raaohs.idprogram', 'programs.recid')
            ->where('raaohs.tyear', $year_c)
            ->OrderBy('programs.FPROGRAM')
            ->groupBy('raaohs.idprogram')
            ->get();
        return $programs;
    }

    public function budget(Request $request)
    {
        $myid = auth()->user()->recid;
        $dept_id = auth()->user()->department_code;
        // dd($dept_id);
        // if ($dept_id != '04' && $dept_id != '01') {
        //     return redirect('/forbidden')->with('error', 'You are not allowed to access this page');
        // }
        $per_page = 10;
        if ($request->per_page) {
            $per_page = $request->per_page;
        }
        $FFUNCCOD = FFUNCCOD::where('department_code', $dept_id)->first()->FFUNCCOD;
        $offices = FFUNCCOD::where(function ($query) {
            $query->where('FFUNCTION', 'LIKE', '%Office%')
                ->orWhere('FFUNCTION', 'LIKE', '%Hospital%');
        })
            ->orderBy('FFUNCTION', 'ASC')
            ->get();
        // dd($offices);
        // $paps = ProgramAndProject::where('id', $idpaps)->first();
        $budget_controller = new BudgetRequirementController($this->budget);
        // dd("revision");
        // dd($request->FFUNCCOD);
        // dd($request->search);
        $data = RevisionPlan::select(
            'revision_plans.id',
            'revision_plans.project_title',
            'revision_plans.version',
            'revision_plans.type',
            'revision_plans.is_strategy_based',
            'ff.FFUNCTION',
            'paps.aip_code',
            // DB::raw('sum(budget_requirements.amount)')
        )->with(['budget'])
            ->leftJoin(DB::raw('program_and_projects paps'), 'paps.id', '=', 'revision_plans.idpaps')
            ->leftJoin(DB::raw('major_final_outputs mfo'), 'mfo.id', '=', 'paps.idmfo')
            ->leftJoin(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'mfo.FFUNCCOD')
            // ->leftJoin(DB::raw('budget_requirements'), 'budget_requirements.revision_plan_id', '=', 'revision_plans.id')
            ->where('paps.department_code', $dept_id)
            ->whereHas('budget', function ($query) {
                $query->select(DB::raw('revision_plan_id'))
                    ->groupBy('revision_plan_id')
                    ->havingRaw('SUM(amount) > 0');
            })
            ->where('revision_plans.project_title', 'LIKE', '%' . $request->search . '%')
            ->when($request->FFUNCCOD, function ($query) use ($request) {
                $query->where('ff.FFUNCCOD', $request->FFUNCCOD);
            })
            ->orderBy('ff.FFUNCTION')
            ->paginate(10)
            ->withQueryString(); // <- Pagination
        // dd($data);
        $data->through(function ($item) use ($budget_controller) {
            $revision_comment = RevisionPlanComment::where('table_row_id', $item->id)
                ->where('table_name', 'revision_plans')
                ->count();

            $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                ->sum('amount');

            $imp_amount = 0.00;
            if ($item->is_strategy_based == 1) {
                $total = $budget_controller->getStratTotal($item->id);
            } else {
                $total = $budget_controller->getActivityTotal($item->id);
            }

            if ($total) {
                $imp_amount = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
                    $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
                    $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4') +
                    $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');
            }

            return [
                'FFUNCTION' => $item->FFUNCTION,
                'id' => $item->id,
                'project_title' => $item->project_title,
                'type' => $item->type,
                'version' => $item->version,
                'budget_sum' => $budgetary_requirement,
                'imp_amount' => $imp_amount
            ];
        });
        // $data->setCollection(
        //     $data->getCollection()->filter(function ($item) {
        //         return data_get($item, 'budget_sum') != 0;
        //     })->values()
        // );
        // dd($data);
        return inertia('RevisionPlans/Direct', [
            'data' => $data,
            'FFUNCCOD' => $FFUNCCOD,
            'offices' => $offices,
            // "idpaps" => $idpaps,
            // "paps" => $paps,
            "my_source" => 'budget',
            "dept_id" => $dept_id,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function get_budget_data(Request $request, $rev_id)
    {
        // dd($rev_id);
        return BudgetPrep::where('revision_plan_id', $rev_id)->get();
    }
    public function api_ppa(Request $request)
    {
        $dept_id = $request->department_code;
        // dd($dept_id);
        $budget_controller = new BudgetRequirementController($this->budget);
    // dd($budget_controller);
        // select(
        //     'revision_plans.id',
        //     'revision_plans.project_title',
        //     'revision_plans.version',
        //     'revision_plans.type',
        //     'revision_plans.is_strategy_based',
        //     'ff.FFUNCTION',
        //     'ff.department_code',
        //     'paps.aip_code'
        // )
        // ->
        // dd("dsdsdsdsd");
        // dd(RevisionPlan::with(['paps','paps.office'])->whereHas('paps', function($query)use($dept_id)
        //     {$query->where('department_code', $dept_id);})->get()->pluck('status'));
        $query = RevisionPlan::with(['paps', 'paps.office'])
            // ->where('status','1')
            // ->leftJoin(DB::raw('program_and_projects paps'), 'paps.id', '=', 'revision_plans.idpaps')
            // ->leftJoin(DB::raw('major_final_outputs mfo'), 'mfo.id', '=', 'paps.idmfo')
            // ->leftJoin(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'mfo.FFUNCCOD')
            ->when($request->search, function ($query) use ($request) {
                $query->where('project_title', 'LIKE', '%' . $request->search . '%');
            })
            ->whereHas('paps', function ($query) use ($dept_id) {
                $query->where('department_code', $dept_id);
            });



        // if ($dept_id) {
        //     $query->whereHas('paps', function($query1)use($dept_id){
        //         // $query->where('department_code', $dept_id);
        //         $query1->whereHas('office', function($query2)use($dept_id){
        //             $query2->where('department_code', $dept_id);
        //         });
        //     });
        // }

        // $query = RevisionPlan::with(['paps', 'paps.office', 'paps.MFO', 'paps.MFO.function'])
        //         ->when($request->search, function ($query) use ($request) {
        //             $query->where('project_title', 'LIKE', '%' . $request->search . '%');
        //         });

        // if ($dept_id) {
        //     $query->whereHas('paps', function ($query1) use ($dept_id) {
        //         $query1->whereHas('MFO', function ($query2) use ($dept_id) {
        //             $query2->whereHas('function', function ($query3) use ($dept_id) {
        //                 $query3->where('department_code', $dept_id);
        //             });
        //         });
        //     });
        // }

        $data = $query
            ->get()
            ->map(function ($item) use ($budget_controller, $request) {
                $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                    ->sum('amount');
                // dd($item->gad_status);
                return [
                    'department_code' => optional(optional($item->paps)->office)->department_code,
                    'FFUNCTION' => trim(optional(optional($item->paps)->office)->FFUNCTION),
                    'id' => $item->id,
                    'project_title' => $item->project_title,
                    'type' => $item->type,
                    'version' => $item->version,
                    'amount' => $budgetary_requirement,
                    'strategies' => $this->get_strategies($request, $item->id),
                    'status'=> $this->set_status($item->status, $item->gad_status)
                ];
            });

        return $data;
    }
    protected function set_status($status, $gad_status){
        if($status=="1"){
            return "Reviewed";
        }

        if($status=="0"){
            if($gad_status=="1"){
                return "Submitted";
            }else{
                return "Submitted for GAD Review";
            }

        }

        if($status=="-1"){
            return "Saved";
        }

        if($status=="-2"){
            return "Returned";
        }

    }
    public function aip_api(Request $request)
    {
        ActivityProject::with([
            'expected_output',
            'expected_outcome',
        ])
            ->get();
    }
    public function print_aip(Request $request)
    {
        $strategies = [];
        $ccet = "0";
        if ($request->ccet) {
            $ccet = $request->ccet;
        }
        // ? "1":"0";
        $plans = RevisionPlan::with([
            'strategyProject.strategy',
            'strategyProject.expected_output',
            'strategyProject.expected_outcome',
            'activityProject.expected_output',
            'activityProject.expected_outcome',
            'budget',
            'paps',
            'paps.office',
            'paps.office.office'
        ])
        ->where('status', '1')
        ->get();

        foreach ($plans as $plan) {
            $strategy = optional(optional($plan)->strategyProject->first())->strategy;

            if (!$strategy) {
                continue;
            }

            $strategyId = $strategy->id;
            $budget = $plan->budget;
            $source = "";
            if (count($budget) > 0) {
                $source = $budget[0]->source;
            }
            $expected_outputs = collect($plan->activityProject)
                ->pluck('expected_output')
                ->filter()
                ->flatten(1)
                ->map(fn($output) => [
                    'target_budget_year' => (($output->physical_q1 ? floatval($output->physical_q1) : 0) + ($output->physical_q2 ? floatval($output->physical_q2) : 0)
                        + ($output->physical_q3 ? floatval($output->physical_q3) : 0) + ($output->physical_q4 ? floatval($output->physical_q4) : 0)),
                    'description' => $output->description ?? ''
                ])
                ->filter(fn($item) => !empty($item['description']))
                ->values();
            $total_mooe = $budget->where('category', 'Maintenance, Operating, and Other Expenses')->sum('amount');
            $total_ps = $budget->where('category', 'Personnel Services')->sum('amount');
            $total_co = $budget->where('category', 'Capital Outlay')->sum('amount');
            $total_fe = $budget->where('category', 'Financial Expenses')->sum('amount');

            $total_all = $total_mooe + $total_ps + $total_co + $total_fe;
            $ccet_code_adaptation = 0;
            $ccet_code_mitigation = 0;


            $ccetCode = null;
            $activityWithCcet = collect($plan->activityProject)->firstWhere('ccet_code', '!=', null);


            if ($activityWithCcet) {
                // Found at least one with a ccet_code
                $ccetCode = $activityWithCcet->ccet_code;
                if ($ccetCode) {
                    if (Str::startsWith($ccetCode, 'A')) {
                        $ccet_code_adaptation = $total_all;
                        $ccet_code_mitigation = 0;
                    } elseif (Str::startsWith($ccetCode, 'M')) {
                        $ccet_code_adaptation = 0;
                        $ccet_code_mitigation = $total_all;
                    } else {
                        $ccet_code_adaptation = 0;
                        $ccet_code_mitigation = 0;
                    }
                }
            }
            $source = $this->set_source($source);
            if (mb_strlen($source, 'UTF-8') < 25) {

                $chars = preg_split('//u', $source, -1, PREG_SPLIT_NO_EMPTY);
                $source = implode("\n", $chars);
            }
            $paps_title = $plan->project_title;
            $paps_desc = optional($plan->paps)->MOV == "-" ? "" : optional($plan->paps)->MOV;
            $paps_title_desc = "<b>" . $paps_title . "</b>\n\n<i>" . $paps_desc . "</i>";

            if (!isset($strategies[$strategyId])) {
                $strategies[$strategyId] = [
                    'project_title' => $paps_title_desc,
                    'implementing_office' => optional(optional(optional($plan)->paps)->office)->office ?
                        optional(optional(optional(optional($plan)->paps)->office)->office)->short_name :
                        optional(optional(optional($plan)->paps)->office)->FFUNCTION,
                    'expected_output' => $expected_outputs,
                    'total_mooe' => $total_mooe,
                    'total_ps' => $total_ps,
                    'total_co' => $total_co,
                    'total_fe' => $total_fe,
                    'ccet_code' => $ccetCode,
                    'ccet_code_mitigation' => $ccet_code_mitigation,
                    'ccet_code_adaptation' => $ccet_code_adaptation,
                    'aip_code' => $plan->aip_code,
                    'source' => $source . "\n",
                    'ccet' => $ccet
                ];
            } else {
                // If the same strategy appears again, merge expected outputs
                $strategies[$strategyId]['expected_output'] = $strategies[$strategyId]['expected_output']
                    ->merge($expected_outputs)
                    ->unique('id') // remove duplicates if outputs have IDs
                    ->values();
            }
        }

        // Optional: convert expected_output collections back to arrays
        foreach ($strategies as &$strategy) {
            $strategy['expected_output'] = $strategy['expected_output']->toArray();
        }

        return array_values($strategies);
    }
    public function exportStrategiesOrig(Request $request)
    {
        // 👇 Copy your logic exactly as-is
        $strategies = [];
        $ccet = $request->ccet;

        $plans = RevisionPlan::with([
            'strategyProject.strategy',
            'strategyProject.expected_output',
            'strategyProject.expected_outcome',
            'activityProject.expected_output',
            'activityProject.expected_outcome',
            'budget',
            'paps',
            'paps.office',
            'paps.office.office'
        ])->get();

        foreach ($plans as $plan) {
            $strategy = optional(optional($plan)->strategyProject->first())->strategy;
            if (!$strategy) continue;

            $strategyId = $strategy->id;
            $budget = $plan->budget;
            $source = count($budget) > 0 ? $budget[0]->source : '';

            $expected_outputs = collect($plan->activityProject)
                ->pluck('expected_output')
                ->filter()
                ->flatten(1)
                ->map(fn($output) => [
                    'target_budget_year' => (
                        ($output->physical_q1 ? floatval($output->physical_q1) : 0) +
                        ($output->physical_q2 ? floatval($output->physical_q2) : 0) +
                        ($output->physical_q3 ? floatval($output->physical_q3) : 0) +
                        ($output->physical_q4 ? floatval($output->physical_q4) : 0)
                    ),
                    'description' => $output->description ?? ''
                ])
                ->filter(fn($item) => !empty($item['description']))
                ->values();

            $total_mooe = $budget->where('category', 'Maintenance, Operating, and Other Expenses')->sum('amount');
            $total_ps   = $budget->where('category', 'Personnel Services')->sum('amount');
            $total_co   = $budget->where('category', 'Capital Outlay')->sum('amount');
            $total_fe   = $budget->where('category', 'Financial Expenses')->sum('amount');
            $total_all  = $total_mooe + $total_ps + $total_co + $total_fe;

            $ccet_code_adaptation = 0;
            $ccet_code_mitigation = 0;
            $ccetCode = null;

            $activityWithCcet = collect($plan->activityProject)->firstWhere('ccet_code', '!=', null);

            if ($activityWithCcet) {
                $ccetCode = $activityWithCcet->ccet_code;
                if ($ccetCode) {
                    if (Str::startsWith($ccetCode, 'A')) {
                        $ccet_code_adaptation = $total_all;
                    } elseif (Str::startsWith($ccetCode, 'M')) {
                        $ccet_code_mitigation = $total_all;
                    }
                }
            }

            if (mb_strlen($source, 'UTF-8') < 25) {
                $chars = preg_split('//u', $source, -1, PREG_SPLIT_NO_EMPTY);
                $source = implode("\n", $chars);
            }

            $paps_title = $plan->project_title;
            $paps_desc  = optional($plan->paps)->MOV == "-" ? "" : optional($plan->paps)->MOV;
            $paps_title_desc = $paps_title . "\n\n" . $paps_desc;

            if (!isset($strategies[$strategyId])) {
                $strategies[$strategyId] = [
                    'project_title' => $paps_title_desc,
                    'implementing_office' => optional(optional(optional($plan)->paps)->office)->office
                        ? optional(optional(optional(optional($plan)->paps)->office)->office)->short_name
                        : optional(optional(optional($plan)->paps)->office)->FFUNCTION,
                    'expected_output' => $expected_outputs,
                    'total_mooe' => $total_mooe,
                    'total_ps' => $total_ps,
                    'total_co' => $total_co,
                    'total_fe' => $total_fe,
                    'ccet_code' => $ccetCode,
                    'ccet_code_mitigation' => $ccet_code_mitigation,
                    'ccet_code_adaptation' => $ccet_code_adaptation,
                    'aip_code' => $plan->aip_code,
                    'source' => $source . "\n",
                    'ccet' => $ccet
                ];
            } else {
                $strategies[$strategyId]['expected_output'] = $strategies[$strategyId]['expected_output']
                    ->merge($expected_outputs)
                    ->unique('id')
                    ->values();
            }
        }

        foreach ($strategies as &$strategy) {
            $strategy['expected_output'] = $strategy['expected_output']->toArray();
        }

        $strategies = array_values($strategies);

        // ✅ Generate Excel file using Box/Spout
        $filePath = storage_path('app/public/strategies.xlsx');
        $writer = WriterEntityFactory::createXLSXWriter();
        $writer->openToFile($filePath);

        // Header style
        $headerStyle = (new StyleBuilder())->build();

        // Header row
        $headerRow = WriterEntityFactory::createRowFromArray([
            'Project Title',
            'Implementing Office',
            'Expected Outputs',
            'Total MOOE',
            'Total PS',
            'Total CO',
            'Total FE',
            'CCET Code',
            'Adaptation',
            'Mitigation',
            'AIP Code',
            'Source'
        ], $headerStyle);
        $writer->addRow($headerRow);

        // Data rows
        foreach ($strategies as $item) {
            $expectedOutputs = collect($item['expected_output'])
                ->pluck('description')
                ->implode(", ");

            $row = WriterEntityFactory::createRowFromArray([
                $item['project_title'],
                $item['implementing_office'],
                $expectedOutputs,
                $item['total_mooe'],
                $item['total_ps'],
                $item['total_co'],
                $item['total_fe'],
                $item['ccet_code'],
                $item['ccet_code_adaptation'],
                $item['ccet_code_mitigation'],
                $item['aip_code'],
                $item['source']
            ]);

            $writer->addRow($row);
        }

        $writer->close();

        return response()->download($filePath)->deleteFileAfterSend(true);
    }

    public function exportStrategies1(Request $request)
    {
        // 🔹 Example query — adjust table & column names to match your schema
        $strategies = DB::table('program_and_projects as p')
            ->leftJoin('expected_outputs as eo', 'p.id', '=', 'eo.project_id')
            ->leftJoin('revision_plans as rp', 'p.id', '=', 'rp.idpaps')
            ->select(
                'p.id',
                'p.project_title',
                'p.implementing_office',
                'p.total_mooe',
                'p.total_ps',
                'p.total_co',
                'p.total_fe',
                'p.ccet_code',
                'rp.adaptation as ccet_code_adaptation',
                'rp.mitigation as ccet_code_mitigation',
                'p.aip_code',
                'p.source',
                'eo.description as expected_output'
            )
            ->orderBy('p.id')
            ->get()
            ->groupBy('id'); // group outputs under each project

        // ✅ Create Excel file with BoxSpout
        $filePath = storage_path('app/public/strategies.xlsx');
        $writer = WriterEntityFactory::createXLSXWriter();
        $writer->openToFile($filePath);

        // 🔹 Header style
        $headerStyle = (new StyleBuilder())->build();

        // 🔹 Header row
        $headerRow = WriterEntityFactory::createRowFromArray([
            'Project Title',
            'Implementing Office',
            'Expected Output',
            'Total MOOE',
            'Total PS',
            'Total CO',
            'Total FE',
            'CCET Code',
            'Adaptation',
            'Mitigation',
            'AIP Code',
            'Source'
        ], $headerStyle);
        $writer->addRow($headerRow);

        // 🔹 Loop through grouped data
        foreach ($strategies as $projectId => $rows) {
            $first = $rows->first();
            $expectedOutputs = $rows->pluck('expected_output')->filter()->values();

            if ($expectedOutputs->isEmpty()) {
                $expectedOutputs = collect(['']);
            }

            foreach ($expectedOutputs as $index => $output) {
                if ($index === 0) {
                    $rowData = [
                        $first->project_title,
                        $first->implementing_office,
                        $output,
                        $first->total_mooe,
                        $first->total_ps,
                        $first->total_co,
                        $first->total_fe,
                        $first->ccet_code,
                        $first->ccet_code_adaptation,
                        $first->ccet_code_mitigation,
                        $first->aip_code,
                        $first->source
                    ];
                } else {
                    // blank other columns for additional expected outputs
                    $rowData = [
                        '',
                        '',
                        $output,
                        '',
                        '',
                        '',
                        '',
                        '',
                        '',
                        '',
                        '',
                        ''
                    ];
                }

                $writer->addRow(WriterEntityFactory::createRowFromArray($rowData));
            }
        }

        $writer->close();

        return response()->download($filePath)->deleteFileAfterSend(true);
    }



    public function exportStrategies(Request $request)
    {
        $strategies = [];
        $ccet = $request->ccet;

        $plans = RevisionPlan::with([
            'strategyProject.strategy',
            'strategyProject.expected_output',
            'strategyProject.expected_outcome',
            'activityProject.expected_output',
            'activityProject.expected_outcome',
            'budget',
            'paps',
            'paps.office',
            'paps.office.office'
        ])->get();

        foreach ($plans as $plan) {
            $strategy = optional(optional($plan)->strategyProject->first())->strategy;
            if (!$strategy) continue;

            $strategyId = $strategy->id;
            $budget = $plan->budget;
            $source = count($budget) > 0 ? $budget[0]->source : '';

            $expected_outputs = collect($plan->activityProject)
                ->pluck('expected_output')
                ->filter()
                ->flatten(1)
                ->map(fn($output) => [
                    'target_budget_year' => (
                        ($output->physical_q1 ? floatval($output->physical_q1) : 0) +
                        ($output->physical_q2 ? floatval($output->physical_q2) : 0) +
                        ($output->physical_q3 ? floatval($output->physical_q3) : 0) +
                        ($output->physical_q4 ? floatval($output->physical_q4) : 0)
                    ),
                    'description' => $output->description ?? ''
                ])
                ->filter(fn($item) => !empty($item['description']))
                ->values();

            $total_mooe = $budget->where('category', 'Maintenance, Operating, and Other Expenses')->sum('amount');
            $total_ps   = $budget->where('category', 'Personnel Services')->sum('amount');
            $total_co   = $budget->where('category', 'Capital Outlay')->sum('amount');
            $total_fe   = $budget->where('category', 'Financial Expenses')->sum('amount');
            $total_all  = $total_mooe + $total_ps + $total_co + $total_fe;

            $ccet_code_adaptation = 0;
            $ccet_code_mitigation = 0;
            $ccetCode = null;

            $activityWithCcet = collect($plan->activityProject)->firstWhere('ccet_code', '!=', null);

            if ($activityWithCcet) {
                $ccetCode = $activityWithCcet->ccet_code;
                if ($ccetCode) {
                    if (Str::startsWith($ccetCode, 'A')) {
                        $ccet_code_adaptation = $total_all;
                    } elseif (Str::startsWith($ccetCode, 'M')) {
                        $ccet_code_mitigation = $total_all;
                    }
                }
            }

            if (mb_strlen($source, 'UTF-8') < 25) {
                $chars = preg_split('//u', $source, -1, PREG_SPLIT_NO_EMPTY);
                $source = implode("\n", $chars);
            }

            $paps_title = $plan->project_title;
            $paps_desc  = optional($plan->paps)->MOV == "-" ? "" : optional($plan->paps)->MOV;
            $paps_title_desc = $paps_title . "\n\n" . $paps_desc;

            if (!isset($strategies[$strategyId])) {
                $strategies[$strategyId] = [
                    'project_title' => $paps_title_desc,
                    'implementing_office' => optional(optional(optional($plan)->paps)->office)->office
                        ? optional(optional(optional(optional($plan)->paps)->office)->office)->short_name
                        : optional(optional(optional($plan)->paps)->office)->FFUNCTION,
                    'expected_output' => $expected_outputs,
                    'total_mooe' => $total_mooe,
                    'total_ps' => $total_ps,
                    'total_co' => $total_co,
                    'total_fe' => $total_fe,
                    'ccet_code' => $ccetCode,
                    'ccet_code_mitigation' => $ccet_code_mitigation,
                    'ccet_code_adaptation' => $ccet_code_adaptation,
                    'aip_code' => $plan->aip_code,
                    'source' => $source . "\n",
                    'ccet' => $ccet
                ];
            } else {
                $strategies[$strategyId]['expected_output'] = $strategies[$strategyId]['expected_output']
                    ->merge($expected_outputs)
                    ->unique('description')
                    ->values();
            }
        }

        foreach ($strategies as &$strategy) {
            $strategy['expected_output'] = $strategy['expected_output']->toArray();
        }

        $strategies = array_values($strategies);

        // ✅ Generate Excel file using Box/Spout
        $filePath = storage_path('app/public/strategies.xlsx');
        $writer = WriterEntityFactory::createXLSXWriter();
        $writer->openToFile($filePath);

        // Header style
        $headerStyle = (new StyleBuilder())->build();

        // Header row
        // Header row (reordered)
        $headerRow = WriterEntityFactory::createRowFromArray([
            'AIP REFERENCE CODE',
            'PROGRAM/PROJECT/ACTIVITY TITLE',
            'IMPLEMENTING OFFICE/DEPARTMENT',
            'EXPECTED OUTPUTS',
            'FUNDING SOURCE',
            'MOOE',
            'PS',
            'CO',
            'FE',
            'Climate Change Adaptation',
            'Climate Change Mitigation',
            'Climate Change Topology Code',
        ], $headerStyle);
        $writer->addRow($headerRow);

        // ✅ Data rows (flattened expected outputs)
        foreach ($strategies as $item) {
            $expectedOutputs = collect($item['expected_output']);

            if ($expectedOutputs->isEmpty()) {
                // If there are no expected outputs, just print one row
                $row = WriterEntityFactory::createRowFromArray([
                    $item['aip_code'],
                    $item['project_title'],
                    $item['implementing_office'],
                    '',
                    $item['source'],
                    $item['total_mooe'],
                    $item['total_ps'],
                    $item['total_co'],
                    $item['total_fe'],
                    $item['ccet_code_adaptation'],
                    $item['ccet_code_mitigation'],
                    $item['ccet_code'],
                ]);
                $writer->addRow($row);
                continue;
            }

            $first = true;
            foreach ($expectedOutputs as $output) {
                if ($first) {
                    $row = WriterEntityFactory::createRowFromArray([
                        $item['aip_code'],
                        $item['project_title'],
                        $item['implementing_office'],
                        $output['description'] ?? '',
                        $item['source'],
                        $item['total_mooe'],
                        $item['total_ps'],
                        $item['total_co'],
                        $item['total_fe'],
                        $item['ccet_code_adaptation'],
                        $item['ccet_code_mitigation'],
                        $item['ccet_code'],
                    ]);
                    $first = false;
                } else {
                    // Subsequent expected outputs → only Expected Output column filled
                    $row = WriterEntityFactory::createRowFromArray([
                        '',
                        '',
                        '',
                        $output['description'] ?? '',
                        '',
                        '',
                        '',
                        '',
                        '',
                        '',
                        '',
                        ''
                    ]);
                }
                $writer->addRow($row);
            }
        }

        $writer->close();
        /*$headerRow = WriterEntityFactory::createRowFromArray([
            'Project Title',
            'Implementing Office',
            'Expected Output',
            'Total MOOE',
            'Total PS',
            'Total CO',
            'Total FE',
            'CCET Code',
            'Adaptation',
            'Mitigation',
            'AIP Code',
            'Source'
        ], $headerStyle);
        $writer->addRow($headerRow);

        // ✅ Data rows (flattened expected outputs)
        foreach ($strategies as $item) {
            $expectedOutputs = collect($item['expected_output']);

            if ($expectedOutputs->isEmpty()) {
                // If there are no expected outputs, just print one row
                $row = WriterEntityFactory::createRowFromArray([
                    $item['project_title'],
                    $item['implementing_office'],
                    '',
                    $item['total_mooe'],
                    $item['total_ps'],
                    $item['total_co'],
                    $item['total_fe'],
                    $item['ccet_code'],
                    $item['ccet_code_adaptation'],
                    $item['ccet_code_mitigation'],
                    $item['aip_code'],
                    $item['source']
                ]);
                $writer->addRow($row);
                continue;
            }

            $first = true;
            foreach ($expectedOutputs as $output) {
                if ($first) {
                    $row = WriterEntityFactory::createRowFromArray([
                        $item['project_title'],
                        $item['implementing_office'],
                        $output['description'] ?? '',
                        $item['total_mooe'],
                        $item['total_ps'],
                        $item['total_co'],
                        $item['total_fe'],
                        $item['ccet_code'],
                        $item['ccet_code_adaptation'],
                        $item['ccet_code_mitigation'],
                        $item['aip_code'],
                        $item['source']
                    ]);
                    $first = false;
                } else {
                    // Subsequent expected outputs → only this column filled
                    $row = WriterEntityFactory::createRowFromArray([
                        '', '', $output['description'] ?? '', '', '', '', '', '', '', '', '', ''
                    ]);
                }
                $writer->addRow($row);
            }
        }

        $writer->close();
    */
        return response()->download($filePath)->deleteFileAfterSend(true);
    }
    protected function set_source($source)
    {
        $source = trim($source ?? ''); // make sure it's a string

        // Normalize the case for easier matching
        $normalized = strtoupper($source);

        // 1️⃣ General Fund
        if (str_contains($normalized, 'GENERAL FUND') || $normalized === 'GF') {
            $source = 'General Fund';
        }
        // 2️⃣ LDRRMF (and variants)
        elseif (
            str_contains($normalized, 'LDRRMF') ||
            str_contains($normalized, 'DISASTER') ||
            str_contains($normalized, 'RISK REDUCTION')
        ) {
            $source = 'LDRRMF';
        }
        // 3️⃣ DF (and variants)
        elseif (
            str_contains($normalized, 'DEVELOPMENT FUND') ||
            str_contains($normalized, '20% DF') ||
            $normalized === 'DF'
        ) {
            $source = 'DF';
        }
        // 4️⃣ Everything else
        else {
            $source = 'Other Sources';
        }
        return $source;
    }
    public function print_aip2(Request $request)
    {
        $strategies = [];
        $plans = RevisionPlan::with([
            'strategyProject.strategy',
            'strategyProject.expected_output',
            'strategyProject.expected_outcome',
            'activityProject.expected_output',
            'activityProject.expected_outcome',
            'budget',
            'paps',
            'paps.office'
        ])->get();

        foreach ($plans as $plan) {
            // dd(optional($plan)->strategyProject[0]);
            // dd($plan);
            $strategy = optional(optional($plan)->strategyProject->first())->strategy;
            // dd($strategy);
            if (!$strategy) {
                continue;
            }

            $strategyId = $strategy->id;

            // Initialize if not yet in array
            if (!isset($strategies[$strategyId])) {
                $strategies[$strategyId] = [
                    // 'strategy_desc' => $strategy->description,
                    'project_title' => $plan->project_title,
                    'implementing_office' => optional(optional(optional(optional($plan))->paps)->office)->FFUNCTION,
                    'activities' => [],
                ];
                // dd($strategy);
            }

            // For each related activity under this plan
            if ($plan->activityProject) {
                $budget = $plan->budget;
                // dd( optional($plan)->activityProject->first());
                $activity = optional(optional($plan)->activityProject->first())->activity;
                // dd($activity);
                $strategies[$strategyId]['activities'][] = [
                    // 'activity_desc' => optional($activity)->description,
                    'expected_output' => optional($plan->activityProject->first())->expected_output,
                    'total_mooe' => $budget->where('category', 'Maintenance, Operating, and Other Expenses')->sum('amount'),
                    'total_ps' => $budget->where('category', 'Personnel Services')->sum('amount'),
                    'total_co' => $budget->where('category', 'Capital Outlay')->sum('amount'),
                    'total_fe' => $budget->where('category', 'Financial Expenses')->sum('amount'),
                ];
            }
        }

        // Optional: Re-index the array if needed
        return array_values($strategies);
        // });

    }
    public function get_strategies(Request $request, $idrevplan)
    {
        $strategies = [];
        $plans = RevisionPlan::with([
            'strategyProject.strategy',
            'strategyProject.expected_output',
            'strategyProject.expected_outcome',
            'activityProject.expected_output',
            'activityProject.expected_outcome',
            'budget'
        ])
            ->where('id', $idrevplan)
            ->get();

        foreach ($plans as $plan) {
            // dd(optional($plan)->strategyProject[0]);
            $strategy = optional(optional($plan)->strategyProject->first())->strategy;
            // dd($strategy);
            if (!$strategy) {
                continue;
            }

            $strategyId = $strategy->id;

            // Initialize if not yet in array
            if (!isset($strategies[$strategyId])) {
                $strategies[$strategyId] = [
                    'strategy_desc' => $strategy->description,
                    'activities' => [],
                ];
                // dd($strategy);
            }

            // For each related activity under this plan
            if ($plan->activityProject) {
                $budget = $plan->budget;
                // dd( optional($plan)->activityProject->first());
                $activity = optional(optional($plan)->activityProject->first())->activity;
                // dd($activity);
                $strategies[$strategyId]['activities'][] = [
                    'activity_desc' => optional($activity)->description,
                    'expected_output' => optional($plan->activityProject->first())->expected_output,
                    'total_mooe' => $budget->where('category', 'Maintenance, Operating, and Other Expenses')->sum('amount'),
                    'total_ps' => $budget->where('category', 'Personnel Services')->sum('amount'),
                    'total_co' => $budget->where('category', 'Capital Outlay')->sum('amount'),
                    'total_fe' => $budget->where('category', 'Financial Expenses')->sum('amount'),
                ];
            }
        }

        // Optional: Re-index the array if needed
        return array_values($strategies);
        // });

    }
    protected function strategy_based($id)
    {
        return RevisionPlan::where('id', $id)
            ->where('is_strategy_based', 1)
            ->get();
    }
    protected function activity_based($id)
    {
        return RevisionPlan::where('id', $id)
            ->where('is_strategy_based', 0)
            ->get();
    }

    public function ipp(Request $request)
    {
        $revplan = RevisionPlan::with([
            // 'teamPlans',
            // 'monitoringAndEvaluations',
            // 'riskManagements',
            // 'signatories',
            'paps.office'
        ])
            ->where('id', $request->id)
            ->get();
        $amount = $this->getActivityTotal($request->id);
        $proposed_budget = $this->getTotalBudgetRequirements($request->id);

        // dd($amount);

            $revplan=clone($revplan)->map(function ($item)use($amount, $proposed_budget) {
                // $data = Signatory::where('revision_plan_id', $request->revision_plan_id)->get();
                $signatories = $this->getSignatories($item->id);
                // dd($signatories);
                $rationale = html_entity_decode($item->rationale, ENT_QUOTES | ENT_HTML5);

                // Optional but recommended: strip unsupported tags
                $rationale = strip_tags($rationale, '<p><br><b><strong><i><em><u>');

                $date_start = Carbon::parse($item->date_start)->format('F Y');
                $date_end = Carbon::parse($item->date_end)->format('F Y');
                $tot = intval($item->beneficiary_male)+intval($item->beneficiary_female);
                return [
                    'id' => $item->id,
                    'idpaps' => $item->idpaps,
                    'idmfo' => $item->idmfo,
                    'status' => $item->status,
                    'program_id' => $item->program_id,
                    'agency_name' => $item->agency_name,
                    'FFUNCCOD' => $item->FFUNCCOD,
                    'office' => optional(optional($item->paps)->office)->FFUNCTION ?? '',
                    'year_period' => ($item->year_period && $item->year_period != 0) ? $item->year_period
                        : date('Y', strtotime($item->date_start)),
                    'scope' => $item->scope,
                    'aip_code' => $item->aip_code,
                    'project_title' => $item->project_title,
                    'project_location' => $item->project_location,
                    'list_of_lgu_covered' => $item->list_of_lgu_covered,
                    'date_start' => $date_start,
                    'date_end' => $date_end,
                    'beneficiary_male' => $item->beneficiary_male,
                    'beneficiary_female' => $item->beneficiary_female,
                    'baseline_male' => $item->baseline_male,
                    'baseline_female' => $item->baseline_female,
                    'baseline_total' => $tot,
                    'data_source' => $item->data_source,
                    'amount' => $amount,
                    'proposed_budget' => $proposed_budget,
                    'attributed_amount' => $item->attributed_amount,
                    'checklist_id' => $item->checklist_id,
                    'hgdg_score' => $item->hgdg_score,
                    'hgdg_percent' => $item->hgdg_percent,
                    // 'rationale' => '<p align="justify">' . e($item->rationale) . '</p>',
                    'rationale' => '<p align="justify">' . $rationale . '</p>',
                    'objective' => '<p align="justify">' .trim($item->objective). '</p>',
                    'beneficiaries' => $item->beneficiaries,
                    'implementing_team' => $item->implementing_team,
                    'implementing_teams' => $item->teamPlans,
                    'partnership' => $item->partnership,
                    'monitoring' => $item->monitoring,
                    'monitoring_and_evaluations' => $item->monitoringAndEvaluations,
                    'risk_management' => $item->risk_management,
                    'risk_managements' => $item->riskManagements,
                    'version' => $item->version,
                    'type' => $item->type,
                    'final' => $item->final,
                    'supplemental' => $item->supplemental,
                    'user_id' => $item->user_id,
                    'created_at' => $item->created_at,
                    'updated_at' => $item->updated_at,
                    'is_strategy_based' => $item->is_strategy_based,
                    'is_activity_based' => $item->is_activity_based,
                    'breakdown_by_expected_output' => $item->breakdown_by_expected_output,
                    // Merge all signatory fields directly at top level
                    // ...$this->getSignatories($item->id),
                    // 'office' => optional(optional($item)->paps)->office,
                    'total_implementation' => $this->getActivityTotal($item->id),
                    'budget_total' => floatval($this->getTotalBudgetRequirements($item->id)),
                    'name_prepared'    => $signatories['name_prepared'] ?? null,
                    'position_prepared' => $signatories['position_prepared'] ?? null,
                    'acted_prepared'   => $signatories['acted_prepared'] ?? null,
                    'name_noted'    => $signatories['name_noted'] ?? null,
                    'position_noted' => $signatories['position_noted'] ?? null,
                    'acted_noted'   => $signatories['acted_noted'] ?? null,
                    'name_reviewed'    => $signatories['name_reviewed'] ?? null,
                    'position_reviewed' => $signatories['position_reviewed'] ?? null,
                    'acted_reviewed'   => $signatories['acted_reviewed'] ?? null,
                    'name_recommending_approval'    => $signatories['name_recommending_approval'] ?? null,
                    'position_recommending_approval' => $signatories['position_recommending_approval'] ?? null,
                    'acted_recommending_approval'   => $signatories['acted_recommending_approval'] ?? null,
                    'name_approved'    => $signatories['name_approved'] ?? null,
                    'position_approved' => $signatories['position_approved'] ?? null,
                    'acted_approved'   => $signatories['acted_approved'] ?? null,

                ];
            });
        // $signatories = $this->getSignatories($request->id);
        // $revplanArray = $revplan->toArray();
        // $revplanArray = $revplanArray[0] ?? [];
        // $result = array_merge($revplanArray, $signatories);
        return $revplan;
        // $sigs= $this->getSignatories($request->id);
        // return $revplan->concat($sigs);
    }
    public function getSignatories($id)
    {
        $empty = [];

        // $data = Signatory::where('revision_plan_id', $id)->get()->distinct('acted');
        $data = Signatory::where('revision_plan_id', $id)
            ->get()
            ->groupBy('acted')
            ->map(function ($group) {
                return $group->first(); // take only the first entry per 'acted' type
            });

        if ($data->isEmpty()) {
            return $empty;
        }

        // Custom order sequence
        $order = [
            'Prepared',
            'Reviewed',
            'Noted',
            'Recommending Approval',
            'Approved',
            'As to AIP Inclusion',
            'As to AIP Appropriation',
        ];

        // Sort based on custom order
        $sorted = $data->sortBy(function ($item) use ($order) {
            return array_search($item->acted, $order);
        });

        $final = [];

        foreach ($sorted as $item) {

            // Transform acted → lowercase_with_underscores
            $acted_key = strtolower(str_replace(' ', '_', $item->acted));

            $final["name_{$acted_key}"]     = $item->name;
            $final["position_{$acted_key}"] = $item->position;
            $final["acted_{$acted_key}"]    = $item->acted;
        }

        return $final;
    }
    public function getActivityTotal($idrev)
    {
        $total = ActivityProject::where('project_id', $idrev)
            ->select(
                'ps_q1',
                'ps_q2',
                'ps_q3',
                'ps_q4',
                'mooe_q1',
                'mooe_q2',
                'mooe_q3',
                'mooe_q4',
                'co_q1',
                'co_q2',
                'co_q3',
                'co_q4',
                'fe_q1',
                'fe_q2',
                'fe_q3',
                'fe_q4'
            )
            ->where('is_active', '1')
            ->whereHas('activity', function ($q) {
                $q->whereNull('deleted_at');   // activity must NOT be soft deleted
            })
            ->get();

        $all_total = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
            $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
            $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4');
        return $all_total;
    }
    public function list(Request $request)
    {
        $filter = $request->all;
        $budget_controller = new BudgetRequirementController($this->budget);
        // Determine the year
        $year = $request->has('year')
            ? $request->year
            : date('Y');
            // mao ni dapat, temporary lang na sa taas: date('Y') + 1
        // dd($year);
        // dd($budget_controller);
        $data = RevisionPlan::with(['budget', 'paps', 'paps.office'])
            // ->leftJoin(DB::raw('program_and_projects paps'), 'paps.id', '=', 'revision_plans.idpaps')
            // ->leftJoin(DB::raw('major_final_outputs mfo'), 'mfo.id', '=', 'paps.idmfo')
            // ->leftJoin(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'mfo.FFUNCCOD')
            // ->leftJoin(DB::raw('budget_requirements'), 'budget_requirements.revision_plan_id', '=', 'revision_plans.id')
            ->whereHas('budget', function ($query) {
                $query->select(DB::raw('revision_plan_id'))
                    ->groupBy('revision_plan_id')
                    ->havingRaw('SUM(amount) > 0');
            })

            ->when($request->source == 'rev_app', function ($query) {
                // dd("rev app ang source");
                $query->where('status', '>=', '0');
            })
            ->when($request->office, function ($query) use ($request) {
                $query->whereHas('paps', function ($query_inner) use ($request) {
                    $query_inner->where('FFUNCCOD', $request->office);
                });
            })
            ->when($request->sector, function ($query) use ($request) {
                // $query->where('sector', $request->sector);
                $query->whereHas('paps', function ($query_inner) use ($request) {
                    $query_inner->where('sector', $request->sector);
                });
            })
            ->where('project_title', 'LIKE', '%' . $request->search . '%')
            // ->whereHas('paps', function ($query) use ($request, $source, $dept_id) {
            //     $query->when($source == 'budget', function ($query) use ($dept_id) {
            //         $query->where('department_code', $dept_id);
            //     });
            //     // $query->whereHas('paps.office', function($query_o)use($request){
            //     //     $query_o->when($request->FFUNCCOD, function ($query) use ($request) {
            //     //         $query->where('ff.FFUNCCOD', $request->FFUNCCOD);
            //     //     });
            //     // });
            // })
            // ->whereHas('paps.office', function($query){
            //     $query->orderBy('FFUNCTION');
            // })
            ->whereYear('date_start', $year)
            ->where('type', 'p')
            ->get(); // <- Pagination
        // dd($data);
        return $data->map(function ($item) use ($budget_controller) {
            $revision_comment = RevisionPlanComment::where('table_row_id', $item->id)
                ->where('table_name', 'revision_plans')
                ->count();

            $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $item->id)
                ->sum('amount');

            $imp_amount = 0.00;
            $co_total = 0.00;
            $fe_total = 0.00;
            $mooe_total = 0.00;
            $ps_total = 0.00;
            if ($item->is_strategy_based == 1) {
                $total = $budget_controller->getStratTotal($item->id);
            } else {
                $total = $budget_controller->getActivityTotal($item->id);
            }

            if ($total) {
                $imp_amount = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
                    $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
                    $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4') +
                    $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');
                $co_total = $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4');
                $fe_total = $total->sum('fe_q1') + $total->sum('fe_q2') + $total->sum('fe_q3') + $total->sum('fe_q4');
                $mooe_total = $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4');
                $ps_total = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4');
            }
            // dd($item->FFUNCTION);
            // dd($item);
            $budget_val = is_numeric(str_replace(',', '', $budgetary_requirement))
                ? floatval(str_replace(',', '', $budgetary_requirement))
                : 0;

            $imp_val = is_numeric(str_replace(',', '', $imp_amount))
                ? floatval(str_replace(',', '', $imp_amount))
                : 0;

            $warning = '';

            if ($budget_val !== $imp_val) {
                if ($budget_val > $imp_val) {
                    $warning = 'Workplan Total is GREATER than the total in Budgetary Requirements';
                } else {
                    $warning = 'Workplan Total is LESS than the total in Budgetary Requirements';
                }
            }
            // dd($item->paps);
            // $item->paps->sector
            return [
                'FFUNCTION' => optional(optional($item->paps)->office)->FFUNCTION,
                // 'FFUNCCOD'=>$item->paps->office->FFUNCCOD,
                'id' => $item->id,
                'project_title' => $item->project_title,
                'type' => $item->type,
                'version' => $item->version,
                'budget_sum' => $budgetary_requirement,
                'imp_amount' => $imp_amount,
                'co_total' => $co_total,
                'fe_total' => $fe_total,
                'mooe_total' => $mooe_total,
                'ps_total' => $ps_total,
                'idpaps' => $item->idpaps,
                'status' => $item->status,
                'warning' => $warning,
                'sector' => $item->paps->sector
            ];
        });
    }

    public function workplan(Request $request)
    {
        // return "james"; office, project name source of fund budget allocation
        if ($request->id) {
            $revision = RevisionPlan::with(['paps', 'paps.office', 'budget', 'signatories'])->where('id', $request->id)->first();
            // dd($revision);
            $budget_total = $this->getTotalBudget($revision);
            $activities = ActivityProject::with(['expected_output', 'expected_outcome',
                    'activity',
                    'activity.strat',
                    'activity.strat.strategyProject'=> function ($query) use ($revision) {
                        $query->where('project_id', $revision->id);
                    },
                ])->where('project_id', $revision->id)
                // Activity must exist and NOT be soft-deleted
                ->whereHas('activity', function ($q) {
                    $q->whereNull('deleted_at')
                        ->whereHas('strat', function($query){
                            $query->whereNull('deleted_at')
                                ->whereHas('strategyProject', function($q){
                                    $q->where('is_active', "1");
                                });
                        });
                })

                // Strategy must exist and NOT be soft-deleted
                ->whereHas('activity.strat', function ($q) {
                    $q->whereNull('deleted_at');
                })
                ->get()
                ->map(function ($item) use ($revision, $budget_total) {
                    // dd($revision->paps->office->FFUNCTION);
                    // dd($revision->budget[0]->source);
                    // dd($revision->signatories);
                    // dd($item);
                    $get = fn($type) => optional($revision->signatories->firstWhere('acted', $type));
                    $signatories = isset($revision) ? $revision->signatories : null;
                    // dd($signatories);
                    return [
                        'id'               => $item->id,
                        'project_name' => $revision->project_title ?? '',
                        'source_of_fund' => $revision->budget[0]->source ?? '',
                        'office' => optional(optional($revision->paps)->office)->FFUNCTION ?? '',
                        'activity'         => $item->activity ? $item->activity->description : "",
                        'activity_id'      => $item->activity_id,
                        'project_id'       => $item->project_id,
                        'target_indicator' => $item->target_indicator,
                        'date_from'        => $item->date_from,
                        'date_to'          => $item->date_to,
                        'budget_total'     => $budget_total,
                        // =====================
                        // PS
                        // =====================
                        'ps_q1' => $this->money($item->ps_q1),
                        'ps_q2' => $this->money($item->ps_q2),
                        'ps_q3' => $this->money($item->ps_q3),
                        'ps_q4' => $this->money($item->ps_q4),

                        // =====================
                        // MOOE
                        // =====================
                        'mooe_q1' => $this->money($item->mooe_q1),
                        'mooe_q2' => $this->money($item->mooe_q2),
                        'mooe_q3' => $this->money($item->mooe_q3),
                        'mooe_q4' => $this->money($item->mooe_q4),

                        // =====================
                        // CO
                        // =====================
                        'co_q1' => $this->money($item->co_q1),
                        'co_q2' => $this->money($item->co_q2),
                        'co_q3' => $this->money($item->co_q3),
                        'co_q4' => $this->money($item->co_q4),

                        // =====================
                        // FE
                        // =====================
                        'fe_q1' => $this->money($item->fe_q1),
                        'fe_q2' => $this->money($item->fe_q2),
                        'fe_q3' => $this->money($item->fe_q3),
                        'fe_q4' => $this->money($item->fe_q4),


                        'gad_issue'        => $item->gad_issue,
                        'ccet_code'        => $item->ccet_code,
                        'responsible'      => $item->responsible,
                        'is_active'        => $item->is_active,
                        // 'expected_output' => collect($item->expected_output ?? [])->map(function ($eo) {
                        //         return [
                        //             'id' => $eo->id ?? 0,
                        //             'description' => $eo->description ?? '',
                        //             'activity_id' => $eo->activity_id ?? null,
                        //             'activity_project_id' => $eo->activity_project_id ?? null,

                        //             'physical_q1' => number_format((float) ($eo->physical_q1 ?? 0), 2, '.', ''),
                        //             'physical_q2' => number_format((float) ($eo->physical_q2 ?? 0), 2, '.', ''),
                        //             'physical_q3' => number_format((float) ($eo->physical_q3 ?? 0), 2, '.', ''),
                        //             'physical_q4' => number_format((float) ($eo->physical_q4 ?? 0), 2, '.', ''),

                        //             'is_active' => (bool) ($eo->is_active ?? false),
                        //             'is_strategy_output' => (bool) ($eo->is_strategy_output ?? false),
                        //         ];
                        //     })->values(),
                        'expected_output'       => $item->expected_output,
                        'expected_outcome'       => $item->expected_outcome,
                        // =====================
                        // SIGNATORIES (SAFE)
                        // =====================
                        'approved_by' => $signatories
                            ? optional($this->getSig('Approved', $signatories))->name ?? ''
                            : '',

                        'approved_by_position' => $signatories
                            ? optional($this->getSig('Approved', $signatories))->position ?? ''
                            : '',

                        'prepared_by' => $signatories
                            ? optional($this->getSig('Prepared', $signatories))->name ?? ''
                            : '',

                        'prepared_by_position' => $signatories
                            ? optional($this->getSig('Prepared', $signatories))->position ?? ''
                            : '',

                        'reviewed_by' => $signatories
                            ? optional($this->getSig('Reviewed', $signatories))->name ?? ''
                            : '',

                        'reviewed_by_position' => $signatories
                            ? optional($this->getSig('Reviewed', $signatories))->position ?? ''
                            : '',

                        'noted_by' => $signatories
                            ? optional($this->getSig('Noted', $signatories))->name ?? ''
                            : '',

                        'noted_by_position' => $signatories
                            ? optional($this->getSig('Noted', $signatories))->position ?? ''
                            : '',
                        // 'sig'=> $signatories,
                        // "approved_by"           => $this->getSig('Approved', $revision->signatories)->name ?? null,
                        // "approved_by_position"  => $this->getSig('Approved', $revision->signatories)->position ?? null,
                        // "prepared_by"           => $this->getSig('Prepared', $revision->signatories)->name ?? null,
                        // "prepared_by_position"  => $this->getSig('Prepared', $revision->signatories)->position ?? null,
                        // "reviewed_by"           => $this->getSig('Reviewed', $revision->signatories)->name ?? null,
                        // "reviewed_by_position"  => $this->getSig('Reviewed', $revision->signatories)->position ?? null,
                        // "noted_by"              => $this->getSig('Noted', $revision->signatories)->name ?? null,
                        // "noted_by_position"     => $this->getSig('Noted', $revision->signatories)->position ?? null,
                    ];
                });
            // dd($activities);
            return $activities;
        } else {
            return [];
        }
    }
    public function getSig($type, $signatories)
    {
        $signatory = $signatories->firstWhere('acted', $type);
        return $signatory;
    }
    private function money($value)
    {
        return number_format((float) ($value ?? 0), 2, '.', '');
    }
    public function getExpectedOutputs(Request $request)
    {
        return ExpectedRevisedOutput::where('activity_project_id', $request->activity_project_id)
            ->get();
    }
    public function getTotalBudgetRequirements($id)
    {
        return BudgetRequirement::where('revision_plan_id', $id)
            ->sum('amount');
    }
    public function getTotalBudget($revision)
    {


        $activitiesQuery = ActivityProject::whereHas('activity', function($query){
                            $query->whereNull('deleted_at')
          ->whereHas('strat', function ($q) {
              $q->whereNull('deleted_at');
          });
                        }

                    )
                    ->where('project_id', $revision->id);

        // ---- TOTAL BUDGET ACROSS ALL ACTIVITY ROWS ----
        $total_budget = $activitiesQuery->get()->reduce(function ($carry, $row) {
            return $carry
                + $row->ps_q1 + $row->ps_q2 + $row->ps_q3 + $row->ps_q4
                + $row->mooe_q1 + $row->mooe_q2 + $row->mooe_q3 + $row->mooe_q4
                + $row->co_q1 + $row->co_q2 + $row->co_q3 + $row->co_q4
                + $row->fe_q1 + $row->fe_q2 + $row->fe_q3 + $row->fe_q4;
        }, 0);

        return $total_budget;
    }
    public function imp_schedule(Request $request)
    {
        $empty = [];
        $strat = StrategyProject::with([
            'strategy',
            'strategy.activity',
            'strategy.activity.activityProject',
            // 'strategy.activity.activityProject.expected_output',
            // 'strategy.activity.activityProject.expected_outcome'
        ])
            ->whereHas('strategy', function($query){
                $query->whereNull('deleted_at');
            })
            ->where('project_id', $request->id)
            ->where('is_active','1')
            ->get()
            ->map(function ($item) use ($request) {
                $strategy = optional($item->strategy);

                return [
                    'strategy' => $strategy->description ?? null,
                    'id' => $strategy->id ?? null,
                    'revision_plan_id' => $request->id,
                    'activities' => $strategy->activity
                        ? $strategy->activity->flatMap(function ($act) use ($request) {

                            $projects = $act->activityProject ?? collect();
                            // dd($act);
                            return $projects->map(function ($proj) use ($act, $request) {
                                // Build expected outputs first
                                // $expectedOutputs = collect($proj->expected_output ?? [])
                                //     ->map(function ($eo) {
                                //         return [
                                //             'description' => $eo->description ?? null,
                                //             'target_indicator' => $eo->target_indicator ?? null,
                                //         ];
                                //     });

                                // // Append expected outcomes to SAME ARRAY
                                // $expectedOutcomes = collect($proj->expected_outcome ?? [])
                                //     ->map(function ($eo) {
                                //         return [
                                //             'description' => $eo->description ?? null,
                                //             'target_indicator' => $eo->target_indicator ?? null,
                                //         ];
                                //     });

                                // Merge both into a single array
                                // $combined = $expectedOutputs->merge($expectedOutcomes);

                                return [
                                    'activity_project_id' => $proj->id ?? null,
                                    'revision_plan_id' => $request->id,
                                    'strategy_id' => $act->strategy_id ?? null,
                                    'description' => $act->description ?? null,
                                    'gad_issue' => $proj->gad_issue ?? null,
                                    'date_from' => $proj->date_from ?? null,
                                    'date_to' => $proj->date_to ?? null,

                                    'ps_q1' => $proj->ps_q1 ?? 0,
                                    'ps_q2' => $proj->ps_q2 ?? 0,
                                    'ps_q3' => $proj->ps_q3 ?? 0,
                                    'ps_q4' => $proj->ps_q4 ?? 0,

                                    'mooe_q1' => $proj->mooe_q1 ?? 0,
                                    'mooe_q2' => $proj->mooe_q2 ?? 0,
                                    'mooe_q3' => $proj->mooe_q3 ?? 0,
                                    'mooe_q4' => $proj->mooe_q4 ?? 0,

                                    'fe_q1' => $proj->fe_q1 ?? 0,
                                    'fe_q2' => $proj->fe_q2 ?? 0,
                                    'fe_q3' => $proj->fe_q3 ?? 0,
                                    'fe_q4' => $proj->fe_q4 ?? 0,

                                    'co_q1' => $proj->co_q1 ?? 0,
                                    'co_q2' => $proj->co_q2 ?? 0,
                                    'co_q3' => $proj->co_q3 ?? 0,
                                    'co_q4' => $proj->co_q4 ?? 0,
                                    'ccet' => $proj->ccet ?? null,
                                    'responsible' => $proj->responsible ?? null,

                                    // 'expected_outputs' => $combined->values(),
                                    // 'expected_outputs' => ($proj->expected_output ?? collect())
                                    //     ->map(function ($eo) {
                                    //         return [
                                    //             'description' => $eo->description ?? null,
                                    //             'target_indicator' => $eo->target_indicator ?? null,
                                    //         ];
                                    //     }),
                                ];
                            });
                        })
                        : collect(),
                ];
            });
        return $strat->isEmpty()
            ? $empty
            : $strat;
    }
    public function getCombinedExpected(Request $request)
    {
        // Load project with both relations
        $project = ActivityProject::with([
            'expected_output',
            'expected_outcome'
        ])->find($request->id);

        if (!$project) {
            return collect(); // or return [];
        }

        // expected_outputs
        $expectedOutputs = collect($project->expected_output ?? [])
            ->map(function ($eo) {
                return [
                    'description' => $eo->description ?? null,
                    'target_indicator' => $eo->target_indicator ?? null,
                ];
            });

        // expected_outcomes
        $expectedOutcomes = collect($project->expected_outcome ?? [])
            ->map(function ($eo) {
                return [
                    'description' => $eo->description ?? null,
                    'target_indicator' => $eo->target_indicator ?? null,
                ];
            });

        // merge into one single array
        return $expectedOutputs
            ->merge($expectedOutcomes)
            ->values();
    }
    public function getActivity(Request $request)
    {
        $empty = [];
        // dd("fsdfdsfsdfsdfsdfsdf");
        $activityProjects = ActivityProject::with([
            'activity',
            'expected_output',
            'expected_outcome'
        ])
            ->where('project_id', $request->revision_plan_id)
            ->whereHas('activity', function ($query) use ($request) {
                $query->where('strategy_id', $request->strategy_id);
            })
            ->orderBy('activity_id', 'asc')
            ->get()
            ->map(function ($proj) use ($request) {
                // Collect expected outputs (description column)
                // dd($proj->expected_output);
                $expected_outputs = collect(optional(optional($proj)->activity)->expected_output)
                    ->filter(fn($eo) => is_object($eo))
                    ->map(function ($eo) {

                        // Convert to numeric safely using (float) casting
                        $total = (float)($eo->physical_q1 ?? 0)
                            + (float)($eo->physical_q2 ?? 0)
                            + (float)($eo->physical_q3 ?? 0)
                            + (float)($eo->physical_q4 ?? 0);

                        return "{$total} " . (string)($eo->description ?? '');
                    })
                    ->whenEmpty(fn() => collect())   // ensure safe implode
                    ->implode('<br><br>');

                // Collect expected outcomes (target_indicator column)
                $target_indicators = optional($proj)->expected_output
                    ? optional($proj)->expected_output->pluck('target_indicator')->implode('<br><br>')
                    : null;

                // Collect expected outcomes (target_indicator column)
                $expected_outcomes = optional($proj)->expected_outcome
                    ? optional($proj)->expected_outcome->pluck('description')->implode('<br><br>')
                    : null;
                $ps_total=floatval($proj->ps_q1)+floatval($proj->ps_q2)+floatval($proj->ps_q3)+floatval($proj->ps_q4);
                $mooe_total=floatval($proj->mooe_q1)+floatval($proj->mooe_q2)+floatval($proj->mooe_q3)+floatval($proj->mooe_q4);
                $fe_total= floatval($proj->fe_q1)+floatval($proj->fe_q2)+floatval($proj->fe_q3)+floatval($proj->fe_q4);
                $co_total= floatval($proj->co_q1)+floatval($proj->co_q2)+floatval($proj->co_q3)+floatval($proj->co_q4);
                $overall_total = floatval($ps_total)+floatval($mooe_total)+floatval($fe_total)+floatval($co_total);
                return [
                    'activity_project_id' => $proj->id ?? null,
                    'revision_plan_id' => $request->revision_plan_id,
                    'strategy_id' => optional(optional($proj)->activity)->strategy_id,
                    'description' => optional(optional($proj)->activity)->description,
                    'gad_issue' => $proj->gad_issue ?? null,
                    'date_from' => $proj->date_from ?? "2026-01-01",
                    'date_to' => $proj->date_to ?? "2026-12-31",

                    'ps_q1' => $proj->ps_q1 ?? 0,
                    'ps_q2' => $proj->ps_q2 ?? 0,
                    'ps_q3' => $proj->ps_q3 ?? 0,
                    'ps_q4' => $proj->ps_q4 ?? 0,
                    'ps_total' => $ps_total,
                    'mooe_q1' => $proj->mooe_q1 ?? 0,
                    'mooe_q2' => $proj->mooe_q2 ?? 0,
                    'mooe_q3' => $proj->mooe_q3 ?? 0,
                    'mooe_q4' => $proj->mooe_q4 ?? 0,
                    'mooe_total' => $mooe_total,
                    'fe_q1' => $proj->fe_q1 ?? 0,
                    'fe_q2' => $proj->fe_q2 ?? 0,
                    'fe_q3' => $proj->fe_q3 ?? 0,
                    'fe_q4' => $proj->fe_q4 ?? 0,
                    'fe_total' => $fe_total,
                    'co_q1' => $proj->co_q1 ?? 0,
                    'co_q2' => $proj->co_q2 ?? 0,
                    'co_q3' => $proj->co_q3 ?? 0,
                    'co_q4' => $proj->co_q4 ?? 0,
                    'ccet' => $proj->ccet ?? null,
                    'co_total' => $co_total,
                    'total'=>$overall_total,
                    'responsible' => $proj->responsible ?? null,
                    'expected_outputs' => $expected_outputs,
                    'target_indicators' => $target_indicators,
                    // 'expected_outputs' => $combined->values(),
                    // 'expected_outputs' => ($proj->expected_output ?? collect())
                    //     ->map(function ($eo) {
                    //         return [
                    //             'description' => $eo->description ?? null,
                    //             'target_indicator' => $eo->target_indicator ?? null,
                    //         ];
                    //     }),
                ];
            });
        return $activityProjects->isEmpty()
            ? $empty
            : $activityProjects;
    }
    public function getbudget(Request $request)
    {

        // List of categories in the required order
        $categories = [
            'Maintenance, Operating, and Other Expenses',
            'Capital Outlay',
            'Personnel Services',
            'Financial Expenses',
        ];

        // Fetch all budget requirements
        $items = BudgetRequirement::where('revision_plan_id', $request->revision_plan_id)->orderBy('category')->get();
        // dd($items);
        // Group by category
        $grouped = [];

        foreach ($categories as $cat) {
            $grouped[] = [
                'category' => $cat,
                'budget_requirements' => $items
                    ->where('category', $cat)
                    ->values() // reset indices
                    ->map(function ($item) {
                        return [
                            'id' => $item->id,
                            'revision_plan_id' => $item->revision_plan_id,
                            'particulars' => $item->particulars,
                            'account_code' => $item->account_code,
                            'sip_number' => $item->sip_number,
                            'amount' => $item->amount,
                            'proposed_budget' => $item->proposed_budget,
                            'category' => $item->category,
                            'category_gad' => $item->category_gad,
                            'source' => $item->source,
                            'created_at' => $item->created_at,
                            'updated_at' => $item->updated_at,
                        ];
                    })
            ];
        }

        return $grouped;
    }
}
