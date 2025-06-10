<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\ActivityProject;
use App\Models\BudgetRequirement;
use App\Models\FFUNCCOD;
use App\Models\HGDG_Checklist;
use App\Models\ImplementationPlan;
use App\Models\Implementing_team;
use App\Models\MajorFinalOutput;
use App\Models\Monitoring_and_evaluation;
use App\Models\ProgramAndProject;
use App\Models\RevisionPlan;
use App\Models\Risk_manangement;
use App\Models\Signatory;
use App\Models\Strategy;
use App\Models\StrategyProject;
use App\Models\Target;
use App\Models\TeamPlan;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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
        $myid = auth()->user()->recid;
        $dept_id = auth()->user()->department_code;
        $FFUNCCOD = FFUNCCOD::where('department_code', $dept_id)->first()->FFUNCCOD;
        $paps = ProgramAndProject::where('id', $idpaps)->first();
        $budget_controller = new BudgetRequirementController($this->budget);
        // dd("revision");
        if ($paps->type === "GAS") {
            return redirect('/revision/general/administration/services/' . $FFUNCCOD . '/plan');
        } else {
            // dd(RevisionPlan::where('idpaps', $idpaps)->get());
            $data = RevisionPlan::select(
                'revision_plans.id',
                'revision_plans.project_title',
                'revision_plans.version',
                'revision_plans.type',
                'revision_plans.is_strategy_based',
                'ff.FFUNCTION'
            )
                ->leftJoin(DB::raw('program_and_projects paps'), 'paps.id', '=', 'revision_plans.idpaps')
                ->leftJoin(DB::raw('major_final_outputs mfo'), 'mfo.id', '=', 'paps.idmfo')
                ->leftJoin(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'mfo.FFUNCCOD')
                // ->Join(DB::raw('fms.accountaccess acc'), 'acc.ffunccod', '=', 'ff.FFUNCCOD')
                // ->where('acc.iduser', '=', $myid)
                ->where('idpaps', '=', $idpaps)
                ->get()
                ->map(function ($item) use ($budget_controller) {
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
                        'FFUNCTION' => $item->FFUNCTION,
                        'id' => $item->id,
                        'project_title' => $item->project_title,
                        'type' => $item->type,
                        'version' => $item->version,
                        'budget_sum' => $budgetary_requirement,
                        'imp_amount' => $imp_amount
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
    public function create(Request $request, $id)
    {
        $paps = ProgramAndProject::where('id', $id)->get();
        $hgdg = HGDG_Checklist::get();
        $count = RevisionPlan::where('idpaps', $id)->count();
        $max_id = RevisionPlan::where('idpaps', $id)->max('id');
        // dd($max_id);
        $duplicate = RevisionPlan::where('id', $max_id)->get();

        if ($count > 0) {
            //dd("Duplicate is not empty");
            return inertia('RevisionPlans/Create', [
                "idpaps" => $id,
                "hgdgs" => $hgdg,
                "paps" => $paps,
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
        ///dd($request);
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
            'rationale' => 'required',
            'objective' => 'required',
            'beneficiaries' => 'required',
            'checklist_id' => 'required',
            // 'implementing_team'=>'required',
            'partnership' => 'required',

            // 'monitoring'=>'required',
            // 'risk_management'=>'required'
        ]);

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
        return redirect('/revision/' . $request->idpaps)
            ->with('message', 'Revision Plan added');
    }
    public function view(Request $request, $id)
    {
        //REVISION PLANS
        $paps = RevisionPlan::with(['comments', 'comments.user'])->where('id', $id)->with('checklist')->first();
        // dd($paps);
        $scope = $paps->scope;
        $idpaps = $paps->idpaps;
        $idmfo = $paps->idmfo;

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
            $ppa = ProgramAndProject::findOrFail($paps->idpaps);
            if (auth()->user()->department_code == '04') {
                $functions = FFUNCCOD::where('FFUNCCOD', $ppa->FFUNCCOD)->first();
            } else {
                $functions = AccountAccess::where('iduser', auth()->user()->recid)
                    ->where('ff.FFUNCCOD', $ppa->FFUNCCOD)
                    ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
                    ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
                    ->with('func')->first();
            }
        } else if ($idmfo != 0) {
            $mfoss = MajorFinalOutput::findOrFail($paps->idmfo);
            if (auth()->user()->department_code == '04') {
                $functions = FFUNCCOD::where('FFUNCCOD', $mfoss->FFUNCCOD)->first();
            } else {
                $functions = AccountAccess::where('iduser', auth()->user()->recid)
                    ->where('ff.FFUNCCOD', $mfoss->FFUNCCOD)
                    ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
                    ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
                    ->with('func')->first();
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
        $budgetRequirements = BudgetRequirement::with(['comments', 'comments.user'])
            ->select(
                'id',
                'account_code',
                DB::raw('MAX(particulars) as particulars'),
                DB::raw('SUM(CASE WHEN category_gad = "GAD" THEN amount ELSE 0 END) as GAD_amount'),
                DB::raw('SUM(CASE WHEN category_gad = "NON-GAD" THEN amount ELSE 0 END) as NONGAD_amount'),
                DB::raw('SUM(amount) as Total'),
                DB::raw('MAX(source) as Source'),
                'category'
            )
            ->where('revision_plan_id', $id)
            ->whereIn('category', ['Capital Outlay', 'Financial Expenses', 'Maintenance, Operating, and Other Expenses', 'Personnel Services'])
            ->groupBy('account_code', 'category') // Grouping also by category to categorize data properly
            ->get();

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
                    "name" => $item->userEmployee ? $item->userEmployee->employee_name : "",
                    "position" => $item->userEmployee ? $item->userEmployee->position_long_title : "",
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

        $imp_amount = "0.00";
        // dd($paps);
        if ($paps->is_strategy_based == 1) {
            $imp_amount = StrategyProject::where('project_id', $id)->where('is_active', '1')
                ->sum(DB::raw('ps_q1 + ps_q2 + ps_q3 + ps_q4 + mooe_q1 + mooe_q2 + mooe_q3 + mooe_q4 + co_q1 + co_q2 + co_q3 + co_q4 + fe_q1 + fe_q2 + fe_q3 + fe_q4'));
        } else {
            $imp_amount = ActivityProject::where('project_id', $id)->where('is_active', '1')
                ->sum(DB::raw('ps_q1 + ps_q2 + ps_q3 + ps_q4 + mooe_q1 + mooe_q2 + mooe_q3 + mooe_q4 + co_q1 + co_q2 + co_q3 + co_q4 + fe_q1 + fe_q2 + fe_q3 + fe_q4'));
        }
        return inertia('RevisionPlans/View', [
            "paps" => $paps,
            "office" => $functions->FFUNCTION,
            "implementation" => $implement,

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
            "sig_rev" => $sig_rev,
            "sig_prep" => $sig_prep,
            "sig_app" => $sig_app,

            //BUDGET REVISED
            "capitalOutlay" => $capitalOutlay,
            "maintenanceOperating" => $maintenanceOperating,
            "personnelServices" => $personnelServices,
            "financialExpenses" => $financialExpenses,
            // "data" => $data,
            "imp_amount" => $imp_amount,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function edit(Request $request, $id)
    {
        $data = RevisionPlan::where('id', $id)->first();
        $paps = ProgramAndProject::where('id', $data->idpaps)->get();
        $idpaps = $data->idpaps;
        if (count($paps) > 0) {
            $idpaps = $paps[0]->id;
        }
        // dd($paps);
        // dd($idpaps);
        $hgdg = HGDG_Checklist::get();
        // $count = RevisionPlan::where('idpaps', $id)->count();
        // $max_id = RevisionPlan::where('idpaps', $id)->max('id');
        return inertia('RevisionPlans/Create', [
            "idpaps" => $idpaps,
            "hgdgs" => $hgdg,
            "paps" => $paps,
            "editData" => $data,
            "can" => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function update(Request $request)
    {
        // dd($request);
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
            return redirect('/revision/' . $request->idpaps)
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
}
