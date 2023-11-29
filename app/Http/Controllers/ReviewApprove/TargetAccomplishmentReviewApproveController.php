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
        } else {
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
        $data = ProgramAndProject::where('program_and_projects.FFUNCCOD', $opcr_list->FFUNCCOD)
            ->select(
                'major_final_outputs.mfo_desc',
                'program_and_projects.id AS idpaps',
                'program_and_projects.paps_desc',
                'OPT.id',
                'OPT.target_success_indicator',
                'OPT.quantity',
                'SU.success_indicator'
            )
            ->leftjoin('major_final_outputs', 'major_final_outputs.id', 'program_and_projects.idmfo')
            ->leftjoin('success_indicators AS SU', 'SU.idpaps', 'program_and_projects.id')
            ->leftjoin(DB::raw('(Select id,
                                                        office_performance_commitment_rating_list_id,
                                                        idpaps, quantity, target_success_indicator
                             FROM opcr_targets WHERE opcr_targets.office_performance_commitment_rating_list_id=' . $opcr_list_id . ') AS OPT'), 'OPT.idpaps', 'program_and_projects.id')
            ->orderBy('major_final_outputs.mfo_desc', 'asc')
            ->orderBy('program_and_projects.paps_desc', 'asc')
            ->get();
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
        return redirect('/opcrtarget/' . $opcr_list_id)
            ->with('info', 'Office performance rating reviewed!');
    }
    public function approveOPCRRating(Request $request, $opcr_list_id)
    {
        $update_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)
            ->update(['rating_status' => 2]);
        return redirect('/opcrtarget/' . $opcr_list_id)
            ->with('info', 'Office performance rating approved!');
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
}
