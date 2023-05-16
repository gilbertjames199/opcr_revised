<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\BudgetRequirement;
use App\Models\HGDG_Checklist;
use App\Models\ImplementationPlan;
use App\Models\Implementing_team;
use App\Models\Monitoring_and_evaluation;
use App\Models\ProgramAndProject;
use App\Models\RevisionPlan;
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
                ->get();

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
        $duplicate=RevisionPlan::where('idpaps',$id)->get();

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
        //dd($request->idpaps);
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
        //PROGRAMS AND PROJECTS
        $ppa = ProgramAndProject::findOrFail($paps->idpaps);
        //FUNCTIONS
        $functions = AccountAccess::where('iduser',auth()->user()->recid)
                    ->where('ff.FFUNCCOD', $ppa->FFUNCCOD)
                    ->select('ff.FFUNCCOD','ff.FFUNCTION')
                    ->join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','accountaccess.ffunccod')
                    ->with('func')->first();
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
        $mooe = BudgetRequirement::where('revision_plan_id','=',$id)
                ->where('category','Maintenance, Operating, and Other Expenses')
                ->orderBy('particulars')
                ->get();
        $s_mooe = BudgetRequirement::where('revision_plan_id','=',$id)
                ->where('category','Maintenance, Operating, and Other Expenses')
                ->orderBy('particulars')
                ->sum('amount');

        $capital=BudgetRequirement::where('revision_plan_id','=',$id)
                ->where('category','Capital Outlay')
                ->orderBy('particulars')
                ->get();

        $s_capital = BudgetRequirement::where('revision_plan_id','=',$id)
                ->where('category','Capital Outlay')
                ->orderBy('particulars')
                ->sum('amount');
        $ps=BudgetRequirement::where('revision_plan_id','=',$id)
                ->where('category','Personal Services')
                ->orderBy('particulars')
                ->get();
        $s_ps=BudgetRequirement::where('revision_plan_id','=',$id)
                ->where('category','Personal Services')
                ->orderBy('particulars')
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
                        ->orderBy('created_at', 'desc')
                        ->get();
        return inertia('RevisionPlans/View',[
            "paps"=>$paps,
            "office"=>$functions->FFUNCTION,
            "implementation"=>$implement,
            "b_mooe"=>$mooe,
            "b_capital"=>$capital,
            "b_ps"=>$ps,
            "s_mooe"=>$s_mooe,
            "s_capital"=>$s_capital,
            "s_ps"=>$s_ps,
            "team_members"=>$team_members,
            "monitors"=>$monitoring,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


}
