<?php

namespace App\Http\Controllers;

use App\Helpers\PaginationHelper;
use App\Models\AccountAccess;
use App\Models\ChiefAgenda;
use App\Models\EconomicAgenda;
use App\Models\ELA;
use App\Models\FFUNCCOD;
use App\Models\MajorFinalOutput;
use App\Models\Monitoring;
use App\Models\OfficeAccountable;
use App\Models\Output;
use App\Models\ProgramAndProject;
use App\Models\Quality;
use App\Models\QualityRemarks;
use App\Models\rating;
use App\Models\RatingRemarks;
use App\Models\ResearchAgenda;
use App\Models\RevisionPlan;
use App\Models\SDG;
use App\Models\Strategy;
use App\Models\SuccessIndicator;
use App\Models\Target;
use App\Models\Timeliness;
use App\Models\TimelinessRemarks;
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
        //dd("not direct");
        $data = ProgramAndProject::where('idmfo', $id)
            ->with('MFO')
            ->when($request->search, function ($query, $searchItem) {
                $query->where('paps_desc', 'LIKE', '%' . $searchItem . '%');
            })
            ->orderByRaw(
                DB::raw("CASE WHEN program_and_projects.type = 'GAS' THEN 0
                            WHEN program_and_projects.type = 'Project' THEN 1
                            WHEN program_and_projects.type = 'Program' THEN 2
                            WHEN program_and_projects.type = 'Activity' THEN 3 ELSE 4
                            END")
            )
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();

        //$data = ProgramAndProject::get();

        //dd($data);
        return inertia('PAPS/Index', [
            "data" => $data,
            "idmfo" => $id,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function create($id)
    {
        $idn = auth()->user()->recid;
        $mfos1 = MajorFinalOutput::get();
        $mfos = [];
        $access = DB::connection('mysql2')->table('accountaccess')
            ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
            ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
            ->where('systemusers.recid', $idn)
            ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();

        //$showPerPage=10;

        $chief_executive_agenda = ChiefAgenda::get();
        $socio_economic = EconomicAgenda::get();
        $sustainable = SDG::get();
        $executive_legislative = ELA::get();
        $research = ResearchAgenda::get();
        //dd($id);
        $year_object = DB::connection('mysql2')
            ->table('raaohs')
            ->select(DB::raw('DISTINCT(tyear)'))
            ->orderBy('tyear', 'ASC')
            ->get();
        // $accounts = AccountAccess::where('iduser',auth()->user()->recid)->with('func')->get();
        // $functions = $accounts->pluck('func');
        // $functions = AccountAccess::where('iduser',auth()->user()->recid)
        //             ->select('ff.FFUNCCOD','ff.FFUNCTION')
        //             ->join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','accountaccess.ffunccod')
        //             ->with('func')->get();
        $functions = AccountAccess::select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->with('func');
        if (auth()->user()->recid !== 545) {
            $functions = clone ($functions)->where('iduser', auth()->user()->recid);
            $mfos = $mfos1->whereIn('FFUNCCOD', $accessFFUNCCOD);
        }
        $functions = clone ($functions)
            ->distinct('FFUNCCOD')
            ->get();

        return inertia('PAPS/Create', [
            'mfos' => $mfos,
            'chief_agenda' => $chief_executive_agenda,
            'socio_economic' => $socio_economic,
            'sustainable' => $sustainable,
            'executive_legislative' => $executive_legislative,
            'research' => $research,
            'idmfo' => $id,
            'functions' => $functions,
            'years' => $year_object,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function direct_create()
    {
        //dd("direct create");
        $idn = auth()->user()->recid;
        $mfos1 = MajorFinalOutput::get();
        $mfos = [];
        $mfos = clone ($mfos1);
        $access = DB::connection('mysql2')->table('accountaccess')
            ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
            ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
            ->where('systemusers.recid', $idn)
            ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();

        //$showPerPage=10;

        //dd($mfos);
        //dd($mfos);
        //$mfos =PaginationHelper::paginate($result, $showPerPage);

        $chief_executive_agenda = ChiefAgenda::get();
        $socio_economic = EconomicAgenda::get();
        $sustainable = SDG::get();
        $executive_legislative = ELA::get();
        $research = ResearchAgenda::get();
        // $accounts = AccountAccess::where('iduser',auth()->user()->recid)->with('func')->get();
        // $functions = $accounts->pluck('func');
        // $functions = AccountAccess::where('iduser',auth()->user()->recid)
        //             ->select('ff.FFUNCCOD','ff.FFUNCTION')
        //             ->join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','accountaccess.ffunccod')
        //             ->with('func')->get();
        $functions = AccountAccess::select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->with('func');
        if (auth()->user()->recid !== 545) {
            $functions = clone ($functions)->where('iduser', auth()->user()->recid);
            $mfos = $mfos1->whereIn('FFUNCCOD', $accessFFUNCCOD);
        }
        $functions = clone ($functions)
            ->distinct('FFUNCCOD')
            ->get();
        // dd($functions);
        //dd($id);
        return inertia('PAPS/Create', [
            'mfos' => $mfos,
            'chief_agenda' => $chief_executive_agenda,
            'socio_economic' => $socio_economic,
            'sustainable' => $sustainable,
            'executive_legislative' => $executive_legislative,
            'research' => $research,
            'functions' => $functions,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function store(Request $request)
    {
        // dd($request);
        $dept_code = auth()->user()->department_code;
        $request->merge(['department_code' => $dept_code]);
        $proceed = "1";
        // $attributes = $request->validate(ProgramAndProject::rules(), ProgramAndProject::errorMessages());
        $request->validate([
            'paps_desc' => 'required',
            'type' => 'required',
            'FFUNCCOD' => 'required',
            'idmfo' => 'required',
            // 'chief_executive_agenda' => 'required',
            // 'socio_economic_agenda' => 'required',
            // 'sust_devt_goal' => 'required',
            // 'executive_legislative_agenda' => 'required',
            // 'research_agenda' => 'required',
            // 'description' => 'required',
        ]);
        if ($request->type === 'GAS') {
            $count = ProgramAndProject::where('program_and_projects.department_code', $dept_code)
                ->where('program_and_projects.type', 'GAS')
                ->count('id');
            if ($count > 0) {
                $proceed = "0";
                $msg = "A PAPS classified as GAS already exists!";
            }
        }
        $msg = "Failed to add Programs and Projects(PAPS)";
        $status = "error";
        if ($proceed === "1") {

            //$this->model->create($attributes);
            $paps = new ProgramAndProject();
            $paps->paps_desc = $request->paps_desc;
            $paps->department_code = $dept_code;
            $paps->FFUNCCOD = $request->FFUNCCOD;
            $paps->idmfo = $request->idmfo;
            $paps->MOV = $request->MOV;
            $paps->type = $request->type;
            $paps->chief_executive_agenda = $request->chief_executive_agenda;
            $paps->socio_economic_agenda = $request->socio_economic_agenda;
            $paps->sust_devt_goal = $request->sust_devt_goal;
            $paps->executive_legislative_agenda = $request->executive_legislative_agenda;
            $paps->research_agenda = $request->research_agenda;
            $paps->save();
            $msg = "Programs and Projects(PAPS) added";
            $status = "message";
        }

        return redirect('/paps/direct')
            ->with($status, $msg);
    }
    public function save(Request $request)
    {
        // dd("save");
        $dept_code = auth()->user()->department_code;
        $request->merge(['department_code' => $dept_code]);
        $attributes = $request->validate([
            'paps_desc' => 'required',
            'FFUNCCOD' => 'required',
            'department_code' => 'required',
            'idmfo' => 'required',
            'type' => 'required',
        ]);
        //$attributes = $request->validate(ProgramAndProject::rules(), ProgramAndProject::errorMessages());
        $this->model->create($request->all());

        return redirect('/paps/' . $request->idmfo)
            ->with('message', 'Programs and Projects(PAPS) added');
    }
    public function show(ProgramAndProject $programAndProject) {}
    public function edit(ProgramAndProject $programAndProject, $id, $idmfo)
    {
        $year_object = DB::connection('mysql2')
            ->table('raaohs')
            ->select(DB::raw('DISTINCT(tyear)'))
            ->orderBy('tyear', 'ASC')
            ->get();
        $mfos = MajorFinalOutput::get();
        $chief_executive_agenda = ChiefAgenda::get();
        $socio_economic = EconomicAgenda::get();
        $sustainable = SDG::get();
        $executive_legislative = ELA::get();
        $research = ResearchAgenda::get();
        $data = $this->model->where('id', $id)->first([
            'id',
            'paps_desc',
            'FFUNCCOD',
            'idmfo',
            'MOV',
            'type',
            'chief_executive_agenda',
            'socio_economic_agenda',
            'sust_devt_goal',
            'executive_legislative_agenda',
            'research_agenda'
        ]);
        $functions = AccountAccess::select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', 'accountaccess.ffunccod')
            ->with('func');
        if (auth()->user()->recid !== 545) {
            $functions = clone ($functions)->where('iduser', auth()->user()->recid);
        }
        $functions = clone ($functions)
            ->distinct('FFUNCCOD')
            ->get();
        return inertia('PAPS/Create', [
            "editData" => $data,
            "mfos" => $mfos,
            'chief_agenda' => $chief_executive_agenda,
            'socio_economic' => $socio_economic,
            'sustainable' => $sustainable,
            'executive_legislative' => $executive_legislative,
            'research' => $research,
            "idmfo" => $idmfo,
            "functions" => $functions,
            'years' => $year_object,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function update(Request $request, $id)
    {
        $dept_code = auth()->user()->department_code;

        $data = $this->model::findOrFail($request->id);
        //$validatedData=$request->validate(ProgramAndProject::rules(), ProgramAndProject::errorMessages());
        $paps = new ProgramAndProject();
        $data->update([
            'paps_desc' => $request->paps_desc,
            'FFUNCCOD' => $request->FFUNCCOD,
            'department_code' => $dept_code,
            'idmfo' => $request->idmfo,
            'MOV' => $request->MOV,
            'type' => $request->type,
            'chief_executive_agenda' => $request->chief_executive_agenda,
            'socio_economic_agenda' => $request->socio_economic_agenda,
            'sust_devt_goal' => $request->sust_devt_goal,
            'executive_legislative_agenda' => $request->executive_legislative_agenda,
            'research_agenda' => $request->research_agenda
        ]);
        return redirect('/paps/direct')
            ->with('info', 'Program and Projects updated');
    }
    public function updated(Request $request, $id)
    {
        $dept_code = auth()->user()->department_code;
        $data = $this->model::findOrFail($request->id);
        // dd($request->chief_executive_agenda);
        //$validatedData=$request->validate(ProgramAndProject::rules(), ProgramAndProject::errorMessages());
        $data->update([
            'paps_desc' => $request->paps_desc,
            'FFUNCCOD' => $request->FFUNCCOD,
            'department_code' => $dept_code,
            'idmfo' => $request->idmfo,
            'MOV' => $request->MOV,
            'type' => $request->type,
            'chief_executive_agenda' => $request->chief_executive_agenda,
            'socio_economic_agenda' => $request->socio_economic_agenda,
            'sust_devt_goal' => $request->sust_devt_goal,
            'executive_legislative_agenda' => $request->executive_legislative_agenda,
            'research_agenda' => $request->research_agenda
        ]);
        //dd('updated');
        return redirect('/paps/direct')
            ->with('info', 'Program and Projects updated');
    }
    public function destroy(Request $request, $id)
    {
        $count_rev = RevisionPlan::where('idpaps', $id)->count();
        $count_strat = Strategy::where('idpaps', $id)->count();
        $count_success = SuccessIndicator::where('idpaps', $id)->count();
        $count_targets = Target::where('idpdip', $id)->count();
        $count_output = Output::where('idpaps', $id)->count();
        $count_off = OfficeAccountable::where('idpaps', $id)->count();
        $count_rating = rating::where('idpaps', $id)->count();
        $count_rating_rem = RatingRemarks::where('idpaps', $id)->count();
        $count_quality = Quality::where('idpaps', $id)->count();
        $count_qual_rem = QualityRemarks::where('idpaps', $id)->count();
        $count_time = Timeliness::where('idpaps', $id)->count();
        $count_time_rem = TimelinessRemarks::where('idpaps', $id)->count();
        $count_mon = Monitoring::where('idpaps', $id)->count();

        $msg = "";

        $status = "";
        if (
            $count_rev > 0 || $count_strat > 0 || $count_success > 0 || $count_targets > 0 ||
            $count_output > 0 || $count_off > 0 || $count_rating > 0 || $count_rating_rem > 0 ||
            $count_quality > 0 || $count_qual_rem > 0 || $count_time > 0 || $count_time_rem > 0 ||
            $count_mon > 0
        ) {
            $msg = "Unable to delete!";
            $status = "error";
        } else {
            $msg = "Program/Project/Activity Successfully deleted!";
            $status = "deleted";
            $data = $this->model->findOrFail($id);
            $data->delete();
        }
        //dd($request->raao_id);
        return redirect('/paps/direct')->with($status, $msg);
    }
    public function direct(Request $request)
    {
        // dd("direct");
        //dd($request->mfosel);
        $offices = FFUNCCOD::where('FFUNCTION', 'LIKE', '%Office%')->orderBy('FFUNCTION', 'ASC')->get();
        $idn = auth()->user()->recid;
        $FFUNCCODE = auth()->user()->office;
        $office = FFUNCCOD::where('FFUNCCOD', $FFUNCCODE)->first();
        $department_code = $office->department_code;
        // dd($auth()->user());

        // dd($department_code);
        $data = $this->model->with('MFO')
            ->when($request->search, function ($query, $searchItem) {
                $query->where('paps_desc', 'LIKE', '%' . $searchItem . '%');
            })
            ->when($request->mfosel, function ($query, $searchItem) {
                $query->where('idmfo', '=', $searchItem);
            })
            ->where('idmfo', '>', '45')
            ->orderByRaw(
                DB::raw("CASE WHEN program_and_projects.type = 'GAS' THEN 0
                            WHEN program_and_projects.type = 'Project' THEN 1
                            WHEN program_and_projects.type = 'Program' THEN 2
                            WHEN program_and_projects.type = 'Activity' THEN 3 ELSE 4
                            END")
            )
            ->orderBy('program_and_projects.paps_desc', 'ASC')
            ->get();
        // dd($data);
        $access = DB::connection('mysql2')->table('accountaccess')
            ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
            ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
            ->where('systemusers.recid', $idn)
            ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();
        $result = clone ($data);
        $mfos = MajorFinalOutput::where('id', '>', '45')->get();
        // dd(auth()->user());
        if (auth()->user()->department_code !== '04') {
            $result = $data->whereIn('FFUNCCOD', $accessFFUNCCOD);
            $mfos = $mfos->whereIn('FFUNCCOD', $accessFFUNCCOD);
        }
        // dd($accessFFUNCCOD);
        $showPerPage = 10;
        $paginatedResult = PaginationHelper::paginate($result, $showPerPage);
        // dd($accessFFUNCCOD);
        return inertia('PAPS/Direct', [
            "FFUNCCODE" => $FFUNCCODE,
            "department_code" => $department_code,
            "offices" => $offices,
            'office' => $office->FFUNCTION,
            "data" => $paginatedResult,
            "mfos" => $mfos,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function mfos_filter(Request $request, $FFUNCCOD)
    {
        $MY_FFUNCCOD = $FFUNCCOD;
        // dd($FFUNCCOD);
        $data = MajorFinalOutput::where('FFUNCCOD', $MY_FFUNCCOD)
            ->where('id', '>', '45')
            ->get();
        return ['data' => $data];
    }
}
