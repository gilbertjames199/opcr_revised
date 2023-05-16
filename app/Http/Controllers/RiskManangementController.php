<?php

namespace App\Http\Controllers;

use App\Models\Risk_manangement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RiskManangementController extends Controller
{
    //
    public function __construct(Risk_manangement $model)
    {
       $this->model = $model;
    }

        //
        public function index(Request $request){

            $data = $this->model
                        ->orderBy('created_at', 'desc')
                        ->paginate(10)
                        ->withQueryString();
            return inertia('RiskManagement/Index',[
                "data"=>$data,
                'can'=>[
                    'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                    'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
                ],
            ]);
        }


        public function create(Request $request){
            //dd('create');
        return inertia('RiskManagement/Create',[
        'can'=>[
            'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
            'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
        ],
    ]);
        }

        public function store(Request $request){
            // dd($request);
            $attributes = $request->validate([
                'possible_risk' => 'required',
                'person_affected' => 'required',
                'management' => 'required',
            ]);
            //dd($attributes);
            $this->model->create($attributes);
            return redirect('/RiskManagement')
                    ->with('message','Risk Management added');
        }


        public function edit(Request $request, $id){
            $data = $this->model->where('id', $id)->first([
                'id',
                'possible_risk',
                'person_affected',
                'management',
            ]);

            return inertia('RiskManagement/Create', [
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
                'possible_risk'=>$request->possible_risk,
                'person_affected'=>$request->person_affected,
                'management'=>$request->management,
            ]);

            return redirect('/RiskManagement')
                    ->with('message','Risk Management updated');
        }

        public function destroy(Request $request){
            $data = $this->model->findOrFail($request->id);
            $data->delete();
            //dd($request->raao_id);
            return redirect('/RiskManagement')->with('warning', 'Implementing Team Deleted');

        }

}
