<?php

namespace App\Http\Controllers;

use App\Models\AIP;
use App\Models\AnnualInvestmentPlan;
use App\Models\AppropriationAmount;
use App\Models\ExpectedOutput;
use App\Models\FFUNCCOD;
use App\Models\Program;
use App\Models\ProgramAndProject;
use App\Models\RAAOD;
use App\Models\RAAOHS;
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
        clock()->info('Testing Clockwork');
        clock()->error('This is an error');
        // dd("fdsfsfdsdsf");
        $FFUNCCOD_creator = auth()->user()->office;
        // dd($FFUNCCOD_creator);
        $data = $this->model->with(['program'])
            ->where('FFUNCCOD_creator', $FFUNCCOD_creator)
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
        // dd("create");
        $year_c = date('Y');
        // dd($year_c);
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
        // $functions = DB::connection('mysql2')->table('accountaccess')
        //     ->select(DB::raw('TRIM(accountaccess.ffunccod) AS FFUNCCOD'), 'functions.FFUNCTION')
        //     ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
        //     ->join('functions', 'functions.FFUNCCOD', 'accountaccess.ffunccod')
        //     // ->where('systemusers.recid', $idn)
        //     ->get();
        $functions = FFUNCCOD::select('FFUNCCOD', 'functions.FFUNCTION')->get();


        //PROGRAMS
        // ->join('raaohs', 'raaohs.idprogram','programs.recid')
        // ->groupBy('programs.recid')
        // $programs = DB::connection('mysql2')->table('programs')
        //     ->select(
        // 'raaohs.recid AS raohsid',
        // 'programs.FPROGRAM',
        // 'programs.factcode',
        // 'raaohs.FRAODESC',
        // 'programs.ftype',
        // 'raaohs.tyear',
        // 'programs.recid',
        // DB::raw('TRIM(raaohs.FFUNCCOD) AS FFUNCCOD')
        //     )
        //     ->join('raaohs', 'raaohs.idprogram', 'programs.recid')
        //     ->where('raaohs.tyear', intval($year_p) - 1)
        //     ->OrderBy('programs.FPROGRAM')
        //     ->groupBy('programs.recid')
        //     ->get();
        // ****************************************************************
        // $programs = DB::connection('mysql2')->table('raaohs')
        //     ->join('programs', 'raaohs.idprogram', '=', 'programs.recid')
        //     ->select(
        // 'raaohs.recid AS raohsid',
        // 'programs.FPROGRAM',
        // 'programs.factcode',
        // 'raaohs.FRAODESC',
        // 'programs.ftype',
        // 'raaohs.tyear',
        // 'programs.recid',
        // DB::raw('TRIM(raaohs.FFUNCCOD) AS FFUNCCOD')
        //     )
        //     ->where('raaohs.tyear', intval($year_p) - 1)
        //     ->distinct('programs.recid', 'raaohs.FFUNCCOD')
        //     ->orderBy('FFUNCCOD', 'ASC')
        //     ->get();
        // ********************************************
        // $programs = DB::connection('mysql2')->table('raaohs')
        //     ->join('programs', 'raaohs.idprogram', '=', 'programs.recid')
        //     ->select(
        // 'raaohs.recid AS raohsid',
        // 'programs.FPROGRAM',
        // 'programs.factcode',
        // 'raaohs.FRAODESC',
        // 'programs.ftype',
        // 'raaohs.tyear',
        // 'programs.recid',
        // DB::raw('TRIM(raaohs.FFUNCCOD) AS FFUNCCOD')
        //     )
        //     ->groupBy(
        //         'programs.recid',   // Group by program recid
        //         'FFUNCCOD',         // Group by office code
        //         'programs.FPROGRAM',
        //         'programs.factcode',
        //         'raaohs.FRAODESC',
        //         'programs.ftype',
        //         'raaohs.tyear'
        //     )
        //     ->orderBy('FFUNCCOD', 'ASC')
        //     ->get();
        $programs = Program::join('raaohs', 'raaohs.idprogram', '=', 'programs.recid')
            ->select(
                'raaohs.recid AS raohsid',
                'programs.FPROGRAM',
                'programs.factcode',
                'raaohs.FRAODESC',
                'programs.ftype',
                'raaohs.tyear',
                'programs.recid',
                DB::raw('TRIM(raaohs.FFUNCCOD) AS FFUNCCOD')
            )
            ->where('tyear', $year_c)
            ->groupBy('raaohs.FFUNCCOD', 'programs.recid')
            ->get();

        // dd($programs);
        // $programs = $programs->groupBy('FFUNCCOD');
        // dd($programs[0]);
        // $programs = DB::connection('mysql2')->table('programs')
        //     ->select(
        //         'raaohs.recid AS raohsid',
        //         'programs.FPROGRAM',
        //         'programs.factcode',
        //         'programs.ftype',
        //         // 'programs.F',
        //         'raaohs.FRAODESC',
        //         'programs.recid',
        //         // 'raaohs.recid AS raohsid',
        //         // 'programs.FPROGRAM',
        //         // 'programs.factcode',
        //         // 'raaohs.FRAODESC',
        //         // 'programs.ftype',
        //         'raaohs.tyear',
        //         // 'programs.recid',
        //         DB::raw('TRIM(raaohs.FFUNCCOD) AS FFUNCCOD')
        //     )
        //     ->join('raaohs', 'raaohs.idprogram', 'programs.recid')
        //     ->where('raaohs.tyear', (intval($year_p) - 1))
        //     ->OrderBy('programs.FPROGRAM')
        //     // ->groupBy('raaohs.recid')
        //     ->groupBy('programs.recid')
        //     ->get();
        // dd($programs[0]);
        // $raaod = RAAOD::with(['ooe' => function ($query) {
        //     $query->whereNotNull('recid');
        // }, 'raaohs', 'raaohs.program'])
        //     // ->whereHas('ooe',
        //     ->whereHas('raaohs')
        //     ->whereHas('raaohs', function ($query) {
        //         $query->whereHas('program');
        //     })
        // ->get();
        // dd();
        // $raaod = RAAOD::with(['ooe', 'raaohs', 'raaohs.program'])
        //     ->whereHas('raaohs')->get()
        $year_current = date('Y');
        // dd($year_current);
        // $programs = RAAOD::select(
        //     'raaods.*',
        //     'programs.FPROGRAM',
        //     'programs.factcode',
        //     'programs.ftype',
        //     'raaohs.tyear',
        //     'programs.recid AS program_id',
        //     'raaohs.FRAODESC',
        //     'raaohs.FRAOTYPE',
        //     'raaohs.FFUNCCOD'

        // )
        //     ->join('raaohs', 'raaohs.recid', '=', 'raaods.idraao')
        //     ->join('programs', 'programs.recid', '=', 'raaohs.idprogram')
        //     ->join('ooes', 'ooes.recid', '=', 'raaods.idooe') // Keeps raaods even if ooe is missing
        //     // ->where('tyear', $year_current)
        //     ->groupBy('idraao')
        //     ->groupBy('program_id')
        //     ->with(['ooe', 'raaohs', 'raaohs.program'])
        //     ->get()
        //     ->map(function ($item) {
        //         // if ($item->ooe) {
        //         //     dd($item->raaohs);
        //         // }
        //         // dd($item->ooe);
        //         // dd($item);
        //         return [
        //             "raohsid" => $item->idraao,
        //             "FPROGRAM" => $item->FPROGRAM,
        //             "factcode" => $item->factcode,
        //             "ftype" => $item->ftype,
        //             "tyear" => $item->tyear,
        //             "recid" => $item->program_id,
        //             "FFUNCCOD" => trim($item->FFUNCCOD),
        //             "FRAODESC" => $item->FRAODESC,
        //             "FRAOTYPE" => $item->FRAOTYPE,
        //             "famount" => $item->famount,
        //             // "FRAAODESC" => $item->
        //             // "FRAAODESC" => $item->
        //             // "FPROGRAM" => $item->raaohs ? $item->raaohs->idprogram : "",
        //             // "FPROGRAM" => $item->raaohs ? ($item->raaohs->program ? $item->raaohs->program->FPROGRAM : "") : "",
        //             // "factcode" => $item->raaohs ? ($item->raaohs->program ? $item->raaohs->program->factcode : "") : "",
        //             // "FRAODESC" => $item->raaohs ? $item->raaohs->FRAODESC : "",
        //             // "ftype" => $item->raaohs ? ($item->raaohs->program ? $item->raaohs->program->ftype : "") : "",
        //             // "tyear" => $item->raaohs ? ($item->raaohs->program ? $item->raaohs->program->tyear : "") : "",
        //             // "recid" => $item->raaohs ? ($item->raaohs->program ? $item->raaohs->program->recid : "") : "",
        //             // "FFUNCCOD" => $item->raaohs ? trim($item->raaohs->FFUNCCOD) : "",
        //         ];
        //     });
        // dd($programs);
        // dd(count($programs));
        // dd($programs[0]);
        // dd($programs->pluck('raaohsid', 'FPROGRAM'));
        // $plucked = $programs->pluck(
        //     "FRAAODESC",
        //     "FRAOTYPE",
        //     "famount",
        //     "FRAAODESC",
        //     "FRAAODESC",
        //     "year"
        // );

        // dd($year_c);
        //DAPAT year_c sa WHERE ang nakafilter
        // $ooes = $this->getRaaoOOE($raaod);
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
        // dd(auth()->user());
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
            // 'planned_total' => 'required',
        ]);
        $planned_total = $this->calculate_total_amount($request);
        //dd($attributes);
        $ffunctions = FFUNCCOD::where('FFUNCCOD', $request->FFUNCCOD)->first();
        $ffunction = $ffunctions ? $ffunctions->FFUNCTION : "";
        // $request->merge(['FFUNCTION' => $ffunction]);
        // dd($request);
        // $this->model->create($attributes);
        $counter = AnnualInvestmentPlan::where('year', $request->year)
            ->where('FFUNCCOD', $request->FFUNCCOD)
            ->where('raao_type', $request->raao_type)
            ->where('program_id', $request->program_id)
            // ->where('aip_code', $request->aip_code)
            ->where('source', $request->source)
            ->count();

        // dd($counter);
        $type = "error";
        $msg = "Duplicate entry!!!! Set a different year, program, office, or raao type";
        if (intval($counter < 1)) {
            $type = "message";
            $msg = "AIP successfully added";
            // *****************************************
            $FFUNCCOD_creator = auth()->user()->office;
            $aip = new AnnualInvestmentPlan();
            $aip->year = $request->year;
            $aip->FFUNCTION = $ffunction;
            $aip->FFUNCCOD = $request->FFUNCCOD;
            $aip->FFUNCCOD_creator = $FFUNCCOD_creator;
            $aip->raao_desc = $request->raao_desc;
            $aip->raao_type = $request->raao_type;
            $aip->program_id = $request->program_id;
            $aip->aip_code = $request->aip_code;
            $aip->source = $request->source;
            $aip->planned_ps = $request->planned_ps;
            $aip->planned_mooe = $request->planned_mooe;
            $aip->planned_fe = $request->planned_fe;
            $aip->planned_co = $request->planned_co;
            $aip->planned_total = $planned_total;
            $aip->approved_ps = $request->approved_ps ? $request->approved_ps : "0";
            $aip->approved_mooe = $request->approved_mooe ? $request->approved_mooe : "0";
            $aip->approved_fe = $request->approved_fe ? $request->approved_fe : "0";
            $aip->approved_co = $request->approved_co ? $request->approved_co : "0";
            $aip->approved_total = $request->approved_total ? $request->approved_total : "0";
            $aip->final_tag = $request->final_tag ? $request->final_tag : "-";
            $aip->created_at = $request->created_at;
            $aip->updated_at = $request->updated_at;
            $aip->save();
            $aip_id = $aip->id;

            $year = intval($request->year) - 1;
            RAAOHS::join('raaods', 'raaods.idraao', '=', 'raaohs.recid')
                ->select('ooes.FOOEDESC', 'ooes.recid AS idoee', 'raaohs.idprogram', DB::raw('SUM(raaods.famount) as total_famount'))
                ->join('ooes', 'ooes.recid', '=', 'raaods.idooe')
                ->where('raaohs.FFUNCCOD', $request->FFUNCCOD)
                ->where('raaohs.FRAOTYPE', $request->raao_type)
                ->where('raaohs.idprogram', $request->program_id)
                ->where('ooes.FACTCODE', 'LIKE', '5%')
                ->whereYear('raaods.fdate', $year)
                ->groupBy('ooes.recid')
                ->get()
                ->map(function ($item) use (
                    $request,
                    $year,
                    $aip_id
                ) {
                    // dd($item);
                    $approp = new AppropriationAmount();
                    $approp->aip_id = $aip_id;
                    $approp->aip_code = "";
                    $approp->aip_code_parent = $request->aip_code;
                    $approp->aip_code_child = "";
                    $approp->idooe = $item->idoee;
                    $approp->amount = $item->total_famount;
                    $approp->save();
                });
            return redirect('/annual-investment-plans')
                ->with($type, $msg);
        } else {
            return redirect()->back()->with($type, $msg);
        }
        // ->where('raao_type', $request->raao_type)


        // $rrr = RAAOHS::join('raaods', 'raaods.idraao', '=', 'raaohs.recid')
        //     ->select('ooes.FOOEDESC', 'raaohs.idprogram', DB::raw('SUM(raaods.famount) as total_famount'))
        //     ->join('ooes', 'ooes.recid', '=', 'raaods.idooe')
        //     ->where('raaohs.FFUNCCOD', $request->FFUNCCOD)
        //     ->where('raaohs.FRAOTYPE', $request->raao_type)
        //     ->whereYear('raaods.fdate', $request->year)
        //     ->groupBy('ooes.recid')
        //     ->get();

        // dd($aip_id);
        // dd($request);


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
        $programs = Program::join('raaohs', 'raaohs.idprogram', '=', 'programs.recid')
            ->select(
                'raaohs.recid AS raohsid',
                'programs.FPROGRAM',
                'programs.factcode',
                'raaohs.FRAODESC',
                'programs.ftype',
                'raaohs.tyear',
                'programs.recid',
                DB::raw('TRIM(raaohs.FFUNCCOD) AS FFUNCCOD')
            )
            ->groupBy('raaohs.FFUNCCOD', 'programs.recid')
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
        $FFUNCCOD_creator = auth()->user()->office;
        // $request->merge(['FFUNCTION' => $ffunction]);
        // dd($request);
        // $this->model->create($attributes);
        $aip = AnnualInvestmentPlan::where('id', $id)->first();
        $aip->year = $request->year;
        $aip->FFUNCTION = $ffunction;
        $aip->FFUNCCOD = $request->FFUNCCOD;
        $aip->FFUNCCOD_creator = $FFUNCCOD_creator;
        $aip->raao_type = $request->raao_type;
        $aip->program_id = $request->program_id;
        $aip->aip_code = $request->aip_code;
        $aip->source = $request->source;
        $aip->raao_desc = $request->raao_desc;
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
    public function calculate_total_amount(Request $request)
    {
        // dd($request);
        $totalFamount = DB::connection('mysql2')->table('raaohs')
            ->join('raaods', 'raaods.idraao', '=', 'raaohs.recid')
            ->join('ooes', 'ooes.recid', '=', 'raaods.idooe')
            ->when($request->year, function ($query) use ($request) {
                $myyear = intval($request->year) - 1;
                $query->whereYear('raaods.fdate', $myyear);
            })
            ->when($request->program_id, function ($query) use ($request) {
                return $query->where('raaohs.idprogram', $request->program_id);
            })
            ->when($request->FFUNCCOD, function ($query) use ($request) {
                return $query->where('raaohs.FFUNCCOD', $request->FFUNCCOD);
            })
            ->when($request->raao_type, function ($query) use ($request) {
                return $query->where('raaohs.FRAOTYPE', $request->raao_type);
            })
            // ->where('raaohs.idprogram', $request->program_id)
            // ->where('raaohs.FFUNCCOD', $request->FFUNCCOD)
            // ->where('raaohs.FRAOTYPE', $request->raao_type)
            ->where('ooes.FACTCODE', 'LIKE', '5%')
            ->sum('raaods.famount');
        // dd($request->params);
        return $totalFamount;
        // $data = DB::connection('mysql2')->table('raaohs')
        //     ->join('raaods', 'raaods.idraao', '=', 'raaohs.recid')
        //     ->join('ooes', 'ooes.recid', '=', 'raaods.idooe')
        //     ->when($request->year, function ($query) use ($request) {
        //         $myyear = intval($request->year) - 1;
        //         $query->whereYear('raaods.fdate', $myyear);
        //     })
        //     ->when($request->program_id, function ($query) use ($request) {
        //         return $query->where('raaohs.idprogram', $request->program_id);
        //     })
        //     ->when($request->FFUNCCOD, function ($query) use ($request) {
        //         return $query->where('raaohs.FFUNCCOD', $request->FFUNCCOD);
        //     })
        //     ->when($request->raao_type, function ($query) use ($request) {
        //         return $query->where('raaohs.FRAOTYPE', $request->raao_type);
        //     })
        //     ->where('ooes.FACTCODE', 'LIKE', '5%')
        //     ->selectRaw('SUM(raaods.famount) as total_famount, MAX(raaohs.FRAODESC) as FRAODESC')
        //     ->first();
        // if($data->total_famount>=0){
        //     return $data;
        // }
        // return $data;
        // return $request;
    }
    public function getRaaoOOE($raaod)
    {
        // select(
        //     'raaohs.FRAODESC',
        //     'raaohs.FRAOTYPE',
        //     'raaods.famount',
        //     DB::raw('YEAR(raaods.fdate) as year')
        // )
        //     ->join('raaohs', 'raaohs.recid', 'raaods.idraao')
        //     ->join('ooes', 'ooes.recid', 'raaods.idooe')
        return $raaod
            ->map(function ($item) {
                // dd($item);
                return [
                    "FRAAODESC" => $item->raaohs ? $item->raaohs->FRAODESC : "",
                    "FRAOTYPE" => $item->raaohs ? $item->raaohs->FRAOTYPE : "",
                    "famount" => $item->famount,
                    "FRAAODESC" => $item->raaohs ? $item->raaohs->FRAODESC : "",
                    "FRAAODESC" => $item->raaohs ? $item->raaohs->FRAODESC : "",
                    "year" => ($item->fdate !== '0000-00-00') ? date('Y', strtotime($item->fdate)) : null
                ];
            });
    }
}
