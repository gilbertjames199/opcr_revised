<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\ActivityProject;
use App\Models\Appropriation;
use App\Models\BudgetPrep;
use App\Models\BudgetRequirement;
use App\Models\FFUNCCOD;
use App\Models\HGDG_Checklist;
use App\Models\ImplementationPlan;
use App\Models\Implementing_team;
use App\Models\MajorFinalOutput;
use App\Models\Monitoring_and_evaluation;
use App\Models\OOE;
use App\Models\ProgramAndProject;
use App\Models\RevisionPlan;
use App\Models\RevisionPlanComment;
use App\Models\Risk_manangement;
use App\Models\Signatory;
use App\Models\Strategy;
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

        $myid = auth()->user()->recid;
        $dept_id = auth()->user()->department_code;
        $FFUNCCOD = FFUNCCOD::where('department_code', $dept_id)->first()->FFUNCCOD;
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
            // dd($request);
            // dd($dept_id);
            // select(
            //     'revision_plans.id',
            //     'revision_plans.idpaps',
            //     'revision_plans.project_title',
            //     'revision_plans.version',
            //     'revision_plans.type',
            //     'revision_plans.is_strategy_based',
            //     'ff.FFUNCTION'
            // )
            // ->
            $data = RevisionPlan::with(['paps','paps.office'])
                // ->leftJoin(DB::raw('program_and_projects paps'), 'paps.id', '=', 'revision_plans.idpaps')
                // ->leftJoin(DB::raw('major_final_outputs mfo'), 'mfo.id', '=', 'paps.idmfo')
                // ->leftJoin(DB::raw('afms.functions ff'), 'ff.FFUNCCOD', '=', 'paps.FFUNCCOD')
                // ->Join(DB::raw('fms.accountaccess acc'), 'acc.ffunccod', '=', 'ff.FFUNCCOD')
                // ->where('acc.iduser', '=', $myid)
                // ->where('paps.department_code', '=', $dept_id)
                ->whereHas('paps', function($query)use($dept_id){
                    $query->where('department_code', $dept_id);
                })
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
                    // dd($total);
                    // dd($item);
                    // dd($item->project_title);
                    // if ($item->id == 201) {
                    //     dd($item);
                    // }
                    return [
                        // 'FFUNCTION' => $item->FFUNCTION,
                        'FFUNCTION'=>optional(optional(optional($item)->paps)->office)->FFUNCTION,
                        'idpaps'=>$item->idpaps,
                        'id' => $item->id,
                        'project_title' => $item->project_title,
                        'type' => $item->type,
                        'version' => $item->version,
                        'budget_sum' => $budgetary_requirement,
                        'imp_amount' => $imp_amount,
                        // 'paps'=>$item->paps
                    ];
                });


            // dd($data);
            return inertia('RevisionPlans/Index', [
                'data' => $data,
                "idpaps" => $idpaps,
                "paps" => $paps,
                "filters" => $request->only(['search']),
                "source" => $request->source,
                'can' => [
                    'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
                ],
            ]);
        } else {
            // dd(RevisionPlan::where('idpaps', $idpaps)->get());
            $data = RevisionPlan::with(['paps','paps.office'])
            // select(
            //     'revision_plans.id',
            //     'revision_plans.project_title',
            //     'revision_plans.version',
            //     'revision_plans.type',
            //     'revision_plans.is_strategy_based',
            //     'ff.FFUNCTION'
            // )
            //     ->leftJoin(DB::raw('program_and_projects paps'), 'paps.id', '=', 'revision_plans.idpaps')
            //     ->leftJoin(DB::raw('major_final_outputs mfo'), 'mfo.id', '=', 'paps.idmfo')
            //     ->leftJoin(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'mfo.FFUNCCOD')
                // ->Join(DB::raw('fms.accountaccess acc'), 'acc.ffunccod', '=', 'ff.FFUNCCOD')
                // ->where('acc.iduser', '=', $myid)
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
                        'FFUNCTION'=>optional(optional(optional($item)->paps)->office)->FFUNCTION,
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
        $paps = ProgramAndProject::with('MFO')->where('id', $id)->get();
        $dept_code = auth()->user()->department_code;
        $paps_all = [];
        // dd(auth()->user()->department_code);
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
        $hgdg = HGDG_Checklist::get();
        $count = RevisionPlan::where('idpaps', $id)->count();
        $max_id = RevisionPlan::where('idpaps', $id)->max('id');
        // dd($max_id);
        $duplicate = RevisionPlan::where('id', $max_id)->get();
        // dd($paps_all);
        if ($count > 0) {

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
                "paps_all" => $paps_all,
                "source" => $request->source,
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
        $src = $request->source;
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

        $budgetRequirements = $this->budgetRequirements($id);
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
                    "name" => $item->userEmployee ? $item->userEmployee->employee_name : "",
                    "gender" => $item->userEmployee ? $item->userEmployee->gender : "",
                    "status" => $item->userEmployee ? $item->userEmployee->employment_type_descr : "",
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
        $signatories = Signatory::where('revision_plan_id', $id)
            ->orderByRaw("FIELD(acted, 'Prepared', 'Reviewed', 'Noted', 'Approved')")
            ->get();
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
        return inertia('RevisionPlans/View', [
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
            // "data" => $data,
            "src" => $src,
            "imp_amount" => $imp_amount,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
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
            "source" => $request->source,
            "can" => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
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
        // dd($dept_id);
        if ($source != 'budget') {
            if ($dept_id != '04' && $dept_id != '01') {
                return redirect('/forbidden')->with('error', 'You are not allowed to access this page');
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

        // dd($offices);
        // $paps = ProgramAndProject::where('id', $idpaps)->first();
        $budget_controller = new BudgetRequirementController($this->budget);
        // dd("revision");
        // dd($request->FFUNCCOD);
        // dd($request->search);
        $data = RevisionPlan::
            // select(
            //     'revision_plans.id',
            //     'revision_plans.project_title',
            //     'revision_plans.version',
            //     'revision_plans.type',
            //     'revision_plans.is_strategy_based',
            //     'revision_plans.idpaps',
            //     'ff.FFUNCTION',
            //     'paps.aip_code',
            //     // DB::raw('sum(budget_requirements.amount)')
            // )->
            with(['budget','paps','paps.office'])
            // ->leftJoin(DB::raw('program_and_projects paps'), 'paps.id', '=', 'revision_plans.idpaps')
            // ->leftJoin(DB::raw('major_final_outputs mfo'), 'mfo.id', '=', 'paps.idmfo')
            // ->leftJoin(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'mfo.FFUNCCOD')
            // ->leftJoin(DB::raw('budget_requirements'), 'budget_requirements.revision_plan_id', '=', 'revision_plans.id')
            ->whereHas('budget', function ($query) {
                $query->select(DB::raw('revision_plan_id'))
                    ->groupBy('revision_plan_id')
                    ->havingRaw('SUM(amount) > 0');
            })
            ->when($request->FFUNCCOD, function($query)use($request){
                $query->whereHas('paps', function($query_inner)use($request){
                    $query_inner->where('FFUNCCOD', $request->FFUNCCOD);
                });
            })
            ->where('project_title', 'LIKE', '%' . $request->search . '%')
            ->whereHas('paps',function($query)use($request, $source, $dept_id){
                $query->when($source == 'budget', function ($query) use ($dept_id) {
                    $query->where('department_code', $dept_id);
                });
                // $query->whereHas('paps.office', function($query_o)use($request){
                //     $query_o->when($request->FFUNCCOD, function ($query) use ($request) {
                //         $query->where('ff.FFUNCCOD', $request->FFUNCCOD);
                //     });
                // });
            })
            // ->whereHas('paps.office', function($query){
            //     $query->orderBy('FFUNCTION');
            // })
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
            // dd($item->FFUNCTION);
            // dd($item);
            return [
                'FFUNCTION' => optional(optional($item->paps)->office)->FFUNCTION,
                'id' => $item->id,
                'project_title' => $item->project_title,
                'type' => $item->type,
                'version' => $item->version,
                'budget_sum' => $budgetary_requirement,
                'imp_amount' => $imp_amount,
                'idpaps' => $item->idpaps,
            ];
        });
        // $data->setCollection(
        //     $data->getCollection()->filter(function ($item) {
        //         return data_get($item, 'budget_sum') != 0;
        //     })->values()
        // );
        // dd($data);
        $year_c = date('Y');
        $year_n = intval($year_c) + 1;
        $year_p = intval($year_c) - 1;
        $functions = $this->getFunctions($myid);
        $programs = $this->getPrograms($year_c);
        // $budget_total =BudgetRequirement::join('revision_plans', 'revision_plans.id', 'budget_requirements.revision_plan_id')
        //     ->join('program_and_projects', 'program_and_projects.id', 'revision_plans.idpaps')
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
        // dd($latestRevisionPlanIds);
        $total_budget = BudgetRequirement::select('amount')
            ->whereIn('revision_plan_id', $latestRevisionPlanIds)
            ->sum('amount');
        $totals = Appropriation::selectRaw("FORMAT(IFNULL(SUM(appropriations.past_year), 0), 2, 'en_US') AS past_year")
            ->selectRaw("FORMAT(IFNULL(SUM(appropriations.first_sem), 0), 2, 'en_US') AS first_sem")
            ->selectRaw("FORMAT(IFNULL(SUM(appropriations.second_sem), 0), 2, 'en_US') AS second_sem")
            ->selectRaw("FORMAT(IFNULL(SUM(appropriations.first_sem + appropriations.second_sem), 0), 2, 'en_US') AS total")
            ->selectRaw("FORMAT(IFNULL(" . $total_budget . ", 0), 2, 'en_US') AS budget_year")
            // ->selectRaw($total_budget . ' AS budget_year')
            ->join('program_and_projects', 'program_and_projects.id', 'appropriations.idpaps')
            ->where('program_and_projects.department_code', auth()->user()->department_code)
            ->first();

        // $totals = BudgetRequirement::selectRaw('FORMAT(SUM(appropriations.past_year), 2, \'en_US\') AS past_year')
        //     ->selectRaw('FORMAT(SUM(appropriations.first_sem), 2, \'en_US\') AS first_sem')
        //     ->selectRaw('FORMAT(SUM(appropriations.second_sem), 2, \'en_US\') AS second_sem')
        //     ->selectRaw('FORMAT((SUM(appropriations.first_sem) + SUM(appropriations.second_sem)), 2, \'en_US\') AS total')
        //     ->selectRaw('FORMAT(SUM(budget_requirements.amount), 2, \'en_US\') AS budget_year')
        //     ->join('revision_plans', 'revision_plans.id', 'budget_requirements.revision_plan_id')
        //     ->join('program_and_projects', 'program_and_projects.id', 'revision_plans.idpaps')
        //     ->leftjoin('appropriations', 'program_and_projects.id', 'appropriations.idpaps')
        //     ->where('program_and_projects.department_code', auth()->user()->department_code)
        //     ->when($request->year, function ($query) use ($request) {
        //         $query->where('revision_plans', $request->year);
        //     })
        //     ->groupBy('program_and_projects.department_code')
        //     ->first();
        // dd($totals);
        $acc = DB::connection('mysql2')->table('chartofaccounts')->get();
        // dd($totals);
        // dd($acc);
        $dept_code = auth()->user()->department_code;
        $functions2 = FFUNCCOD::where('department_code', $dept_code)->first();
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

        $budget_controller = new BudgetRequirementController($this->budget);
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
        $query = RevisionPlan::with(['paps','paps.office'])
            // ->leftJoin(DB::raw('program_and_projects paps'), 'paps.id', '=', 'revision_plans.idpaps')
            // ->leftJoin(DB::raw('major_final_outputs mfo'), 'mfo.id', '=', 'paps.idmfo')
            // ->leftJoin(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'mfo.FFUNCCOD')
            ->when($request->search, function ($query) use ($request) {
                $query->where('project_title', 'LIKE', '%' . $request->search . '%');
            })
            ->whereHas('paps', function($query)use($dept_id){
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

                return [
                    'department_code' => optional(optional($item->paps)->office)->department_code,
                    'FFUNCTION' => trim(optional(optional($item->paps)->office)->FFUNCTION),
                    'id' => $item->id,
                    'project_title' => $item->project_title,
                    'type' => $item->type,
                    'version' => $item->version,
                    'amount' => $budgetary_requirement,
                    'strategies'=>$this->get_strategies($request, $item->id)
                ];
            });

        return $data;
    }

    public function aip_api(Request $request)
    {
        ActivityProject::with([
            'expected_output',
            'expected_outcome',
        ])
            ->get();
    }
    public function print_aip(Request $request){
        $strategies = [];
        $ccet="0";
        if($request->ccet){$ccet = $request->ccet;}
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
        ])->get();

        foreach ($plans as $plan) {
            $strategy = optional(optional($plan)->strategyProject->first())->strategy;

            if (!$strategy) {
                continue;
            }

            $strategyId = $strategy->id;
            $budget = $plan->budget;
            $source ="";
            if(count($budget)>0){
                $source = $budget[0]->source;
            }
            $expected_outputs = collect($plan->activityProject)
                ->pluck('expected_output')
                ->filter()
                ->flatten(1)
                ->map(fn($output) => [
                    'target_budget_year'=> (($output->physical_q1?floatval($output->physical_q1):0)+($output->physical_q2?floatval($output->physical_q2):0)
                    + ($output->physical_q3?floatval($output->physical_q3):0)+($output->physical_q4?floatval($output->physical_q4):0)),
                    'description' => $output->description ?? ''])
                ->filter(fn($item) => !empty($item['description']))
                ->values();
            $total_mooe = $budget->where('category', 'Maintenance, Operating, and Other Expenses')->sum('amount');
            $total_ps = $budget->where('category', 'Personnel Services')->sum('amount');
            $total_co = $budget->where('category', 'Capital Outlay')->sum('amount');
            $total_fe = $budget->where('category', 'Financial Expenses')->sum('amount');

            $total_all = $total_mooe + $total_ps + $total_co + $total_fe;
            $ccet_code_adaptation=0;
            $ccet_code_mitigation=0;


            $ccetCode = null;
            $activityWithCcet = collect($plan->activityProject)->firstWhere('ccet_code', '!=', null);


            if ($activityWithCcet) {
                // Found at least one with a ccet_code
                $ccetCode = $activityWithCcet->ccet_code;
                if($ccetCode){
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
            $source=$this->set_source($source);
            if (mb_strlen($source, 'UTF-8') < 25) {

                $chars = preg_split('//u', $source, -1, PREG_SPLIT_NO_EMPTY);
                $source = implode("\n", $chars);
            }
            $paps_title = $plan->project_title;
            $paps_desc = optional($plan->paps)->MOV=="-"?"":optional($plan->paps)->MOV;
            $paps_title_desc = $paps_title . "\n\n<i>" . $paps_desc."</i>";

            if (!isset($strategies[$strategyId])) {
                $strategies[$strategyId] = [
                    'project_title' => $paps_title_desc,
                    'implementing_office' => optional(optional(optional($plan)->paps)->office)->office?
                        optional(optional(optional(optional($plan)->paps)->office)->office)->short_name:
                        optional(optional(optional($plan)->paps)->office)->FFUNCTION,
                    'expected_output' => $expected_outputs,
                    'total_mooe' => $total_mooe,
                    'total_ps' => $total_ps,
                    'total_co' => $total_co,
                    'total_fe' => $total_fe,
                    'ccet_code'=>$ccetCode,
                    'ccet_code_mitigation'=>$ccet_code_mitigation,
                    'ccet_code_adaptation'=>$ccet_code_adaptation ,
                    'aip_code'=>$plan->aip_code,
                    'source'=>$source."\n",
                    'ccet'=>$ccet
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
                        '', '', $output, '', '', '', '', '', '', '', '', ''
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
                        '', '', '', $output['description'] ?? '', '', '', '', '', '', '', '', ''
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
    protected function set_source($source){
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
                    'project_title'=>$plan->project_title,
                    'implementing_office'=>optional(optional(optional(optional($plan))->paps)->office)->FFUNCTION,
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
}
