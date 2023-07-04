<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\FFUNCCOD;
use App\Models\IntermediateOutcome;
use App\Models\MajorFinalOutput;
use App\Models\OrganizationalGoal;
use App\Models\ProgramAndProject;
use App\Models\RevisionPlan;
use App\Models\Sectoral;
use App\Models\SocietalGoal;
use App\Models\Strategy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MFOController extends Controller
{
    protected $model;
    public function __construct(MajorFinalOutput $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }
    public function index(Request $request, $id)
    {
        //dd($request);
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


    public function create()
    {
        $SocietalGoals=SocietalGoal::get();
        $SectorOutcomes=Sectoral::get();
        $OrganizationalOutcomes=OrganizationalGoal::get();
        $functions = AccountAccess::where('iduser',auth()->user()->recid)
                    ->select('ff.FFUNCCOD','ff.FFUNCTION')
                    ->join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','accountaccess.ffunccod')
                    ->with('func')->get();
        //$functions = $accounts->pluck('func');
        //dd($accounts);
        return inertia('MFOs/Create', [
            'societalGoals'=>$SocietalGoals,
            'sectorOutcomes'=>$SectorOutcomes,
            'organizationalOutcomes'=>$OrganizationalOutcomes,
            'functions'=>$functions,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {
        $attributes = $request->validate(MajorFinalOutput::rules(), MajorFinalOutput::errorMessages());
        //dd($attributes);
        $this->model->create($attributes);
        $request->pass='';
        return redirect('/mfos/direct')
                ->with('message','MFO added');
    }


    public function show(MajorFinalOutput $majorFinalOutput)
    {

    }


    public function edit(MajorFinalOutput $majorFinalOutput, $id)
    {
        $SocietalGoals=SocietalGoal::get();
        $SectorOutcomes=Sectoral::get();
        $OrganizationalOutcomes=OrganizationalGoal::get();
        $data = $this->model->where('id', $id)->first([
            'id',
            'mfo_desc',
            'id_socgoal',
            'id_org_outcome',
            'id_sec_outcome',
            'FFUNCCOD'
        ]);
        $functions = AccountAccess::where('iduser',auth()->user()->recid)
                    ->select('ff.FFUNCCOD','ff.FFUNCTION')
                    ->join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','accountaccess.ffunccod')
                    ->with('func')->get();
        //dd($idinteroutcome);
        return inertia('MFOs/Create', [
            "editData" => $data,
            "functions"=>$functions,
            'societalGoals'=>$SocietalGoals,
            'sectorOutcomes'=>$SectorOutcomes,
            'organizationalOutcomes'=>$OrganizationalOutcomes,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


    public function update(Request $request, MajorFinalOutput $majorFinalOutput)
    {
        $data = $majorFinalOutput::findOrFail($request->id);
        $validatedData = $request->validate(MajorFinalOutput::rules(), MajorFinalOutput::errorMessages());
        $data->update($validatedData);
        return redirect('/mfos/direct')
                ->with('message','MFOs updated');
    }


    public function destroy(Request $request, $id, $idinteroutcome)
    {
        $count_rev = RevisionPlan::where('idmfo', $id)->count();
        $count_paps = ProgramAndProject::where('idmfo', $id)->count();
        $count_strat = Strategy::where('idmfo', $id)->count();
        $msg="";
        $status ="";
        if($count_rev>0 || $count_paps>0 || $count_strat>0){
            $msg="Unable to delete!";
            $status ="error";
        }else{
            $msg="MFO Successfully deleted!";
            $status ="message";
            $data = $this->model->findOrFail($id);
            $data->delete();
        }
        //dd($request->raao_id);
        return redirect('/mfos/direct')->with($status, $msg);
    }

    public function direct(Request $request){
        dd("direct");
        $idn = auth()->user()->recid;
        //dd($idn);
        $data = $this->model->orderBy('created_at', 'desc')
                ->Join(DB::raw('fms.accountaccess acc'),'acc.FFUNCCOD','=','major_final_outputs.FFUNCCOD')
                ->Join(DB::raw('fms.systemusers sysu'),'sysu.recid','=','acc.iduser')
                ->where('sysu.recid',$idn)
                ->paginate(10)
                ->withQueryString();

                // dd($data);
        //dd($data);
        //dd($data->pluck('mfo_desc'));
        return inertia('MFOs/Direct',[
            "data"=>$data,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
}
