<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\ChiefAgenda;
use App\Models\EconomicAgenda;
use App\Models\ELA;
use App\Models\MajorFinalOutput;
use App\Models\PopspAgency;
use App\Models\ProgramAndProject;
use App\Models\ResearchAgenda;
use App\Models\RevisionPlan;
use App\Models\SDG;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DevelopmentFundController extends Controller
{
    //

    public function dev_fund_index(Request $request, $id)
    {
        // dd($id);
        // dd()
        $no_of_pages =10;
        if($request->no_of_pages){
            $no_of_pages = $request->no_of_pages;
        }
        $data=RevisionPlan::with(['paps'])
                ->when($id!=0, function($query) use ($id){
                    $query->where('id', $id);
                })
                ->whereHas('paps', function($query) use ($id){
                    $query->where('source_of_funds','dev');
                })->paginate($no_of_pages);
        // dd($data, $id);
        return inertia('RevisionPlans/DevelopmentFund/Index', [
            'data'=>$data,
            'id'=>$id
        ]);
        // dd($data);
    }

    public function dev_fund_create(Request $request)
    {
        // USERS
        $us = auth()->user();
        $idn = $us->recid;
        $user_FFUNCCOD = $us->office;
        //MFO
        $mfos1 = MajorFinalOutput::get();
        $mfos = [];
        $mfos = clone ($mfos1);

        // ACCOUNT ACCESS
        $access = DB::connection('mysql2')->table('accountaccess')
            ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
            ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
            ->where('systemusers.recid', $idn)
            ->get();
        // dd($access);
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();
        if (empty($accessFFUNCCOD)) {
            $accessFFUNCCOD[] = $user_FFUNCCOD;
        }


        $chief_executive_agenda = ChiefAgenda::get();
        $socio_economic = EconomicAgenda::get();
        $sustainable = SDG::get();
        $executive_legislative = ELA::get();
        $research = ResearchAgenda::get();


        $functions = AccountAccess::select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->where(function ($query) {
                $query->where('ff.FFUNCTION', 'LIKE', '%Office%')
                    ->orWhere('ff.FFUNCTION', 'LIKE', '%Function%')
                    ->orWhere('ff.FFUNCTION', 'LIKE', '%Hospital%');
            })
            ->with('func');
        if (auth()->user()->recid !== 545) {
            $functions = clone ($functions)->where('iduser', auth()->user()->recid);
            $mfos = $mfos1->whereIn('FFUNCCOD', $accessFFUNCCOD);
            // $motherPAPS = clone ($motherPAPS)->whereIn('FFUNCCOD', $accessFFUNCCOD);
        }
        $functions = clone ($functions)
            ->distinct('FFUNCCOD')
            ->orderBy('FFUNCTION', 'ASC')
            ->get();
        // dd($functions);
        if(!isset($functions) || $functions->isEmpty()){
            // dd('dasdasdasdasd');
            $functions = FFUNCCOD::where('department_code', auth()->user()->department_code)->get();
        }
        // dd($functions, auth()->user()->department_code);
        $popsp_agencies =PopspAgency::all();
        // dd($pops_agencies);
        // dd($functions);
        return inertia('RevisionPlans/DevelopmentFund/Create', [
            'mfos' => $mfos,
            'chief_agenda' => $chief_executive_agenda,
            'socio_economic' => $socio_economic,
            'sustainable' => $sustainable,
            'executive_legislative' => $executive_legislative,
            'research' => $research,
            'functions' => $functions,
            'popsp_agencies' => $popsp_agencies,
            // 'motherPAPS' => $motherPAPS,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function dev_fund_store(Request $request)
    {
        //
    }

    public function dev_fund_edit(Request $request)
    {
        //
    }

    public function dev_fund_update(Request $request)
    {
        //
    }

    public function dev_fund_delete(Request $request)
    {
        //
    }
}
