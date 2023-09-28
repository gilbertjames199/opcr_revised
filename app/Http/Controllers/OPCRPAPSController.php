<?php

namespace App\Http\Controllers;

use App\Helpers\PaginationHelper;
use App\Models\AccountAccess;
use App\Models\BudgetRequirement;
use App\Models\MajorFinalOutput;
use App\Models\Monitoring;
use App\Models\OfficeAccountable;
use App\Models\Output;
use App\Models\Performance;
use App\Models\ProgramAndProject;
use App\Models\Quality;
use App\Models\QualityRemarks;
use App\Models\rating;
use App\Models\RatingRemarks;
use App\Models\RevisionPlan;
use App\Models\SuccessIndicator;
use App\Models\Timeliness;
use App\Models\TimelinessRemarks;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OPCRPAPSController extends Controller
{
    protected $model;
    protected $function;
    public function __construct(ProgramAndProject $model, AccountAccess $function)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
        $this->function = $function;
    }

    public function index(Request $request, $id)
    {

        //dd("not direct");
        $functions = $this->function
            ->select('ff.FFUNCCOD', 'FFUNCTION')
            ->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'accountaccess.ffunccod')
            ->where('iduser', auth()->user()->recid)
            ->get()
            ->map(function ($item) {

                return [
                    "FFUNCCOD" => $item->FFUNCCOD,
                    "FFUNCTION" => $item->FFUNCTION,
                ];
            });
        $data = ProgramAndProject::where('idmfo', $id)
            ->with('MFO')
            ->when($request->search, function ($query, $searchItem) {
                $query->where('paps_desc', 'LIKE', '%' . $searchItem . '%');
            })
            ->when($request->mfosel, function ($query, $searchItem) {
                $query->where('idmfo', '=', $searchItem);
            })
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();

        //$data = ProgramAndProject::get();

        //dd($data);
        return inertia('PAPS/Index', [
            "function" => $functions,
            "data" => $data,
            "idmfo" => $id,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function direct(Request $request)
    {
        // dd($request->FFUNCCOD);
        // dd(auth()->user()->department_code);
        if (auth()->user()->department_code != '04') {
        }
        $functions = $this->function
            ->select('ff.FFUNCCOD', 'FFUNCTION')
            ->distinct('FFUNCTION');

        $mooe = "0.00";
        $ps = "0.00";
        $dept_code = auth()->user()->department_code;

        $idn = auth()->user()->recid;

        $data = $this->model->with('MFO')->with('output')
            ->distinct('program_and_projects.id')
            ->when($request->search, function ($query, $searchItem) {
                $query->where('paps_desc', 'LIKE', '%' . $searchItem . '%');
            })
            ->when($request->mfosel, function ($query, $searchItem) {
                $query->where('idmfo', '=', $searchItem);
            })
            ->when($request->FFUNCCOD, function ($query, $searchItem) {
                $query->where('FFUNCCOD', '=', $searchItem);
            });

        $mfos = MajorFinalOutput::all();
        if ($dept_code != '04') {
            $functions = clone ($functions)
                ->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'accountaccess.ffunccod')
                ->where('iduser', auth()->user()->recid)
                ->get()
                ->map(function ($item) {
                    $my_year = now()->year;
                    //REVISION PLAN ID/ GET MOOE & PS
                    $revision_plan = RevisionPlan::where('idmfo', '0')
                        ->where('idpaps', '0')
                        ->where('FFUNCCOD', $item->FFUNCCOD)
                        ->where('year_period', $my_year)
                        ->first();
                    $mooe = "0.00";
                    $ps = "0.00";
                    if ($revision_plan) {
                        $mooe1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                            ->where('category', 'Maintenance, Operating, and Other Expenses')
                            ->sum('amount');

                        $ps1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                            ->where('category', 'Personnel Services')
                            ->sum('amount');
                        $mooe2 = (float)$mooe1;
                        $ps2 = (float)$ps1;
                        $mooe = number_format($mooe2, 2);
                        $ps = number_format($ps2, 2);
                    } else {
                        //dd("empty no ps budget");
                    }
                    return [
                        "FFUNCCOD" => $item->FFUNCCOD,
                        "FFUNCTION" => $item->FFUNCTION,
                        "MOOE" => $mooe,
                        "PS" => $ps,
                    ];
                });
            $data = clone ($data)
                ->Join(DB::raw('fms.accountaccess acc'), 'acc.FFUNCCOD', '=', 'program_and_projects.FFUNCCOD')
                ->Join(DB::raw('fms.systemusers sysu'), 'sysu.recid', '=', 'acc.iduser')
                ->where('sysu.recid', $idn);
            $idn = auth()->user()->recid;
            $access = DB::connection('mysql2')->table('accountaccess')
                ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
                ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
                ->where('systemusers.recid', $idn)
                ->get();
            $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();
            $mfos = $mfos->whereIn('FFUNCCOD', $accessFFUNCCOD);
        } else {
            $functions = clone ($functions)
                ->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'accountaccess.ffunccod')
                ->get()
                ->map(function ($item) {
                    $my_year = now()->year;
                    //REVISION PLAN ID/ GET MOOE & PS
                    $revision_plan = RevisionPlan::where('idmfo', '0')
                        ->where('idpaps', '0')
                        ->where('FFUNCCOD', $item->FFUNCCOD)
                        ->where('year_period', $my_year)
                        ->first();
                    $mooe = "0.00";
                    $ps = "0.00";
                    if ($revision_plan) {
                        $mooe1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                            ->where('category', 'Maintenance, Operating, and Other Expenses')
                            ->sum('amount');

                        $ps1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                            ->where('category', 'Personnel Services')
                            ->sum('amount');
                        $mooe2 = (float)$mooe1;
                        $ps2 = (float)$ps1;
                        $mooe = number_format($mooe2, 2);
                        $ps = number_format($ps2, 2);
                    } else {
                        //dd("empty no ps budget");
                    }
                    return [
                        "FFUNCCOD" => $item->FFUNCCOD,
                        "FFUNCTION" => $item->FFUNCTION,
                        "MOOE" => $mooe,
                        "PS" => $ps,
                    ];
                });
        }
        $data = clone ($data)->orderBy('created_at', 'desc')->get();
        // dd($data);



        //FILTER PAPS
        $result = clone ($data);
        if ($dept_code != '04') {
            $result = $data->whereIn('FFUNCCOD', $accessFFUNCCOD);
        }
        $showPerPage = 10;
        $paginatedResult = PaginationHelper::paginate($result, $showPerPage);

        //FILTER MFO


        return inertia('OPCRPaps/Direct', [
            "functions" => $functions,
            "MOOE" => $mooe,
            "PS" => $ps,
            "data" => $paginatedResult,
            "mfos" => $mfos,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request, $idpaps)
    {
        // dd('create');
        $paps = ProgramAndProject::findOrFail($idpaps);
        return inertia('OPCRPaps/Create', [
            'paps' => $paps,
            'idpaps' => $idpaps,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function store(Request $request)
    {
        // dd($request);
        $id = $request->idpaps;
        $attributes = $request->validate([
            'Outputs' => 'required',
            'PerformanceMeasure' => 'required',
            'SuccessIndicator' => 'required',
            'OfficeAccountable' => 'required',
            'Monitoring' => 'required',
            'idpaps' => 'required',
            // 'RatingRemarks' => 'required',
            // 'QualityRemarks' => 'required',
            // 'TimelinessRemarks' => 'required'
        ]);

        $output = new Output();
        $output->idpaps = $request->idpaps;
        $output->Outputs = $request->Outputs;
        $output->save();

        $performance = new Performance();
        $performance->idpaps = $request->idpaps;
        $performance->performance = $request->PerformanceMeasure;
        $performance->save();

        $success = new SuccessIndicator();
        $success->idpaps = $request->idpaps;
        $success->success_indicator = $request->SuccessIndicator;
        $success->save();

        $officeaccountable = new OfficeAccountable();
        $officeaccountable->idpaps = $request->idpaps;
        $officeaccountable->office_accountable = $request->OfficeAccountable;
        $officeaccountable->save();

        $monitoring = new Monitoring();
        $monitoring->idpaps = $request->idpaps;
        $monitoring->monitoring = $request->Monitoring;
        $monitoring->save();

        $RatingRemarks = new RatingRemarks();
        $RatingRemarks->idpaps = $request->idpaps;
        $RatingRemarks->rating_remarks = $request->RatingRemarks;
        $RatingRemarks->save();

        $QualityRemarks = new QualityRemarks();
        $QualityRemarks->idpaps = $request->idpaps;
        $QualityRemarks->quality_remarks = $request->QualityRemarks;
        $QualityRemarks->save();

        $TimelinessRemarks = new TimelinessRemarks();
        $TimelinessRemarks->idpaps = $request->idpaps;
        $TimelinessRemarks->timeliness_remarks = $request->TimelinessRemarks;
        $TimelinessRemarks->save();

        for ($i = 0; $i < count($request->NumericalRating); $i++) {
            $ratings = new rating();
            if (!$request->numerical_rating) {
                $ratings->numerical_rating = "-";
            } else {
                $ratings->numerical_rating = $request->NumericalRating[$i];
            }

            $ratings->adjectival_rating = $request->AdjectivalRating[$i];
            $ratings->efficiency_quantity = $request->Efficiency[$i];
            $ratings->idpaps = $request->idpaps;
            $ratings->save();
        }

        for ($i = 0; $i < count($request->NumericalRating1); $i++) {
            $qualities = new Quality();
            $qualities->numerical_rating = $request->NumericalRating1[$i];
            $qualities->adjectival_rating = $request->AdjectivalRating1[$i];
            $qualities->quality = $request->Quality[$i];
            $qualities->idpaps = $request->idpaps;
            $qualities->save();
        }
        for ($i = 0; $i < count($request->NumericalRating2); $i++) {
            $timelinesses = new Timeliness();
            $timelinesses->numerical_rating = $request->NumericalRating2[$i];
            $timelinesses->adjectival_rating = $request->AdjectivalRating2[$i];
            $timelinesses->timeliness = $request->Timeliness[$i];
            $timelinesses->idpaps = $request->idpaps;
            $timelinesses->save();
        }
        //dd($attributes);
        //$this->model->create($attributes);
        return redirect('OPCRpaps/direct')
            ->with('message', 'Standard added');
    }

    public function edit(Request $request, $id)
    {
        $outputs = Output::where('idpaps', $id)->first();
        $performance = Performance::where('idpaps', $id)->first();
        $success = SuccessIndicator::where('idpaps', $id)->first();
        $office = OfficeAccountable::where('idpaps', $id)->first();
        $monitoring = Monitoring::where('idpaps', $id)->first();
        $rating = RatingRemarks::where('idpaps', $id)->first();
        $quality = QualityRemarks::where('idpaps', $id)->first();
        $timeliness = TimelinessRemarks::where('idpaps', $id)->first();

        $ratings_r = rating::where('idpaps', $id)->orderBy('id')->get();
        $qualities_r = Quality::where('idpaps', $id)->orderBy('id')->get();
        $timeliness_r = Timeliness::where('idpaps', $id)->orderBy('id')->get();

        $paps = ProgramAndProject::findOrFail($id);
        return inertia('OPCRPaps/Create', [
            "Output" => $outputs,
            "Performance" => $performance,
            "Success" => $success,
            "Office" => $office,
            "Monitoring" => $monitoring,
            "RatingRemarks" => $rating,
            "QualityRemarks" => $quality,
            "TimelinessRemarks" => $timeliness,
            "editData" => $paps,
            "idpaps" => $id,
            'paps' => $paps,
            'ratings_r' => $ratings_r,
            'qualities_r' => $qualities_r,
            'timeliness_r' => $timeliness_r,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function update(Request $request, $id)
    {
        rating::where('idpaps', $id)->delete();
        for ($i = 0; $i < count($request->NumericalRating); $i++) {
            $ratings = new rating();
            $ratings->numerical_rating = $request->NumericalRating[$i];
            $ratings->adjectival_rating = $request->AdjectivalRating[$i];
            $ratings->efficiency_quantity = $request->Efficiency[$i];
            $ratings->idpaps = $request->id;
            $ratings->save();
        }
        Quality::where('idpaps', $id)->delete();
        for ($i = 0; $i < count($request->NumericalRating1); $i++) {
            $qualities = new Quality();
            $qualities->numerical_rating = $request->NumericalRating1[$i];
            $qualities->adjectival_rating = $request->AdjectivalRating1[$i];
            $qualities->quality = $request->Quality[$i];
            $qualities->idpaps = $request->id;
            $qualities->save();
        }
        Timeliness::where('idpaps', $id)->delete();
        for ($i = 0; $i < count($request->NumericalRating2); $i++) {
            $timelinesses = new Timeliness();
            $timelinesses->numerical_rating = $request->NumericalRating2[$i];
            $timelinesses->adjectival_rating = $request->AdjectivalRating2[$i];
            $timelinesses->timeliness = $request->Timeliness[$i];
            $timelinesses->idpaps = $request->id;
            $timelinesses->save();
        }
        // dd($id);
        $outputs = Output::where('idpaps', $id)->first();
        $performance = Performance::where('idpaps', $id)->first();
        $success = SuccessIndicator::where('idpaps', $id)->first();
        $office = OfficeAccountable::where('idpaps', $id)->first();
        $monitoring = Monitoring::where('idpaps', $id)->first();
        $rating = RatingRemarks::where('idpaps', $id)->first();
        $quality = QualityRemarks::where('idpaps', $id)->first();
        $timeliness = TimelinessRemarks::where('idpaps', $id)->first();


        // dd($request);
        // $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);

        $outputs->update([
            'Outputs' => $request->Outputs,
            'idpaps' => $id
        ]);

        $performance->update([
            'performance' => $request->PerformanceMeasure,
            'idpaps' => $id
        ]);

        $success->update([
            'success_indicator' => $request->SuccessIndicator,
            'idpaps' => $id
        ]);

        $office->update([
            'office_accountable' => $request->OfficeAccountable,
            'idpaps' => $id
        ]);

        $monitoring->update([
            'monitoring' => $request->Monitoring,
            'idpaps' => $id
        ]);

        $rating->update([
            'rating_remarks' => $request->RatingRemarks,
            'idpaps' => $id
        ]);

        $quality->update([
            'quality_remarks' => $request->QualityRemarks,
            'idpaps' => $id
        ]);

        $timeliness->update([
            'timeliness_remarks' => $request->TimelinessRemarks,
            'idpaps' => $id
        ]);
        return redirect('OPCRpaps/direct')
            ->with('message', 'Standard updated');
    }

    public function destroy(Request $request, $id)
    {

        $outputs = Output::where('idpaps', $id)->first();
        $performance = Performance::where('idpaps', $id)->first();
        $success = SuccessIndicator::where('idpaps', $id)->first();
        $office = OfficeAccountable::where('idpaps', $id)->first();
        $monitoring = Monitoring::where('idpaps', $id)->first();
        $rating = RatingRemarks::where('idpaps', $id)->first();
        $quality = QualityRemarks::where('idpaps', $id)->first();
        $timeliness = TimelinessRemarks::where('idpaps', $id)->first();

        $outputs->delete();
        $performance->delete();
        $success->delete();
        $office->delete();
        $monitoring->delete();
        $rating->delete();
        $quality->delete();
        $timeliness->delete();
        rating::where('idpaps', $id)->delete();
        Quality::where('idpaps', $id)->delete();
        Timeliness::where('idpaps', $id)->delete();
        //dd($request->raao_id);
        return redirect('OPCRpaps/direct')->with('warning', 'Output Deleted');
    }
}
