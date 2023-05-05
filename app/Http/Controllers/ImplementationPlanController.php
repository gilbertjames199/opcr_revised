<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\ImplementationPlan;
use App\Models\Issue;
use App\Models\RevisionPlan;
use App\Models\Strategy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ImplementationPlanController extends Controller
{
    protected $model;
    public function __construct(ImplementationPlan $model)
    {
        $this->model=$model;
    }
    public function index(Request $request,$id){
        //dd($id);

        $data=$this->model
                ->select('implementation_plans.id AS id',
                            'strategies.description AS strategy',
                            'implementation_plans.idrev_plan',
                            'implementation_plans.date_from',
                            'implementation_plans.date_to',
                            'implementation_plans.idstrategy',
                            'implementation_plans.cc_topology',
                            'issues.description AS issue'
                        )
                ->where('idrev_plan',$id)
                ->where('idstrategy','<>',NULL)
                ->Join('strategies','strategies.id','implementation_plans.idstrategy')
                ->Join('issues','issues.id','implementation_plans.idissue')
                ->get()
                ->map(function($item){
                    //dd($item->idrev_plan);
                    $activity_implementation=$this->model
                                                ->select('implementation_plans.id AS id',
                                                            'activities.description AS activity',
                                                            'implementation_plans.idrev_plan',
                                                            'implementation_plans.date_from',
                                                            'implementation_plans.date_to',
                                                            'implementation_plans.cc_topology',
                                                            'issues.description AS issue',
                                                            'strategies.id AS stratt_id'
                                                )
                                                ->Join('activities','activities.id','implementation_plans.idactivity')
                                                ->Join('strategies','strategies.id','=','activities.strategy_id')
                                                ->leftJoin('issues','issues.id','implementation_plans.idissue')
                                                ->where('idrev_plan',$item->idrev_plan)
                                                ->where('strategies.id',$item->idstrategy)
                                                ->get();
                    //dd($activity_implementation);
                    //->where('idstrategy','=',NULL)
                    return [
                        'id'=>$item->id,
                        'idrev_plan'=>$item->idrev_plan,
                        'date_from'=>$item->date_from,
                        'date_to'=>$item->date_to,
                        'idstrategy'=>$item->idstrategy,
                        'cc_topology'=>$item->cc_topology,
                        'issue'=>$item->issue,
                        'strategy'=>$item->strategy,
                        'activity_implementation'=>$activity_implementation,
                    ];
                });
        //dd($data)
        //$data = $this->model->where('revision_plan_id','=',$idrev)->get();
        $revs = RevisionPlan::where('id','=',$id)->get();
        //dd($idrev);

        return inertia('Implementation/Index',[
            'data'=>$data,
            "idrev"=>$id,
            "revs"=>$revs,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function create(Request $request, $idrev){
        $revs = RevisionPlan::where('id',$idrev)->first();
        $implans = $this->model->where('idrev_plan',$idrev )->get();
        $strategies = Strategy::where('idpaps',$revs->idpaps)->get();
        $issues = Issue::get();
        $exist_strat =ImplementationPlan::where('idrev_plan',$idrev)->get();
        $exist_strat = $exist_strat->pluck('idstrategy');
        //dd($strategies);
        //$implans = $implan->pluck('account_code');
        //dd($idrev);
        return inertia('Implementation/Create',[
            "idrev"=>$idrev,
            "implans"=>$implans,
            "strategies"=>$strategies,
            "issues"=>$issues,
            "exist_strat"=>$exist_strat,
            "can"=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function store(Request $request){
        if(!$request->fromA){
            //dd('from A');
            //dd($request);
            $attributes =$request->validate([
                "idrev_plan"=>"required",
                "idstrategy"=>"required",
            ]);
            $imp = new ImplementationPlan();
            $imp->idrev_plan=$attributes['idrev_plan'];
            $imp->idstrategy =$attributes['idstrategy'];
            $imp->idissue = $request->idissue;
            $imp->date_from = $request->date_from;
            $imp->date_to = $request->date_to;
            $imp->cc_topology = $request->cc_topology;
            $imp->save();
        }else{
            //dd('from A');

            $attributes =$request->validate([
                "idrev_plan"=>"required",
                "idactivity"=>"required",
            ]);
            $imp = new ImplementationPlan();
            $imp->idrev_plan=$attributes['idrev_plan'];
            $imp->idactivity =$attributes['idactivity'];
            $imp->idissue = $request->idissue;
            $imp->date_from = $request->date_from;
            $imp->date_to = $request->date_to;
            $imp->cc_topology = $request->cc_topology;
            $imp->save();
        }

        return redirect('/implementation/'.$request->idrev_plan)
        ->with('message','Successfully added implementation plan');

    }
    public function act_create(Request $request, $idstrat, $idrev_plan){
        //$revs = RevisionPlan::where('id',$idrev)->first();
        //dd($idrev_plan);
        $implans = $this->model->where('idrev_plan',$idrev_plan )->get();
        $activities = Activity::where('strategy_id',$idstrat)->get();
        //dd($activities);
        $issues = Issue::get();
        $exist_act =ImplementationPlan::where('idrev_plan',$idrev_plan)->get();
        $exist_act = $exist_act->pluck('idactivity');
        //dd($strategies);
        //$implans = $implan->pluck('account_code');
        //dd($idrev);
        return inertia('Implementation/Create_A',[
            "idrev"=>$idrev_plan,
            "implans"=>$implans,
            "activities"=>$activities,
            "issues"=>$issues,
            "exist_act"=>$exist_act,
            "can"=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'idrev_plan',
            'idstrategy',
            'idissue',
            'date_from',
            'date_to',
            'cc_topology'
        ]);
        $idrev= $data->idrev_plan;
        $revs = RevisionPlan::where('id',$idrev)->first();
        $implans = $this->model->where('idrev_plan',$idrev )->get();
        $strategies = Strategy::where('idpaps',$revs->idpaps)->get();
        $issues = Issue::get();
        $exist_strat =ImplementationPlan::where('idrev_plan',$idrev)->get();
        $exist_strat = $exist_strat->pluck('idstrategy');
        //dd($strategies);
        //$implans = $implan->pluck('account_code');
        //dd($idrev);
        return inertia('Implementation/Create',[
            "idrev"=>$idrev,
            "implans"=>$implans,
            "strategies"=>$strategies,
            "issues"=>$issues,
            "exist_strat"=>$exist_strat,
            "editData"=>$data,
            "can"=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function act_edit(Request $request, $id){
        //dd($id);
        $data = $this->model->where('id', $id)->first([
            'id',
            'idrev_plan',
            'idactivity',
            'idissue',
            'date_from',
            'date_to',
            'cc_topology'
        ]);
        $idrev_plan= $data->idrev_plan;

        //Get the strategy ID of the activity
        //dd($data->idactivity);
        $idstrat= Activity::select('strategy_id')->findOrFail($data->idactivity);
        $idstrat=$idstrat->strategy_id;
        //dd($idstrat);
        //Get the activities with the strategy ID
        $activities = Activity::where('strategy_id',$idstrat)->get();
        //dd($activities);
        //dd($idstrat->strategy_id);
        $implans = $this->model->where('idrev_plan',$idrev_plan )->get();

        $issues = Issue::get();
        $exist_act =ImplementationPlan::where('idrev_plan',$idrev_plan)->get();
        $exist_act = $exist_act->pluck('idactivity');
        return inertia('Implementation/Create_A',[
            "idrev"=>$idrev_plan,
            "implans"=>$implans,
            "activities"=>$activities,
            "issues"=>$issues,
            "exist_act"=>$exist_act,
            "editData"=>$data,
            "can"=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function update(Request $request){
        if(!$request->fromA){
            $data = $this->model->findOrFail($request->id);
            //dd($request);
            //dd($request->plan_period);
            $data->update([
                'idstrategy'=>$request->idstrategy,
                'idissue' => $request->idissue,
                'date_from' => $request->date_from,
                'date_to' => $request->date_to,
                'cc_topology' => $request->cc_topology
            ]);
        }else{

        }
        //dd($rev);
        return redirect('/implementation/'.$request->idrev_plan)
        ->with('message','Successfully added implementation plan');
    }
    public function destroy(Request $request){}
}
