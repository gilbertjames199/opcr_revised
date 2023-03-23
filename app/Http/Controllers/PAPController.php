<?php

namespace App\Http\Controllers;

use App\Models\MajorFinalOutput;
use App\Models\ProgramAndProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PAPController extends Controller
{
    public function __construct(ProgramAndProject $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }

    public function index(Request $request, $id)
    {
        $idinteroutcome = MajorFinalOutput::where('id',$id)
                        ->value('idinteroutcome');

        $data = ProgramAndProject::where('idmfo',$id)
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();
        //dd($data);
        return inertia('PAPS/Index',[
            "data"=>$data,
            "idinteroutcome"=>$idinteroutcome,
            "idmfo"=>$id,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function create($id)
    {
        $mfos= MajorFinalOutput::get();
        //dd($id);
        $year_object=DB::connection('mysql2')
                        ->table('raaohs')
                        ->select(DB::raw('DISTINCT(tyear)'))
                        ->orderBy('tyear','ASC')
                        ->get();
        return inertia('PAPS/Create', [
            'mfos'=>$mfos,
            'idmfo'=>$id,
            'years'=>$year_object,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {
        $attributes = $request->validate(ProgramAndProject::rules(), ProgramAndProject::errorMessages());
        $this->model->create($attributes);
        //dd($request->idmfo);
        //$request->pass='';
        return redirect('/paps/'.$request->idmfo)
        ->with('message','Programs and Projects(PAPS) added');
    }


    public function show(ProgramAndProject $programAndProject)
    {

    }

    public function edit(ProgramAndProject $programAndProject, $id, $idmfo)
    {
        $year_object=DB::connection('mysql2')
                        ->table('raaohs')
                        ->select(DB::raw('DISTINCT(tyear)'))
                        ->orderBy('tyear','ASC')
                        ->get();
        $mfos= MajorFinalOutput::get();
        $data = $this->model->where('id', $id)->first([
            'id',
            'paps_desc',
            'plan_period_from',
            'plan_period_to',
            'plan_amount_year1',
            'plan_amount_year2',
            'plan_amount_year3',
            'plan_amount_year4',
            'plan_amount_year5',
            'plan_amount_year6',
            'FFUNCCOD',
            'idmfo',
        ]);

        return inertia('PAPS/Create', [
            "editData" => $data,
            "mfos"=>$mfos,
            "idmfo"=> $idmfo,
            'years'=>$year_object,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


    public function update(Request $request, $id)
    {

        $data = $this->model::findOrFail($request->id);
        $validatedData=$request->validate(ProgramAndProject::rules(), ProgramAndProject::errorMessages());
        $data->update($validatedData);
        return redirect('/paps/'.$request->idmfo)
                ->with('message','Program and Projects updated');
    }


    public function destroy(Request $request, $id, $idmfo)
    {
        $data = $this->model->findOrFail($id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/paps/'.$idmfo)->with('warning', 'PAPS deleted');
    }
}
