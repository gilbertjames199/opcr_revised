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
        $idstrategy = MajorFinalOutput::where('id',$id)
                        ->value('idstrategy');

        $data = ProgramAndProject::where('idmfo',$id)
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();
        //dd($data);
        return inertia('PAPS/Index',[
            "data"=>$data,
            "idstrategy"=>$idstrategy,
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

        $attributes = $request->validate([
            'paps_desc'=>'required',
            'tyear'=>'required',
            'FRAOTYPE'=>'required',
            'FRAODESC'=>'required',
            'FALLTCOD'=>'required',
            'FFUNCCOD'=>'required',
            'FFUNDCOD'=>'required',
            'idsource'=>'required',
            'idappttype'=>'required',
            'idprogram'=>'required',
            'aipcode'=>'required',
            'excludetag'=>'required',
            'previd'=>'required',
            'idpaps'=>'required',
            'idmfo'=>'required'
        ]);

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
            'tyear',
            'FRAOTYPE',
            'FRAODESC',
            'FALLTCOD',
            'FFUNCCOD',
            'FFUNDCOD',
            'idsource',
            'idappttype',
            'idprogram',
            'aipcode',
            'date_created',
            'excludetag',
            'previd',
            'idpaps',
            'idmfo'
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

        //dd($request->plan_period);
        $data->update([
            'paps_desc'=>$request->paps_desc,
            'tyear'=>$request->tyear,
            'FRAOTYPE'=>$request->FRAOTYPE,
            'FRAODESC'=>$request->FRAODESC,
            'FALLTCOD'=>$request->FALLTCOD,
            'FFUNCCOD'=>$request->FFUNCCOD,
            'FFUNDCOD'=>$request->FFUNDCOD,
            'idsource'=>$request->idsource,
            'idappttype'=>$request->idappttype,
            'idprogram'=>$request->idprogram,
            'aipcode'=>$request->aipcode,
            'date_created'=>$request->date_created,
            'excludetag'=>$request->excludetag,
            'previd'=>$request->previd,
            'idpaps'=>$request->idpaps,
            'idmfo'=>$request->idmfo
        ]);
        //dd('requestmfo: '.$request->idmfo);
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
