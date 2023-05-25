<?php

namespace App\Http\Controllers;

use App\Models\MajorFinalOutput;
use App\Models\OfficeAccountable;
use App\Models\OfficePerformanceCommitmentRating;
use App\Models\ProgramAndProject;
use App\Models\SuccessIndicator;
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
}
