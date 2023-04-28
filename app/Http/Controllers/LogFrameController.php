<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\MajorFinalOutput;
use App\Models\OrganizationalGoal;
use App\Models\Outcome;
use App\Models\Sectoral;
use App\Models\SocietalGoal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class LogFrameController extends Controller
{
    public function index(Request $request){
        //dd('logframe');
        $accounts = AccountAccess::where('iduser',auth()->user()->recid)->with('func')->get();
        $functions = $accounts->pluck('func');
        return inertia('LogFrame/Index', [
            "data"=>$functions,
        ]);
    }

    public function showlog($FFUNCCOD){
        //dd('showlog');
        $soc_goal= SocietalGoal::get();
        //econ
        $sec_goal_econ = Sectoral::Join('sectors','sectors.id','sectoral_goals.sector')
                        ->where('sectors.sector_name','LIKE','%Econ%')
                        ->get();
        $sec_goal_soc = Sectoral::Join('sectors','sectors.id','sectoral_goals.sector')
                        ->where('sectors.sector_name','LIKE','%Social%')
                        ->get();
        $sec_goal_gen = Sectoral::Join('sectors','sectors.id','sectoral_goals.sector')
                        ->where('sectors.sector_name','LIKE','%General%')
                        ->get();
        $sec_goal=Sectoral::Join('sectors','sectors.id','sectoral_goals.sector')
                    ->get();

        $organizational=OrganizationalGoal::where('FFUNCCOD', $FFUNCCOD)->get();

        $mfos = MajorFinalOutput::where('FFUNCCOD',$FFUNCCOD)->with('paps')->get();
        return inertia('LogFrame/logframe',[
            "societal"=>$soc_goal,
            "sec_econ"=>$sec_goal_econ,
            "sec_social"=>$sec_goal_soc,
            "sec_general"=>$sec_goal_gen,
            "organizational"=>$organizational,
            "sec_goal"=>$sec_goal,
            "mfos"=>$mfos,
            "FFUNCCOD"=>$FFUNCCOD,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);


        //dd($sec_goal_econ);
    }
}
