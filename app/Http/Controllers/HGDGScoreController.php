<?php

namespace App\Http\Controllers;

use App\Models\HGDG_Checklist;
use App\Models\HGDGQuestion;
use App\Models\HGDGScore;
use App\Models\RevisionPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HGDGScoreController extends Controller
{
    protected $model;
    protected $new_res, $sub_new;
    public function __construct(HGDGScore $model){
        $this->model=$model;
    }
    public function index(Request $request, $idrevplan){
        $count = $this->model->where('idrevplan',$idrevplan)->count();
        $revplan = RevisionPlan::find($idrevplan);
        $uid = auth()->user()->recid;

        //dd($uid);
        //dd($revplan);
        $checklist_id=$revplan->checklist_id;
        $hgdg_checklist =HGDG_Checklist::find($checklist_id);
        $hgdg_questions=$this->getResults($request, $checklist_id);
        $nr=[];
        if($count<1){
            $nr = $this->setValues($hgdg_questions);
            foreach($nr as $item){
                $score = new HGDGScore();
                $score->idrevplan = $idrevplan;
                $score->question_id = $item['id'];
                $score->user_id = $uid;
                $score->score = "0";
                $score->result_comment = "";
                $score->FFUNCCOD ="";
                $score->save();
            }
        }else{
            //$results = $this->getResults($request, $revplan->checklist_id);
            $nr = $this->setValues($hgdg_questions);
        }
        $scores=HGDGScore::select(
                    'hgdg_score.id',
                    'hgdg_score.idrevplan',
                    'hgdg_score.question_id',
                    'hgdg_score.score',
                    'hgdg_score.result_comment'
                )
                ->join(DB::raw("hgdg_questions"), "hgdg_questions.id","hgdg_score.question_id")
                ->where("hgdg_score.idrevplan", $idrevplan)
                ->get()
                ->map(function($item)use($idrevplan){
                    $question=HGDGQuestion::where('id', $item->question_id)->first();
                    $scory = floatval($item->score);
                    $scoor = floatval($question->score);
                    return [
                        "id"=>$item->id,
                        "idrevplan"=>$item->idrevplan,
                        "question_id"=>$item->question_id,
                        "score"=>$scory,
                        "result_comment"=>$item->result_comment,
                        "has_subquestion"=>$question->has_subquestion,
                        "question"=>$question->question,
                        "q_score"=>$scoor,
                        "question_number"=>$question->question_number
                    ];
                });
        //dd($scores);
        $idpaps=$revplan->idpaps;
        $idmfo=$revplan->idmfo;
        $scope=$revplan->scope;
        return inertia('hgdg_score/Index',[
            "questions"=>$scores,
            "checklist_id"=>$checklist_id,
            "hgdg_checklist"=>$hgdg_checklist,
            "idrevplan"=>$idrevplan,
            "idpaps"=>$idpaps,
            "idmfo"=>$idmfo,
            "scope"=>$scope,
            "FFUNCCOD"=>$revplan->FFUNCCOD,
            "can" => [
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    private function getResults(Request $request, $checklist_id){

        $questions = HGDGQuestion::where('question_id',0)
                        ->where('checklist_id', $checklist_id)
                        ->orderBy(DB::raw('CAST(SUBSTRING_INDEX(SUBSTRING_INDEX(question_number, ".", 1), " ", 1) AS UNSIGNED)'), 'ASC')
                        ->get();

        $result = [];

        foreach ($questions as $question) {
            $result[] = $this->buildQuestionArray($question);
        }
        return $result;
    }
    private function buildQuestionArray($question)
    {
        $result = [
            'id'=>$question->id,
            'question_number'=>$question->question_number,
            'question'=>$question->question,
            'checklist_id'=>$question->checklist_id,
            'has_subquestion'=>$question->has_subquestion,
            'score'=>$question->score,
            'question_id'=>$question->question_id,

        ];

        $subQuestions = $question->subQuestion;

        if ($subQuestions->isNotEmpty()) {
            foreach ($subQuestions as $subQuestion) {
                $result['subQuestions'][] = $this->buildQuestionArray($subQuestion);
            }
        }

        return $result;
    }

    function removeSubQuestions($array) {
        foreach ($array as $key => $value) {
            if (is_array($value)) {
                $this->removeSubQuestions($value);
            } else if ($key == 'subQuestions') {
                unset($array[$key]);
            }
        }
    }
    function setValues($results){
        $this->new_res=[];
        $this->new_res = $this->iterateQuestions($results);
        $rr=$this->new_res;
        $this->sub_new=[];
        $this->removeSubQuestions($rr);
        //$rr=$this->sub_new;
        return $rr;
    }

    function iterateQuestions($results){
        foreach ($results as $result) {
            array_push($this->new_res, $result);
            if (isset($result['subQuestions'])) {
                //array_push($this->new_res, $result);
                $this->iterateQuestions($result['subQuestions']);
            }
        }
        return $this->new_res;
    }
    public function store(Request $request){
        //get the updated score value from VUEJS
        $hgdg_scores = $request->scores;

        //Get the Revision Plan ID
        $idrevplan = $request->idrevplan;

        //Convert request string to JSON object
        $myObject = json_decode($hgdg_scores);

        //Set value for HGDG_Score
        $HScore = 0;

        //Loop through the $myObject
        foreach($myObject as $score){
            //Set variable for the HGDG score as null
            $scory=null;

            //Fetch all the HGDG Scores using the score id
            $scory = HGDGScore::findOrFail($score->id);
            if($scory){
                $scory->update([
                    'score'=> $score->score,
                    'result_comment'=>$score->result_comment,
                ]);
                //$scory->update();
                $HScore =$HScore + floatval($score->score);
                //dd("updated: ".$scory->id." score: ".$scory->score." oscore: ".$score->score);
            }

        }
        $HPercent =0;
        //UPDATE the HGDG Score of the Revision Plan
        $rev_plan = RevisionPlan::findOrFail($idrevplan);
        // dd($rev_plan);
        if($HScore>=4 && $HScore <8){
            $HPercent=0.25;
        }else if($HScore>=8 && $HScore<15 ){
            $HPercent=0.5;
        }else if($HScore>=15 && $HScore<20){
            $HPercent =0.75;
        }else if($HScore >=20){
            $HPercent =1;
        }

        $bud=floatval($rev_plan->amount)*floatVal($HPercent);
        $rev_plan->update([
            "attributed_amount"=>$bud,
            "hgdg_score"=>$HScore,
            "hgdg_percent"=>$HPercent
        ]);
        $scope = $rev_plan->scope;
        if($scope=='GAS'){
            return redirect('/revision/general/administration/services/'.$rev_plan->FFUNCCOD.'/plan')
                ->with('message','HGDG Evaluation Done');
        }else{
            if($request->idpaps==0){
                //dd('idpaps 0');
                return redirect('/mforevision/'.$rev_plan->idmfo)
                ->with('message','HGDG Evaluation Done');
            }else{
                return redirect('/revision/'.$rev_plan->idpaps)
                ->with('message','HGDG Evaluation Done');
            }

        }

    }

    public function getQuestions(Request $request){
        $box_number = $request->box_number;
        $sector	=$request->sector;
        $checklist_id = $request->checklist_id;
        return [
            "box_number"=>$box_number,
            "sector"=>$sector,
            "checklist_id"=>$checklist_id
        ];
    }
    public function allQuestions(Request $request){
        $questions =HGDGQuestion::where('checklist_id',$request->checklist_id)
                    ->orderByRaw("CAST(SUBSTRING_INDEX(question_number, '.', 1) AS UNSIGNED)")
                    ->get();
        return $questions;
    }

}
