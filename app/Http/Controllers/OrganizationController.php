<?php

namespace App\Http\Controllers;

use App\Models\OrganizationalGoal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrganizationController extends Controller
{
    public function __construct(OrganizationalGoal $model)
    {
       $this->model = $model;
    }


    //
    public function index(Request $request){

        $data = $this->model
                ->get();
        return inertia('Organizational/Index',[
            "data"=>$data,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);

    }

    public function create(Request $request){

    return inertia('Organizational/addOrganizational',[
    'can'=>[
        'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
        'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
    ],
]);
    }

    public function store(Request $request){

        $attributes = $request->validate([
            'goal_description' => 'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/Organization')
                ->with('message','Organizational Goal added');
    }

    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'goal_description'
        ]);

        return inertia('Organizational/addOrganizational', [
            "editData" => $data,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'goal_description'=>$request->goal_description
        ]);

        return redirect('/Organization')
                ->with('message','Organizational Goal updated');
    }

    public function destroy(Request $request){
        $data = $this->model->findOrFail($request->id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/Organization')->with('warning', 'Organizational Goal Deleted');

    }
}
