<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sectoral;
use Illuminate\Support\Facades\Auth;

class SectoralController extends Controller
{

    public function __construct(Sectoral $model)
    {
       $this->model = $model;
    }


    //
    public function index(Request $request){

        $data = $this->model
                ->get();
        return inertia('Sectoral/Index',[
            "data"=>$data,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);

    }

    public function create(Request $request){

    return inertia('Sectoral/addSector',[
    'can'=>[
        'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
        'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
    ],
]);
    }

    public function store(Request $request){

        $attributes = $request->validate([
            'goal_description' => 'required',
            'sector' => 'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/Sectoral')
                ->with('message','Sectoral Goal added');
    }

    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'goal_description',
            'sector',
        ]);

        return inertia('Sectoral/addSector', [
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
            'goal_description'=>$request->goal_description,
            'sector' => $request->sector
        ]);

        return redirect('/Sectoral')
                ->with('message','Sectoral Goal updated');
    }

    public function destroy(Request $request){
        $data = $this->model->findOrFail($request->id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/Sectoral')->with('warning', 'Sectoral Goal Deleted');

    }
}
