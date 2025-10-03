<?php

namespace App\Http\Controllers;

use App\Models\BudgetRequirement;
use App\Models\FFUNCCOD;
use App\Models\Implementing_team;
use App\Models\MajorFinalOutput;
use App\Models\Office;
use App\Models\OfficeAccountable;
use App\Models\OfficePerformanceCommitmentRating;
use App\Models\OfficePerformanceCommitmentRatingList;
use App\Models\OpcrAccomplishment;
use App\Models\OpcrTarget;
use App\Models\ProgramAndProject;
use App\Models\RevisionPlan;
use App\Models\SuccessIndicator;
use App\Models\UserEmployees;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OfficePerformanceCommitmentRatingController extends Controller
{
    protected $model;
    public function __construct(OfficePerformanceCommitmentRating $model)
    {
        $this->model = $model;
    }
    public function index2(Request $request, $opcr_id, $FFUNCCOD)
    {
        $dept_code = auth()->user()->department_code;
        //Check if the OPCR Form for the OPCR List is empty or not
        $opcr = $this->model->where('opcr_id', $opcr_id)->get();
        $list = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();

        $my_year = Carbon::parse($list->date_to)->format('Y');
        //dd($my_year);
        $cnt = $opcr->count();

        //dd($FFUNCCOD);
        $succid = [];
        //Load all success indicators
        $success_indicators = SuccessIndicator::select(
            'success_indicators.id',
            'success_indicators.success_indicator'
        )
            ->join('program_and_projects AS paps', 'paps.id', 'success_indicators.idpaps')
            ->where('FFUNCCOD', $FFUNCCOD)
            ->get();
        if ($cnt < 1) {
            //IF the OPCR List has no OPCR Ratings, generate OPCR ratings for each Success Indicator
            //Save OPC Rating for each success indicator with rating of 1 for Q,E,and T
            foreach ($success_indicators as $success_indicator) {
                $opcrf = new OfficePerformanceCommitmentRating();
                $opcrf->success_indicator_id = $success_indicator->id;
                array_push($succid, $success_indicator->id);
                $opcrf->accomplishments = "";
                $opcrf->rating_q = "1";
                $opcrf->rating_e = "1";
                $opcrf->rating_t = "1";
                $opcrf->remarks = "-";
                $opcrf->FFUNCCOD = $FFUNCCOD;
                $opcrf->opcr_id    = $opcr_id;
                $opcrf->department_code = $dept_code;
                $opcrf->save();
            }
            //dd('EMPTY: '.$cnt);
        } else {
            $exist = $this->model->where('FFUNCCOD', $FFUNCCOD)
                ->get();
            $existingSuccessIndicatorIds = $exist->pluck('success_indicator_id')->toArray();
            foreach ($success_indicators as $success_indicator) {
                $successIndicatorId = $success_indicator->id;
                if (!in_array($successIndicatorId, $existingSuccessIndicatorIds)) {
                    OfficePerformanceCommitmentRating::create([
                        'success_indicator_id' => $successIndicatorId,
                        'accomplishments' => '',
                        'rating_q' => '1',
                        'rating_e' => '1',
                        'rating_t' => '1',
                        'remarks' => '-',
                        'FFUNCCOD' => $FFUNCCOD,
                        'opcr_id' => $opcr_id,
                        'department_code' => $dept_code
                    ]);
                }
            }
            //dd('COUNT: '.$cnt);
        }
        //REVISION PLAN ID
        $revision_plan = RevisionPlan::where('idmfo', '0')
            ->where('idpaps', '0')
            ->where('FFUNCCOD', $FFUNCCOD)
            ->where('year_period', $my_year)
            ->first();
        $mooe = "0.00";
        $ps = "0.00";
        if ($revision_plan) {
            $mooe = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                ->where('category', 'Maintenance, Operating, and Other Expenses')
                ->sum('amount');

            $ps = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                ->where('category', 'Personnel Services')
                ->sum('amount');
        } else {
            //dd("empty no ps budget");
        }
        //$opcr = $this->model->where('FFUNCCOD', $FFUNCCOD)->get();
        $opcrs = $this->model->select(
            'office_performance_commitment_ratings.id',
            'office_performance_commitment_ratings.success_indicator_id',
            'office_performance_commitment_ratings.accomplishments',
            'office_performance_commitment_ratings.rating_q',
            'office_performance_commitment_ratings.rating_e',
            'office_performance_commitment_ratings.rating_t',
            'office_performance_commitment_ratings.remarks',
            'office_performance_commitment_ratings.FFUNCCOD',
            'office_performance_commitment_ratings.opcr_id',
            'SU.success_indicator',
            'off.office_accountable',
            'PAPS.paps_desc',
            'mfo.mfo_desc',
            'mfo.created_at'
        )
            ->leftjoin('success_indicators AS SU', 'SU.id', 'office_performance_commitment_ratings.success_indicator_id')
            // ->leftjoin('program_and_projects AS PAPS', 'PAPS.id', 'SU.idpaps')
            ->leftjoin('opcr_targets', 'opcr_targets.id', 'office_performance_commitment_ratings.id_opcr_target')
            ->leftjoin('office_accountables AS off', 'off.idpaps', 'PAPS.id')
            ->leftjoin('major_final_outputs AS mfo', 'mfo.id', 'PAPS.idmfo')
            ->orderBy('mfo.mfo_desc', 'asc')
            ->where('office_performance_commitment_ratings.opcr_id', $opcr_id)
            ->where('office_performance_commitment_ratings.FFUNCCOD', $FFUNCCOD)
            ->get();
        //return $opcrs;
        //return $mfos;
        //********************************************** */
        $count_pgdh = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
            ->where('role', 'like', '%Department Head%')
            ->count();
        $dept_head = "N/A";
        if ($count_pgdh > 0) {
            $dept_head = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
                ->where('role', 'like', '%Department Head%')
                ->first()->name;
        }

        //$dept_head = Str::upper($head->name);
        $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();
        $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
        $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
        $start = $dateStart->format('F');
        $end = $dateEnd->format('F Y');
        $opcr_date = $start . " to " . $end;
        $opcr_date = Str::upper($opcr_date);
        //dd($opcr_date);
        //$date_now = Carbon::now()->format('F d, Y');

        $averageSum = OfficePerformanceCommitmentRating::selectRaw('SUM((rating_q + rating_e + rating_t) / 3) AS average_sum')
            ->where('opcr_id', $opcr_id)
            ->first()->average_sum;
        $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();
        if ($count < 1) {
            $count = 1;
        };
        $total = number_format($averageSum, 2);
        $ave_pre = $total / $count;
        $ave = number_format($ave_pre, 2);
        //dd($ave);
    }
    public function index(Request $request, $opcr_id, $FFUNCCOD)
    {
        // dd($request);
        //GET Department Code
        $dept_code = auth()->user()->department_code;
        //Check if the OPCR Form for the OPCR List is empty or not
        $opcr = $this->model->where('opcr_id', $opcr_id)->get();
        $cnt = $opcr->count();

        $list = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();
        // dd($list);
        $opcr_targets = OpcrTarget::where('office_performance_commitment_rating_list_id', $opcr_id)
            ->get();
        // dd($opcr_targets);
        foreach ($opcr_targets as $target) {
            $opcr_rating = OfficePerformanceCommitmentRating::where('id_opcr_target', $target->id)
                ->first();
            $paps_here = ProgramAndProject::where('id', $target->idpaps)->first();
            // dd($paps_here);
            if (!$opcr_rating) {
                $opcrf = new OfficePerformanceCommitmentRating();
                $opcrf->id_paps = $target->idpaps;
                $opcrf->id_opcr_target = $target->id;
                $opcrf->success_indicator_id = '-';
                $opcrf->accomplishments = "";
                $opcrf->rating_q = "3";
                $opcrf->rating_e = "3";
                $opcrf->rating_t = "3";
                $opcrf->remarks = "";
                $opcrf->opcr_id    = $opcr_id;
                $opcrf->FFUNCCOD = $list->FFUNCCOD;
                $opcrf->department_code = $dept_code;
                $opcrf->save();
            }
        }
        $my_year = Carbon::parse($list->date_to)->format('Y');

        $revision_plan = RevisionPlan::where('idmfo', '0')
            ->where('idpaps', '0')
            ->where('FFUNCCOD', $FFUNCCOD)
            ->where('year_period', $my_year)
            ->first();
        $mooe = "0.00";
        $ps = "0.00";
        if ($revision_plan) {
            $mooe = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                ->where('category', 'Maintenance, Operating, and Other Expenses')
                ->sum('amount');

            $ps = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                ->where('category', 'Personnel Services')
                ->sum('amount');
        } else {
            //dd("empty no ps budget");
        }


        $opcrs = OpcrTarget::with([
            'opcr_rating',
            'opcrList',
            'paps',
            'paps.MFO',
            'paps.opcr_stardard'
        ])
            ->whereHas('paps', function ($query) use ($FFUNCCOD) {
                $query->whereHas('MFO', function ($query) use ($FFUNCCOD) {
                    $query->where('mfo_desc', '<>', '');
                });
            })
            ->whereHas('opcrList', function ($query) use ($opcr_id, $FFUNCCOD) {
                $query->where('id', $opcr_id)
                    ->where('FFUNCCOD', $FFUNCCOD);
            })
            ->where('is_included', '1')
            // ->orderBy('mfo.id', 'asc')
            ->orderBy('idpaps', 'asc')
            ->groupBy('office_performance_commitment_rating_list_id')
            ->groupBy('idpaps')
            ->get()
            ->map(function ($item) {
                // dd($item);
                $id = $item->opcr_rating ? $item->opcr_rating->id : null;
                $su = $item->paps ? ($item->paps->opcr_stardard ? $item->paps->opcr_stardard->performance_measure : null) : null;
                $accomp = $item->opcr_rating ? $item->opcr_rating->accomplishments : null;
                $r_q = $item->opcr_rating ? $item->opcr_rating->rating_q : null;
                $r_e = $item->opcr_rating ? $item->opcr_rating->rating_e : null;
                $r_t = $item->opcr_rating ? $item->opcr_rating->rating_t : null;
                $remarks = $item->opcr_rating ? $item->opcr_rating->remarks : null;
                $FFUNCCOD = $item->opcr_rating ? $item->opcr_rating->FFUNCCOD : null;
                $opcr_list_id = $item->opcrList ? $item->opcrList->id : null;
                $office_accountable = $item->paps ? ($item->paps->opcr_stardard ? $item->paps->opcr_stardard->office_accountable : null) : null;
                $paps_desc = $item->paps ? $item->paps->paps_desc : null;
                // dd($item->paps->opcr_standard);
                $mfo_desc = $item->paps ? ($item->paps->MFO ? $item->paps->MFO->mfo_desc : null) : null;
                $mfo_created_at = $item->paps ? ($item->paps->MFO ? $item->paps->MFO->created_at : null) : null;

                $performance_measure = $item->paps ? ($item->paps->opcr_stardard ? $item->paps->opcr_stardard->performance_measure : null) : null;
                $efficiency1 = $item->paps ? ($item->paps->opcr_stardard ? $item->paps->opcr_stardard->efficiency1 : null) : null;
                $timeliness = $item->paps ? ($item->paps->opcr_stardard ? $item->paps->opcr_stardard->timeliness : null) : null;
                $prescribed_period = $item->paps ? ($item->paps->opcr_stardard ? $item->paps->opcr_stardard->prescribed_period : null) : null;;

                if ($efficiency1 === 'No' && $timeliness === 'No') {
                    $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency";
                } elseif ($efficiency1 === 'Yes') {
                    $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency within {$prescribed_period}";
                } else {
                    $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency on or before {$timeliness}";
                }
                // dd($accomp);

                $q1 = $item->opcr_rating ? $item->opcr_rating->q1 : null;
                $q2 = $item->opcr_rating ? $item->opcr_rating->q2 : null;
                $q3 = $item->opcr_rating ? $item->opcr_rating->q3 : null;

                $e1 = $item->opcr_rating ? $item->opcr_rating->e1 : null;
                $e2 = $item->opcr_rating ? $item->opcr_rating->e2 : null;
                $e3 = $item->opcr_rating ? $item->opcr_rating->e3 : null;

                $t1 = $item->opcr_rating ? $item->opcr_rating->t1 : null;
                return [
                    "id" => $id,
                    "success_indicator_id" => $su,
                    "accomplishments" => $accomp,
                    "rating_q" => $r_q,
                    "rating_e" => $r_e,
                    "rating_t" => $r_t,
                    "remarks" => $remarks,
                    "FFUNCCOD" => $FFUNCCOD,
                    "opcr_id" => $opcr_list_id,
                    "success_indicator" => $su,
                    "target_success_indicator" => $su,
                    "office_accountable" => $office_accountable,
                    "paps_desc" => $paps_desc,
                    "mfo_desc" => $mfo_desc,
                    "created_at" => $mfo_created_at,
                    "q1"=>$q1,
                    "q2"=>$q2,
                    "q3"=>$q3,
                    "e1"=>$e1,
                    "e2"=>$e2,
                    "e3"=>$e3,
                    "t1"=>$t1,
                ];
            });

        //********************************************** */
        $count_pgdh = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
            ->where('role', 'like', '%Department Head%')
            ->count();
        $dept_head = "N/A";
        if ($count_pgdh > 0) {
            $dept_head = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
                ->where('role', 'like', '%Department Head%')
                ->first()->name;
        }

        //$dept_head = Str::upper($head->name);
        $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();
        $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
        $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
        $start = $dateStart->format('F');
        $end = $dateEnd->format('F Y');
        $rating_status = $my_opcr->rating_status;
        $opcr_date = $start . " to " . $end;
        $opcr_date = Str::upper($opcr_date);
        // dd($opcr_date);
        //$date_now = Carbon::now()->format('F d, Y');

        $averageSum = OfficePerformanceCommitmentRating::selectRaw('SUM((rating_q + rating_e + rating_t) / 3) AS average_sum')
            ->where('opcr_id', $opcr_id)
            ->first()->average_sum;
        $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();
        if ($count < 1) {
            $count = 1;
        };
        $total = number_format($averageSum, 2);
        $ave_pre = $total / $count;
        $ave = number_format($ave_pre, 2);
        // dd($opcrs);
        // dd('targ ave: ' . $ave);
        //********************************************* */
        $component = $this->isBeforeSecondSem2025($list) ? 'OPCR/Form/Index': 'OPCR/Form/Index2';
        $baseUrl = app()->environment('production')
            ? 'http://122.53.120.18:8067/images/'
            : asset('storage/');
        $disk = app()->environment('production') ? 'custom_uploads' : 'public';
            // dd($baseUrl);
        // dd($rating_status);
        return inertia($component, [
            'total' => $total,
            'ave' => $ave,
            'dept_head' => $dept_head,
            'opcr_date' => $opcr_date,
            'opcr_id' => $opcr_id,
            'mooe' => $mooe,
            'ps' => $ps,
            'opcrs' => $opcrs,
            "FFUNCCOD" => $FFUNCCOD,
            'fileBaseUrl' => $baseUrl,
            'disk'=>$disk,
            "rating_status"=> $rating_status,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
        //dd($opcr);
        //dd('opcr form');
    }
    private function isBeforeSecondSem2025($list): bool
    {
        return $list->year < 2025 || ($list->year == 2025 && $list->semester == "First Semester");
    }
    public function create(Request $request) {}
    public function store(Request $request)
    {
        // dd($request);
        $opcrs = $request->opcrs;
        $myObject = json_decode($opcrs);

        // dd($myObject);
        foreach ($myObject as $opcr) {
            $dept_code = auth()->user()->department_code;
            $opcry = null;
            // dd($opcry);
            $opcry = OfficePerformanceCommitmentRating::findOrFail($opcr->id);
            if ($opcry) {
                $opcry->update([
                    'success_indicator_id' => $opcr->success_indicator_id,
                    'accomplishments' => $opcr->accomplishments,
                    'rating_q' => $opcr->rating_q,
                    'rating_e' => $opcr->rating_e,
                    'rating_t' => $opcr->rating_t,
                    'q1'=>$opcr->q1,
                    'q2'=>$opcr->q2,
                    'q3'=>$opcr->q3,
                    'e1'=>$opcr->e1,
                    'e2'=>$opcr->e2,
                    'e3'=>$opcr->e3,
                    't1'=>$opcr->t1,
                    'remarks' => $opcr->remarks,
                    'department_code' => $dept_code
                ]);
            }
        }
        //dd($opcrs);
        //dd('opcrlist');
        // return redirect('/opcrlist/' . $request->FFUNCCOD)
        //     ->with('message', 'OPCR Rating Done!');
        // dd($request);
        // return redirect('/opcr/form/' . $request->opcr_id . '/' . $request->FFUNCCOD)
        //     ->with('message', 'OPCR Rating Done!');
        return redirect()->back()->with('message', 'OPCR Rating Done!');
    }
    public function edit(Request $request) {}
    public function update(Request $request) {}
    public function destroy(Request $request) {}
    public function getMFOs($FFUNCCOD)
    {
        $mfos = MajorFinalOutput::where('FFUNCCOD', $FFUNCCOD)
            ->get()
            ->map(function ($item) use ($FFUNCCOD) {
                $paps = ProgramAndProject::where('idmfo', $item->id)
                    ->get()->map(function ($itemp) {
                        $idpaps = $itemp->id;
                        $success = SuccessIndicator::where('idpaps', $itemp->id)
                            ->get()->map(function ($items) use ($idpaps) {
                                $accountable = OfficeAccountable::where('idpaps', $idpaps)
                                    ->get();
                                $opcr = $this->model->where('success_indicator_id', $items->id)->get();
                                return [
                                    "success_indicator_id" => $items->id,
                                    "success_indicator" => $items->success_indicator,
                                    "accountable_division" => $accountable,
                                    "opcr" => $opcr
                                ];
                            });
                        return [
                            "paps_description" => $itemp->paps_desc,
                            "success" => $success,
                        ];
                    });
                return [
                    "mfo_description" => $item->mfo_desc,
                    "FFUNCCOD" => $FFUNCCOD,
                    "paps" => $paps
                ];
            });
        return $mfos;
    }
    public function print_class(Request $request)
    {
        $total = "55";
        $ave = "3.0";
        $dept_head = "JOYZEL R. ODI";

        $opcr_date = "JULY TO DECEMBER 2023";

        $mooe = "8,951,455.00";
        $ps = "4,533,455.00";
        $FFUNCCOD = "1121";
        $opcr_id = "2";

        $date_now = Carbon::now()->format('F d, Y');

        $data = MajorFinalOutput::where('FFUNCCOD', $FFUNCCOD)
            ->orderBy('mfo_desc', 'asc')
            ->get()
            ->map(function ($item) use ($mooe, $ps, $opcr_id) {
                $paps = ProgramAndProject::where('idmfo', $item->id)
                    ->get()
                    ->map(function ($item) use ($mooe, $ps, $opcr_id) {
                        $success_indicator = SuccessIndicator::where("idpaps", $item->id)
                            ->where('opcr_id', $opcr_id)
                            ->join(
                                'office_performance_commitment_ratings',
                                'office_performance_commitment_ratings.success_indicator_id',
                                'success_indicators.id'
                            )
                            ->get();
                        $off = OfficeAccountable::where("idpaps", $item->id)->get();
                        $office_accountable = $off->pluck('office_accountable');
                        $targets = OpcrTarget::select(
                            "opcr_accomplishments.actual_accomplishments",
                            "opcr_accomplishments.quantity",
                            "opcr_targets.target_success_indicator",
                            "opcr_targets.quantity AS target_quantity"
                        )
                            ->leftJoin("opcr_accomplishments", "opcr_accomplishments.opcr_target_id", "opcr_targets.id")
                            ->where("opcr_targets.idpaps", $item->id)
                            ->where("opcr_targets.office_performance_commitment_rating_list_id", $opcr_id)
                            ->get()
                            ->map(function ($item) {
                                //$accomplishments = OpcrAccomplishment::where('opcr_target_id', $item->opcr_target_id)->first();
                                return [
                                    'target_success_indicator' => $item->target_success_indicator,
                                    'quantity' => $item->target_quantity,
                                    'actual_accomplishment' => $item->actual_accomplishments,
                                    'quantity_accomplished' => $item->quantity,
                                ];
                            });

                        return [
                            "paps" => $item->paps_desc,
                            "success_indicator" => $success_indicator,
                            "office_accountable" => $office_accountable,
                            "targets" => $targets,
                        ];
                    });
                return [
                    "mfo_id" => $item->mfo_id,
                    "mfo_desc" => $item->mfo_desc,
                    "mooe" => $mooe,
                    "ps" => $ps,
                    "paps" => $paps,
                ];
            });
        //return $opcrs;
        //return $mfos;
        //dd($opcrs);

        $datum = [
            'total' => $total,
            'ave' => $ave,
            'dept_head' => $dept_head,
            'date_now' => $date_now,
            'opcr_date' => $opcr_date,
            'mooe' => $mooe,
            'ps' => $ps,
            'mfo' => $data,
            'FFUNCCOD' => $FFUNCCOD,
            'opcr_id' => $opcr_id,
        ];
        return $datum;
    }
    public function print_class2(Request $request)
    {
        //$opcr_id=request('opcr_id');
        // $opcr_id=$request->opcr_id;
        // $mooe=$request->mooe;
        // $ps=$request->ps;
        // $FFUNCCOD=$request->FFUNCCOD;
        //dsdd($opcr_id);
        $FFUNCCOD = "1121";
        $mooe = "5,780,999.50";
        $ps = "9,431,999.33";
        $opcr_id = "2";
        $head = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
            ->where('role', 'like', '%Department Head%')
            ->first();
        $dept_head = Str::upper($head->name);
        $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();
        $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
        $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
        $start = $dateStart->format('F');
        $end = $dateEnd->format('F Y');
        $opcr_date = $start . " to " . $end;
        $opcr_date = Str::upper($opcr_date);
        //dd($opcr_date);
        $date_now = Carbon::now()->format('F d, Y');
        $ave_sum = OfficePerformanceCommitmentRating::select(DB::raw('(rating_q+rating_e+rating_t)/3 AS average_sum'))
            ->where('office_performance_commitment_ratings', $opcr_id)
            ->sum();
        // dd($ave_sum);
        $data = MajorFinalOutput::where('FFUNCCOD', $FFUNCCOD)
            ->orderBy('mfo_desc', 'asc')
            ->get()
            ->map(function ($item) use ($mooe, $ps, $opcr_id) {
                $paps = ProgramAndProject::where('idmfo', $item->id)
                    ->get()
                    ->map(function ($item) use ($mooe, $ps, $opcr_id) {
                        $success_indicator = SuccessIndicator::where("idpaps", $item->id)
                            ->where('opcr_id', $opcr_id)
                            ->join(
                                'office_performance_commitment_ratings',
                                'office_performance_commitment_ratings.success_indicator_id',
                                'success_indicators.id'
                            )
                            ->get();
                        $off = OfficeAccountable::where("idpaps", $item->id)->get();
                        $office_accountable = $off->pluck('office_accountable');
                        $targets = OpcrTarget::select(
                            "opcr_accomplishments.actual_accomplishments",
                            "opcr_accomplishments.quantity",
                            "opcr_targets.target_success_indicator",
                            "opcr_targets.quantity AS target_quantity"
                        )
                            ->leftJoin("opcr_accomplishments", "opcr_accomplishments.opcr_target_id", "opcr_targets.id")
                            ->leftJoin("office_performance_commitment_ratings", "office_performance_commitment_ratings.")
                            ->where("opcr_targets.idpaps", $item->id)
                            ->where("opcr_targets.office_performance_commitment_rating_list_id", $opcr_id)
                            ->get()
                            ->map(function ($item) {
                                //$accomplishments = OpcrAccomplishment::where('opcr_target_id', $item->opcr_target_id)->first();
                                return [
                                    'target_success_indicator' => $item->target_success_indicator,
                                    'quantity' => $item->target_quantity,
                                    'actual_accomplishment' => $item->actual_accomplishments,
                                    'quantity_accomplished' => $item->quantity,
                                ];
                            });

                        return [
                            "paps" => $item->paps_desc,
                            "success_indicator" => $success_indicator,
                            "office_accountable" => $office_accountable,
                            "targets" => $targets,
                        ];
                    });
                return [
                    "mfo_id" => $item->mfo_id,
                    "mfo_desc" => $item->mfo_desc,
                    "mooe" => $mooe,
                    "ps" => $ps,
                    "paps" => $paps,
                ];
            });
        //return $opcrs;
        //return $mfos;
        //dd($opcrs);
        $datum = [
            'dept_head' => $dept_head,
            'date_now' => $date_now,
            'opcr_date' => $opcr_date,
            'mooe' => $mooe,
            'ps' => $ps,
            'mfo' => $data
        ];
        return $datum;
    }
    public function print_class3(Request $request)
    {
        // $total=$request->total;
        // $ave=$request->ave;
        // $dept_head=$request->dept_head;

        // $opcr_date=$request->opcr_date;

        // $mooe=$request->mooe;
        // $ps =$request->ps;
        // $FFUNCCOD = $request->FFUNCCOD;
        // $opcr_id=$request->opcr_id;
        // $dept_name= $request->dept_name;
        $total = "55";
        $ave = "3.0";
        $dept_head = "JOYZEL R. ODI";

        $opcr_date = "JULY TO DECEMBER 2023";

        $mooe = "8,951,455.00";
        $ps = "4,533,455.00";
        $FFUNCCOD = "1121";
        $opcr_id = "2";
        $dept_name = "Department Name";
        $data = ProgramAndProject::select(
            'major_final_outputs.mfo_desc',
            'opcr_targets.target_success_indicator',
            'office_performance_commitment_ratings.rating_t',
            'office_performance_commitment_ratings.rating_e',
            'office_performance_commitment_ratings.rating_q',
            'office_performance_commitment_ratings.remarks',
            'office_accountables.office_accountable',
            'opcr_accomplishments.actual_accomplishments',
        )
            ->where('program_and_projects.FFUNCCOD', $FFUNCCOD)
            ->where('office_performance_commitment_ratings.opcr_id', $opcr_id)
            ->leftjoin('success_indicators', 'success_indicators.idpaps', 'program_and_projects.id')
            ->leftjoin(
                'office_performance_commitment_ratings',
                'office_performance_commitment_ratings.success_indicator_id',
                'success_indicators.id'
            )
            ->leftjoin('opcr_targets', 'opcr_targets.idpaps', 'program_and_projects.id')
            ->leftjoin('opcr_accomplishments', 'opcr_accomplishments.idpaps', 'program_and_projects.id')
            ->leftjoin('office_accountables', 'office_accountables.idpaps', 'program_and_projects.id')
            ->join('major_final_outputs', 'major_final_outputs.id', 'program_and_projects.idmfo')
            ->orderBy('major_final_outputs.mfo_desc', 'asc')
            ->orderBy('program_and_projects.paps_desc', 'asc')
            ->get()
            ->map(function ($item) use ($total, $ave, $dept_name, $dept_head, $opcr_date, $mooe, $ps, $FFUNCCOD, $opcr_id) {
                return [
                    "total" => $total,
                    "ave" => $ave,
                    "dept_head" => $dept_head,
                    "opcr_date" => $opcr_date,
                    "mooe" => $mooe,
                    "ps" => $ps,
                    "FFUNCCOD" => $FFUNCCOD,
                    "opcr_id" => $opcr_id,
                    "mfo_desc" => $item->mfo_desc,
                    "target_success_indicator" => $item->target_success_indicator,
                    "rating_t" => $item->rating_t,
                    "rating_e" => $item->rating_e,
                    "rating_q" => $item->rating_q,
                    "remarks" => $item->remarks,
                    "office_accountable" => $item->office_accountable,
                    "actual_accomplishments" => $item->actual_accomplishments,
                    "dept_name" => $dept_name
                ];
            });
        return $data;
    }
    public function print_main(Request $request)
    {
        $total = $request->total;
        $ave = $request->ave;
        $dept_head = $request->dept_head;

        $opcr_date = $request->opcr_date;

        $mooe = $request->mooe;
        $ps = $request->ps;
        $FFUNCCOD = $request->FFUNCCOD;
        $opcr_id = $request->opcr_id;


        // $total="55";
        // $ave="3.0";
        // $dept_head="JOYZEL R. ODI";

        // $opcr_date="JULY TO DECEMBER 2023";

        // $mooe="8,951,455.00";
        // $ps ="4,533,455.00";
        // $FFUNCCOD = "1121";
        // $opcr_id="2";
        $approver = 'Dorothy Montejo Gonzaga';
        $pos = 'Governor';
        if ($FFUNCCOD == '1021') {
            $approver = 'Jayvee Tyron L. Uy';
            $pos = 'Vice Governor';
        }
        if ($FFUNCCOD == '1016') {
            $approver = 'Jayvee Tyron L. Uy';
            $pos = 'Vice Governor';
        }

        $date_now = Carbon::now()->format('F d, Y');
        return [
            'total' => $total,
            'ave' => $ave,
            'dept_head' => $dept_head,
            'date_now' => $date_now,
            'opcr_date' => $opcr_date,
            'mooe' => $mooe,
            'ps' => $ps,
            'FFUNCCOD' => $FFUNCCOD,
            'opcr_id' => $opcr_id,
            "approver" => $approver,
            "position" => $pos,
        ];
    }
    public function print_mfo(Request $request)
    {
        // $mfos = MajorFinalOutput::where('FFUNCCOD', $request->FFUNCCOD)
        //     ->whereNull('from_excel')
        //     ->OrderBy('id', 'ASC')
        //     ->get()
        //     ->map(function ($item) use ($request) {
        //         return [
        //             'idmfo' => $item->id,
        //             'mfo_desc' => $item->mfo_desc,
        //             'FFUNCCOD' => $request->FFUNCCOD,
        //             'opcr_id' => $request->opcr_id,
        //         ];
        //     });
        $mfos = MajorFinalOutput::where('FFUNCCOD', $request->FFUNCCOD)
            ->whereNull('from_excel')
            ->whereExists(function ($query) use ($request) {
                $query->select(DB::raw(1))
                    ->from('opcr_targets')
                    ->join('program_and_projects', 'opcr_targets.idpaps', '=', 'program_and_projects.id')
                    ->where('opcr_targets.office_performance_commitment_rating_list_id', $request->opcr_id)
                    ->whereRaw('program_and_projects.idmfo = major_final_outputs.id');
            })
            ->orderBy('id', 'ASC')
            ->get()
            ->map(function ($item) use ($request) {
                return [
                    'idmfo' => $item->id,
                    'mfo_desc' => $item->mfo_desc,
                    'FFUNCCOD' => $request->FFUNCCOD,
                    'opcr_id' => $request->opcr_id,
                ];
            });
        return $mfos;
    }
    public function print_paps(Request $request)
    {
        // ->join('opcr_targets', 'opcr_targets.idpaps', 'program_and_projects.id')
        //     ->join(
        //         'office_performance_commitment_ratings',
        //         'office_performance_commitment_ratings.id_opcr_target',
        //         'opcr_targets.id'
        //     )
        //     ->where('office_performance_commitment_rating_list_id.id', $request->opcr_id)
        //     ->groupBy('program_and_projects.id')
        $paps = ProgramAndProject::select(
            'program_and_projects.id',
            'program_and_projects.paps_desc'
        )
            ->where('program_and_projects.idmfo', $request->idmfo)
            ->where('opcr_targets.office_performance_commitment_rating_list_id', $request->opcr_id)
            ->join('opcr_targets', 'opcr_targets.idpaps', 'program_and_projects.id')
            ->OrderBy('program_and_projects.id', 'ASC')
            ->groupBy('program_and_projects.id')
            ->get()
            ->map(function ($item) use ($request) {
                return [
                    'idpaps' => $item->id,
                    'paps_desc' => $item->paps_desc,
                    'FFUNCCOD' => $request->FFUNCCOD,
                    'opcr_id' => $request->opcr_id,
                ];
            });
        return $paps;
    }
    public function print_success_targets(Request $request)
    {
        $idpaps = $request->idpaps;
        $opcr_id = $request->opcr_id;
        //rating q rating_e nabali
        $targets = OpcrTarget::select(
            "opcr_accomplishments.actual_accomplishments",
            "opcr_accomplishments.quantity",
            "opcr_targets.target_success_indicator",
            "opcr_targets.quantity AS target_quantity",
            "ratings.numerical_rating AS rating_e",
            "qualities.numerical_rating AS rating_q",
            "timelinesses.numerical_rating AS rating_t",
            DB::raw('ROUND((COALESCE(qualities.numerical_rating, 0) + COALESCE(ratings.numerical_rating, 0) + COALESCE(timelinesses.numerical_rating, 0)) / (CASE WHEN qualities.numerical_rating IS NULL AND ratings.numerical_rating IS NULL THEN 1 WHEN qualities.numerical_rating IS NULL AND timelinesses.numerical_rating IS NULL THEN 1 WHEN ratings.numerical_rating IS NULL AND timelinesses.numerical_rating IS NULL THEN 1 WHEN qualities.numerical_rating IS NULL THEN 2 WHEN ratings.numerical_rating IS NULL THEN 2 WHEN timelinesses.numerical_rating IS NULL THEN 2 ELSE 3 END),2) AS average_rating'),
            "opcr_accomplishments.remarks_final",
        )
            ->leftJoin("opcr_accomplishments", "opcr_accomplishments.opcr_target_id", "opcr_targets.id")
            ->leftJoin("ratings", "opcr_accomplishments.ratings_id", "ratings.id")
            ->leftJoin("qualities", "opcr_accomplishments.quality_id", "qualities.id")
            ->leftJoin("timelinesses", "opcr_accomplishments.timeliness_id", "timelinesses.id")
            ->where("opcr_targets.idpaps", $idpaps)
            ->where("opcr_targets.office_performance_commitment_rating_list_id", $opcr_id)
            ->get()
            ->map(function ($item) {
                // $ave = number_format($item->average_rating, 2, '.', ',');
                //$accomplishments = OpcrAccomplishment::where('opcr_target_id', $item->opcr_target_id)->first();
                return [
                    'target_success_indicator' => $item->target_success_indicator,
                    'quantity' => $item->target_quantity,
                    'actual_accomplishment' => $item->actual_accomplishments,
                    'quantity_accomplished' => $item->quantity,
                    'rating_q' => $item->rating_q,
                    'rating_e' => $item->rating_e,
                    'rating_t' => $item->rating_t,
                    'average_rating' => $item->average_rating,
                    'remarks_final' => $item->remarks_final,
                ];
            });
        return $targets;
    }

    public function print_rating(Request $request)
    {
        $idpaps = $request->idpaps;
        $opcr_id = $request->opcr_id;
        $success_indicator = SuccessIndicator::where("idpaps", $idpaps)
            ->where('opcr_id', $opcr_id)
            ->join(
                'office_performance_commitment_ratings',
                'office_performance_commitment_ratings.success_indicator_id',
                'success_indicators.id'
            )
            ->get()
            ->map(function ($item) {
                $rating_q = number_format($item->rating_q, 2);
                $rating_e = number_format($item->rating_e, 2);
                $rating_t = number_format($item->rating_t, 2);
                $sum = ($rating_e + $rating_q + $rating_t) / 3;
                $ave = number_format($sum, 2, '.', '');
                return [
                    'rating_q' => $rating_q,
                    'rating_e' => $rating_e,
                    'rating_t' => $rating_t,
                    'ave' => $ave,
                    'remarks' => $item->remarks,
                ];
            });
        return $success_indicator;
    }
    public function print_office(Request $request)
    {
        $idpaps = $request->idpaps;
        $office_accountable = OfficeAccountable::where('idpaps', $idpaps)
            ->groupBy('office_accountable')->get();
        return $office_accountable;
    }

    public function print(Request $request)
    {
        $link = $request->link;
        $link = str_replace("abcdefghijklo534gdmoivndfigudfhgdyfugdhfugidhfuigdhfiugmccxcxcxzczczxczxczxcxzc5fghjkliuhghghghaaa555l&&&&-", "", $link);

        $link = "http://" . $link;
        //dd($link);
        return inertia('OPCR/Form/Print', [
            "link" => $link,
        ]);
    }

    //SUBMIT/RECALL OPCR RATINGS
    public function submit_recall(Request $request, $opcr_id){
        $opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();
        $curr_stat  = $request->input('data.curr_stat');
        $staged_for = $request->input('data.staged_for');
        if($opcr){
            // dd($opcr, $request->data['curr_stat']);
            $opcr->rating_status = $staged_for;
            $opcr->save();
            // Prepare message
            if ($curr_stat == -1) {
                $message = "OPCR submitted";
            } elseif ($curr_stat == 0 && $staged_for == -1) {
                $message = "OPCR submission recalled successfully";
            } else {
                $message = "Rating status updated";
            }
            return redirect()->back()->with('message', $message);
        }else{
            return redirect()->back()->with('error','OPCR Not found!!!');
        }
        // dd($opcr_id);
    }
    //PRINT ACCOMPLISHMENTS
    public function print_accomplishment(Request $request)
    {
        $opcr_id = $request->opcr_id;
        $FFUNCCOD = $request->FFUNCCOD;
        //REVISION PLAN ID

        $mooe = "0.00";
        $ps = "0.00";
        $empl_id = "";
        $dept_head = "";
        $suff = "";
        $post = "";
        //Department Head
        $dept_head = "";
        if ($FFUNCCOD) {
            $office_id = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->first()->department_code;
            $empl_id = Office::where('id', $office_id)->first()->empl_id;
            $employee = UserEmployees::where('empl_id', $empl_id)->first();
            $dept_head = $employee->first_name . ' ' . $employee->middle_name[0] . '. ' .
                $employee->last_name;
            $suff = $employee->suffix_name;

            if ($suff) {
                $dept_head = $dept_head . ', ' . $suff;
            }
            $post = $employee->postfix_name;
            if ($post) {
                $dept_head = $dept_head . ', ' . $post;
            }
        }
        //Get OPCR Date
        $opcr_date = "";
        $dateStart = "";
        $dateEnd = "";
        $start = "";
        $end = "";
        if ($opcr_id) {
            $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();
            // dd($opcr_id);
            $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
            $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
            $start = $dateStart->format('F');
            $end = $dateEnd->format('F Y');
            $opcr_date = $start . " to " . $end;
            $opcr_date = Str::upper($opcr_date);
        }
        //Carbon Date
        $date_now = Carbon::now()->format('F d, Y');
        //TOTAL, SUM, AVERAGE
        // $averageSum = OfficePerformanceCommitmentRating::selectRaw('SUM((rating_q + rating_e + rating_t) / 3) AS average_sum')
        //     ->where('opcr_id', $opcr_id)
        //     ->first()->average_sum;
        // $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();
        // if ($count < 1) {
        //     $count = 1;
        // };
        // $total = number_format($averageSum, 2);
        // $ave_pre = $total / $count;
        // $ave = number_format($ave_pre, 2);
        $total = number_format($request->total, 2);
        $ave = number_format($request->average, 2);
        $pmt_chair = "Ivan Kleb N. Ulgasan, CESE";
        // dd($total);
        // dd("asasasasas");
        $approver = 'Engr. Raul G. Mabanglo';
        $pos = 'Governor';
        $isPA1 = $this->isPA($opcr_date, 'PA 1');
        $data = $this->model->select(
            'office_performance_commitment_ratings.id',
            'office_performance_commitment_ratings.success_indicator_id',
            'office_performance_commitment_ratings.accomplishments',
            'office_performance_commitment_ratings.rating_q',
            'office_performance_commitment_ratings.rating_e',
            'office_performance_commitment_ratings.rating_t',
            'office_performance_commitment_ratings.remarks',
            'office_performance_commitment_ratings.FFUNCCOD',
            'office_performance_commitment_ratings.opcr_id',
            'SU.success_indicator',
            // 'off.office_accountable',
            'PAPS.paps_desc',
            'mfo.mfo_desc',
            'mfo.created_at',
            'opcr_targets.quantity',
            'PAPS.id AS idpaps',
            'mfo.from_excel',
            'mfo.id AS mfo_idmfo',
            'PAPS.idmfo AS paps_idmfo',
            'opcr_targets.target_success_indicator AS target_success_indicator',
            'opcr_targets.quantity_unit',
            'os.performance_measure',
            'os.efficiency1',
            'os.timeliness',
            'os.prescribed_period',
            'os.office_accountable'
        )
            ->leftjoin('success_indicators AS SU', 'SU.id', 'office_performance_commitment_ratings.success_indicator_id')
            ->leftjoin('program_and_projects AS PAPS', 'PAPS.id', 'office_performance_commitment_ratings.id_paps')
            ->leftjoin('opcr_standards AS os', 'os.idpaps', 'PAPS.id')
            ->leftjoin('office_accountables AS off', 'off.idpaps', 'PAPS.id')
            ->join('major_final_outputs AS mfo', 'mfo.id', 'PAPS.idmfo')
            // ->join('opcr_targets', 'opcr_targets.idpaps', 'PAPS.id')
            ->leftjoin('opcr_targets', 'opcr_targets.id', 'office_performance_commitment_ratings.id_opcr_target')
            ->where('office_performance_commitment_ratings.opcr_id', $opcr_id)
            ->where('opcr_targets.is_included', '1')
            ->whereNull('mfo.from_excel')
            ->where('office_performance_commitment_ratings.FFUNCCOD', $FFUNCCOD)
            ->orderBy('mfo.id', 'asc')
            ->orderBy('PAPS.id', 'asc')
            ->groupBy('office_performance_commitment_ratings.id')
            ->get()
            ->map(function ($item) use ($opcr_id, $FFUNCCOD, $total, $ave, $dept_head, $opcr_date, $mooe, $ps, $date_now, $approver, $pos, $isPA1, $pmt_chair) {
                $efficiency1 = $item->efficiency1;
                $performance_measure = $item->performance_measure;
                $timeliness = $item->timeliness;
                $prescribed_period = $item->prescribed_period;
                $paps_desc = $item->paps_desc;
                $office_accountable = $item->office_accountable;
                if ($efficiency1 === 'No' && $timeliness === 'No') {
                    $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency";
                } elseif ($efficiency1 === 'Yes') {
                    $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency within {$prescribed_period}";
                } else {
                    $su = "{$performance_measure} {$paps_desc} with a satisfactory rating for quality/effectiveness and efficiency on or before {$timeliness}";
                }
                $approver = 'Engr. Raul G. Mabanglo';
                // true
                if ($isPA1) {
                    $approver = 'Dorothy Montejo Gonzaga';
                    $pmt_chair = 'Lewis Jake G. Caiman, CPA';
                }
                $pos = 'Governor';
                if ($FFUNCCOD == '1021') {
                    $approver = 'Dorothy Montejo Gonzaga';
                    $pos = 'Vice Governor';
                    if ($isPA1) {
                        $approver = 'Jayvee Tyron L. Uy';
                    }
                }
                if ($FFUNCCOD == '1016') {
                    $approver = 'Dorothy Montejo Gonzaga';
                    $pos = 'Vice Governor';
                    if ($isPA1) {
                        $approver = 'Jayvee Tyron L. Uy';
                    }
                }

                // dd($isPA1);
                $var_q = $item->rating_q;
                $var_e = $item->rating_e;
                $var_t = $item->rating_t;


                $div = 3;
                // if (floatval($var_q) <= 0) {
                //     $div = $div - 1;
                // }
                // if (floatval($var_e) <= 0) {
                //     $div = $div - 1;
                // }
                // if (floatval($var_t) <= 0) {
                //     $div = $div - 1;
                // }
                try {
                    if (intval($var_q) < 1) {
                        $div = $div - 1;
                    }
                } catch (Exception $e) {
                    $div = $div - 1;
                }
                try {
                    if (intval($var_e) < 1) {
                        $div = $div - 1;
                    }
                } catch (Exception $e) {
                    $div = $div - 1;
                }
                try {
                    if (intval($var_t) < 1) {
                        $div = $div - 1;
                    }
                } catch (Exception $e) {
                    $div = $div - 1;
                }
                $sum = $var_q + $var_e + $var_t;
                $ave_qet = 0;
                if ($div > 0) {
                    $ave_qet = $sum / $div;
                    $ave_qet = number_format(floatval($ave_qet), 2);
                }
                $adj = "Outstanding";
                if ($ave >= 4.51) {
                    $adj = "Outstanding";
                } else if ($ave >= 3.51) {
                    $adj = "Very Satisfactory";
                } else if ($ave >= 2.51) {
                    $adj = "Satisfactory";
                } else if ($ave >= 1.51) {
                    $adj = "Unsatisfactory";
                } else {
                    $adj = "Poor";
                }
                // $quant = OpcrTarget::where()

                // dd("average: " . $ave);
                // dd($item->id);
                if ($item->id = 684) {
                    // dd($item);
                }
                return [
                    "id" => $item->id,
                    "success_indicator_id" => $item->success_indicator_id,
                    "accomplishments" => $item->accomplishments,
                    "rating_q" => $item->rating_q,
                    "rating_e" => $item->rating_e,
                    "rating_t" => $item->rating_t,
                    "remarks" => $item->remarks,
                    "FFUNCCOD" => $item->FFUNCCOD,
                    "idpaps" => $item->idpaps,
                    "opcr_id" => $item->opcr_id,
                    "success_indicator" => $item->success_indicator,
                    "office_accountable" => $office_accountable,
                    "paps_desc" => $item->paps_desc,
                    "quantity" => $item->quantity . ' ' . $item->quantity_unit,
                    // "quantity_unit" => $item->quantity_unit,
                    "mfo_desc" => $item->mfo_desc,
                    "created_at" => $item->created_at,
                    "total" => $total,
                    "ave" => $ave,
                    "dept_head" => $dept_head,
                    "opcr_date" => $opcr_date,
                    "opcr_id" => $opcr_id,
                    "mooe" => $mooe,
                    "ps" => $ps,
                    "FFUNCCOD" => $FFUNCCOD,
                    "date_now" => $date_now,
                    "approver" => $approver,
                    "position" => $pos,
                    "ave_qet" => $ave_qet,
                    "target_success_indicator" => $su,
                    "adjectival" => $adj,
                    "pmt_chair" => $pmt_chair
                    // "office_accountable" => $office_accountable
                    // "from_excel" => $item->from_excel,
                    // "mfo_idmfo" => $item->mfo_idmfo,
                    // "paps_idmfo" => $item->paps_idmfo
                ];
            });
        // dd(count($data));
        if ($data->isEmpty()) {
            $data = collect([[
                "id" => null,
                "success_indicator_id" => 0,
                "accomplishments" => null,
                "rating_q" => null,
                "rating_e" => null,
                "rating_t" => null,
                "remarks" => null,
                "FFUNCCOD" => $FFUNCCOD,
                "idpaps" => null,
                "opcr_id" => $opcr_id,
                "success_indicator" => null,
                "office_accountable" => null,
                "paps_desc" => " ",
                "quantity" => null,
                "mfo_desc" => " ",
                "created_at" => null,
                "total" => null,
                "ave" => null,
                "dept_head" => null,
                "opcr_date" => $opcr_date,
                "mooe" => null,
                "ps" => null,
                "date_now" => now()->format('F d, Y'), // or fixed "June 25, 2025"
                "approver" => "Dorothy Montejo Gonzaga",
                "position" => "Governor",
                "ave_qet" => null,
                "target_success_indicator" => null,
                "adjectival" => null
            ]]);
        }
        return $data;
        //********************************************** */


    }
    public function isPA($opcr_date, $type)
    {
        if (!$opcr_date || !$type) {
            return false;
        }

        preg_match('/\d{4}/', $opcr_date, $matches);
        $year = isset($matches[0]) ? (int)$matches[0] : null;

        if (!$year) {
            return false;
        }

        $isFirstSem = str_contains($opcr_date, 'JANUARY');

        if ($type === 'PA 1') {
            return $year < 2025 || ($year === 2025 && $isFirstSem);
        } elseif ($type === 'PA 2') {
            return $year > 2025 || ($year === 2025 && !$isFirstSem);
        }

        return false;
    }
    //UPDATE CURRENT
    public function update_current(Request $request)
    {
        // dd('update_current');
        // $opcrtargets = OfficePerformanceCommitmentRating::select()
        //     ->leftjoin('program_and_projects', 'program_and_projects.id', 'office_performance_commitment_ratings.id_paps')
        //     ->get();
        // dd($opcrtargets);

        $opcr_lists = OfficePerformanceCommitmentRatingList::get();
        // dd($opcr_lists);
        foreach ($opcr_lists as $opcr_list) {
            $opcr_targets = OpcrTarget::where('office_performance_commitment_rating_list_id', $opcr_list->id)
                ->get();
            // dd($opcr_targets);
            foreach ($opcr_targets as $opcr_target) {
                // $paps = ProgramAndProject::where('id',$opcr_target->idpaps)->first();
                $opcr_id = $opcr_target->office_performance_commitment_rating_list_id;

                $success_indic = SuccessIndicator::where('idpaps', $opcr_target->idpaps)->first();
                // dd($success_indic);
                if ($success_indic !== null) {
                    $idpaps = $opcr_target->idpaps;
                    $success_id = $success_indic->id;
                    // dd($success_id);
                    OfficePerformanceCommitmentRating::where('success_indicator_id', $success_id)
                        ->where('opcr_id', $opcr_id)
                        ->update([
                            'id_paps' => $idpaps,
                            'id_opcr_target' => $opcr_target->id
                        ]);
                }
            }
        }
        OfficePerformanceCommitmentRating::where('id_opcr_target', '0')->delete();
        $opcr = OfficePerformanceCommitmentRating::get();

        return $opcr;
    }
    //GENERATE RATING
    public function generate_rating(Request $request)
    {
        // dd("generate rating");
        OfficePerformanceCommitmentRating::truncate();
        //Generate Ratings based on existing OPCR Targets
        $targets = OpcrTarget::all();
        foreach ($targets as $target) {
            $target_id = $target->id;
            $idpaps = $target->idpaps;
            $opcr_id = $target->office_performance_commitment_rating_list_id;
            $success = SuccessIndicator::where('idpaps', $idpaps)->first();
            if ($success !== null) {
                $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)
                    ->first();
                $opcrf = new OfficePerformanceCommitmentRating();
                $opcrf->id_paps = $idpaps;
                $opcrf->id_opcr_target = $target_id;
                $opcrf->success_indicator_id = $success->id;
                $opcrf->accomplishments = "";
                $opcrf->rating_q = "3";
                $opcrf->rating_e = "3";
                $opcrf->rating_t = "3";
                $opcrf->remarks = "-";
                $opcrf->opcr_id    = $opcr_id;
                $opcrf->FFUNCCOD = $opcr_list->FFUNCCOD;
                $opcrf->department_code = $opcr_list->department_code;
                $opcrf->save();
            }
            // dd($idpaps);

        }
        $opcr_all = OfficePerformanceCommitmentRating::all();
        return $opcr_all;
    }
}
