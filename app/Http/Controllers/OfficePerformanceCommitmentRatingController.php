<?php

namespace App\Http\Controllers;

use App\Models\BudgetRequirement;
use App\Models\Implementing_team;
use App\Models\MajorFinalOutput;
use App\Models\OfficeAccountable;
use App\Models\OfficePerformanceCommitmentRating;
use App\Models\OfficePerformanceCommitmentRatingList;
use App\Models\OpcrAccomplishment;
use App\Models\OpcrTarget;
use App\Models\ProgramAndProject;
use App\Models\RevisionPlan;
use App\Models\SuccessIndicator;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OfficePerformanceCommitmentRatingController extends Controller
{
    protected $model;
    public function __construct(OfficePerformanceCommitmentRating $model)
    {
        $this->model= $model;
    }
    public function index(Request $request, $opcr_id, $FFUNCCOD){
        //Check if the OPCR Form for the OPCR List is empty or not
        $opcr = $this->model->where('opcr_id', $opcr_id)->get();
        $list = OfficePerformanceCommitmentRatingList::where('id',$opcr_id)->first();

        $my_year = Carbon::parse($list->date_to)->format('Y');
        //dd($my_year);
        $cnt = $opcr->count();

        //dd($FFUNCCOD);
        $succid =[];
        //Load all success indicators
        $success_indicators = SuccessIndicator::select('success_indicators.id',
                                    'success_indicators.success_indicator'
                            )
                            ->join('program_and_projects AS paps','paps.id','success_indicators.idpaps')
                            ->where('FFUNCCOD', $FFUNCCOD)
                            ->get();
        if($cnt<1){
            //IF the OPCR List has no OPCR Ratings, generate OPCR ratings for each Success Indicator
            //Save OPC Rating for each success indicator with rating of 1 for Q,E,and T
            foreach($success_indicators as $success_indicator){
                $opcrf = new OfficePerformanceCommitmentRating();
                $opcrf->success_indicator_id = $success_indicator->id;
                array_push($succid,$success_indicator->id);
                $opcrf->accomplishments ="";
                $opcrf->rating_q="1";
                $opcrf->rating_e="1";
                $opcrf->rating_t="1";
                $opcrf->remarks="-";
                $opcrf->FFUNCCOD=$FFUNCCOD;
                $opcrf->opcr_id	= $opcr_id;
                $opcrf->save();
            }
            //dd('EMPTY: '.$cnt);
        }else{
            $exist = $this->model->where('FFUNCCOD', $FFUNCCOD)
                                                ->get();
            $existingSuccessIndicatorIds = $exist->pluck('success_indicator_id')->toArray();
            foreach($success_indicators as $success_indicator){
                $successIndicatorId= $success_indicator->id;
                if(!in_array($successIndicatorId, $existingSuccessIndicatorIds)){
                    OfficePerformanceCommitmentRating::create([
                        'success_indicator_id'=>$successIndicatorId,
                        'accomplishments'=>'',
                        'rating_q'=>'1',
                        'rating_e'=>'1',
                        'rating_t'=>'1',
                        'remarks'=>'-',
                        'FFUNCCOD'=>$FFUNCCOD,
                        'opcr_id'=>$opcr_id
                    ]);
                }
            }
            //dd('COUNT: '.$cnt);
        }
        //REVISION PLAN ID
        $revision_plan = RevisionPlan::where('idmfo','0')
                            ->where('idpaps','0')
                            ->where('FFUNCCOD', $FFUNCCOD)
                            ->where('year_period', $my_year)
                            ->first();
        $mooe="0.00";
        $ps = "0.00";
        if($revision_plan){
            $mooe = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                    ->where('category','Maintenance, Operating, and Other Expenses')
                    ->sum('amount');

            $ps =BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                    ->where('category','Personnel Services')
                    ->sum('amount');

        }else{
            //dd("empty no ps budget");
        }
        //$opcr = $this->model->where('FFUNCCOD', $FFUNCCOD)->get();
        $opcrs = $this->model->select('office_performance_commitment_ratings.id',
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
                    ->leftjoin('success_indicators AS SU','SU.id', 'office_performance_commitment_ratings.success_indicator_id')
                    ->leftjoin('program_and_projects AS PAPS', 'PAPS.id', 'SU.idpaps')
                    ->leftjoin('office_accountables AS off', 'off.idpaps', 'PAPS.id')
                    ->leftjoin('major_final_outputs AS mfo','mfo.id', 'PAPS.idmfo')
                    ->orderBy('mfo.mfo_desc', 'asc')
                    ->where('office_performance_commitment_ratings.opcr_id', $opcr_id)
                    ->where('office_performance_commitment_ratings.FFUNCCOD', $FFUNCCOD)
                    ->get();
        //return $opcrs;
        //return $mfos;
        //********************************************** */
        $count_pgdh = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
                        ->where('role','like','%Department Head%')
                        ->count();
        $dept_head="N/A";
        if($count_pgdh>0){
            $dept_head = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
                        ->where('role','like','%Department Head%')
                        ->first()->name;
        }

        //$dept_head = Str::upper($head->name);
        $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();
        $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
        $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
        $start = $dateStart->format('F');
        $end= $dateEnd->format('F Y');
        $opcr_date=$start." to ".$end;
        $opcr_date = Str::upper($opcr_date);
        //dd($opcr_date);
        //$date_now = Carbon::now()->format('F d, Y');

        $averageSum = OfficePerformanceCommitmentRating::selectRaw('SUM((rating_q + rating_e + rating_t) / 3) AS average_sum')
                        ->where('opcr_id', $opcr_id)
                        ->first()->average_sum;
        $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();

        $total = number_format($averageSum,2);
        $ave_pre = $total/$count;
        $ave = number_format($ave_pre,2);
        //dd($ave);

        //********************************************* */
        return inertia('OPCR/Form/Index',[
            'total'=>$total,
            'ave'=>$ave,
            'dept_head'=>$dept_head,
            'opcr_date'=>$opcr_date,
            'opcr_id'=>$opcr_id,
            'mooe'=>$mooe,
            'ps'=>$ps,
            'opcrs'=>$opcrs,
            "FFUNCCOD"=>$FFUNCCOD,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
        //dd($opcr);
        //dd('opcr form');
    }
    public function create(Request $request){}
    public function store(Request $request){
        $opcrs = $request->opcrs;
        $myObject = json_decode($opcrs);


        foreach($myObject as $opcr){
            //Set variable null variable for OPCR
            $opcry = null;
            //Fetch all the OPCRs using the opcr id
            $opcry = OfficePerformanceCommitmentRating::findOrFail($opcr->id);
            if($opcry){
                $opcry->update([
                    'success_indicator_id'=>$opcr->success_indicator_id,
                    'accomplishments'=>$opcr->accomplishments,
                    'rating_q'=>$opcr->rating_q,
                    'rating_e'=>$opcr->rating_e,
                    'rating_t'=>$opcr->rating_t,
                    'remarks'=>$opcr->remarks,
                ]);
            }
        }
        //dd($opcrs);
        //dd('opcrlist');
        return redirect('/opcrlist/'.$request->FFUNCCOD)
                ->with('message','OPCR Rating Done!');
    }
    public function edit(Request $request){}
    public function update(Request $request){

    }
    public function destroy(Request $request){}
    public function getMFOs($FFUNCCOD){
        $mfos =MajorFinalOutput::where('FFUNCCOD', $FFUNCCOD)->get()
                    ->map(function($item)use($FFUNCCOD){
                        $paps = ProgramAndProject::where('idmfo', $item->id)
                                ->get()->map(function($itemp){
                                    $idpaps=$itemp->id;
                                    $success=SuccessIndicator::where('idpaps', $itemp->id)
                                                ->get()->map(function($items)use($idpaps){
                                                    $accountable= OfficeAccountable::where('idpaps',$idpaps)
                                                                    ->get();
                                                    $opcr =$this->model->where('success_indicator_id', $items->id)->get();
                                                    return [
                                                        "success_indicator_id"=>$items->id,
                                                        "success_indicator"=>$items->success_indicator,
                                                        "accountable_division"=>$accountable,
                                                        "opcr"=>$opcr
                                                    ];
                                                });
                                    return [
                                        "paps_description"=>$itemp->paps_desc,
                                        "success"=>$success,
                                    ];
                                });
                        return [
                            "mfo_description"=>$item->mfo_desc,
                            "FFUNCCOD"=>$FFUNCCOD,
                            "paps"=>$paps
                        ];
                    });
        return $mfos;
    }
    public function print_class(Request $request){
        //$opcr_id=request('opcr_id');
        // $opcr_id=$request->opcr_id;
        // $mooe=$request->mooe;
        // $ps=$request->ps;
        // $FFUNCCOD=$request->FFUNCCOD;
        //dsdd($opcr_id);
        //dd("print class");\

        // $total=$request->total;
        // $ave=$request->ave;
        // $dept_head=$request->dept_head;

        // $opcr_date=$request->opcr_date;

        // $mooe=$request->mooe;
        // $ps =$request->ps;
        // $FFUNCCOD = $request->FFUNCCOD;
        // $opcr_id=$request->opcr_id;

        $total="55";
        $ave="3.0";
        $dept_head="JOYZEL R. ODI";

        $opcr_date="JULY TO DECEMBER 2023";

        $mooe="8,951,455.00";
        $ps ="4,533,455.00";
        $FFUNCCOD = "1121";
        $opcr_id="2";

        // $head = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
        //                 ->where('role','like','%Department Head%')
        //                 ->first();
        // $dept_head = Str::upper($head->name);
        //$my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();
        //$dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
        //$dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
        //$start = $dateStart->format('F');
        //$end= $dateEnd->format('F Y');
        //$opcr_date=$start." to ".$end;
        //$opcr_date = Str::upper($opcr_date);
        //dd($opcr_date);
        $date_now = Carbon::now()->format('F d, Y');

        // $averageSum = OfficePerformanceCommitmentRating::selectRaw('SUM((rating_q + rating_e + rating_t) / 3) AS average_sum')
        //                 ->where('opcr_id', $opcr_id)
        //                 ->first()->average_sum;
        // $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();

        // $total = number_format($averageSum,2);
        // $ave_pre = $total/$count;
        // $ave = number_format($ave_pre,2);
        //dd($ave);
        $data=MajorFinalOutput::where('FFUNCCOD', $FFUNCCOD)
                        ->orderBy('mfo_desc','asc')
                        ->get()
                        ->map(function($item)use($mooe, $ps, $opcr_id){
                            $paps = ProgramAndProject::where('idmfo', $item->id)
                                ->get()
                                ->map(function($item)use($mooe, $ps, $opcr_id){
                                    $success_indicator = SuccessIndicator::where("idpaps",$item->id)
                                                            ->where('opcr_id', $opcr_id)
                                                            ->join('office_performance_commitment_ratings',
                                                                    'office_performance_commitment_ratings.success_indicator_id',
                                                                    'success_indicators.id'
                                                                )
                                                            ->get();
                                    $off = OfficeAccountable::where("idpaps", $item->id)->get();
                                    $office_accountable = $off->pluck('office_accountable');
                                    $targets = OpcrTarget::select("opcr_accomplishments.actual_accomplishments",
                                                "opcr_accomplishments.quantity",
                                                "opcr_targets.target_success_indicator",
                                                "opcr_targets.quantity AS target_quantity"
                                                )
                                                ->leftJoin("opcr_accomplishments", "opcr_accomplishments.opcr_target_id", "opcr_targets.id")
                                                ->where("opcr_targets.idpaps", $item->id)
                                                ->where("opcr_targets.office_performance_commitment_rating_list_id", $opcr_id)
                                                ->get()
                                                ->map(function($item){
                                                    //$accomplishments = OpcrAccomplishment::where('opcr_target_id', $item->opcr_target_id)->first();
                                                    return [
                                                        'target_success_indicator'=>$item->target_success_indicator,
                                                        'quantity'=>$item->target_quantity,
                                                        'actual_accomplishment'=>$item->actual_accomplishments,
                                                        'quantity_accomplished'=>$item->quantity,
                                                    ];
                                                });

                                    return [
                                        "paps"=>$item->paps_desc,
                                        "success_indicator"=>$success_indicator,
                                        "office_accountable"=>$office_accountable,
                                        "targets"=>$targets,
                                    ];
                                });
                            return [
                                "mfo_id"=>$item->mfo_id,
                                "mfo_desc"=>$item->mfo_desc,
                                "mooe"=>$mooe,
                                "ps"=>$ps,
                                "paps"=>$paps,
                            ];
                        });
        //return $opcrs;
        //return $mfos;
        //dd($opcrs);

        $datum =[
            'total'=>$total,
            'ave'=>$ave,
            'dept_head'=>$dept_head,
            'date_now'=>$date_now,
            'opcr_date'=>$opcr_date,
            'mooe'=>$mooe,
            'ps'=>$ps,
            'mfo'=>$data,
            'FFUNCCOD'=>$FFUNCCOD,
            'opcr_id'=>$opcr_id,
        ];
        return $datum;
    }
    public function print_class2(Request $request){
        //$opcr_id=request('opcr_id');
        // $opcr_id=$request->opcr_id;
        // $mooe=$request->mooe;
        // $ps=$request->ps;
        // $FFUNCCOD=$request->FFUNCCOD;
        //dsdd($opcr_id);
        $FFUNCCOD = "1121";
        $mooe="5,780,999.50";
        $ps ="9,431,999.33";
        $opcr_id="2";
        $head = Implementing_team::where('FFUNCCOD', $FFUNCCOD)
                        ->where('role','like','%Department Head%')
                        ->first();
        $dept_head = Str::upper($head->name);
        $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();
        $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
        $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
        $start = $dateStart->format('F');
        $end= $dateEnd->format('F Y');
        $opcr_date=$start." to ".$end;
        $opcr_date = Str::upper($opcr_date);
        //dd($opcr_date);
        $date_now = Carbon::now()->format('F d, Y');
        $ave_sum = OfficePerformanceCommitmentRating::select(DB::raw('(rating_q+rating_e+rating_t)/3 AS average_sum'))
                    ->where('office_performance_commitment_ratings', $opcr_id)
                    ->sum();
        dd($ave_sum);
        $data=MajorFinalOutput::where('FFUNCCOD', $FFUNCCOD)
                        ->orderBy('mfo_desc','asc')
                        ->get()
                        ->map(function($item)use($mooe, $ps, $opcr_id){
                            $paps = ProgramAndProject::where('idmfo', $item->id)
                                ->get()
                                ->map(function($item)use($mooe, $ps, $opcr_id){
                                    $success_indicator = SuccessIndicator::where("idpaps",$item->id)
                                                            ->where('opcr_id', $opcr_id)
                                                            ->join('office_performance_commitment_ratings',
                                                                    'office_performance_commitment_ratings.success_indicator_id',
                                                                    'success_indicators.id'
                                                                )
                                                            ->get();
                                    $off = OfficeAccountable::where("idpaps", $item->id)->get();
                                    $office_accountable = $off->pluck('office_accountable');
                                    $targets = OpcrTarget::select("opcr_accomplishments.actual_accomplishments",
                                                "opcr_accomplishments.quantity",
                                                "opcr_targets.target_success_indicator",
                                                "opcr_targets.quantity AS target_quantity"
                                                )
                                                ->leftJoin("opcr_accomplishments", "opcr_accomplishments.opcr_target_id", "opcr_targets.id")
                                                ->leftJoin("office_performance_commitment_ratings","office_performance_commitment_ratings.")
                                                ->where("opcr_targets.idpaps", $item->id)
                                                ->where("opcr_targets.office_performance_commitment_rating_list_id", $opcr_id)
                                                ->get()
                                                ->map(function($item){
                                                    //$accomplishments = OpcrAccomplishment::where('opcr_target_id', $item->opcr_target_id)->first();
                                                    return [
                                                        'target_success_indicator'=>$item->target_success_indicator,
                                                        'quantity'=>$item->target_quantity,
                                                        'actual_accomplishment'=>$item->actual_accomplishments,
                                                        'quantity_accomplished'=>$item->quantity,
                                                    ];
                                                });

                                    return [
                                        "paps"=>$item->paps_desc,
                                        "success_indicator"=>$success_indicator,
                                        "office_accountable"=>$office_accountable,
                                        "targets"=>$targets,
                                    ];
                                });
                            return [
                                "mfo_id"=>$item->mfo_id,
                                "mfo_desc"=>$item->mfo_desc,
                                "mooe"=>$mooe,
                                "ps"=>$ps,
                                "paps"=>$paps,
                            ];
                        });
        //return $opcrs;
        //return $mfos;
        //dd($opcrs);
        $datum =[
            'dept_head'=>$dept_head,
            'date_now'=>$date_now,
            'opcr_date'=>$opcr_date,
            'mooe'=>$mooe,
            'ps'=>$ps,
            'mfo'=>$data
        ];
        return $datum;
    }
    public function print_class3(Request $request){
        // $total=$request->total;
        // $ave=$request->ave;
        // $dept_head=$request->dept_head;

        // $opcr_date=$request->opcr_date;

        // $mooe=$request->mooe;
        // $ps =$request->ps;
        // $FFUNCCOD = $request->FFUNCCOD;
        // $opcr_id=$request->opcr_id;
        // $dept_name= $request->dept_name;
        $total="55";
        $ave="3.0";
        $dept_head="JOYZEL R. ODI";

        $opcr_date="JULY TO DECEMBER 2023";

        $mooe="8,951,455.00";
        $ps ="4,533,455.00";
        $FFUNCCOD = "1121";
        $opcr_id="2";
        $dept_name="Department Name";
        $data = ProgramAndProject::select('major_final_outputs.mfo_desc',
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
                ->leftjoin('success_indicators','success_indicators.idpaps','program_and_projects.id')
                ->leftjoin('office_performance_commitment_ratings',
                    'office_performance_commitment_ratings.success_indicator_id',
                    'success_indicators.id'
                )
                ->leftjoin('opcr_targets', 'opcr_targets.idpaps','program_and_projects.id')
                ->leftjoin('opcr_accomplishments', 'opcr_accomplishments.idpaps','program_and_projects.id')
                ->leftjoin('office_accountables', 'office_accountables.idpaps', 'program_and_projects.id')
                ->join('major_final_outputs', 'major_final_outputs.id', 'program_and_projects.idmfo')
                ->orderBy('major_final_outputs.mfo_desc', 'asc')
                ->orderBy('program_and_projects.paps_desc','asc')
                ->get()
                ->map(function($item)use($total, $ave, $dept_name, $dept_head, $opcr_date, $mooe, $ps, $FFUNCCOD, $opcr_id){
                    return [
                        "total"=>$total,
                        "ave"=>$ave,
                        "dept_head"=>$dept_head,
                        "opcr_date"=>$opcr_date,
                        "mooe"=>$mooe,
                        "ps"=>$ps,
                        "FFUNCCOD"=>$FFUNCCOD,
                        "opcr_id"=>$opcr_id,
                        "mfo_desc"=>$item->mfo_desc,
                        "target_success_indicator"=>$item->target_success_indicator,
                        "rating_t"=>$item->rating_t,
                        "rating_e"=>$item->rating_e,
                        "rating_q"=>$item->rating_q,
                        "remarks"=>$item->remarks,
                        "office_accountable"=>$item->office_accountable,
                        "actual_accomplishments"=>$item->actual_accomplishments,
                        "dept_name"=>$dept_name
                    ];
                });
        return $data;
    }
    public function print_main(Request $request){
        $total=$request->total;
        $ave=$request->ave;
        $dept_head=$request->dept_head;

        $opcr_date=$request->opcr_date;

        $mooe=$request->mooe;
        $ps =$request->ps;
        $FFUNCCOD = $request->FFUNCCOD;
        $opcr_id=$request->opcr_id;


        // $total="55";
        // $ave="3.0";
        // $dept_head="JOYZEL R. ODI";

        // $opcr_date="JULY TO DECEMBER 2023";

        // $mooe="8,951,455.00";
        // $ps ="4,533,455.00";
        // $FFUNCCOD = "1121";
        // $opcr_id="2";

        $date_now = Carbon::now()->format('F d, Y');
        return [
            'total'=>$total,
            'ave'=>$ave,
            'dept_head'=>$dept_head,
            'date_now'=>$date_now,
            'opcr_date'=>$opcr_date,
            'mooe'=>$mooe,
            'ps'=>$ps,
            'FFUNCCOD'=>$FFUNCCOD,
            'opcr_id'=>$opcr_id,
        ];
    }
    public function print_mfo(Request $request){
        $mfos = MajorFinalOutput::where('FFUNCCOD', $request->FFUNCCOD)
                ->get()
                ->map(function($item)use($request){
                    return [
                        'idmfo'=>$item->id,
                        'mfo_desc'=>$item->mfo_desc,
                        'FFUNCCOD'=>$request->FFUNCCOD,
                        'opcr_id'=>$request->opcr_id,
                    ];
                });
        return $mfos;
    }
    public function print_paps(Request $request){
        $paps = ProgramAndProject::where('idmfo', $request->idmfo)
                ->get()
                ->map(function($item)use($request){
                    return [
                        'idpaps'=>$item->id,
                        'paps_desc'=>$item->paps_desc,
                        'FFUNCCOD'=>$request->FFUNCCOD,
                        'opcr_id'=>$request->opcr_id,
                    ];
                });
        return $paps;
    }
    public function print_success_targets(Request $request){
        $idpaps = $request->idpaps;
        $opcr_id= $request->opcr_id;

        $targets = OpcrTarget::select("opcr_accomplishments.actual_accomplishments",
                        "opcr_accomplishments.quantity",
                        "opcr_targets.target_success_indicator",
                        "opcr_targets.quantity AS target_quantity"
                        )
                        ->leftJoin("opcr_accomplishments", "opcr_accomplishments.opcr_target_id", "opcr_targets.id")
                        ->where("opcr_targets.idpaps", $idpaps)
                        ->where("opcr_targets.office_performance_commitment_rating_list_id", $opcr_id)
                        ->get()
                        ->map(function($item){
                            //$accomplishments = OpcrAccomplishment::where('opcr_target_id', $item->opcr_target_id)->first();
                            return [
                                'target_success_indicator'=>$item->target_success_indicator,
                                'quantity'=>$item->target_quantity,
                                'actual_accomplishment'=>$item->actual_accomplishments,
                                'quantity_accomplished'=>$item->quantity,
                            ];
                        });
        return $targets;
    }

    public function print_rating(Request $request){
        $idpaps = $request->idpaps;
        $opcr_id= $request->opcr_id;
        $success_indicator = SuccessIndicator::where("idpaps",$idpaps)
                                ->where('opcr_id', $opcr_id)
                                ->join('office_performance_commitment_ratings',
                                        'office_performance_commitment_ratings.success_indicator_id',
                                        'success_indicators.id'
                                    )
                                ->get()
                                ->map(function($item){
                                    $rating_q=number_format($item->rating_q,2);
                                    $rating_e=number_format($item->rating_e,2);
                                    $rating_t=number_format($item->rating_t,2);
                                    $sum = ($rating_e+$rating_q+$rating_t)/3;
                                    $ave=number_format($sum,2,'.','');
                                    return [
                                        'rating_q'=>$rating_q,
                                        'rating_e'=>$rating_e,
                                        'rating_t'=>$rating_t,
                                        'ave'=>$ave,
                                        'remarks'=>$item->remarks,
                                    ];
                                });
        return $success_indicator;
    }
    public function print_office(Request $request){
        $idpaps = $request->idpaps;
        $office_accountable = OfficeAccountable::where('idpaps', $idpaps)->get();
        return $office_accountable;
    }

    public function print(Request $request){
        $link=$request->link;
        $link=str_replace("abcdefghijklo534gdmoivndfigudfhgdyfugdhfugidhfuigdhfiugmccxcxcxzczczxczxczxcxzc5fghjkliuhghghghaaa555l&&&&-", "",$link);

        $link="http://".$link;
        //dd($link);
        return inertia('OPCR/Form/Print', [
            "link" => $link,
        ]);
    }
}