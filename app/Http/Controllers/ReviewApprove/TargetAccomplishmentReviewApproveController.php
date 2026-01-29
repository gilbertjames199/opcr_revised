<?php

namespace App\Http\Controllers\ReviewApprove;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use App\Http\Controllers\Controller;
use App\Models\DpcrTarget;
use App\Models\FFUNCCOD;
use App\Models\MonthlyTarget;
use App\Models\OfficePerformanceCommitmentRating;
use App\Models\OfficePerformanceCommitmentRatingList;
use App\Models\OpcrRemarks;
use App\Models\OpcrTarget;
use App\Models\ProgramAndProject;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TargetAccomplishmentReviewApproveController extends Controller
{
    protected $revapp;
    protected static array $columns = [
        'q1', 'q2', 'q3',
        'e1', 'e2', 'e3',
        't1'
    ];
    public function __construct(OfficePerformanceCommitmentRatingList $revapp)
    {
        $this->revapp = $revapp;
    }
    public function index_target(Request $request)
    {
        // $data = $this->revapp->paginate(10);
        if (auth()->user()->department_code == '04') {
            $data = $this->revapp
                ->where('target_status', '>', -1)
                ->where('target_status', '<', 1)
                ->orderBy('year', 'desc')
                ->orderBy('semester', 'desc')
                ->paginate(10);
            $data->getCollection()->transform(function ($item) {
                $opcr_id = $item->id;
                // dd($item);
                //OFFICE
                $office = FFUNCCOD::where('FFUNCCOD', $item->FFUNCCOD)
                    ->first();
                //TOTAL & AVERAGE
                $averageSum = $this->getRating($opcr_id);
                $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();
                if ($count < 1) {
                    $count = 1;
                }
                $total = number_format($averageSum, 2);
                $ave_pre = $total / $count;
                $ave = number_format($ave_pre, 2);

                //OPCR LIST
                $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();

                //OPCR DATE
                $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
                $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
                $start = $dateStart->format('F');
                $end = $dateEnd->format('F Y');
                $opcr_date = $start . " to " . $end;
                $opcr_date = Str::upper($opcr_date);

                //YEAR NOW
                $my_year = Carbon::parse($my_opcr->date_to)->format('Y');
                //dd($my_year);
                //REVISION PLAN ID/ GET MOOE & PS

                return [
                    'id' => $item->id,
                    'semester' => $item->semester,
                    'date_from' => $item->date_from,
                    'date_to' => $item->date_to,
                    'year' => $item->year,
                    'FFUNCCOD' => $item->FFUNCCOD,
                    'target_status' => $item->target_status,
                    'rating_status' => $item->rating_status,
                    'accomplishment_status' => $item->accomplishment_status,
                    'allotment' => $item->allotment,
                    'total' => $total,
                    'ave' => $ave,
                    'opcr_date' => $opcr_date,
                    'office' => $office
                ];
            });
            // dd($data);
            return inertia('Review-Approve/OPCR/Targets/Index', [
                'data' => $data
            ]);
        } else if (auth()->user()->department_code == '02') {
            $data = $this->revapp
                ->where('target_status', '>', 0)
                ->where('target_status', '<', 2)
                ->orderBy('year', 'desc')
                ->orderBy('semester', 'desc')
                ->paginate(10);
            $data->getCollection()->transform(function ($item) {
                $opcr_id = $item->id;
                // dd($item);
                //OFFICE
                $office = FFUNCCOD::where('FFUNCCOD', $item->FFUNCCOD)
                    ->first();
                //TOTAL & AVERAGE
                $averageSum = $this->getRating($opcr_id);
                $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();
                if ($count < 1) {
                    $count = 1;
                }
                $total = number_format($averageSum, 2);
                $ave_pre = $total / $count;
                $ave = number_format($ave_pre, 2);

                //OPCR LIST
                $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();

                //OPCR DATE
                $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
                $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
                $start = $dateStart->format('F');
                $end = $dateEnd->format('F Y');
                $opcr_date = $start . " to " . $end;
                $opcr_date = Str::upper($opcr_date);

                //YEAR NOW
                $my_year = Carbon::parse($my_opcr->date_to)->format('Y');
                //dd($my_year);
                //REVISION PLAN ID/ GET MOOE & PS

                return [
                    'id' => $item->id,
                    'semester' => $item->semester,
                    'date_from' => $item->date_from,
                    'date_to' => $item->date_to,
                    'year' => $item->year,
                    'FFUNCCOD' => $item->FFUNCCOD,
                    'target_status' => $item->target_status,
                    'rating_status' => $item->rating_status,
                    'accomplishment_status' => $item->accomplishment_status,
                    'allotment' => $item->allotment,
                    'total' => $total,
                    'ave' => $ave,
                    'opcr_date' => $opcr_date,
                    'office' => $office
                ];
            });
            // dd($data);
            return inertia('Review-Approve/OPCR/Targets/Index', [
                'data' => $data
            ]);
        }else {
            return redirect('/forbidden')
                ->with('error', 'Access forbidden!');
        }
    }
    public function reviewOPCRTarget(Request $request, $opcr_list_id)
    {
        // dd('Review: ' . $opcr_list_id);
        // $table->string('type')->comment('target/rating/accomplishment');
        // $table->string('number')->comment('indicate if this remark is the first,second, third, etc');
        // $table->string('status')->comment('indicate if remark is for');
        // $table->string('remarks');
        // dd($request);
        $update_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)
            ->update(['target_status' => 1]);
        $opcr_num = OpcrRemarks::where('id_opcr_list', $opcr_list_id)
            ->orderBy('number', 'desc')->first();
        $opcr_rem = new OpcrRemarks();
        $opcr_rem->id_opcr_list = $opcr_list_id;
        $opcr_rem->type = "target";
        if ($opcr_num) {
            $num = (int)$opcr_num->number + 1;
            $opcr_rem->number = "" . $num . "";
        } else {
            $opcr_rem->number = "1";
        }
        $opcr_rem->status = "review";
        $opcr_rem->remarks = $request->remarks;
        $opcr_rem->save();
        return redirect('/review-approve/targets')
            ->with('info', 'Office performance target reviewed!');
    }
    public function approveOPCRTarget(Request $request, $opcr_list_id)
    {
        // dd("approve");
        $update_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)
            ->update(['target_status' => 2]);
        $opcr_num = OpcrRemarks::orderBy('number', 'desc')->first();
        $opcr_rem = new OpcrRemarks();
        $opcr_rem->id_opcr_list = $opcr_list_id;
        $opcr_rem->type = "target";
        if ($opcr_num) {
            $num = (int)$opcr_num->number + 1;
            $opcr_rem->number = "" . $num . "";
        } else {
            $opcr_rem->number = "1";
        }
        $opcr_rem->status = "approve";
        $opcr_rem->remarks = $request->remarks;
        $opcr_rem->save();
        return redirect('/review-approve/targets')
            ->with('message', 'Office performance target approved!');
    }
    public function returnOpcrTarget(Request $request, $opcr_list_id)
    {
        // dd("return: " . $opcr_list_id);
        $update_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)
            ->update(['target_status' => -2]);
        $opcr_num = OpcrRemarks::orderBy('number', 'desc')->first();
        $opcr_rem = new OpcrRemarks();
        $opcr_rem->id_opcr_list = $opcr_list_id;
        $opcr_rem->type = "target";
        if ($opcr_num) {
            $num = (int)$opcr_num->number + 1;
            $opcr_rem->number = "" . $num . "";
        } else {
            $opcr_rem->number = "1";
        }
        $opcr_rem->status = "return";
        $opcr_rem->remarks = $request->remarks;
        $opcr_rem->save();
        return redirect('/review-approve/targets')
            ->with('error', 'Office performance target returned!');
    }
    public function viewTarget(Request $request, $opcr_list_id)
    {
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)->first();
        // q1, q2, q3, e1, e2, e3, t1
        // $data = ProgramAndProject::where('program_and_projects.FFUNCCOD', $opcr_list->FFUNCCOD)
        //     ->select(
        //         'major_final_outputs.mfo_desc',
        //         'program_and_projects.id AS idpaps',
        //         'program_and_projects.paps_desc',
        //         'OPT.id',
        //         'OPT.target_success_indicator',
        //         'OPT.quantity',
        //         // 'OPT.q1','OPT.q2','OPT.q3', 'OPT.e1','OPT.e2','OPT.e3','OPT.t1',
        //         'SU.success_indicator'
        //     )
        //     ->leftjoin('major_final_outputs', 'major_final_outputs.id', 'program_and_projects.idmfo')
        //     ->leftjoin('success_indicators AS SU', 'SU.idpaps', 'program_and_projects.id')
        //     ->leftjoin(DB::raw('(Select id,
        //                                                 office_performance_commitment_rating_list_id,
        //                                                 idpaps, quantity, target_success_indicator,
        //                      FROM opcr_targets WHERE opcr_targets.office_performance_commitment_rating_list_id=' . $opcr_list_id . ') AS OPT'), 'OPT.idpaps', 'program_and_projects.id')
        //     ->orderBy('major_final_outputs.mfo_desc', 'asc')
        //     ->orderBy('program_and_projects.paps_desc', 'asc')
        //     ->get();
        $data = OpcrTarget::where('office_performance_commitment_rating_list_id', $opcr_list_id)
                ->with(['opcr_rating','opcr_rating2', 'paps','paps.MFO'])
                ->where('is_included', '1')
                ->get()
                ->map(function($item)use($opcr_list_id){
                    // dd($item->opcr_rating2, $opcr_list_id);
                    $rating = null;
                    $q1 = "";
                    $q2 = "";
                    $q3 = "";
                    $e1 = "";
                    $e2 = "";
                    $e3 = "";
                    $t1 = "";
                    $rid = "";
                    if (!empty($item->opcr_rating2)) {
                        //
                        $rating = collect($item->opcr_rating2)->where('opcr_id', $opcr_list_id)->first();
                        // dd($rating,'collect');
                        $q1 = optional($rating)->q1;
                        $q2 = optional($rating)->q2;
                        $q3 = optional($rating)->q3;
                        $e1 = optional($rating)->e1;
                        $e2 = optional($rating)->e2;
                        $e3 = optional($rating)->e3;
                        $t1 = optional($rating)->t1;
                        $rid = optional($rating)->id;
                        // dd($rating);
                    }

                    return [
                        'mfo_desc' => optional(optional(optional($item)->paps)->MFO)->mfo_desc,
                        'idpaps' => $item->idpaps,
                        'paps_desc' => optional(optional($item)->paps)->paps_desc,
                        'id' =>$item->id,
                        'target_success_indicator'=>$item->target_success_indicator,
                        'quantity'=>$item->quantity,
                        'success_indicator'=>$item->success_indicator,
                        "opcr_rating_id"=>$rid,
                        "q1"=>$q1,
                        "q2"=>$q2,
                        "q3"=>$q3,
                        "e1"=>$e1,
                        "e2"=>$e2,
                        "e3"=>$e3,
                        "t1"=>$t1,
                    ];
                });
        return $data;
    }
    public function reviewOPCRAccomplishment(Request $request, $opcr_list_id)
    {
        $update_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)
            ->update(['accomplishment_status' => 1]);
        return redirect('/opcrtarget/' . $opcr_list_id)
            ->with('info', 'Office performance accomplishment reviewed!');
    }
    public function approveOPCRAccomplishment(Request $request, $opcr_list_id)
    {
        $update_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)
            ->update(['accomplishment_status' => 2]);
        return redirect('/opcrtarget/' . $opcr_list_id)
            ->with('info', 'Office performance accomplishment approved!');
    }
    public function reviewOPCRRating(Request $request, $opcr_list_id)
    {
        $update_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)
            ->update(['rating_status' => 1]);
            // '/opcrtarget/' . $opcr_list_id
        return redirect()->back()
            ->with('info', 'Office performance rating reviewed!');
    }
    public function approveOPCRRating(Request $request, $opcr_list_id)
    {
        $update_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)
            ->update(['rating_status' => 2]);
            return redirect()->back()
            ->with('info', 'Office performance rating approved!');
        // return redirect('/opcrtarget/' . $opcr_list_id)
        //     ->with('info', 'Office performance rating approved!');
    }
    public function returnOpcrRating(Request $request, $opcr_list_id)
    {
        // dd("return: " . $opcr_list_id);
        $update_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)
            ->update(['rating_status' => -2]);
        $opcr_num = OpcrRemarks::orderBy('number', 'desc')->first();
        $opcr_rem = new OpcrRemarks();
        $opcr_rem->id_opcr_list = $opcr_list_id;
        $opcr_rem->type = "rating";
        if ($opcr_num) {
            $num = (int)$opcr_num->number + 1;
            $opcr_rem->number = "" . $num . "";
        } else {
            $opcr_rem->number = "1";
        }
        $opcr_rem->status = "return";
        $opcr_rem->remarks = $request->remarks;
        $opcr_rem->save();

        return redirect('/review-approve/ratings')
            ->with('error', 'Office performance target returned!');
    }
    public function getRating($opcr_id)
    {

        $targets = OpcrTarget::select(
            DB::raw('SUM(ROUND((COALESCE(qualities.numerical_rating, 0) + COALESCE(ratings.numerical_rating, 0) + COALESCE(timelinesses.numerical_rating, 0)) / (CASE WHEN qualities.numerical_rating IS NULL AND ratings.numerical_rating IS NULL THEN 1 WHEN qualities.numerical_rating IS NULL AND timelinesses.numerical_rating IS NULL THEN 1 WHEN ratings.numerical_rating IS NULL AND timelinesses.numerical_rating IS NULL THEN 1 WHEN qualities.numerical_rating IS NULL THEN 2 WHEN ratings.numerical_rating IS NULL THEN 2 WHEN timelinesses.numerical_rating IS NULL THEN 2 ELSE 3 END),2)) AS sum'),
        )
            ->leftJoin("opcr_accomplishments", "opcr_accomplishments.opcr_target_id", "opcr_targets.id")
            ->leftJoin("ratings", "opcr_accomplishments.ratings_id", "ratings.id")
            ->leftJoin("qualities", "opcr_accomplishments.quality_id", "qualities.id")
            ->leftJoin("timelinesses", "opcr_accomplishments.timeliness_id", "timelinesses.id")
            ->where("opcr_targets.office_performance_commitment_rating_list_id", $opcr_id)
            ->get();

        $val = $targets[0]->sum;
        return $val;
    }
    public function index_rating(Request $request){
        // dd("rating");
        // dd(auth()->user());

                // ->where('rating_status', '<', 1)
        $disk = app()->environment('production') ? 'custom_uploads' : 'public';
        if (auth()->user()->department_code == '04') {
            $data = $this->revapp
                ->where('rating_status', '>', -1)
                ->orderBy('year', 'desc')
                ->orderBy('semester', 'desc')
                ->paginate(10);
            $data->getCollection()->transform(function ($item) {
                $opcr_id = $item->id;
                // dd($item);
                //OFFICE
                $office = FFUNCCOD::where('FFUNCCOD', $item->FFUNCCOD)
                    ->first();
                //TOTAL & AVERAGE
                $averageSum = $this->getRating($opcr_id);
                $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();
                if ($count < 1) {
                    $count = 1;
                }
                $total = number_format($averageSum, 2);
                $ave_pre = $total / $count;
                $ave = number_format($ave_pre, 2);

                //OPCR LIST
                $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();

                //OPCR DATE
                $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
                $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
                $start = $dateStart->format('F');
                $end = $dateEnd->format('F Y');
                $opcr_date = $start . " to " . $end;
                $opcr_date = Str::upper($opcr_date);

                //YEAR NOW
                $my_year = Carbon::parse($my_opcr->date_to)->format('Y');
                // dd($my_year);
                //REVISION PLAN ID/ GET MOOE & PS

                return [
                    'id' => $item->id,
                    'semester' => $item->semester,
                    'date_from' => $item->date_from,
                    'date_to' => $item->date_to,
                    'year' => $item->year,
                    'FFUNCCOD' => $item->FFUNCCOD,
                    'target_status' => $item->target_status,
                    'rating_status' => $item->rating_status,
                    'accomplishment_status' => $item->accomplishment_status,
                    'allotment' => $item->allotment,
                    'total' => $total,
                    'ave' => $ave,
                    'opcr_date' => $opcr_date,
                    'office' => $office
                ];
            });
            // dd($data);

            return inertia('Review-Approve/OPCR/Ratings/Index', [
                'data' => $data,
                'mode_1'=>'Review',
                'disk'=>$disk
            ]);
        } else if (auth()->user()->department_code == '02' && auth()->user()->recid == '795') {
            $data = $this->revapp
                ->where('rating_status', '>', 0)
                ->where('rating_status', '<', 2)
                ->orderBy('year', 'desc')
                ->orderBy('semester', 'desc')
                ->paginate(10);
            $data->getCollection()->transform(function ($item) {
                $opcr_id = $item->id;
                // dd($item);
                //OFFICE
                $office = FFUNCCOD::where('FFUNCCOD', $item->FFUNCCOD)
                    ->first();
                //TOTAL & AVERAGE
                $averageSum = $this->getRating($opcr_id);
                $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();
                if ($count < 1) {
                    $count = 1;
                }
                $total = number_format($averageSum, 2);
                $ave_pre = $total / $count;
                $ave = number_format($ave_pre, 2);

                //OPCR LIST
                $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();

                //OPCR DATE
                $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
                $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
                $start = $dateStart->format('F');
                $end = $dateEnd->format('F Y');
                $opcr_date = $start . " to " . $end;
                $opcr_date = Str::upper($opcr_date);

                //YEAR NOW
                $my_year = Carbon::parse($my_opcr->date_to)->format('Y');
                // dd($my_year);
                //REVISION PLAN ID/ GET MOOE & PS

                return [
                    'id' => $item->id,
                    'semester' => $item->semester,
                    'date_from' => $item->date_from,
                    'date_to' => $item->date_to,
                    'year' => $item->year,
                    'FFUNCCOD' => $item->FFUNCCOD,
                    'target_status' => $item->target_status,
                    'rating_status' => $item->rating_status,
                    'accomplishment_status' => $item->accomplishment_status,
                    'allotment' => $item->allotment,
                    'total' => $total,
                    'ave' => $ave,
                    'opcr_date' => $opcr_date,
                    'office' => $office
                ];
            });
            // dd($data);
            return inertia('Review-Approve/OPCR/Ratings/Index', [
                'data' => $data,
                'mode_1'=>'Approve',
                'disk'=>$disk
            ]);
        }else {
            return redirect('/forbidden')
                ->with('error', 'Access forbidden!');
        }
    }
    public function update_rating_score(Request $request, $column, $opcr_rating_id, $item_score){
        // dd($column, $opcr_rating_id, $item_score);
        $rating = OfficePerformanceCommitmentRating::find($opcr_rating_id);
        // dd($item_score, $column, $opcr_rating_id, $rating);
        if($item_score=="rating is null"){
            $item_score="";
        }
        if ($rating) {
            // Update dynamic column
            $rating->{$column} = $item_score;
            $rating->save();

            return response()->json([
                'success' => true,
                'message' => "Column {$column} updated successfully",
                'data'    => $rating
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => "Record not found"
            ], 404);
        }
    }
    public function viewRating(Request $request, $opcr_list_id)
    {

        // dd($request->type);
        $data=[];
        if($request->type=='Review'){
            // dd(OpcrTarget::where('office_performance_commitment_rating_list_id', $opcr_list_id)->where('is_included', '1')->get());
            $data = OpcrTarget::with(['opcrList',
                    'opcr_rating',
                    'opcr_rating.movs',
                    'opcr_rating2',
                    'paps',
                    'paps.MFO',
                    'paps.opcr_stardard',
                    'paps.divisionOutputs',
                    'paps.divisionOutputs.dpcrTargets',
                    'paps.divisionOutputs.dpcrTargets.ipcr_Semestral',
                    'paps.divisionOutputs.dpcrTargets.monthlyTargets',
                ])
                ->where('office_performance_commitment_rating_list_id', $opcr_list_id)
                ->where('is_included', '1')
                ->get()
                // ->pluck('id');
                ->map(function($item)use($opcr_list_id){

                    // THESE*******************************************************
                    $rating = null;
                    $movs = [];
                    $q1 = "";
                    $q2 = "";
                    $q3 = "";
                    $e1 = "";
                    $e2 = "";
                    $e3 = "";
                    $t1 = "";
                    $rid = "";
                    $show_mov = false;
                    $count_movs=0;
                    if (!empty($item->opcr_rating2)) {
                        //
                        $rating = collect($item->opcr_rating2)->where('opcr_id', $opcr_list_id)->first();
                        // dd($rating,'collect');
                        $q1 = optional($rating)->q1;
                        $q2 = optional($rating)->q2;
                        $q3 = optional($rating)->q3;
                        $e1 = optional($rating)->e1;
                        $e2 = optional($rating)->e2;
                        $e3 = optional($rating)->e3;
                        $t1 = optional($rating)->t1;
                        $rid = optional($rating)->id;
                        // dd($rating);
                        $movs = optional($item->opcr_rating)->movs;
                        // $show_mov = !empty($movs);
                        $movs = optional($item->opcr_rating)->movs;

                        if ($movs instanceof Collection) {
                            $show_mov = $movs->isNotEmpty();   // correct for Eloquent collections
                            $count_movs = $movs->count();
                        } else {
                            // covers arrays, strings, nulls, etc.
                            $show_mov = !empty($movs);
                            $count_movs = $show_mov ? 1 : 0;
                        }
                    }
                    $division_outputs =optional(optional($item)->paps)->divisionOutputs ?? [];
                    $dpcr_targets=[];
                    $sem = (optional(optional($item)->opcrList)->semester=='Second Semester')? '2':'1';
                    $year=optional(optional($item)->opcrList)->year;


                    $monthly_targets = $this->calculateMonthlyAverages($item, [
                        'q1','q2','q3',
                        'e1','e2','e3',
                        't1'
                    ]);
                    // dd($monthly_targets, $item->id);

                    // DPCR Rating


                    // $dpcr_ave = optional($dpcr_targets)->pluck('monthlyTargets') ?? collect();

                    return [
                        'id'=>$item->id,
                        // 'average_monthly'=>$average_monthly,
                        'monthly_targets'=>$monthly_targets,
                        'mfo_desc' => optional(optional(optional($item)->paps)->MFO)->mfo_desc,
                        'idpaps' => $item->idpaps,
                        'paps_desc' => optional(optional($item)->paps)->paps_desc,
                        'id' =>$item->id,
                        'target_success_indicator'=>$item->target_success_indicator,
                        'quantity'=>$item->quantity,
                        'success_indicator'=>$item->success_indicator,
                        "opcr_rating_id"=>$rid,
                        "accomplishments"=>optional(optional($item)->opcr_rating)->accomplishments,
                        "q1"=>$q1,
                        "q2"=>$q2,
                        "q3"=>$q3,
                        "e1"=>$e1,
                        "e2"=>$e2,
                        "e3"=>$e3,
                        "t1"=>$t1,
                        // 'q1_ave' => round($computeAve($summary['q1']), 2),
                        // 'q2_ave' => round($computeAve($summary['q2']), 2),
                        // 'q3_ave' => round($computeAve($summary['q3']), 2),

                        // 'e1_ave' => round($computeAve($summary['e1']), 2),
                        // 'e2_ave' => round($computeAve($summary['e2']), 2),
                        // 'e3_ave' => round($computeAve($summary['e3']), 2),

                        // 't1_ave' => round($computeAve($summary['t1']), 2),

                        // // Now compute q_ave, e_ave, t_ave per original logic
                        // 'q_ave' => round($computeAve(array_merge($summary['q1'], $summary['q2'], $summary['q3'])), 2),
                        // 'e_ave' => round($computeAve(array_merge($summary['e1'], $summary['e2'], $summary['e3'])), 2),
                        // 't_ave' => round($computeAve($summary['t1']), 2),

                        // // Overall row average across all monthly row averages
                        // 'average' => round($computeAve($summary['row_averages']), 2),
                        "remarks" => optional($item->opcr_rating)->remarks,
                        "q1_standard"=>optional(optional(optional($item)->paps)->opcr_stardard)->quality1,
                        "q2_standard"=>optional(optional(optional($item)->paps)->opcr_stardard)->quality2,
                        "q3_standard"=>optional(optional(optional($item)->paps)->opcr_stardard)->quality3,
                        "e1_standard"=>optional(optional(optional($item)->paps)->opcr_stardard)->efficiency1,
                        "e2_standard"=>optional(optional(optional($item)->paps)->opcr_stardard)->efficiency2,
                        "e3_standard"=>optional(optional(optional($item)->paps)->opcr_stardard)->efficiency3,
                        "t1_standard"=> optional(optional(optional($item)->paps)->opcr_stardard)->timeliness,
                        "movs"=>$movs,
                        "mov_is_visible"=>$show_mov,
                        "count_movs"=>$count_movs,
                        "division_outputs"=>$division_outputs,
                        "division_output_ids"=>optional($division_outputs)->pluck('id'),
                        // "q1_dpcr"=>$dpcr_ave,
                        // "monthly_targets"=>optional($dpcr_targets)->pluck("monthlyTargets"),

                        // count(optional($dpcr_targets)->pluck("monthlyTargets"))>0?$d
                        // "monthly_targets"=> optional($dpcr_targets)->pluck("monthlyTargets"),

                        "sem"=>$sem,
                        "year"=>$year
                        // ->monthlyTargets
                        // "flat" => $flat,
                        // 'standard'=>optional(optional($item)->paps)->opcr_stardard
                    ];
                });
        }else{
            $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)->first();
            $opcr_id=$opcr_list_id;
            $FFUNCCOD=$opcr_list->FFUNCCOD;
            $data = OpcrTarget::with([
                'opcr_rating',
                'opcrList',
                'paps',
                'paps.MFO',
                'paps.opcr_stardard',
                'paps.divisionOutputs',
                'paps.divisionOutputs.dpcrTargets',
                'paps.divisionOutputs.dpcrTargets.ipcr_Semestral',
                'paps.divisionOutputs.dpcrTargets.monthlyTargets',
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


                    // Collect only non-null values for each rating group
                    // Quality
                    $qValues = array_filter([
                        $item->opcr_rating ? ($item->opcr_rating->q1 ?? 0) : 0,
                        $item->opcr_rating ? ($item->opcr_rating->q2 ?? 0) : 0,
                        $item->opcr_rating ? ($item->opcr_rating->q3 ?? 0) : 0,
                    ], function ($v) {
                        return $v != 0; // skip zeros
                    });
                    $r_q = count($qValues) > 0 ? round(array_sum($qValues) / count($qValues), 2) : 0;

                    $eValues = array_filter([
                        $item->opcr_rating ? ($item->opcr_rating->e1 ?? 0) : 0,
                        $item->opcr_rating ? ($item->opcr_rating->e2 ?? 0) : 0,
                        $item->opcr_rating ? ($item->opcr_rating->e3 ?? 0) : 0,
                    ], function ($v) {
                        return $v != 0;
                    });
                    $r_e = count($eValues) > 0 ? round(array_sum($eValues) / count($eValues), 2) : 0;

                    $t1 = $item->opcr_rating ? ($item->opcr_rating->t1 ?? 0) : 0;
                    $r_t = $t1 != 0 ? round($t1, 2) : 0;

                    $monthly_targets = $this->calculateMonthlyAverages($item, [
                        'q1','q2','q3',
                        'e1','e2','e3',
                        't1'
                    ]);
                    return [
                        "id" => $id,
                        "monthly_targets"=>$monthly_targets,
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
                        "q1" => $q1 ?? 0,
                        "q2" => $q2 ?? 0,
                        "q3" => $q3 ?? 0,
                        "e1" => $e1 ?? 0,
                        "e2" => $e2 ?? 0,
                        "e3" => $e3 ?? 0,
                        "t1" => $t1 ?? 0,
                    ];
                });
        }
        // dd($data->pluck("dpcr_targets")->first());
        return $data;
    }
    private function calculateMonthlyAverages($item, array $columns)
    {
        // Collect all monthly targets under this OPCR item
        // dd($item);
        $sem = $item->opcrList->semester === 'Second Semester' ? 2 : 1;
        $year = $item->opcrList->year;
        $ipcrSemestrals = collect(optional($item->paps)->divisionOutputs)
            ->flatMap(function ($division) {
                // dd($division);
                return collect($division->dpcrTargets)
                    ->map(fn ($dpcr) => $dpcr->ipcr_Semestral);
            })
            ->filter(fn ($ipcr) =>
                $ipcr !== null && (int) $ipcr->sem === $sem
            )
            ->first();
        // dd($ipcrSemestrals);
        $sem_id = optional($ipcrSemestrals)->id?optional($ipcrSemestrals)->id:0;
        $monthlyTargets = collect(optional($item->paps))
            ->flatMap(function ($paps) {
                return collect(optional($paps)->divisionOutputs);
            })
            ->flatMap(function ($divisionOutput) {
                return collect(optional($divisionOutput)->dpcrTargets);
            })
            ->flatMap(function ($dpcrTarget) {
                return collect(optional($dpcrTarget)->monthlyTargets);
            })
            ->filter(function ($monthlyTarget) use ($sem, $year, $sem_id) {
                // return  (int) $monthlyTarget->year === (int) $year;
                // always filter by year
                $match = (int) $monthlyTarget->year === (int) $year;

                // if sem_id is not 0, also filter by sem_id
                if ($sem_id !== 0) {
                    $match = $match && ((int) $monthlyTarget->sem_id === (int) $sem_id);
                }

                return $match;
            })
        ->values(); // reindex;
        // dd($monthlyTargets);
        // dd($item);
        // dd($monthlyTargets, collect(optional($item->paps))
        // ->flatMap(function ($paps) {
        //     return collect(optional($paps)->divisionOutputs);
        // })
        // ->flatMap(function ($divisionOutput) {
        //     return collect(optional($divisionOutput)->dpcrTargets);
        // })
        // ->flatMap(function ($dpcrTarget) {
        //     return collect(optional($dpcrTarget)->monthlyTargets);
        // })->first());

        $averages = [];

        foreach ($columns as $column) {
            $values = $monthlyTargets
                ->pluck($column)
                ->filter(fn ($v) => !is_null($v) && $v != 0);

            $averages[$column] = $values->count()
                ? round($values->avg(), 2)
                : 0;
        }
        return $averages;
        // $
        // return [
        //     'opcr_target_id' => $item->id,
        //     'averages'       => $averages,
        //     'q1'=>optional($averages)->q1,
        //     'q2'=>optional($averages)->q2,
        //     'q3'=>optional($averages)->q3,
        //     'e1'=>optional($averages)->e1,
        //     'e1'=>optional($averages)->e1,
        //     'e3'=>optional($averages)->e3,
        //     't1'=>optional($averages)->t1,
        // ];
    }
    public static function calculate(Collection $monthlyTargets)
    {
        // dd($monthlyTargets);
        $monthlyTargets = collect($monthlyTargets);

        /**
         * 1️⃣ Per-subarray averages
         */

        $subarrayAverages = $monthlyTargets->map(function ($subarray) {
            $subarray = collect($subarray);

            return collect(self::$columns)->mapWithKeys(function ($column) use ($subarray) {
                $validValues = $subarray
                    ->pluck($column)
                    ->filter(fn ($v) => !is_null($v) && $v != 0);

                return [
                    $column => $validValues->count()
                        ? $validValues->avg()
                        : 0
                ];
            })->toArray();
        });


        /**
         * 2️⃣ Overall average (based on subarray averages)
         */
        $overallAverage = collect(self::$columns)->mapWithKeys(function ($column) use ($subarrayAverages) {
            $validValues = $subarrayAverages
                ->pluck($column)
                ->filter(fn ($v) => !is_null($v) && $v != 0);

            return [
                $column => $validValues->count()
                    ? $validValues->avg()
                    : 0
            ];
        })->toArray();
        return $overallAverage;
        // return [
        //     'per_subarray_average' => $subarrayAverages->toArray(),
        //     'overall_average'      => $overallAverage
        // ];
    }
    public function calculateDpcrIndicatorAverages(Collection $monthlyTargets): array
    {
        if ($monthlyTargets->isEmpty()) {
            return [
                'entries'  => collect(),
                'overall'  => [
                    'q1_ave' => 0,
                    'q2_ave' => 0,
                    'q3_ave' => 0,
                    'e1_ave' => 0,
                    'e2_ave' => 0,
                    'e3_ave' => 0,
                    't1_ave' => 0,
                ],
            ];
        }

        $entries = $monthlyTargets->flatten(1);

        /**
         * PER-ENTRY AVERAGE
         */
        $entriesWithAverage = $entries->map(function ($monthly) {
            dd($monthly);
            $values = [
                $monthly->q1,
                $monthly->q2,
                $monthly->q3,
                $monthly->e1,
                $monthly->e2,
                $monthly->e3,
                $monthly->t1,
            ];

            $nonZero = array_filter($values, fn ($v) => $v > 0);

            $entryAve = count($nonZero)
                ? array_sum($nonZero) / count($nonZero)
                : 0;

            return [
                'q1'        => $monthly->q1,
                'q2'        => $monthly->q2,
                'q3'        => $monthly->q3,
                'e1'        => $monthly->e1,
                'e2'        => $monthly->e2,
                'e3'        => $monthly->e3,
                't1'        => $monthly->t1,
                'entry_ave' => $entryAve,
            ];
        });

        /**
         * OVERALL AVERAGE PER INDICATOR
         */
        $overall = [];

        foreach (['q1','q2','q3','e1','e2','e3','t1'] as $field) {
            $values = $entries->pluck($field)->filter(fn ($v) => $v > 0);

            $overall[$field . '_ave'] = $values->count()
                ? $values->sum() / $values->count()
                : 0;
        }
        return $overall;
        // return [
        //     'entries' => $entriesWithAverage,
        //     'overall' => $overall,
        // ];
    }
    public function averageNonZero(array $values): float
    {
        $filtered = array_filter($values, fn ($v) => $v > 0);

        return count($filtered)
            ? array_sum($filtered) / count($filtered)
            : 0;
    }

    public function calculateDpcrMonthlyAverages(Collection $monthlyTargets): array
    {
        if ($monthlyTargets->isEmpty()) {
            return [
                'entries'     => collect(),
                'overall_ave' => 0,
            ];
        }

        $entries = $monthlyTargets->flatten(1);

        $entriesWithAverages = $entries->map(function ($monthly) {

            $qAve = $this->averageNonZero([$monthly->q1, $monthly->q2, $monthly->q3]);
            $eAve = $this->averageNonZero([$monthly->e1, $monthly->e2, $monthly->e3]);
            $tAve = $monthly->t1 > 0 ? $monthly->t1 : 0;

            $components = array_filter([$qAve, $eAve, $tAve], fn ($v) => $v > 0);

            $entryAve = count($components)
                ? array_sum($components) / count($components)
                : 0;

            return [
                'q_ave'     => $qAve,
                'e_ave'     => $eAve,
                't_ave'     => $tAve,
                'entry_ave' => $entryAve,
            ];
        });

        $overallAve = $this->averageNonZero(
            $entriesWithAverages->pluck('entry_ave')->toArray()
        );

        return [
            'entries'     => $entriesWithAverages,
            'overall_ave' => $overallAve,
        ];
    }
}
