<?php

namespace App\Http\Controllers;

use App\Models\EconomicAgenda;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EconomicAgendaController extends Controller
{
    public function __construct(EconomicAgenda $model)
    {
       $this->model = $model;
    }


    //
    public function index(Request $request){

        $data = $this->model
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();
        return inertia('EconomicAgenda/Index',[
            "data"=>$data,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);

    }

    public function create(Request $request){

    return inertia('EconomicAgenda/addAgenda',[
    'can'=>[
        'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
        'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
    ],
]);
    }

    public function store(Request $request){

        $attributes = $request->validate([
            'agenda_description' => 'required',
            'yearfrom' => 'required',
            'yearto' => 'required',
            'rationale' => 'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/EconomicAgenda')
                ->with('message','Chief Executive Agenda added');
    }

    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'agenda_description',
            'yearfrom',
            'yearto',
            'rationale',
        ]);

        return inertia('EconomicAgenda/addAgenda', [
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
            'agenda_description'=>$request->agenda_description,
            'yearfrom' => $request->yearfrom,
            'yearto' => $request->yearto,
            'rationale' => $request->rationale
        ]);

        return redirect('/EconomicAgenda')
                ->with('message','Chief Executive Agenda updated');
    }

    public function destroy(Request $request){
        $data = $this->model->findOrFail($request->id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/EconomicAgenda')->with('warning', 'Chief Executive Agenda Deleted');

    }
}