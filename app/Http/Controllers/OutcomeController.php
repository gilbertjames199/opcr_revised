<?php

namespace App\Http\Controllers;

use App\Models\Outcome;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OutcomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct(Outcome $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }
    public function index(Request $request)
    {

        $data = $this->model
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();

        return inertia('Outcome/Index',[
            "data"=>$data,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function create(Request $request)
    {

        return inertia('Outcome/Create',[
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]

        );
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'plan_period' => 'required',
            'oc_desc' => 'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        $request->pass='';
        return redirect('/outcome')
                ->with('message','Outcome added');
    }

    public function edit(Request $request, $id)
    {
        $data = $this->model->where('id', $id)->first([
            'id',
            'plan_period',
            'oc_desc'
        ]);

        return inertia('Outcome/Create', [
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
            'plan_period'=>$request->plan_period,
            'oc_desc'=>$request->oc_desc
        ]);

        return redirect('/outcome')
                ->with('message','Outcome updated');
    }


    public function destroy(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/outcome')->with('warning', 'Target deleted');
    }
}
