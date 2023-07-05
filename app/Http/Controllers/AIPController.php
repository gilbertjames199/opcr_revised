<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\AIP;
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
    protected $aip;
    public function __construct(AccountAccess $model, ProgramAndProject $paps, AIP $aip)
    {
        $this->model=$model;
        $this->paps=$paps;
        $this->aip=$aip;
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
        // $aip = $this->aip
        // ->when($request->search, function($query, $searchItem){
        //     $query->where('AIP_Code','LIKE','%'.$searchItem.'%');
        // });


        // ->with(['AIP' =>function($query)use($request){
        //     $query->when($request->search, function($query, $searchItem){
        //         //dd('search: '.$searchItem);
        //         $query->where('AIP_Code','LIKE','%'.$searchItem.'%');
        //     });
        // }])
        $data = $this->paps->with('MFO')->with('AIP')
                ->when($request->search, function($query) use ($request){
                    $query->where(AIP::select('AIP_Code')->whereColumn('a_i_p_s.idpaps','program_and_projects.id'),'LIKE','%'.$request->search.'%')
                            ->orWhere('program_and_projects.paps_desc', 'LIKE','%'.$request->search.'%');
                })
                ->when($request->mfosel, function($query, $searchItem){
                    $query->where('idmfo','=',$searchItem);
                })
                ->Join(DB::raw('fms.accountaccess acc'),'acc.FFUNCCOD','=','program_and_projects.FFUNCCOD')
                ->Join(DB::raw('fms.systemusers sysu'),'sysu.recid','=','acc.iduser')
                ->where('sysu.recid',$idn)
                ->groupBy('program_and_projects.paps_desc')
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();

        $mfos=MajorFinalOutput::all();
        $aip=AIP::all();
        //dd($mfos);
        //dd($data->pluck('mfo_desc'));
        return inertia('AIP/LBP_Form_2/Index',[
            "data"=>$data,
            "mfos"=>$mfos,
            "aip"=>$aip,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function create(Request $request, $id){
        //dd('create');
        $paps = ProgramAndProject::findOrFail($id);
        return inertia('AIP/LBP_Form_2/Create',[
            'paps'=>$paps,
            'idpaps'=>$id,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function store(Request $request){
        // dd($request);
        $id = $request->idpaps;
        $attributes = $request->validate([
            'AIP_Code' => 'required',
            'PS' => 'required',
            'MOOE' => 'required',
            'CO' => 'required',
            'idpaps'=>'required',
        ]);
        // dd($attributes);
        //dd($attributes);
        $this->aip->create($attributes);
        return redirect('AIP/direct')
                ->with('message','Output added');
    }

    public function edit(Request $request, $id){
        $data = $this->aip->where('id', $id)->first([
            'id',
            'AIP_Code',
            'PS',
            'MOOE',
            'CO',
            'idpaps'
        ]);
        // dd($data);
        $paps = ProgramAndProject::findOrFail($data->idpaps);
        return inertia('AIP/LBP_Form_2/Create', [
            "editData" => $data,
            "idpaps"=>$data->idpaps,
            'paps'=>$paps,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


    public function update(Request $request)
    {
        // dd($request);
        $data = $this->aip->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'AIP_Code'=>$request->AIP_Code,
            'PS'=>$request->PS,
            'MOOE'=>$request->MOOE,
            'CO'=>$request->CO,
            'idpaps'=>$request->idpaps
        ]);

        return redirect('AIP/direct')
                ->with('message','Output updated');
    }

}
