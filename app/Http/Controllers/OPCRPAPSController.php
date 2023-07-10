<?php

namespace App\Http\Controllers;

use App\Helpers\PaginationHelper;
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
                ->when($request->mfosel, function($query, $searchItem){
                    $query->where('idmfo','=',$searchItem);
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
        // dd($request->mfosel);
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
                ->get();
        $mfos=MajorFinalOutput::all();

        //USER ACCESS
        $idn = auth()->user()->recid;
        $access = DB::connection('mysql2')->table('accountaccess')
                ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
                ->join('systemusers','systemusers.recid','=','accountaccess.iduser')
                ->where('systemusers.recid',$idn)
                ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();

        //FILTER PAPS
        $result = $data->whereIn('FFUNCCOD', $accessFFUNCCOD);
        $showPerPage=10;
        $paginatedResult =PaginationHelper::paginate($result, $showPerPage);

        //FILTER MFO
        $mfos = $mfos->whereIn('FFUNCCOD', $accessFFUNCCOD);
        //dd($mfos);
        //dd($data->pluck('mfo_desc'));
        return inertia('OPCRPaps/Direct',[
            "data"=>$paginatedResult,
            "mfos"=>$mfos,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
}
