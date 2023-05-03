<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\MajorFinalOutput;
use App\Models\ProgramAndProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PAPController extends Controller
{
    protected $model;
    public function __construct(ProgramAndProject $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }

    public function index(Request $request, $id)
    {
        $data = ProgramAndProject::where('idmfo',$id)
                ->with('MFO')
                ->when($request->search, function($query, $searchItem){
                    $query->where('paps_desc','LIKE','%'.$searchItem.'%');
                })
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();

        //$data = ProgramAndProject::get();

        //dd($data);
        return inertia('PAPS/Index',[
            "data"=>$data,
            "idmfo"=>$id,
            "filters" => $request->only(['search']),
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
        $accounts = AccountAccess::where('iduser',auth()->user()->recid)->with('func')->get();
        $functions = $accounts->pluck('func');
        return inertia('PAPS/Create', [
            'mfos'=>$mfos,
            'idmfo'=>$id,
            'functions'=>$functions,
            'years'=>$year_object,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function direct_create()
    {
        $mfos= MajorFinalOutput::get();
        $accounts = AccountAccess::where('iduser',auth()->user()->recid)->with('func')->get();
        $functions = $accounts->pluck('func');
        //dd($id);
        return inertia('PAPS/Create', [
            'mfos'=>$mfos,
            'functions'=>$functions,
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
        return redirect('/paps/direct')
        ->with('message','Programs and Projects(PAPS) added');
    }
    public function save(Request $request)
    {
        $attributes = $request->validate(ProgramAndProject::rules(), ProgramAndProject::errorMessages());
        $this->model->create($attributes);

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
            'FFUNCCOD',
            'idmfo',
            'MOV',
        ]);
        $accounts = AccountAccess::where('iduser',auth()->user()->recid)->with('func')->get();
        $functions = $accounts->pluck('func');
        // dd($data);
        return inertia('PAPS/Create', [
            "editData" => $data,
            "mfos"=>$mfos,
            "idmfo"=> $idmfo,
            "functions"=>$functions,
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
        return redirect('/paps/direct')
                ->with('message','Program and Projects updated');
    }

    public function updated(Request $request, $id)
    {

        $data = $this->model::findOrFail($request->id);
        $validatedData=$request->validate(ProgramAndProject::rules(), ProgramAndProject::errorMessages());
        $data->update($validatedData);
        //dd('updated');
        return redirect('/paps/'.$request->idmfo)
                ->with('message','Program and Projects updated');
    }
    public function destroy(Request $request, $id)
    {
        $data = $this->model->findOrFail($id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/paps/direct')->with('warning', 'PAPS deleted');
    }

    public function direct(Request $request){
        //dd("direct");
        $idn = auth()->user()->recid;
        $data = $this->model->with('MFO')
                ->when($request->search, function($query, $searchItem){
                    $query->where('paps_desc','LIKE','%'.$searchItem.'%');
                })
                ->Join(DB::raw('projects.accountaccess acc'),'acc.FFUNCCOD','=','program_and_projects.FFUNCCOD')
                ->Join(DB::raw('projects.systemusers sysu'),'sysu.recid','=','acc.iduser')
                ->where('sysu.recid',$idn)
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();

        //dd($data->pluck('mfo_desc'));
        return inertia('PAPS/Direct',[
            "data"=>$data,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
}
