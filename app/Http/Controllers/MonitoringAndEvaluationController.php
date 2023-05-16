<?php

namespace App\Http\Controllers;

use App\Models\Monitoring_and_evaluation;
use App\Models\RevisionPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MonitoringAndEvaluationController extends Controller
{
    protected $model;
    //
    public function __construct(Monitoring_and_evaluation $model)
    {
       $this->model = $model;
    }

    //
    public function index(Request $request, $id){

        $data = $this->model
                    ->where('revision_plan_id', $id)
                    ->orderBy('created_at', 'desc')
                    ->paginate(10)
                    ->withQueryString();
        $revs = RevisionPlan::findOrFail($id);
        return inertia('EvaluationMechanismTool/Index',[
            "data"=>$data,
            "revs"=>$revs,
            "revision_plan_id"=>$id,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);

    }

    public function create(Request $request, $id){
            //dd('create');
        return inertia('EvaluationMechanismTool/Create',[
            'revision_plan_id'=>$id,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function store(Request $request){
        //dd($request->revision_plan_id);
        $revid=$request->revision_plan_id;
        $attributes = $request->validate([
            'evaluation_mechanism_tool' => 'required',
            'opr' => 'required',
            'target_beneficiaries' => 'required',
            'gad' => 'required',
            'revision_plan_id'=>'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/EvaluationMechanismTool/'.$revid)
                ->with('message','Monitoring and Evaluation added');
    }

    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'evaluation_mechanism_tool',
            'opr',
            'target_beneficiaries',
            'gad',
            'revision_plan_id'
        ]);

        return inertia('EvaluationMechanismTool/Create', [
            "editData" => $data,
            'revision_plan_id'=>$data->revision_plan_id,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        $revid=$request->revision_plan_id;
        // dd('update');
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'evaluation_mechanism_tool'=>$request->evaluation_mechanism_tool,
            'opr'=>$request->opr,
            'target_beneficiaries'=>$request->target_beneficiaries,
            'gad'=>$request->gad,
        ]);

        return redirect('/EvaluationMechanismTool/'.$revid)
                ->with('message','Monitoring and Evaluation updated');
    }

    public function destroy(Request $request){
        $data = $this->model->findOrFail($request->id);
        $revid = $data->revision_plan_id;
        $data->delete();
        //dd($request->raao_id);
        return redirect('/EvaluationMechanismTool/'.$revid)->with('warning', 'Monitoring and Evaluation Deleted');

    }
}
