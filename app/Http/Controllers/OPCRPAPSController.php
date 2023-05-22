<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\MajorFinalOutput;
use App\Models\ProgramAndProject;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OPCRPAPSController extends Controller
{
    protected $model;
    public function __construct(ProgramAndProject $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }

    public function index(Request $request, $id)
    {
        //dd("not direct");
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

    public function direct(Request $request){
        //dd("direct");
        //dd($request->mfosel);
        $idn = auth()->user()->recid;
        $data = $this->model->with('MFO')
                ->when($request->search, function($query, $searchItem){
                    $query->where('paps_desc','LIKE','%'.$searchItem.'%');
                })
                ->when($request->mfosel, function($query, $searchItem){
                    $query->where('idmfo','=',$searchItem);
                })
                ->Join(DB::raw('fms.accountaccess acc'),'acc.FFUNCCOD','=','program_and_projects.FFUNCCOD')
                ->Join(DB::raw('fms.systemusers sysu'),'sysu.recid','=','acc.iduser')
                ->where('sysu.recid',$idn)
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();
        $mfos=MajorFinalOutput::all();
        //dd($mfos);
        //dd($data->pluck('mfo_desc'));
        return inertia('OPCRPaps/Direct',[
            "data"=>$data,
            "mfos"=>$mfos,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
}
