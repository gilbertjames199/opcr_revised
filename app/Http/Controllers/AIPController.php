<?php

namespace App\Http\Controllers;

use App\Helpers\PaginationHelper;
use App\Models\AccountAccess;
use App\Models\AIP;
use App\Models\Appropriation;
use App\Models\FFUNCCOD;
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
        $this->model = $model;
        $this->paps = $paps;
        $this->aip = $aip;
    }


    public function index(Request $request)
    {
        $functions = $this->model
            ->select('ff.FFUNCCOD', 'ff.FFUNCTION')
            ->Join(DB::raw('fms.functions ff'), 'ff.FFUNCCOD', '=', 'accountaccess.ffunccod')
            ->where('iduser', auth()->user()->recid)
            ->get();

        return inertia('AIP/Index', [
            "data" => $functions
        ]);
    }

    public function direct(Request $request)
    {
        $idn = auth()->user()->recid;
        $data = $this->paps->with('MFO')->with('AIP')
            ->when($request->search, function ($query) use ($request) {
                $query->where(AIP::select('AIP_Code')->whereColumn('a_i_p_s.idpaps', 'program_and_projects.id'), 'LIKE', '%' . $request->search . '%')
                    ->orWhere('program_and_projects.paps_desc', 'LIKE', '%' . $request->search . '%');
            })
            ->when($request->mfosel, function ($query, $searchItem) {
                $query->where('idmfo', '=', $searchItem);
            })
            ->orderByRaw(
                DB::raw("CASE WHEN program_and_projects.type = 'GAS' THEN 0
                            WHEN program_and_projects.type = 'Project' THEN 1
                            WHEN program_and_projects.type = 'Program' THEN 2
                            WHEN program_and_projects.type = 'Activity' THEN 3 ELSE 4
                            END")
            )
            ->orderBy('program_and_projects.created_at', 'desc')
            ->get();
        $idn = auth()->user()->recid;
        $mfos = MajorFinalOutput::all();

        //Retrieving user access
        $access = DB::connection('mysql2')->table('accountaccess')
            ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
            ->join('systemusers', 'systemusers.recid', '=', 'accountaccess.iduser')
            ->where('systemusers.recid', $idn)
            ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();

        //filter data
        $result = $data->whereIn('FFUNCCOD', $accessFFUNCCOD)
            ->map(function ($item) {
                $functionn = FFUNCCOD::where("FFUNCCOD", $item->FFUNCCOD)->first()->FFUNCTION;
                return [
                    "id" => $item->id,
                    "a_i_p" => $item->aip,
                    "m_f_o" => $item->mfo,
                    "paps_desc" => $item->paps_desc,
                    "FFUNCCOD" => $item->FFUNCCOD,
                    "FFUNCTION" => $functionn,
                ];
            });
        //dd($result);
        $showPerPage = 10;
        $paginatedResult = PaginationHelper::paginate($result, $showPerPage);

        //filter mfos
        $mfos = $mfos->whereIn('FFUNCCOD', $accessFFUNCCOD);

        //dd($paginatedResult);
        //dd($data->pluck('mfo_desc'));
        // $office_code = auth()->user()->department_code;
        // dd($office_code);
        // $ffunccod = DB::connection('mysql2')->table('offices')->where('department_code', $office_code)
        //     ->first()->ffunccod;
        // $ffunccod = auth()->user()->office;
        $dept_code = auth()->user()->department_code;
        // $ffunccod = auth()->user()->office;
        $functions = FFUNCCOD::where('department_code', $dept_code)->first();
        // $empl_id = $functions->empl_id;
        // $emp = DB::table('user_employees')
        //     ->where('empl_id', $empl_id)
        //     ->first();
        // dd($empl_id);
        // $mi = substr($emp->middle_name, 0, 1);
        // $pg_head = $emp->first_name . ' ' . $mi . ' ' . $emp->last_name;
        //$functions = FFUNCCOD::where('FFUNCCOD')
        // dd(auth()->user());
        $totals = Appropriation::selectRaw('FORMAT(SUM(appropriations.past_year), 2, \'en_US\') AS past_year')
            ->selectRaw('FORMAT(SUM(appropriations.first_sem), 2, \'en_US\') AS first_sem')
            ->selectRaw('FORMAT(SUM(appropriations.second_sem), 2, \'en_US\') AS second_sem')
            ->selectRaw('FORMAT((SUM(appropriations.first_sem) + SUM(appropriations.second_sem)), 2, \'en_US\') AS total')
            ->selectRaw('FORMAT(SUM(appropriations.budget_year), 2, \'en_US\') AS budget_year')
            ->join('program_and_projects', 'program_and_projects.id', 'appropriations.idpaps')
            ->where('program_and_projects.department_code', auth()->user()->department_code)
            ->first();
        return inertia('AIP/LBP_Form_2/Index', [
            "data" => $paginatedResult,
            "mfos" => $mfos,
            'FFUNCCOD' => $functions,
            "filters" => $request->only(['search']),
            "totals" => $totals,
            // "pg_head" => $pg_head,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function create(Request $request, $id)
    {
        //dd('create');
        $paps = ProgramAndProject::findOrFail($id);
        return inertia('AIP/LBP_Form_2/Create', [
            'paps' => $paps,
            'idpaps' => $id,
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
            'AIP_Code' => 'required',
            'PS' => 'required',
            'MOOE' => 'required',
            'CO' => 'required',
            'date' => 'required',
            'idpaps' => 'required',
        ]);
        // dd($attributes);
        //dd($attributes);
        $this->aip->create($attributes);
        return redirect('AIP/direct')
            ->with('message', 'Output added');
    }

    public function edit(Request $request, $id)
    {
        $data = $this->aip->where('id', $id)->first([
            'id',
            'AIP_Code',
            'PS',
            'MOOE',
            'CO',
            'date',
            'idpaps'
        ]);
        // dd($data);
        $paps = ProgramAndProject::findOrFail($data->idpaps);
        return inertia('AIP/LBP_Form_2/Create', [
            "editData" => $data,
            "idpaps" => $data->idpaps,
            'paps' => $paps,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }


    public function update(Request $request)
    {
        //dd($request->PS);
        $data = $this->aip->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'AIP_Code' => $request->AIP_Code,
            'PS' => $request->PS,
            'MOOE' => $request->MOOE,
            'CO' => $request->CO,
            'date' => $request->date,
            'idpaps' => $request->idpaps
        ]);

        return redirect('AIP/direct')
            ->with('info', 'Output updated');
    }

    public function MFO(Request $request)
    {
        $functions = $request->FUNCTION;
        $date = $request->Date;

        $mfos = MajorFinalOutput::select(DB::raw('"' . $functions . '" as `FUNCTION`'), "mfo_desc", "id")
            ->selectRaw("'$date' as `Date`")
            ->where('FFUNCCOD', $request->id)
            ->get();

        return $mfos;
    }

    public function PAPS(Request $request)
    {
        $paps = ProgramAndProject::with([
            'revisionPlan.budget',
            'opcr_stardard',
            'strategies.activity.expected_output'
        ])
            ->where('idmfo', $request->idmfo)
            ->get()
            ->map(function ($item) {
                // dd($expected_Output);

                $outputs = [];

                foreach ($item->strategies as $strategy) {
                    foreach ($strategy->activity as $activity) {
                        foreach ($activity->expected_output as $output) {
                            $outputs[] = $output;
                        }
                    }
                }


                $exp_output = collect($outputs)->map(function ($output) {
                    // Parse and default to 0 if null
                    $q1 = (float) ($output->physical_q1 ?? 0);
                    $q2 = (float) ($output->physical_q2 ?? 0);
                    $q3 = (float) ($output->physical_q3 ?? 0);
                    $q4 = (float) ($output->physical_q4 ?? 0);

                    return [
                        'description'     => $output->description,
                        'physical_q1'     => $output->physical_q1,
                        'physical_q2'     => $output->physical_q2,
                        'physical_q3'     => $output->physical_q3,
                        'physical_q4'     => $output->physical_q4,
                        'total_quantity'  => $q1 + $q2 + $q3 + $q4, // ✅ sum here
                    ];
                });
                // dd($exp_output);

                $firstRevisionPlan = $item->revisionPlan->last();
                $budgets = $firstRevisionPlan ? $firstRevisionPlan->budget : collect();

                $totalBudget = $budgets->sum(fn($b) => (float) $b->amount);

                $mooe = $budgets
                    ->filter(fn($b) => str_contains(strtolower($b->category), 'maintenance'))
                    ->sum(fn($b) => (float) $b->amount);

                $ps = $budgets
                    ->filter(fn($b) => str_contains(strtolower($b->category), 'personal'))
                    ->sum(fn($b) => (float) $b->amount);

                $co = $budgets
                    ->filter(fn($b) => str_contains(strtolower($b->category), 'capital'))
                    ->sum(fn($b) => (float) $b->amount);

                $opcr = $item->opcr_stardard;
                if ($opcr) {
                    $base = trim($opcr->performance_measures . ' ' . $opcr->output);

                    if ($opcr->efficiency1 === 'No' && $opcr->timeliness === 'No') {
                        $performance_measure = $base . ' with a satisfactory rating for quality/effectiveness and satisfactory in efficiency';
                    } elseif ($opcr->efficiency1 === 'Yes') {
                        $performance_measure = $base . ' with a satisfactory rating for quality/effectiveness and satisfactory in efficiency within ' . $opcr->prescribed_period;
                    } else {
                        $performance_measure = $base . ' with a satisfactory rating for quality/effectiveness and satisfactory in efficiency on or before ' . $opcr->timeliness;
                    }
                } else {
                    $performance_measure = '';
                }

                return [
                    'id' => $item->id,
                    'paps_desc' => $item->paps_desc,
                    'idmfo' => $item->idmfo,
                    "Performance_measure" => $performance_measure,
                    'Revision_Plan_id' => optional($firstRevisionPlan)->id,
                    'Total_Budget' => $totalBudget,
                    'MOOE' => $mooe,
                    'PS' => $ps,
                    'CO' => $co,
                    'Budgets' => $budgets->map(fn($budget) => [
                        'id' => $budget->id,
                        'amount' => $budget->amount,
                        'category' => $budget->category,
                    ]),
                    'Expected_Outputs' => $exp_output,
                ];
            })
            ->filter(fn($item) => $item['Revision_Plan_id'] !== null) // << This filters out those without Revision Plan
            ->values(); // Reset the array keys

        return $paps;
    }
}
