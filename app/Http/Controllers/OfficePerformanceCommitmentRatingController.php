<?php

namespace App\Http\Controllers;

use App\Models\BudgetRequirement;
use App\Models\MajorFinalOutput;
use App\Models\OfficeAccountable;
use App\Models\OfficePerformanceCommitmentRating;
use App\Models\OfficePerformanceCommitmentRatingList;
use App\Models\ProgramAndProject;
use App\Models\RevisionPlan;
use App\Models\SuccessIndicator;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
                    ->orderBy('mfo.created_at', 'desc')
                    ->where('office_performance_commitment_ratings.opcr_id', $opcr_id)
                    ->where('office_performance_commitment_ratings.FFUNCCOD', $FFUNCCOD)
                    ->get();
        //return $opcrs;
        //return $mfos;
        return inertia('OPCR/Form/Index',[
            "opcrs"=>$opcrs,
            "FFUNCCOD"=>$FFUNCCOD,
            "mooe"=>$mooe,
            "ps"=>$ps,
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
        $opcr_id=request('opcr_id');
        //dsdd($opcr_id);
        $FFUNCCOD = $request->FFUNCCOD;

        $mooe=$request->mooe;
        $ps =$request->ps;

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
                    ->orderBy('mfo.created_at', 'desc')
                    // ->where('office_performance_commitment_ratings.opcr_id', $opcr_id)
                    // ->where('office_performance_commitment_ratings.FFUNCCOD', $FFUNCCOD)
                    ->get()
                    ->map(function($item)use($mooe,$FFUNCCOD, $ps){
                        return [
                            "id"=>$item->id,
                            "success_indicator_id"=>$item->success_indicator_id,
                            "accomplishments"=>$item->accomplishments,
                            "rating_q"=>$item->rating_q,
                            "rating_e"=>$item->rating_e,
                            "rating_t"=>$item->rating_t,
                            "remarks"=>$item->remarks,
                            "FFUNCCOD"=>$item->FFUNCCOD,
                            "opcr_id"=>$item->opcr_id,
                            "success_indicator"=>$item->success_indicator,
                            "office_accountable"=>$item->office_accountable,
                            "paps_desc"=>$item->paps_desc,
                            "mfo_desc"=>$item->mfo_desc,
                            "ps"=>$ps,
                            "mooe"=>$mooe,
                            "FFUNCCOD"=>$FFUNCCOD
                        ];
                    });
        //return $opcrs;
        //return $mfos;
        return $opcrs;
    }
}
