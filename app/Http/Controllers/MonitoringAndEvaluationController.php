<?php

namespace App\Http\Controllers;

use App\Models\Monitoring_and_evaluation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MonitoringAndEvaluationController extends Controller
{
    //
    public function __construct(Monitoring_and_evaluation $model)
    {
       $this->model = $model;
    }

        //
        public function index(Request $request){

            $data = $this->model
                        ->orderBy('created_at', 'desc')
                        ->paginate(10)
                        ->withQueryString();
            return inertia('EvaluationMechanismTool/Index',[
                "data"=>$data,
                'can'=>[
                    'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                ],
            ]);

        }

        public function create(Request $request){
            //dd('create');
        return inertia('EvaluationMechanismTool/Create',[
        'can'=>[
            'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
            'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
        ],
    ]);
        }

        public function store(Request $request){
            // dd($request);
            $attributes = $request->validate([
                'evaluation_mechanism_tool' => 'required',
                'opr' => 'required',
                'target_beneficiaries' => 'required',
                'gad' => 'required',
            ]);
            //dd($attributes);
            $this->model->create($attributes);
            return redirect('/EvaluationMechanismTool')
                    ->with('message','Monitoring and Evaluation added');
        }

        public function edit(Request $request, $id){
            $data = $this->model->where('id', $id)->first([
                'id',
                'evaluation_mechanism_tool',
                'opr',
                'target_beneficiaries',
                'gad',
            ]);

            return inertia('EvaluationMechanismTool/Create', [
                "editData" => $data,
                'can'=>[
                    'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                ],
            ]);
        }

        public function update(Request $request)
        {
            // dd('update');
            $data = $this->model->findOrFail($request->id);
            //dd($request->plan_period);
            $data->update([
                'evaluation_mechanism_tool'=>$request->evaluation_mechanism_tool,
                'opr'=>$request->opr,
                'target_beneficiaries'=>$request->target_beneficiaries,
                'gad'=>$request->gad,
            ]);

            return redirect('/EvaluationMechanismTool')
                    ->with('message','Monitoring and Evaluation updated');
        }

        public function destroy(Request $request){
            $data = $this->model->findOrFail($request->id);
            $data->delete();
            //dd($request->raao_id);
            return redirect('/EvaluationMechanismTool')->with('warning', 'Monitoring and Evaluation Deleted');

        }
}
