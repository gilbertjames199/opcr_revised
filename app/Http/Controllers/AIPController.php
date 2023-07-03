<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\MajorFinalOutput;
use App\Models\ProgramAndProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AIPController extends Controller
{
    //
    protected $model;
    protected $paps;
    public function __construct(AccountAccess $model, ProgramAndProject $paps)
    {
        $this->model=$model;
        $this->paps=$paps;
    }


    public function index(Request $request){
        $functions =$this->model
        ->select('ff.FFUNCCOD','FFUNCTION')
        ->Join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','=','accountaccess.ffunccod')
        ->where('iduser',auth()->user()->recid)
        ->get();

        return inertia('AIP/Index', [
            "data"=>$functions
        ]);
    }

    public function direct(Request $request){
        //dd("direct");
        //dd($request->mfosel);
        // dd($request->mfosel);
        $idn = auth()->user()->recid;
        $data = $this->paps->with('MFO')
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
        return inertia('AIP/LBP_Form_2/Index',[
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
