<?php

namespace App\Http\Controllers;

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
        $idinteroutcome = Strategy::where('id',$id)
                        ->value('idinteroutcome');

        $data = MajorFinalOutput::where('idstrategy',$id)
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();
        //dd($data->pluck('mfo_desc'));
        return inertia('MFOs/Index',[
            "data"=>$data,
            "idstrategy"=>$id,
            "idinteroutcome"=>$idinteroutcome,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


    public function create($id)
    {
        $strats= Strategy::get();
        return inertia('MFOs/Create', [
            'strategies'=>$strats,
            'idstrategy'=>$id,
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
                            'idstrategy' => 'required',
                        ]);
        //dd($attributes);
        $this->model->create($attributes);
        $request->pass='';
        return redirect('/mfos/'.$request->idstrategy)
                ->with('message','MFO added');
    }


    public function show(MajorFinalOutput $majorFinalOutput)
    {

    }


    public function edit(MajorFinalOutput $majorFinalOutput, $id, $idstrategy)
    {
        $strategies=Strategy::get();
        $data = $this->model->where('id', $id)->first([
            'id',
            'mfo_desc',
            'idstrategy'
        ]);

        return inertia('MFOs/Create', [
            "editData" => $data,
            "strategies"=>$strategies,
            "idstrategy"=> $idstrategy,
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
            'idstrategy'=>$request->idstrategy
        ]);

        return redirect('/mfos/'.$request->idstrategy)
                ->with('message','MFOs updated');
    }


    public function destroy(Request $request, $id, $idstrategy)
    {
        $data = $this->model->findOrFail($id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/mfos/'.$idstrategy)->with('warning', 'MFO deleted');
    }
}
