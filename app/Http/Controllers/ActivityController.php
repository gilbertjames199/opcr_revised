<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\ImplementationPlan;
use App\Models\Strategy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ActivityController extends Controller
{
    //
    protected $model;
    public function __construct(Activity $model){
        $this->model=$model;
    }
    public function index(Request $request, $idstrat){

        $strat= Strategy::findOrFail($idstrat);
        //dd($idstrat);
        $myidpaps=$strat->idpaps;
        $myidmfo=$strat->idmfo;
        //dd($myidmfo);
        $idpaps=$myidpaps;
        $idmfo=$myidmfo;
        $data = $this->model->with('strat')
                ->where('strategy_id',$idstrat)
                ->when($request->search, function($query, $searchItem){
                    $query->where('description','LIKE','%'.$searchItem.'%');
                })
                ->orderBy('created_at', 'desc')
                ->paginate('10')
                ->withQueryString();

        return inertia('Activities/Index',[
            "data"=>$data,
            "idpaps"=>$idpaps,
            "idstrategy"=>$idstrat,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);

    }
    public function create(Request $request, $idstrat){
        $strats=Strategy::get();
        //dd($paps);
        return inertia('Activities/Create',[
            'idstrat'=>$idstrat,
            'strats'=>$strats,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function store(Request $request)
    {
        //dd('activity');
        $attributes = $request->validate([
            'strategy_id'=>'required',
            'description' => 'required',
        ]);
        $this->model->create($attributes);
        //$request->pass='';
        return redirect('/activities/'.$request->strategy_id)
                ->with('message','Activity added');
    }
    public function edit(Request $request, $id, $idstrat)
    {
        $strats=Strategy::get();
        $data = $this->model->where('id', $id)->first([
            'id',
            'description',
            'strategy_id'
        ]);

        return inertia('Activities/Create', [
            "editData" => $data,
            'idstrat'=>$idstrat,
            'strats'=>$strats,
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
            'description'=>$request->description,
            'strategy_id'=>$request->strategy_id
        ]);

        return redirect('/activities/'.$request->strategy_id)
                ->with('message','Activity updated');
    }

    public function destroy(Request $request, $id, $strategy_id)
    {
        $msg="";
        $status="";
        $implementation = ImplementationPlan::where('idactivity', $id)->count();

        if($implementation>0){
            $status="error";
            $msg ="Unable to delete!";
        }else{
            $status="message";
            $msg ="Activity deleted";
            $data = $this->model->findOrFail($id);
            $data->delete();
        }
        //dd('hahhah '.$msg);
        //dd($request->raao_id);
        return redirect('/activities/'.$strategy_id)->with($status, $msg);
    }
}
