<?php

namespace App\Http\Controllers;

use App\Models\IntermediateOutcome;
use App\Models\MajorFinalOutput;
use App\Models\Strategy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MFOController extends Controller
{
    public function __construct(MajorFinalOutput $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }
    public function index(Request $request, $id)
    {
        $idoutcome = IntermediateOutcome::where('id',$id)
                        ->value('idoutcome');

        $data = MajorFinalOutput::where('idinteroutcome',$id)
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();
        //dd($data->pluck('mfo_desc'));
        return inertia('MFOs/Index',[
            "data"=>$data,
            "idinteroutcome"=>$id,
            "idoutcome"=>$idoutcome,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


    public function create($id)
    {
        $interoutcomes=IntermediateOutcome::get();
        return inertia('MFOs/Create', [
            'interoutcomes'=>$interoutcomes,
            'idinteroutcome'=>$id,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
                            'mfo_desc' => 'required',
                            'idinteroutcome' => 'required',
                            'FFUNCCOD'=>'required'
                        ]);
        //dd($attributes);
        $this->model->create($attributes);
        $request->pass='';
        return redirect('/mfos/'.$request->idinteroutcome)
                ->with('message','MFO added');
    }


    public function show(MajorFinalOutput $majorFinalOutput)
    {

    }


    public function edit(MajorFinalOutput $majorFinalOutput, $id, $idinteroutcome)
    {
        $interoutcomes=IntermediateOutcome::get();
        $data = $this->model->where('id', $id)->first([
            'id',
            'mfo_desc',
            'FFUNCCOD',
            'idinteroutcome'
        ]);
        //dd($idinteroutcome);
        return inertia('MFOs/Create', [
            "editData" => $data,
            "interoutcomes"=>$interoutcomes,
            "idinteroutcome"=> $idinteroutcome,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


    public function update(Request $request, MajorFinalOutput $majorFinalOutput)
    {
        $data = $majorFinalOutput::findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'mfo_desc'=>$request->mfo_desc,
            'idinteroutcome'=>$request->idinteroutcome,
            'FFUNCCOD'=>$request->FFUNCCOD
        ]);

        return redirect('/mfos/'.$request->idinteroutcome)
                ->with('message','MFOs updated');
    }


    public function destroy(Request $request, $id, $idinteroutcome)
    {
        $data = $this->model->findOrFail($id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/mfos/'.$idinteroutcome)->with('warning', 'MFO deleted');
    }

    public function direct(Request $request){
        $data = MajorFinalOutput::get()
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();
        dd($data);
        //dd($data->pluck('mfo_desc'));
        return inertia('MFOs/Direct',[
            "data"=>$data,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
}
