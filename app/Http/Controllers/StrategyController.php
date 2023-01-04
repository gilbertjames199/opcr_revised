<?php

namespace App\Http\Controllers;

use App\Models\IntermediateOutcome;
use App\Models\Strategy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StrategyController extends Controller
{
    public function __construct(Strategy $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }
    public function index(Request $request, $id)
    {
        $idoutcome = IntermediateOutcome::where('id',$id)
                        ->value('idoutcome');
        //dd($idoc);
        $data = $this->model
                ->where('idinteroutcome',$id)
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();

        return inertia('Strategies/Index',[
            "data"=>$data,
            "idinteroutcome"=>$id,
            "idoutcome"=>$idoutcome,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


    public function create(Request $request, $id)
    {
        $interoutcomes=IntermediateOutcome::get();
        //dd($id);
        return inertia('Strategies/Create',[
            'idinteroutcome'=>$id,
            'interoutcomes'=>$interoutcomes,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


    public function store(Request $request)
    {
        $attributes = $request->validate([
            'strat_desc' => 'required',
            'idinteroutcome' => 'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        $request->pass='';
        return redirect('/strategies/'.$request->idinteroutcome)
                ->with('message','Outcome added');
    }


    public function show(Strategy $strategy)
    {
        //
    }


    public function edit(Strategy $strategy, $id,$idinteroutcome)
    {
        $interoutcomes=IntermediateOutcome::get();
        $data = $this->model->where('id', $id)->first([
            'id',
            'strat_desc',
            'idinteroutcome'
        ]);

        return inertia('Strategies/Create', [
            "editData" => $data,
            "interoutcomes"=>$interoutcomes,
            "idinteroutcome"=> $idinteroutcome,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


    public function update(Request $request, Strategy $strategy)
    {
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'strat_desc'=>$request->strat_desc,
            'idinteroutcome'=>$request->idinteroutcome
        ]);

        return redirect('/strategies/'.$request->idinteroutcome)
                ->with('message','Strategy updated');
    }


    public function destroy(Request $request, $id, $idinteroutcome)
    {
        $data = $this->model->findOrFail($id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/strategies/'.$idinteroutcome)->with('warning', 'Strategy deleted');
    }
}
