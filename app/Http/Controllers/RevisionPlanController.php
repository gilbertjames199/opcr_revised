<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\BudgetRequirement;
use App\Models\HGDG_Checklist;
use App\Models\ImplementationPlan;
use App\Models\Implementing_team;
use App\Models\MajorFinalOutput;
use App\Models\Monitoring_and_evaluation;
use App\Models\ProgramAndProject;
use App\Models\RevisionPlan;
use App\Models\Risk_manangement;
use App\Models\Signatory;
use App\Models\Target;
use App\Models\TeamPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RevisionPlanController extends Controller
{
    protected $model;
    protected $imp;
    public function __construct(RevisionPlan $model, ImplementationPlan $imp)
    {
        $this->model=$model;
        $this->imp=$imp;
    }
    public function index(Request $request, $idpaps){
        $myid=auth()->user()->recid;
        //dd($idpaps);
        // ->select('revision_plans.id', 'revision_plans.project_title',
        //                     'revision_plans.version','revision_plans.type',
        //                     'ff.FFUNCTION')
        $data=RevisionPlan::select('revision_plans.id', 'revision_plans.project_title',
                            'revision_plans.version','revision_plans.type',
                            'ff.FFUNCTION')
                ->Join(DB::raw('program_and_projects paps'), 'paps.id','=','revision_plans.idpaps')
                ->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD','=','paps.FFUNCCOD')
                ->Join(DB::raw('fms.accountaccess acc'),'acc.ffunccod','=','ff.FFUNCCOD')
                ->where('acc.iduser','=',$myid)
                ->where('idpaps','=',$idpaps)
                ->get()
                ->map(function($item){
                    $budgetary_requirement =BudgetRequirement::where('revision_plan_id',$item->id)
                                            ->sum('amount');
                    // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                    //                 ->join('targets', 'targets.id','implementation_plans.id')
                    //                 ->sum('targets.planned_budget');
                    // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                    //                 ->join('targets', 'targets.id','implementation_plans.id')
                    //                 ->get();
                    $imp_amount = DB::table('targets')
                                    ->where('implementation_plans.idrev_plan',$item->id)
                                    ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                                    ->select('targets.*', 'implementation_plans.*')
                                    ->sum('targets.planned_budget');


                    return [
                        'FFUNCTION'=>$item->FFUNCTION,
                        'id'=>$item->id,
                        'project_title'=>$item->project_title,
                        'type'=>$item->type,
                        'version'=>$item->version,
                        'budget_sum'=>$budgetary_requirement,
                        'imp_amount'=>$imp_amount
                    ];
                });

        $paps = ProgramAndProject::where('id', $idpaps)->first();
        //dd($data);
        return inertia('RevisionPlans/Index',[
            'data'=>$data,
            "idpaps"=>$idpaps,
            "paps"=>$paps,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function create(Request $request, $id){
        $paps=ProgramAndProject::where('id',$id)->get();
        $hgdg=HGDG_Checklist::get();
        $count=RevisionPlan::where('idpaps',$id)->count();
        $max_id =RevisionPlan::where('idpaps', $id)->max('id');
        //dd($max_id);
        $duplicate=RevisionPlan::where('id',$max_id)->get();

        if($count>0){
            //dd("Duplicate is not empty");
            return inertia('RevisionPlans/Create',[
                "idpaps"=>$id,
                "hgdgs"=>$hgdg,
                "paps"=>$paps,
                "duplicate"=>$duplicate,
                "can"=>[
                    'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                ],
            ]);
        }else{
            //dd("Duplicate is empty");
            return inertia('RevisionPlans/Create',[
                "idpaps"=>$id,
                "hgdgs"=>$hgdg,
                "paps"=>$paps,
                "can"=>[
                    'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                ],
            ]);
        }
        //dd($duplicate);

    }
    public function store(Request $request){
        ///dd($request);
        //$idpaps=$request->idpaps;
        $attributes = $request->validate([
            'idpaps'=>'required',
            'project_title' => 'required',
            'project_location'=>'required',
            'list_of_lgu_covered'=>'required',
            'date_start'=>'required',
            'date_end'=>'required',
            'beneficiary_male'=>'required',
            'beneficiary_female'=>'required',
            'baseline_male'=>'required',
            'baseline_female'=>'required',
            'baseline_total'=>'required',
            'rationale'=>'required',
            'objective'=>'required',
            'beneficiaries'=>'required',
            'checklist_id'=>'required',
            // 'implementing_team'=>'required',
            'partnership'=>'required',
            // 'monitoring'=>'required',
            // 'risk_management'=>'required'
        ]);

        $version = RevisionPlan::where('idpaps','=', $request->idpaps)->max('version');
        if($version){
            $version=$version+1;
        }else{
            $version=1;
        }

        $rev = new RevisionPlan();
        $rev->idpaps=$attributes['idpaps'];
        $rev->project_title=$attributes['project_title'];
        $rev->project_location=$attributes['project_location'];
        $rev->list_of_lgu_covered=$attributes['list_of_lgu_covered'];
        $rev->date_start=$attributes['date_start'];
        $rev->date_end=$attributes['date_end'];
        $rev->beneficiary_male=$attributes['beneficiary_male'];
        $rev->beneficiary_female=$attributes['beneficiary_female'];
        $rev->baseline_male=$attributes['baseline_male'];
        $rev->baseline_female=$attributes['baseline_female'];
        $rev->baseline_total=$attributes['baseline_total'];
        $rev->rationale=$attributes['rationale'];
        $rev->objective=$attributes['objective'];
        $rev->beneficiaries=$attributes['beneficiaries'];
        $rev->implementing_team=$request->implementing_team;
        $rev->partnership=$attributes['partnership'];
        $rev->monitoring=$request->monitoring;
        $rev->risk_management=$request->risk_management;
        // $rev->implementing_team=$attributes['implementing_team'];
        // $rev->monitoring=$attributes['monitoring'];
        // $rev->risk_management=$attributes['risk_management'];
        //$rev->checklist_id=$attributes['checklist_id'];
        $rev->amount='0.00';
        $rev->attributed_amount='0.00';
        $rev->checklist_id=$attributes['checklist_id'];
        $rev->hgdg_score='0';
        $rev->version=$version;
        $rev->type='p';
        $rev->final='0';
        $rev->supplemental='0';
        $rev->user_id=auth()->user()->recid;
        $rev->save();
        // if($attributes){
        //     dd('all validated');
        // }
        //$this->model->create($attributes);
        //$request->pass='';
        return redirect('/revision/'.$request->idpaps)
                ->with('message','Revision Plan added');
    }
    public function view(Request $request, $id){

        //REVISION PLANS
        $paps=RevisionPlan::where('id',$id)->with('checklist')->first();
        $scope = $paps->scope;
        $idpaps = $paps->idpaps;
        $idmfo=$paps->idmfo;

        //PROGRAMS AND PROJECTS & FUNCTIONS
        $ppa=[];
        $functions =[];
        if($scope=='GAS'){
            $functions = AccountAccess::where('iduser',auth()->user()->recid)
                    ->where('ff.FFUNCCOD', $paps->FFUNCCOD)
                    ->select('ff.FFUNCCOD','ff.FFUNCTION')
                    ->join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','accountaccess.ffunccod')
                    ->with('func')->first();
        }else if($idpaps!=0){
            $ppa = ProgramAndProject::findOrFail($paps->idpaps);
            $functions = AccountAccess::where('iduser',auth()->user()->recid)
                    ->where('ff.FFUNCCOD', $ppa->FFUNCCOD)
                    ->select('ff.FFUNCCOD','ff.FFUNCTION')
                    ->join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','accountaccess.ffunccod')
                    ->with('func')->first();

        }else if($idmfo!=0){
            $mfoss = MajorFinalOutput::findOrFail($paps->idmfo);
            $functions = AccountAccess::where('iduser',auth()->user()->recid)
                    ->where('ff.FFUNCCOD', $mfoss->FFUNCCOD)
                    ->select('ff.FFUNCCOD','ff.FFUNCTION')
                    ->join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','accountaccess.ffunccod')
                    ->with('func')->first();
        }

        //IMPLEMENTATION PLANS
        $implement=$this->imp->select('implementation_plans.id AS id',
                            'strategies.description AS strategy',
                            'implementation_plans.idrev_plan',
                            'implementation_plans.date_from',
                            'implementation_plans.date_to',
                            'implementation_plans.idstrategy',
                            'implementation_plans.cc_topology',
                            'implementation_plans.person_responsible',
                            'issues.description AS issue'
                        )
                ->where('idrev_plan',$id)
                ->where('idstrategy','<>',NULL)
                ->Join('strategies','strategies.id','implementation_plans.idstrategy')
                ->leftJoin('issues','issues.id','implementation_plans.idissue')
                ->get()
                ->map(function($item){
                    //dd($item->idrev_plan);
                    $activity_implementation=$this->imp
                                                ->select('implementation_plans.id AS id',
                                                            'activities.description AS activity',
                                                            'implementation_plans.idrev_plan',
                                                            'implementation_plans.date_from',
                                                            'implementation_plans.date_to',
                                                            'implementation_plans.cc_topology',
                                                            'issues.description AS issue',
                                                            'strategies.id AS stratt_id',
                                                            'implementation_plans.person_responsible',
                                                )
                                                ->Join('activities','activities.id','implementation_plans.idactivity')
                                                ->Join('strategies','strategies.id','=','activities.strategy_id')
                                                ->leftJoin('issues','issues.id','implementation_plans.idissue')
                                                ->where('idrev_plan',$item->idrev_plan)
                                                ->where('strategies.id',$item->idstrategy)
                                                ->get()
                                                ->map(function($item){
                                                    return [
                                                        'id'=>$item->id,
                                                        'idrev_plan'=>$item->idrev_plan,
                                                        'date_from'=>convertDateString($item->date_from),
                                                        'date_to'=>convertDateString($item->date_to),
                                                        'stratt_id'=>$item->stratt_id,
                                                        'cc_topology'=>$item->cc_topology,
                                                        'issue'=>$item->issue,
                                                        'activity'=>$item->activity,
                                                        'person_responsible'=>$item->person_responsible,
                                                    ];
                                                });

                    return [
                        'id'=>$item->id,
                        'idrev_plan'=>$item->idrev_plan,
                        'date_from'=>convertDateString($item->date_from),
                        'date_to'=>convertDateString($item->date_to),
                        'idstrategy'=>$item->idstrategy,
                        'cc_topology'=>$item->cc_topology,
                        'issue'=>$item->issue,
                        'strategy'=>$item->strategy,
                        'activity_implementation'=>$activity_implementation,
                        'person_responsible'=>$item->person_responsible,
                    ];
                });

        //dd($functions->FFUNCTION);
        //BUDGET REQUIREMENT
        // $mooe = BudgetRequirement::where('revision_plan_id','=',$id)
        //         ->where('category','Maintenance, Operating, and Other Expenses')
        //         ->orderBy('particulars')
        //         ->get();
        // $s_mooe = BudgetRequirement::where('revision_plan_id','=',$id)
        //         ->where('category','Maintenance, Operating, and Other Expenses')
        //         ->orderBy('particulars')
        //         ->sum('amount');

        // $capital=BudgetRequirement::where('revision_plan_id','=',$id)
        //         ->where('category','Capital Outlay')
        //         ->orderBy('particulars')
        //         ->get();

        // $s_capital = BudgetRequirement::where('revision_plan_id','=',$id)
        //         ->where('category','Capital Outlay')
        //         ->orderBy('particulars')
        //         ->sum('amount');
        // $ps=BudgetRequirement::where('revision_plan_id','=',$id)
        //         ->where('category','Personal Services')
        //         ->orderBy('particulars')
        //         ->get();
        // $s_ps=BudgetRequirement::where('revision_plan_id','=',$id)
        //         ->where('category','Personal Services')
        //         ->orderBy('particulars')
        //         ->sum('amount');

        //MOOE
        $mooe_gad = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Maintenance, Operating, and Other Expenses')
                    ->where('category_gad','GAD')
                    ->orderBy('category', 'desc')
                    ->orderBy('particulars')
                    ->get();
        $mooe_non = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Maintenance, Operating, and Other Expenses')
                    ->where('category_gad','NON-GAD')
                    ->orderBy('category', 'desc')
                    ->orderBy('particulars')
                    ->get();
        $s_mooe_gad = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Maintenance, Operating, and Other Expenses')
                    ->where('category_gad','GAD')
                    ->sum('amount');
        $s_mooe_non = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Maintenance, Operating, and Other Expenses')
                    ->where('category_gad','NON-GAD')
                    ->sum('amount');
        //Capital Outlay
        $cap_gad = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Capital Outlay')
                    ->where('category_gad','GAD')
                    ->orderBy('category', 'desc')
                    ->orderBy('particulars')
                    ->get();
        $cap_non = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Capital Outlay')
                    ->where('category_gad','NON-GAD')
                    ->orderBy('category', 'desc')
                    ->orderBy('particulars')
                    ->get();
        $s_cap_gad = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Capital Outlay')
                    ->where('category_gad','GAD')
                    ->sum('amount');
        $s_cap_non = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Capital Outlay')
                    ->where('category_gad','NON-GAD')
                    ->sum('amount');
        //Personnel Services
        $ps_gad = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Personnel Services')
                    ->where('category_gad','GAD')
                    ->orderBy('category', 'desc')
                    ->orderBy('particulars')
                    ->get();
        $ps_non = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Personnel Services')
                    ->where('category_gad','NON-GAD')
                    ->orderBy('category', 'desc')
                    ->orderBy('particulars')
                    ->get();
        $s_ps_gad = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Personnel Services')
                    ->where('category_gad','GAD')
                    ->sum('amount');
        $s_ps_non = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Personnel Services')
                    ->where('category_gad','NON-GAD')
                    ->sum('amount');


        //IMPLEMENTING TEAM
        $team_members = TeamPlan::where('revision_plan_id', $id)
                        ->get()
                        ->map(function($item){
                            $people = Implementing_team::where('id',$item->implementing_team_id)
                                        ->first();
                            return [
                                "id"=>$item->id,
                                "name"=>$people->name,
                                "position"=>$people->position,
                                "competency"=>$people->competency,
                                "role"=>$item->role
                            ];
                        });
        //MONITORING AND EVALUATION
        $monitoring = Monitoring_and_evaluation::where('revision_plan_id', $id)
                        ->orderBy('created_at', 'asc')
                        ->get();
        //RISK MANAGEEMNT
        $risks =Risk_manangement::where('revision_plan_id', $id)->get();

        //PREPARED
        $sig_prep = Signatory::where('revision_plan_id', $id)
                    ->where('acted','Prepared')->first();

        //REVIEWED
        $sig_rev = Signatory::where('revision_plan_id', $id)
                    ->where('acted','Reviewed')->first();

        //APPROVED
        $sig_app =  Signatory::where('revision_plan_id', $id)
                    ->where('acted','Approved')->get();
        //IMPLEMENTATION PLAN
        //$implementation_plan = new ImplementationPlan();
        $data=ImplementationPlan::select('implementation_plans.id AS id',
                            'strategies.description AS strategy',
                            'implementation_plans.idrev_plan',
                            'implementation_plans.date_from',
                            'implementation_plans.date_to',
                            'implementation_plans.idstrategy',
                            'implementation_plans.cc_topology',
                            'implementation_plans.person_responsible',
                            'issues.description AS issue'
                        )
                ->where('idrev_plan',$id)
                ->where('idstrategy','<>',NULL)
                ->Join('strategies','strategies.id','implementation_plans.idstrategy')
                ->leftJoin('issues','issues.id','implementation_plans.idissue')
                ->get()
                ->map(function($item){
                    //dd($item->idrev_plan);
                    $activity_implementation=ImplementationPlan::select('implementation_plans.id AS id',
                                                            'activities.description AS activity',
                                                            'implementation_plans.idrev_plan',
                                                            'implementation_plans.date_from',
                                                            'implementation_plans.date_to',
                                                            'implementation_plans.cc_topology',
                                                            'issues.description AS issue',
                                                            'strategies.id AS stratt_id',
                                                            'implementation_plans.person_responsible',
                                                )
                                                ->Join('activities','activities.id','implementation_plans.idactivity')
                                                ->Join('strategies','strategies.id','=','activities.strategy_id')
                                                ->leftJoin('issues','issues.id','implementation_plans.idissue')
                                                ->where('idrev_plan',$item->idrev_plan)
                                                ->where('strategies.id',$item->idstrategy)
                                                ->get()
                                                ->map(function($item){
                                                    $targets=Target::where('idimplementation', $item->id)
                                                            ->select('indicators.description AS indicator_description',
                                                                'targets.description AS target_description',
                                                                'targets.planned_budget AS budget'
                                                            )
                                                            ->join('indicators', 'indicators.id','targets.idindicator')
                                                            ->get();
                                                    return [
                                                        'id'=>$item->id,
                                                        'idrev_plan'=>$item->idrev_plan,
                                                        'date_from'=>convertDateString($item->date_from),
                                                        'date_to'=>convertDateString($item->date_to),
                                                        'stratt_id'=>$item->stratt_id,
                                                        'cc_topology'=>$item->cc_topology,
                                                        'issue'=>$item->issue,
                                                        'activity'=>$item->activity,
                                                        'person_responsible'=>$item->person_responsible,
                                                        'targets'=>$targets,
                                                    ];
                                                });
                    $targets=Target::where('idimplementation', $item->id)->get();
                    return [
                        'id'=>$item->id,
                        'idrev_plan'=>$item->idrev_plan,
                        'date_from'=>convertDateString($item->date_from),
                        'date_to'=>convertDateString($item->date_to),
                        'idstrategy'=>$item->idstrategy,
                        'cc_topology'=>$item->cc_topology,
                        'issue'=>$item->issue,
                        'strategy'=>$item->strategy,
                        'activity_implementation'=>$activity_implementation,
                        'person_responsible'=>$item->person_responsible,
                        'targets'=>$targets,
                    ];
                });
        $imp_amount = DB::table('targets')
                ->where('implementation_plans.idrev_plan',$id)
                ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                ->select('targets.*', 'implementation_plans.*')
                ->sum('targets.planned_budget');
        return inertia('RevisionPlans/View',[
            "paps"=>$paps,
            "office"=>$functions->FFUNCTION,
            "implementation"=>$implement,

            "mooe_gad"=>$mooe_gad,
            "mooe_non"=>$mooe_non,
            "cap_gad"=>$cap_gad,
            "cap_non"=>$cap_non,
            "ps_gad"=>$ps_gad,
            "ps_non"=>$ps_non,
            "s_mooe_gad"=>$s_mooe_gad,
            "s_mooe_non"=>$s_mooe_non,
            "s_cap_gad"=>$s_cap_gad,
            "s_cap_non"=>$s_cap_non,
            "s_ps_gad"=>$s_ps_gad,
            "s_ps_non"=>$s_ps_non,

            "team_members"=>$team_members,
            "monitors"=>$monitoring,
            "risks"=>$risks,
            "sig_rev"=>$sig_rev,
            "sig_prep"=>$sig_prep,
            "sig_app"=>$sig_app,
            "data"=>$data,
            "imp_amount"=>$imp_amount,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function gas(Request $request, $FFUNCCOD){
        $myid=auth()->user()->recid;
        $currentYear = date('Y');
        //dd($currentYear);
        //dd($idpaps);
        // ->select('revision_plans.id', 'revision_plans.project_title',
        //                     'revision_plans.version','revision_plans.type',
        //                     'ff.FFUNCTION')
        $data=RevisionPlan::select('revision_plans.id', 'revision_plans.project_title',
                            'revision_plans.version','revision_plans.type','revision_plans.year_period',
                            'ff.FFUNCTION')
                ->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD','=','revision_plans.FFUNCCOD')
                ->where('revision_plans.FFUNCCOD', $FFUNCCOD)
                ->where('revision_plans.year_period', $currentYear)
                ->where('revision_plans.idpaps','0')
                ->where('revision_plans.idmfo','0')
                ->where('revision_plans.idmfo','0')
                ->where('revision_plans.scope','GAS')
                ->get()
                ->map(function($item){
                    $budgetary_requirement =BudgetRequirement::where('revision_plan_id',$item->id)
                                            ->sum('amount');
                    // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                    //                 ->join('targets', 'targets.id','implementation_plans.id')
                    //                 ->sum('targets.planned_budget');
                    // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                    //                 ->join('targets', 'targets.id','implementation_plans.id')
                    //                 ->get();
                    $imp_amount = DB::table('targets')
                                    ->where('implementation_plans.idrev_plan',$item->id)
                                    ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                                    ->select('targets.*', 'implementation_plans.*')
                                    ->sum('targets.planned_budget');


                    return [
                        'FFUNCTION'=>$item->FFUNCTION,
                        'id'=>$item->id,
                        'project_title'=>$item->project_title,
                        'type'=>$item->type,
                        'version'=>$item->version,
                        'budget_sum'=>$budgetary_requirement,
                        'imp_amount'=>$imp_amount,
                        'scope'=>$item->scope,
                        'year_period'=>$item->year_period,
                    ];
                });

        //$paps = ProgramAndProject::where('id', $idpaps)->first();
        //dd($data);
        return inertia('RevisionPlans/GAS/Index',[
            'data'=>$data,
            'FFUNCCOD'=>$FFUNCCOD,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function gas_create(Request $request, $FFUNCCOD){
        //dd($FFUNCCOD);
        $currentYear = date('Y');
        //$myid=auth()->user()->recid;
        //$paps=ProgramAndProject::where('id',$id)->get();
        $hgdg=HGDG_Checklist::get();
        $count=RevisionPlan::where('idmfo','0')
                ->where('idpaps','0')
                ->where('year_period', $currentYear)
                ->where('FFUNCCOD', $FFUNCCOD)
                ->count();
        $max_id =RevisionPlan::where('idmfo','0')
                ->where('idpaps','0')
                ->where('year_period', $currentYear)
                ->where('FFUNCCOD', $FFUNCCOD)
                ->max('id');
        //dd($max_id);
        $duplicate=RevisionPlan::where('id',$max_id)->get();

        if($count>0){
            //dd("Duplicate is not empty");
            return inertia('RevisionPlans/GAS/Create',[
                //"idpaps"=>$id,
                "FFUNCCOD"=>$FFUNCCOD,
                "hgdgs"=>$hgdg,
                "duplicate"=>$duplicate,
                "can"=>[
                    'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                ],
            ]);
        }else{
            //dd("Duplicate is empty");
            return inertia('RevisionPlans/GAS/Create',[
                //"idpaps"=>$id,
                "FFUNCCOD"=>$FFUNCCOD,
                "hgdgs"=>$hgdg,

                "can"=>[
                    'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                ],
            ]);
        }
    }
    public function gas_store(Request $request, $FFUNCCOD){
        //dd($request->objective);
        $currentYear = date('Y');
        //dd("store: ".$currentYear);
        $attributes = $request->validate([
            //'FFUNCCOD'=>'required',
            'project_title' => 'required',
            'project_location'=>'required',
            'list_of_lgu_covered'=>'required',
            'date_start'=>'required',
            'date_end'=>'required',
            'beneficiary_male'=>'required',
            'beneficiary_female'=>'required',
            'baseline_male'=>'required',
            'baseline_female'=>'required',
            'baseline_total'=>'required',
            'rationale'=>'required',
            'objective'=>'required',
            'beneficiaries'=>'required',
            'checklist_id'=>'required',
            'partnership'=>'required',
        ]);
        //dd("diri");
        $version = RevisionPlan::where('idpaps','=', '0')
                    ->where('FFUNCCOD', $FFUNCCOD)
                    ->where('idmfo','0')
                    ->max('version');

        if($version){
            $version=$version+1;
        }else{
            $version=1;
        }
        //dd($version);
        $rev = new RevisionPlan();
        $rev->FFUNCCOD=$FFUNCCOD;
        $rev->idpaps="0";
        $rev->year_period=$currentYear;
        $rev->scope="GAS";
        $rev->project_title=$attributes['project_title'];
        $rev->project_location=$attributes['project_location'];
        $rev->list_of_lgu_covered=$attributes['list_of_lgu_covered'];
        $rev->date_start=$attributes['date_start'];
        $rev->date_end=$attributes['date_end'];
        $rev->beneficiary_male=$attributes['beneficiary_male'];
        $rev->beneficiary_female=$attributes['beneficiary_female'];
        $rev->baseline_male=$attributes['baseline_male'];
        $rev->baseline_female=$attributes['baseline_female'];
        $rev->baseline_total=$attributes['baseline_total'];
        $rev->rationale=$attributes['rationale'];
        $rev->objective=$attributes['objective'];
        $rev->beneficiaries=$attributes['beneficiaries'];
        $rev->implementing_team=$request->implementing_team;
        $rev->partnership=$attributes['partnership'];
        $rev->monitoring=$request->monitoring;
        $rev->risk_management=$request->risk_management;
        // $rev->implementing_team=$attributes['implementing_team'];
        // $rev->monitoring=$attributes['monitoring'];
        // $rev->risk_management=$attributes['risk_management'];
        //$rev->checklist_id=$attributes['checklist_id'];
        $rev->amount='0.00';
        $rev->attributed_amount='0.00';
        $rev->checklist_id=$attributes['checklist_id'];
        $rev->hgdg_score='0';
        $rev->version=$version;
        $rev->type='p';
        $rev->final='0';
        $rev->supplemental='0';
        $rev->user_id=auth()->user()->recid;
        $rev->save();
        // if($attributes){
        //     dd('all validated');
        // }
        //$this->model->create($attributes);
        //$request->pass='';
        return redirect('/revision/general/administration/services/'.$FFUNCCOD.'/plan')
                ->with('message','Revision Plan added');
    }

    //MFO Revision Plans
    public function mfo_index(Request $request, $idmfo){
        $myid=auth()->user()->recid;
        //dd($idpaps);
        // ->select('revision_plans.id', 'revision_plans.project_title',
        //                     'revision_plans.version','revision_plans.type',
        //                     'ff.FFUNCTION')
        $data=RevisionPlan::select('revision_plans.id', 'revision_plans.project_title',
                            'revision_plans.version','revision_plans.type',
                            'ff.FFUNCTION')
                ->Join(DB::raw('major_final_outputs mfos'), 'mfos.id','=','revision_plans.idmfo')
                ->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD','=','mfos.FFUNCCOD')
                ->Join(DB::raw('fms.accountaccess acc'),'acc.ffunccod','=','ff.FFUNCCOD')
                ->where('acc.iduser','=',$myid)
                ->where('idmfo','=',$idmfo)
                ->get()
                ->map(function($item){
                    $budgetary_requirement =BudgetRequirement::where('revision_plan_id',$item->id)
                                            ->sum('amount');
                    // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                    //                 ->join('targets', 'targets.id','implementation_plans.id')
                    //                 ->sum('targets.planned_budget');
                    // $imp_amount = ImplementationPlan::where('implementation_plans.idrev_plan',$item->id)
                    //                 ->join('targets', 'targets.id','implementation_plans.id')
                    //                 ->get();
                    $imp_amount = DB::table('targets')
                                    ->where('implementation_plans.idrev_plan',$item->id)
                                    ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                                    ->select('targets.*', 'implementation_plans.*')
                                    ->sum('targets.planned_budget');


                    return [
                        'FFUNCTION'=>$item->FFUNCTION,
                        'id'=>$item->id,
                        'project_title'=>$item->project_title,
                        'type'=>$item->type,
                        'version'=>$item->version,
                        'budget_sum'=>$budgetary_requirement,
                        'imp_amount'=>$imp_amount
                    ];
                });
                //dd($data);
        $mfos = MajorFinalOutput::where('id', $idmfo)->first();
        //dd($data);
        return inertia('RevisionPlans/MFO/Index',[
            'data'=>$data,
            "idmfo"=>$idmfo,
            "mfos"=>$mfos,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function mfo_create(Request $request, $id){
       // dd('idmfo: '.$id);
        $mfos=MajorFinalOutput::where('id',$id)->get();
        $hgdg=HGDG_Checklist::get();
        $count=RevisionPlan::where('idmfo',$id)->count();
        $max_id =RevisionPlan::where('idmfo', $id)->max('id');
        //dd($max_id);
        $duplicate=RevisionPlan::where('id',$max_id)->get();

        if($count>0){
            //dd("Duplicate is not empty");
            return inertia('RevisionPlans/MFO/Create',[
                "idmfo"=>$id,
                "hgdgs"=>$hgdg,
                "mfos"=>$mfos,
                "duplicate"=>$duplicate,
                "can"=>[
                    'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                ],
            ]);
        }else{
            //dd("Duplicate is empty");
            return inertia('RevisionPlans/MFO/Create',[
                "idmfo"=>$id,
                "hgdgs"=>$hgdg,
                "mfos"=>$mfos,
                "can"=>[
                    'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                ],
            ]);
        }
    }
    public function mfo_store(Request $request){

        $attributes = $request->validate([
            'idmfo'=>'required',
            'project_title' => 'required',
            'project_location'=>'required',
            'list_of_lgu_covered'=>'required',
            'date_start'=>'required',
            'date_end'=>'required',
            'beneficiary_male'=>'required',
            'beneficiary_female'=>'required',
            'baseline_male'=>'required',
            'baseline_female'=>'required',
            'baseline_total'=>'required',
            'rationale'=>'required',
            'objective'=>'required',
            'beneficiaries'=>'required',
            'checklist_id'=>'required',
            // 'implementing_team'=>'required',
            'partnership'=>'required',
            // 'monitoring'=>'required',
            // 'risk_management'=>'required'
        ]);
        //dd($attributes);
        $version = RevisionPlan::where('idmfo','=', $request->idmfo)->max('version');
        if($version){
            $version=$version+1;
        }else{
            $version=1;
        }

        $rev = new RevisionPlan();
        $rev->idmfo=$attributes['idmfo'];
        $rev->idpaps='0';
        $rev->project_title=$attributes['project_title'];
        $rev->project_location=$attributes['project_location'];
        $rev->list_of_lgu_covered=$attributes['list_of_lgu_covered'];
        $rev->date_start=$attributes['date_start'];
        $rev->date_end=$attributes['date_end'];
        $rev->beneficiary_male=$attributes['beneficiary_male'];
        $rev->beneficiary_female=$attributes['beneficiary_female'];
        $rev->baseline_male=$attributes['baseline_male'];
        $rev->baseline_female=$attributes['baseline_female'];
        $rev->baseline_total=$attributes['baseline_total'];
        $rev->rationale=$attributes['rationale'];
        $rev->objective=$attributes['objective'];
        $rev->beneficiaries=$attributes['beneficiaries'];
        $rev->implementing_team=$request->implementing_team;
        $rev->partnership=$attributes['partnership'];
        $rev->monitoring=$request->monitoring;
        $rev->risk_management=$request->risk_management;
        // $rev->implementing_team=$attributes['implementing_team'];
        // $rev->monitoring=$attributes['monitoring'];
        // $rev->risk_management=$attributes['risk_management'];
        //$rev->checklist_id=$attributes['checklist_id'];
        $rev->amount='0.00';
        $rev->attributed_amount='0.00';
        $rev->checklist_id=$attributes['checklist_id'];
        $rev->hgdg_score='0';
        $rev->version=$version;
        $rev->type='p';
        $rev->final='0';
        $rev->supplemental='0';
        $rev->user_id=auth()->user()->recid;
        $rev->save();
        // if($attributes){
        //     dd('all validated');
        // }
        //$this->model->create($attributes);
        //$request->pass='';
        return redirect('/mforevision/'.$request->idmfo)
                ->with('message','Revision Plan added');
    }
    public function mfo_view(Request $request, $id){
        //REVISION PLANS
        $paps=RevisionPlan::where('id',$id)->with('checklist')->first();
        $scope = $paps->scope;

        //PROGRAMS AND PROJECTS & FUNCTIONS
        $ppa=[];
        $functions =[];
        if($scope=='GAS'){
            $functions = AccountAccess::where('iduser',auth()->user()->recid)
                    ->where('ff.FFUNCCOD', $paps->FFUNCCOD)
                    ->select('ff.FFUNCCOD','ff.FFUNCTION')
                    ->join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','accountaccess.ffunccod')
                    ->with('func')->first();
        }else{
            $ppa = ProgramAndProject::findOrFail($paps->idpaps);
            $functions = AccountAccess::where('iduser',auth()->user()->recid)
                    ->where('ff.FFUNCCOD', $ppa->FFUNCCOD)
                    ->select('ff.FFUNCCOD','ff.FFUNCTION')
                    ->join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','accountaccess.ffunccod')
                    ->with('func')->first();

        }

        //IMPLEMENTATION PLANS
        $implement=$this->imp->select('implementation_plans.id AS id',
                            'strategies.description AS strategy',
                            'implementation_plans.idrev_plan',
                            'implementation_plans.date_from',
                            'implementation_plans.date_to',
                            'implementation_plans.idstrategy',
                            'implementation_plans.cc_topology',
                            'implementation_plans.person_responsible',
                            'issues.description AS issue'
                        )
                ->where('idrev_plan',$id)
                ->where('idstrategy','<>',NULL)
                ->Join('strategies','strategies.id','implementation_plans.idstrategy')
                ->leftJoin('issues','issues.id','implementation_plans.idissue')
                ->get()
                ->map(function($item){
                    //dd($item->idrev_plan);
                    $activity_implementation=$this->imp
                                                ->select('implementation_plans.id AS id',
                                                            'activities.description AS activity',
                                                            'implementation_plans.idrev_plan',
                                                            'implementation_plans.date_from',
                                                            'implementation_plans.date_to',
                                                            'implementation_plans.cc_topology',
                                                            'issues.description AS issue',
                                                            'strategies.id AS stratt_id',
                                                            'implementation_plans.person_responsible',
                                                )
                                                ->Join('activities','activities.id','implementation_plans.idactivity')
                                                ->Join('strategies','strategies.id','=','activities.strategy_id')
                                                ->leftJoin('issues','issues.id','implementation_plans.idissue')
                                                ->where('idrev_plan',$item->idrev_plan)
                                                ->where('strategies.id',$item->idstrategy)
                                                ->get()
                                                ->map(function($item){
                                                    return [
                                                        'id'=>$item->id,
                                                        'idrev_plan'=>$item->idrev_plan,
                                                        'date_from'=>convertDateString($item->date_from),
                                                        'date_to'=>convertDateString($item->date_to),
                                                        'stratt_id'=>$item->stratt_id,
                                                        'cc_topology'=>$item->cc_topology,
                                                        'issue'=>$item->issue,
                                                        'activity'=>$item->activity,
                                                        'person_responsible'=>$item->person_responsible,
                                                    ];
                                                });

                    return [
                        'id'=>$item->id,
                        'idrev_plan'=>$item->idrev_plan,
                        'date_from'=>convertDateString($item->date_from),
                        'date_to'=>convertDateString($item->date_to),
                        'idstrategy'=>$item->idstrategy,
                        'cc_topology'=>$item->cc_topology,
                        'issue'=>$item->issue,
                        'strategy'=>$item->strategy,
                        'activity_implementation'=>$activity_implementation,
                        'person_responsible'=>$item->person_responsible,
                    ];
                });


        //MOOE
        $mooe_gad = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Maintenance, Operating, and Other Expenses')
                    ->where('category_gad','GAD')
                    ->orderBy('category', 'desc')
                    ->orderBy('particulars')
                    ->get();
        $mooe_non = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Maintenance, Operating, and Other Expenses')
                    ->where('category_gad','NON-GAD')
                    ->orderBy('category', 'desc')
                    ->orderBy('particulars')
                    ->get();
        $s_mooe_gad = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Maintenance, Operating, and Other Expenses')
                    ->where('category_gad','GAD')
                    ->sum('amount');
        $s_mooe_non = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Maintenance, Operating, and Other Expenses')
                    ->where('category_gad','NON-GAD')
                    ->sum('amount');
        //Capital Outlay
        $cap_gad = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Capital Outlay')
                    ->where('category_gad','GAD')
                    ->orderBy('category', 'desc')
                    ->orderBy('particulars')
                    ->get();
        $cap_non = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Capital Outlay')
                    ->where('category_gad','NON-GAD')
                    ->orderBy('category', 'desc')
                    ->orderBy('particulars')
                    ->get();
        $s_cap_gad = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Capital Outlay')
                    ->where('category_gad','GAD')
                    ->sum('amount');
        $s_cap_non = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Capital Outlay')
                    ->where('category_gad','NON-GAD')
                    ->sum('amount');
        //Personnel Services
        $ps_gad = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Personnel Services')
                    ->where('category_gad','GAD')
                    ->orderBy('category', 'desc')
                    ->orderBy('particulars')
                    ->get();
        $ps_non = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Personnel Services')
                    ->where('category_gad','NON-GAD')
                    ->orderBy('category', 'desc')
                    ->orderBy('particulars')
                    ->get();
        $s_ps_gad = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Personnel Services')
                    ->where('category_gad','GAD')
                    ->sum('amount');
        $s_ps_non = BudgetRequirement::where('revision_plan_id','=',$id)
                    ->where('category','Personnel Services')
                    ->where('category_gad','NON-GAD')
                    ->sum('amount');


        //IMPLEMENTING TEAM
        $team_members = TeamPlan::where('revision_plan_id', $id)
                        ->get()
                        ->map(function($item){
                            $people = Implementing_team::where('id',$item->implementing_team_id)
                                        ->first();
                            return [
                                "id"=>$item->id,
                                "name"=>$people->name,
                                "position"=>$people->position,
                                "competency"=>$people->competency,
                                "role"=>$item->role
                            ];
                        });
        //MONITORING AND EVALUATION
        $monitoring = Monitoring_and_evaluation::where('revision_plan_id', $id)
                        ->orderBy('created_at', 'asc')
                        ->get();
        //RISK MANAGEEMNT
        $risks =Risk_manangement::where('revision_plan_id', $id)->get();

        //PREPARED
        $sig_prep = Signatory::where('revision_plan_id', $id)
                    ->where('acted','Prepared')->first();

        //REVIEWED
        $sig_rev = Signatory::where('revision_plan_id', $id)
                    ->where('acted','Reviewed')->first();

        //APPROVED
        $sig_app =  Signatory::where('revision_plan_id', $id)
                    ->where('acted','Approved')->get();
        //IMPLEMENTATION PLAN
        //$implementation_plan = new ImplementationPlan();
        $data=ImplementationPlan::select('implementation_plans.id AS id',
                            'strategies.description AS strategy',
                            'implementation_plans.idrev_plan',
                            'implementation_plans.date_from',
                            'implementation_plans.date_to',
                            'implementation_plans.idstrategy',
                            'implementation_plans.cc_topology',
                            'implementation_plans.person_responsible',
                            'issues.description AS issue'
                        )
                ->where('idrev_plan',$id)
                ->where('idstrategy','<>',NULL)
                ->Join('strategies','strategies.id','implementation_plans.idstrategy')
                ->leftJoin('issues','issues.id','implementation_plans.idissue')
                ->get()
                ->map(function($item){
                    //dd($item->idrev_plan);
                    $activity_implementation=ImplementationPlan::select('implementation_plans.id AS id',
                                                            'activities.description AS activity',
                                                            'implementation_plans.idrev_plan',
                                                            'implementation_plans.date_from',
                                                            'implementation_plans.date_to',
                                                            'implementation_plans.cc_topology',
                                                            'issues.description AS issue',
                                                            'strategies.id AS stratt_id',
                                                            'implementation_plans.person_responsible',
                                                )
                                                ->Join('activities','activities.id','implementation_plans.idactivity')
                                                ->Join('strategies','strategies.id','=','activities.strategy_id')
                                                ->leftJoin('issues','issues.id','implementation_plans.idissue')
                                                ->where('idrev_plan',$item->idrev_plan)
                                                ->where('strategies.id',$item->idstrategy)
                                                ->get()
                                                ->map(function($item){
                                                    $targets=Target::where('idimplementation', $item->id)
                                                            ->select('indicators.description AS indicator_description',
                                                                'targets.description AS target_description',
                                                                'targets.planned_budget AS budget'
                                                            )
                                                            ->join('indicators', 'indicators.id','targets.idindicator')
                                                            ->get();
                                                    return [
                                                        'id'=>$item->id,
                                                        'idrev_plan'=>$item->idrev_plan,
                                                        'date_from'=>convertDateString($item->date_from),
                                                        'date_to'=>convertDateString($item->date_to),
                                                        'stratt_id'=>$item->stratt_id,
                                                        'cc_topology'=>$item->cc_topology,
                                                        'issue'=>$item->issue,
                                                        'activity'=>$item->activity,
                                                        'person_responsible'=>$item->person_responsible,
                                                        'targets'=>$targets,
                                                    ];
                                                });
                    $targets=Target::where('idimplementation', $item->id)->get();
                    return [
                        'id'=>$item->id,
                        'idrev_plan'=>$item->idrev_plan,
                        'date_from'=>convertDateString($item->date_from),
                        'date_to'=>convertDateString($item->date_to),
                        'idstrategy'=>$item->idstrategy,
                        'cc_topology'=>$item->cc_topology,
                        'issue'=>$item->issue,
                        'strategy'=>$item->strategy,
                        'activity_implementation'=>$activity_implementation,
                        'person_responsible'=>$item->person_responsible,
                        'targets'=>$targets,
                    ];
                });
        $imp_amount = DB::table('targets')
                ->where('implementation_plans.idrev_plan',$id)
                ->join('implementation_plans', 'targets.idimplementation', '=', 'implementation_plans.id')
                ->select('targets.*', 'implementation_plans.*')
                ->sum('targets.planned_budget');
        return inertia('RevisionPlans/View',[
            "paps"=>$paps,
            "office"=>$functions->FFUNCTION,
            "implementation"=>$implement,

            "mooe_gad"=>$mooe_gad,
            "mooe_non"=>$mooe_non,
            "cap_gad"=>$cap_gad,
            "cap_non"=>$cap_non,
            "ps_gad"=>$ps_gad,
            "ps_non"=>$ps_non,
            "s_mooe_gad"=>$s_mooe_gad,
            "s_mooe_non"=>$s_mooe_non,
            "s_cap_gad"=>$s_cap_gad,
            "s_cap_non"=>$s_cap_non,
            "s_ps_gad"=>$s_ps_gad,
            "s_ps_non"=>$s_ps_non,

            "team_members"=>$team_members,
            "monitors"=>$monitoring,
            "risks"=>$risks,
            "sig_rev"=>$sig_rev,
            "sig_prep"=>$sig_prep,
            "sig_app"=>$sig_app,
            "data"=>$data,
            "imp_amount"=>$imp_amount,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


}
