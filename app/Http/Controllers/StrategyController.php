<?php

namespace App\Http\Controllers;

use App\Models\IntermediateOutcome;
use App\Models\ProgramAndProject;
use App\Models\Strategy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StrategyController extends Controller
{
    protected $model;
    public function __construct(Strategy $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }
    public function index(Request $request, $id)
    {
        //dd($id);
        $data = $this->model
                ->where('idpaps',$id)
                ->with('paps')
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();

        return inertia('Strategies/Index',[
            "data"=>$data,
            "idpaps"=>$id,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


    public function create(Request $request, $id)
    {

        $paps=ProgramAndProject::get();
        //dd($paps);
        return inertia('Strategies/Create',[
            'idpaps'=>$id,
            'paps'=>$paps,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


    public function store(Request $request)
    {
        //dd($request);
        $attributes = $request->validate([
            'idpaps'=>'required',
            'description' => 'required',
        ]);
        $this->model->create($attributes);
        //$request->pass='';
        return redirect('/strategies/'.$request->idpaps)
                ->with('message','Outcome added');
    }


    public function show(Strategy $strategy)
    {
        //
    }


    public function edit(Request $request, $id, $idpaps)
    {
        $paps=ProgramAndProject::get();
        $data = $this->model->where('id', $id)->first([
            'id',
            'description',
            'idpaps'
        ]);

        return inertia('Strategies/Create', [
            "editData" => $data,
            "paps"=>$paps,
            "idpaps"=> $idpaps,
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
            'description'=>$request->description,
            'idpaps'=>$request->idpaps
        ]);

        return redirect('/strategies/'.$request->idpaps)
                ->with('message','Strategy updated');
    }


    public function destroy(Request $request, $id, $idpaps)
    {
        $data = $this->model->findOrFail($id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/strategies/'.$idpaps)->with('warning', 'Strategy deleted');
    }
}
