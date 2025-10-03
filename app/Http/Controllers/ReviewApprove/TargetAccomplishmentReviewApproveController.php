<?php

namespace App\Http\Controllers\ReviewApprove;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use App\Http\Controllers\Controller;
use App\Models\FFUNCCOD;
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
        if (auth()->user()->department_code == '04') {
            $data = $this->revapp
                ->where('rating_status', '>', -1)
                ->where('rating_status', '<', 1)
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
                'mode_1'=>'Review'
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
                'mode_1'=>'Approve'
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
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)->first();

        $data = OpcrTarget::where('office_performance_commitment_rating_list_id', $opcr_list_id)
                ->with(['opcr_rating','opcr_rating.movs','opcr_rating2', 'paps','paps.MFO', 'paps.opcr_stardard'])
                ->get()
                ->map(function($item)use($opcr_list_id){
                    // dd($item->paps);
                    // dd($item->opcr_rating2, $opcr_list_id);
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
                        $show_mov=false;
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
                        "remarks" => optional($item->opcr_rating)->remarks,
                        "q1_standard"=>optional(optional(optional($item)->paps)->opcr_stardard)->quality1,
                        "q2_standard"=>optional(optional(optional($item)->paps)->opcr_stardard)->quality2,
                        "q3_standard"=>optional(optional(optional($item)->paps)->opcr_stardard)->quality3,
                        "e1_standard"=>optional(optional(optional($item)->paps)->opcr_stardard)->efficiency1,
                        "e2_standard"=>optional(optional(optional($item)->paps)->opcr_stardard)->efficiency2,
                        "e3_standard"=>optional(optional(optional($item)->paps)->opcr_stardard)->efficiency3,
                        "t1_standard"=> optional(optional(optional($item)->paps)->opcr_stardard)->timeliness,
                        "movs"=>$movs,
                        "mov_is_visible"=>$show_mov
                        // 'standard'=>optional(optional($item)->paps)->opcr_stardard
                    ];
                });
        return $data;
    }
}
