<?php

namespace App\Http\Controllers;

use App\Models\BudgetRequirement;
use App\Models\FFUNCCOD;
use App\Models\Implementing_team;
use App\Models\Office;
use App\Models\OfficePerformanceCommitmentRating;
use App\Models\OfficePerformanceCommitmentRatingList;
use App\Models\OpcrTarget;
use App\Models\Output;
use App\Models\ProgramAndProject;
use App\Models\Quality;
use App\Models\rating;
use App\Models\RevisionPlan;
use App\Models\SuccessIndicator;
use App\Models\Timeliness;
use App\Models\UserEmployees;
use Illuminate\Support\Str;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OpcrTargetController extends Controller
{
    protected $model;
    public function __construct(OpcrTarget $model)
    {
        $this->model = $model;
    }
    public function index(Request $request, $opcr_list_id)
    {
        // dd("targ");
        //->where('OPT.office_performance_commitment_rating_list_id', $opcr_list_id)   $opcr_list->FFUNCCOD

        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)->first();
        // dd($opcr_list->FFUNCCOD);
        // $papsu = ProgramAndProject::where('program_and_projects.FFUNCCOD', $opcr_list->FFUNCCOD)
        //     ->leftJoin('opcr_targets AS OPT', 'OPT.idpaps', 'program_and_projects.id')
        //     ->where('OPT.office_performance_commitment_rating_list_id', '=', $opcr_list_id)
        //     ->select('program_and_projects.*', 'OPT.*') // Select columns you need
        //     ->get();
        // dd($papsu);
        $data = ProgramAndProject::select(
            'major_final_outputs.mfo_desc',
            'program_and_projects.id AS idpaps',
            'program_and_projects.paps_desc',
            // 'OPT.id',
            // 'OPT.target_success_indicator',
            // 'OPT.quantity',
            'SU.success_indicator',
            'program_and_projects.idmfo',
            'SU.id AS su_id',
            // 'OPT.office_performance_commitment_rating_list_id',
        )
            // ->leftjoin('opcr_targets AS OPT', 'OPT.idpaps', 'program_and_projects.id')
            ->leftjoin('major_final_outputs', 'major_final_outputs.id', 'program_and_projects.idmfo')
            ->leftjoin('success_indicators AS SU', 'SU.idpaps', 'program_and_projects.id')
            ->where('program_and_projects.FFUNCCOD', $opcr_list->FFUNCCOD)
            ->where('major_final_outputs.id', '>', '45')
            ->whereNull('from_excel')
            ->orderBy('program_and_projects.idmfo', 'ASC')
            ->orderBy('program_and_projects.id', 'ASC')
            // ->where('OPT.office_performance_commitment_rating_list_id', '=', $opcr_list_id)
            // ->orderBy('major_final_outputs.mfo_desc', 'asc')
            // ->orderBy('program_and_projects.paps_desc', 'asc')
            // ->orderBy('SU.success_indicator', 'asc')
            // ->groupBy('OPT.id')
            ->get()
            ->map(function ($item) use ($opcr_list_id) {
                $targ = OpcrTarget::where('opcr_targets.idpaps', $item->idpaps)
                    ->where('opcr_targets.office_performance_commitment_rating_list_id', '=', $opcr_list_id)
                    ->first();
                // dd($targ);
                $target_success_indicator = "";
                $quantity = "";
                $opcr_id = "";
                $office_performance_commitment_rating_list_id = "";
                if ($targ) {
                    $target_success_indicator = $targ->target_success_indicator;
                    $quantity = $targ->quantity;
                    $opcr_id = $targ->id;
                    $office_performance_commitment_rating_list_id = $targ->office_performance_commitment_rating_list_id;
                }
                return [
                    'mfo_desc' => $item->mfo_desc,
                    'idpaps' => $item->idpaps,
                    'paps_desc' => $item->paps_desc,
                    'id' => $opcr_id,
                    'target_success_indicator' => $target_success_indicator,
                    'quantity' => $quantity,
                    'success_indicator' => $item->success_indicator,
                    'idmfo' => $item->idmfo,
                    'su_id' => $item->su_id,
                    'office_performance_commitment_rating_list_id' => $office_performance_commitment_rating_list_id,
                ];
            });
        // dd($data);
        // return $data;
        //AFTER SUCCESS INDICATOR
        // ->leftjoin(DB::raw('(Select id,
        //                     office_performance_commitment_rating_list_id,
        //                     idpaps, quantity, target_success_indicator
        //                 FROM opcr_targets
        //                 WHERE opcr_targets.office_performance_commitment_rating_list_id=' .
        //         $opcr_list_id . ') AS OPT'), 'OPT.idpaps', 'program_and_projects.id')
        // dd($data->pluck('quantity'));
        //dd('OPCR Targets index');
        $opcr_id = $opcr_list_id;
        $FFUNCCOD = $opcr_list->FFUNCCOD;
        //TOTAL & AVERAGE
        $averageSum = OfficePerformanceCommitmentRating::selectRaw('SUM((rating_q + rating_e + rating_t) / 3) AS average_sum')
            ->where('opcr_id', $opcr_id)
            ->first()->average_sum;
        $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();
        if ($count < 1) {
            $count = 1;
        }
        $total = number_format($averageSum, 2);
        $ave_pre = $total / $count;
        $ave = number_format($ave_pre, 2);

        //PG Department Head
        //********************************************** */
        // $count_pgdh = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
        //     ->where('role', 'like', '%Department Head%')
        //     ->count();
        $dept_head = "N/A";
        $pg_empl_id = Office::where('FFUNCCOD', $FFUNCCOD)->first();
        if ($pg_empl_id) {

            $emp = UserEmployees::where('empl_id', $pg_empl_id->empl_id)->first();
            if ($emp) {
                $dept_head = $emp->first_name . ' ' . $emp->middle_name[0] . ' ' . $emp->last_name;
                $suff = $emp->suffix_name;
                if ($suff) {
                    $dept_head = $dept_head . ', ' . $suff;
                }
                $post = $emp->postfix_name;
                if ($post) {
                    $dept_head = $dept_head . ', ' . $post;
                }
            }
        }
        // dd($dept_head);
        // if ($count_pgdh > 0) {
        //     $dh = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
        //         ->where('role', 'like', '%Department Head%')
        //         ->first()->name;
        //     $dept_head = Str::upper($dh);
        // }

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
        $revision_plan = RevisionPlan::where('idmfo', '0')
            ->where('idpaps', '0')
            ->where('FFUNCCOD', $FFUNCCOD)
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
            $mooe2 = $mooe2 / 2;
            $ps2 = $ps2 / 2;
            $mooe = number_format($mooe2, 2);
            $ps = number_format($ps2, 2);
        } else {
            //dd("empty no ps budget");
        }
        $off = FFUNCCOD::where('FFUNCCOD', $opcr_list->FFUNCCOD)->first();
        // dd('targ');
        return inertia('OPCR/Target/Index', [
            "opcr_list_id" => $opcr_list_id,
            "opcr_list" => $opcr_list,
            "opcr_id" => $opcr_list_id,
            "data" => $data,
            "FFUNCCOD" => $opcr_list->FFUNCCOD,
            'total' => $total,
            'ave' => $ave,
            'dept_head' => $dept_head,
            'opcr_date' => $opcr_date,
            'mooe' => $mooe,
            'ps' => $ps,
            'office' => $off,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
        //$opcr_target_list = ProgramAndProject::where('FFUNCCOD', $opcr_list->FFUNCCOD)->get();
        //dd($opcr_target_list);
    }
    public function create(Request $request, $opcr_list_id)
    {
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)->first();
        $paps = ProgramAndProject::where('FFUNCCOD', $opcr_list->FFUNCCOD)
            ->get();
        // dd($request->idpaps);
        $paps_selected = $paps->where('id', $request->idpaps)->first();
        $success_indicators = SuccessIndicator::where('idpaps', $request->idpaps)->get();
        $outputs = Output::where('idpaps', $request->idpaps)->get();
        $qualities = Quality::where('idpaps', $request->idpaps)->orderBy('numerical_rating', 'desc')->get();
        $ratings = rating::where('idpaps', $request->idpaps)->orderBy('numerical_rating', 'desc')->get();
        $timeliness = Timeliness::where('idpaps', $request->idpaps)->orderBy('numerical_rating', 'desc')->get();

        $quality_exp = Quality::where('id', '1429')->get();
        // dd($request->idpaps);
        // "paps_selected" => $paps_selected,
        return inertia('OPCR/Target/Create', [
            "opcr_list_id" => $opcr_list_id,
            "idpaps" => $request->idpaps,
            "paps" => $paps,
            "success_indicators" => $success_indicators,
            "paps_selected" => $paps_selected,
            'outputs' => $outputs,
            'qualities' => $qualities,
            'ratings' => $ratings,
            'timeliness' => $timeliness,
            'quality_exp' => $quality_exp,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function store(Request $request)
    {
        // dd($request);
        //dd($request->target_success_indicator);
        $attributes = $request->validate([
            'output_id' => 'required',
            'idpaps' => 'required',
            'office_performance_commitment_rating_list_id' => 'required',
        ]);

        //SENTENCE******************
        // $output = Output::where('idpaps',$request->idpaps)->first()->Outputs;
        // $quality = Quality::where('idpaps',$request->idpaps)->first()->quality;
        // $rating =rating::where('idpaps',$request->idpaps)->first()->efficiency_quantity;
        // $timeliness =Timeliness::where('idpaps',$request->idpaps)->first()->timeliness;
        //$sentence = $request->quantity.' ('.$rating.') '.$output.' '.$timeliness.' with '.$quality.'.';
        //$correctedSentence = $this->correctSentence($sentence);
        //dd($correctedSentence);
        //**************** */
        // dd($request);
        $targ = new OpcrTarget();
        $targ->id = $request->id;
        $targ->target_success_indicator = $request->target_success_indicator;
        $targ->output_id = $request->output_id;
        $targ->quantity = $request->quantity;
        $targ->quantity_unit = $request->quantity_unit;
        $targ->comparison_operator = $request->comparison_operator;
        $targ->is_zero = $request->is_zero;
        $targ->quality_id = $request->quality_id;
        $targ->ratings_id = $request->ratings_id;
        $targ->timeliness_id = $request->timeliness_id;
        $targ->remarks_final = $request->remarks_final;
        $targ->idpaps = $request->idpaps;
        $targ->office_performance_commitment_rating_list_id = $request->office_performance_commitment_rating_list_id;
        $targ->save();
        //TEST $targ->id
        // dd($targ->id);
        //Office Performance Commitment Rating
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $request->office_performance_commitment_rating_list_id)
            ->first();
        // dd($opcr_list);
        $v_q = "3";
        $v_r = "3";
        $v_t = "3";
        if ($request->quantity == null) {
            $v_q = "0";
        }
        if ($request->quality_id == null) {
            $v_r = "0";
        }
        if ($request->ratings_id == null) {
            $v_t = "0";
        }
        //GENERATE RATING FOR THE TARGET
        $success = SuccessIndicator::where('idpaps', $request->idpaps)->first();
        $opcrf = new OfficePerformanceCommitmentRating();
        $opcrf->id_paps = $request->idpaps;
        $opcrf->id_opcr_target = $targ->id;
        $opcrf->success_indicator_id = $success->id;
        $opcrf->accomplishments = "";
        $opcrf->rating_q = "1";
        $opcrf->rating_e = "1";
        $opcrf->rating_t = "1";
        $opcrf->remarks = "-";
        $opcrf->opcr_id    = $request->office_performance_commitment_rating_list_id;
        $opcrf->FFUNCCOD = $opcr_list->FFUNCCOD;
        $opcrf->department_code = $opcr_list->department_code;
        $opcrf->save();
        return redirect('/opcrtarget/' . $request->office_performance_commitment_rating_list_id)
            ->with('message', 'Office performance target added!');
    }
    public function edit(Request $request, $opcr_list_id)
    {
        // dd($request->idpaps);
        // dd($opcr_list_id);
        $opcr_target_id = $request->opcr_target_id;
        $data = $this->model->where('id', $opcr_target_id)->first();
        $opcr_list = OfficePerformanceCommitmentRatingList::where('id', $data->office_performance_commitment_rating_list_id)->first();
        $paps = ProgramAndProject::where('FFUNCCOD', $opcr_list->FFUNCCOD)->get();
        $paps_selected = ProgramAndProject::where('id', $request->idpaps)->first();
        $success_indicators = SuccessIndicator::where('idpaps', $data->idpaps)->get();
        $outputs = Output::where('idpaps', $data->idpaps)->get();
        $qualities = Quality::where('idpaps', $data->idpaps)->orderBy('numerical_rating', 'desc')->get();
        $ratings = rating::where('idpaps', $data->idpaps)->orderBy('efficiency_quantity', 'desc')->get();
        $timeliness = Timeliness::where('idpaps', $data->idpaps)->orderBy('numerical_rating', 'desc')->get();
        $quality_exp = Quality::where('id', '1429')->get();
        // dd($request->idpaps);
        return inertia('OPCR/Target/Create', [
            "opcr_list_id" => $opcr_list_id,
            "opcr_id" => $request->opcr_id,
            "idpaps" => $request->idpaps,
            "editData" => $data,
            "paps" => $paps,
            'outputs' => $outputs,
            'qualities' => $qualities,
            'ratings' => $ratings,
            'timeliness' => $timeliness,
            "success_indicators" => $success_indicators,
            'paps_selected' => $paps_selected,
            'quality_exp' => $quality_exp,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        // dd($request);
        $data->update([
            'target_success_indicator' => $request->target_success_indicator,
            'quantity' => $request->quantity,
            'quantity_unit' => $request->quantity_unit,
            'comparison_operator' => $request->comparison_operator,
            'is_zero' => $request->is_zero,
            'output_id' => $request->output_id,
            'quality_id' => $request->quality_id,
            'ratings_id' => $request->ratings_id,
            'timeliness_id' => $request->timeliness_id,
            'remarks_final' => $request->remarks_final,
            'idpaps' => $request->idpaps,
            'office_performance_commitment_rating_list_id' => $request->office_performance_commitment_rating_list_id,

        ]);

        return redirect('/opcrtarget/' . $request->office_performance_commitment_rating_list_id)
            ->with('info', 'Office performance target updated!');
    }
    public function destroy(Request $request)
    {
        //dd("delete");
        $opcr_list = OpcrTarget::findOrFail($request->id);
        $opcr_list->delete();
        $opcr_id = $opcr_list->office_performance_commitment_rating_list_id;

        OfficePerformanceCommitmentRating::where('id_opcr_target', $request->id)->delete();
        return redirect('/opcrtarget/' . $opcr_id)
            ->with('error', 'Office performance goal deleted!');
    }
    public function correctSentence($text)
    {
        $client = new Client();
        $response = $client->post('https://languagetool.org/api/v2/check', [
            'form_params' => [
                'text' => $text,
                'language' => 'en-US',
            ],
        ]);
        $corrections = json_decode($response->getBody(), true)['matches'];

        foreach ($corrections as $correction) {
            $text = str_replace($correction['context']['text'], $correction['replacements'][0]['value'], $text);
        }

        return $text;
    }
    public function submit_opcr_target(Request $request, $opcr_list_id)
    {
        // dd($opcr_list_id);
        $update_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_list_id)
            ->update(['target_status' => 0]);
        return redirect('/opcrtarget/' . $opcr_list_id)
            ->with('info', 'Office performance target submitted!');
    }
}
