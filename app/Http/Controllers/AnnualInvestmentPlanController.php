<?php

namespace App\Http\Controllers;

use App\Models\AIP;
use App\Models\AnnualInvestmentPlan;
use App\Models\AppropriationAmount;
use App\Models\ExpectedOutput;
use App\Models\FFUNCCOD;
use App\Models\ProgramAndProject;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AnnualInvestmentPlanController extends Controller
{
    //
    protected $model;
    public function __construct(AnnualInvestmentPlan $model)
    {
        $this->model = $model;
    }

    //
    public function index(Request $request)
    {

        $data = $this->model->with(['program'])
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();
        return inertia('AnnualInvestmentPlan/Index', [
            "data" => $data,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request)
    {

        $year_c = date('Y');
        $year_n = intval($year_c) + 1;
        $year_p = intval($year_c) - 1;
        //AIP CODE
        // $aip = AIP::where('idpaps', $idpaps)->first();
        // $total_budget_year = $this->getTotalAppropriationByPAPS($idpaps);
        //dd("create: ".$idpaps);
        // $paps = ProgramAndProject::find($idpaps);
        // $all_paps = ProgramAndProject::get();
        $accounts = DB::connection('mysql2')->table('chartofaccounts')->get();
        $acc = $accounts->pluck('FTITLE');
        $code = $accounts->pluck('FACTCODE');

        //FUNCTIONS
        $idn = auth()->user()->recid;
        $functions = DB::connection('mysql2')->table('accountaccess')
            ->select(DB::raw('TRIM(accountaccess.ffunccod) AS FFUNCCOD'), 'functions.FFUNCTION')
            ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
            ->join('functions', 'functions.FFUNCCOD', 'accountaccess.ffunccod')
            ->where('systemusers.recid', $idn)
            ->get();

        //PROGRAMS
        // ->join('raaohs', 'raaohs.idprogram','programs.recid')
        // ->groupBy('programs.recid')
        $programs = DB::connection('mysql2')->table('programs')
            ->select(
                'raaohs.recid AS raohsid',
                'programs.FPROGRAM',
                'programs.factcode',
                'programs.ftype',
                'raaohs.tyear',
                'programs.recid',
                DB::raw('TRIM(raaohs.FFUNCCOD) AS FFUNCCOD')
            )
            ->join('raaohs', 'raaohs.idprogram', 'programs.recid')
            ->where('raaohs.tyear', $year_c)
            ->OrderBy('programs.FPROGRAM')
            ->groupBy('raaohs.recid')
            ->get();

        $ooes = [];
        return inertia("AnnualInvestmentPlan/Create", [
            // "pap1" => $paps,
            // "paps" => $all_paps,
            "accounts" => $acc,
            "codes" => $code,
            // "aip" => $aip,
            // "total_budget_year" => $total_budget_year,
            "functions" => $functions,
            "programs" => $programs,
            "ooes" => $ooes,
        ]);
    }

    public function store(Request $request)
    {
        // dd($request);
        // $dept_code = auth()->user()->department_code;
        // $request->merge(['department_code' => $dept_code]);

        $attributes = $request->validate([
            'year' => 'required',
            'FFUNCCOD' => 'required',
            'raao_type' => 'required',
            'program_id' => 'required',
            'aip_code' => 'required',
            'source' => 'required',
            'planned_ps' => 'required',
            'planned_mooe' => 'required',
            'planned_fe' => 'required',
            'planned_co' => 'required',
            'planned_total' => 'required',
        ]);
        //dd($attributes);
        $ffunctions = FFUNCCOD::where('FFUNCCOD', $request->FFUNCCOD)->first();
        $ffunction = $ffunctions ? $ffunctions->FFUNCTION : "";
        // $request->merge(['FFUNCTION' => $ffunction]);
        // dd($request);
        // $this->model->create($attributes);
        $aip = new AnnualInvestmentPlan();
        $aip->year = $request->year;
        $aip->FFUNCTION = $ffunction;
        $aip->FFUNCCOD = $request->FFUNCCOD;
        $aip->raao_type = $request->raao_type;
        $aip->program_id = $request->program_id;
        $aip->aip_code = $request->aip_code;
        $aip->source = $request->source;
        $aip->planned_ps = $request->planned_ps;
        $aip->planned_mooe = $request->planned_mooe;
        $aip->planned_fe = $request->planned_fe;
        $aip->planned_co = $request->planned_co;
        $aip->planned_total = $request->planned_total;
        $aip->approved_ps = $request->approved_ps ? $request->approved_ps : "0";
        $aip->approved_mooe = $request->approved_mooe ? $request->approved_mooe : "0";
        $aip->approved_fe = $request->approved_fe ? $request->approved_fe : "0";
        $aip->approved_co = $request->approved_co ? $request->approved_co : "0";
        $aip->approved_total = $request->approved_total ? $request->approved_total : "0";
        $aip->final_tag = $request->final_tag ? $request->final_tag : "-";
        $aip->created_at = $request->created_at;
        $aip->updated_at = $request->updated_at;
        $aip->save();
        return redirect('/annual-investment-plans')
            ->with('message', 'AIP successfully added');
    }

    public function edit(Request $request, $id)
    {
        $data = $this->model->where('id', $id)->first();
        $year_c = date('Y');
        $year_n = intval($year_c) + 1;
        $year_p = intval($year_c) - 1;
        //AIP CODE
        // $aip = AIP::where('idpaps', $idpaps)->first();
        // $total_budget_year = $this->getTotalAppropriationByPAPS($idpaps);
        //dd("create: ".$idpaps);
        // $paps = ProgramAndProject::find($idpaps);
        // $all_paps = ProgramAndProject::get();
        $accounts = DB::connection('mysql2')->table('chartofaccounts')->get();
        $acc = $accounts->pluck('FTITLE');
        $code = $accounts->pluck('FACTCODE');

        //FUNCTIONS
        $idn = auth()->user()->recid;
        $functions = DB::connection('mysql2')->table('accountaccess')
            ->select(DB::raw('TRIM(accountaccess.ffunccod) AS FFUNCCOD'), 'functions.FFUNCTION')
            ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
            ->join('functions', 'functions.FFUNCCOD', 'accountaccess.ffunccod')
            ->where('systemusers.recid', $idn)
            ->get();

        //PROGRAMS
        // ->join('raaohs', 'raaohs.idprogram','programs.recid')
        // ->groupBy('programs.recid')
        $programs = DB::connection('mysql2')->table('programs')
            ->select(
                'raaohs.recid AS raohsid',
                'programs.FPROGRAM',
                'programs.factcode',
                'programs.ftype',
                'raaohs.tyear',
                'programs.recid',
                DB::raw('TRIM(raaohs.FFUNCCOD) AS FFUNCCOD')
            )
            ->join('raaohs', 'raaohs.idprogram', 'programs.recid')
            ->where('raaohs.tyear', $year_c)
            ->OrderBy('programs.FPROGRAM')
            ->groupBy('raaohs.recid')
            ->get();

        $ooes = [];
        return inertia("AnnualInvestmentPlan/Create", [
            // "pap1" => $paps,
            // "paps" => $all_paps,
            "accounts" => $acc,
            "codes" => $code,
            // "aip" => $aip,
            // "total_budget_year" => $total_budget_year,
            "editData" => $data,
            "functions" => $functions,
            "programs" => $programs,
            "ooes" => $ooes,
        ]);
    }

    public function update(Request $request, $id)
    {
        // dd("update" . $id);
        $attributes = $request->validate([
            'year' => 'required',
            'FFUNCCOD' => 'required',
            'raao_type' => 'required',
            'program_id' => 'required',
            'aip_code' => 'required',
            'source' => 'required',
            'planned_ps' => 'required',
            'planned_mooe' => 'required',
            'planned_fe' => 'required',
            'planned_co' => 'required',
            'planned_total' => 'required',
        ]);
        //dd($attributes);
        $ffunctions = FFUNCCOD::where('FFUNCCOD', $request->FFUNCCOD)->first();
        $ffunction = $ffunctions ? $ffunctions->FFUNCTION : "";
        // $request->merge(['FFUNCTION' => $ffunction]);
        // dd($request);
        // $this->model->create($attributes);
        $aip = AnnualInvestmentPlan::where('id', $id)->first();
        $aip->year = $request->year;
        $aip->FFUNCTION = $ffunction;
        $aip->FFUNCCOD = $request->FFUNCCOD;
        $aip->raao_type = $request->raao_type;
        $aip->program_id = $request->program_id;
        $aip->aip_code = $request->aip_code;
        $aip->source = $request->source;
        $aip->planned_ps = $request->planned_ps;
        $aip->planned_mooe = $request->planned_mooe;
        $aip->planned_fe = $request->planned_fe;
        $aip->planned_co = $request->planned_co;
        $aip->planned_total = $request->planned_total;
        $aip->approved_ps = $request->approved_ps ? $request->approved_ps : "0";
        $aip->approved_mooe = $request->approved_mooe ? $request->approved_mooe : "0";
        $aip->approved_fe = $request->approved_fe ? $request->approved_fe : "0";
        $aip->approved_co = $request->approved_co ? $request->approved_co : "0";
        $aip->approved_total = $request->approved_total ? $request->approved_total : "0";
        $aip->final_tag = $request->final_tag ? $request->final_tag : "-";
        $aip->created_at = $request->created_at;
        $aip->updated_at = $request->updated_at;
        $aip->save();
        return redirect('/annual-investment-plans')
            ->with('message', 'AIP successfully added');
    }

    public function destroy(Request $request, $id)
    {
        $status = "message";
        $msg = "AIP deleted";
        $data = $this->model->findOrFail($id);
        $data->delete();

        $eo = ExpectedOutput::where('aip_id', $id)->get();
        $eo->each->delete();

        $approp = AppropriationAmount::where('aip_id', $id)->get();
        $approp->each->delete();
        //dd($request->raao_id);
        return redirect('/annual-investment-plans')->with($status, $msg);
    }
}
