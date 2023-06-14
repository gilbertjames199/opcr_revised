<?php

namespace App\Http\Controllers;

use App\Models\BudgetRequirement;
use App\Models\FFUNCCOD;
use App\Models\Implementing_team;
use App\Models\OfficePerformanceCommitmentRating;
use App\Models\OfficePerformanceCommitmentRatingList;
use App\Models\RevisionPlan;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class OfficePerformanceCommitmentRatingListController extends Controller
{
    protected $model;
    public function __construct(OfficePerformanceCommitmentRatingList $model)
    {
        $this->model= $model;
    }
    public function index(Request $request, $FFUNCCOD){
        $opcr_lists = $this->model->where('FFUNCCOD',$FFUNCCOD)
                        ->orderBy('year', 'desc')
                        ->orderBy('semester', 'desc')
                        ->get()->map(function($item)use($FFUNCCOD){
                            $opcr_id=$item->id;
                            //TOTAL & AVERAGE
                            $averageSum = OfficePerformanceCommitmentRating::selectRaw('SUM((rating_q + rating_e + rating_t) / 3) AS average_sum')
                                            ->where('opcr_id', $opcr_id)
                                            ->first()->average_sum;
                            $count = OfficePerformanceCommitmentRating::where('opcr_id', $opcr_id)->count();

                            $total = number_format($averageSum,2);
                            $ave_pre = $total/$count;
                            $ave = number_format($ave_pre,2);

                            //PG Department Head
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

                            //OPCR LIST
                            $my_opcr = OfficePerformanceCommitmentRatingList::where('id', $opcr_id)->first();

                            //OPCR DATE
                            $dateStart = Carbon::createFromFormat('Y-m-d', $my_opcr->date_from);
                            $dateEnd = Carbon::createFromFormat('Y-m-d', $my_opcr->date_to);
                            $start = $dateStart->format('F');
                            $end= $dateEnd->format('F Y');
                            $opcr_date=$start." to ".$end;
                            $opcr_date = Str::upper($opcr_date);

                            //YEAR NOW
                            $my_year = Carbon::parse($my_opcr->date_to)->format('Y');

                            //REVISION PLAN ID/ GET MOOE & PS
                            $revision_plan = RevisionPlan::where('idmfo','0')
                                                ->where('idpaps','0')
                                                ->where('FFUNCCOD', $FFUNCCOD)
                                                ->where('year_period', $my_year)
                                                ->first();
                            $mooe="0.00";
                            $ps = "0.00";
                            if($revision_plan){
                                $mooe1 = BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                                        ->where('category','Maintenance, Operating, and Other Expenses')
                                        ->sum('amount');

                                $ps1 =BudgetRequirement::where('revision_plan_id', $revision_plan->id)
                                        ->where('category','Personnel Services')
                                        ->sum('amount');
                                $mooe2 = number_format($mooe1,2);
                                $ps2 = number_format($ps1, 2);
                                $mooe = number_format(($mooe2/2),2,'.','');
                                $ps = number_format(($ps2/2),2,'.','');
                            }else{
                                //dd("empty no ps budget");
                            }
                            return [
                                'id'=>$item->id,
                                'semester'=>$item->semester,
                                'date_from'=>$item->date_from,
                                'date_to'=>$item->date_to,
                                'year'=>$item->year,
                                'FFUNCCOD'=>$item->FFUNCCOD,
                                'allotment'=>$item->allotment,
                                'total'=>$total,
                                'ave'=>$ave,
                                'dept_head'=>$dept_head,
                                'opcr_date'=>$opcr_date,
                                'mooe'=>$mooe,
                                'ps'=>$ps,
                            ];
                        });
        //dd($opcr_lists);
        $office = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->first();

        return inertia('OPCR/List/Index',[
            "opcr_lists"=>$opcr_lists,
            "FFUNCCOD"=>$FFUNCCOD,
            "office"=>$office,

            // 'can'=>[
            //     'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
            //     'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            // ],
        ]);
    }
    public function create(Request $request, $FFUNCCOD){
        //$opcr_lists = $this->model->where('FFUNCCOD',$FFUNCCOD)->get();
        $office = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->first();
        return inertia('OPCR/List/Create',[
            "FFUNCCOD"=>$FFUNCCOD,
            "office"=>$office,
            // 'can'=>[
            //     'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
            //     'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            // ],
        ]);
    }
    public function store(Request $request){
        //dd($request);
        $attributes = $request->validate([
            'semester'=> 'required',
            'date_from' => 'required',
            'date_to' => 'required',
            'year'  => 'required',
            'FFUNCCOD'=>'required',
            'allotment'=>'required'
        ]);
        $found = $this->model->where('year', $request->year)
                                ->where('semester', $request->semester)
                                ->first();
        $type='error';
        $msg="OPCR for the year (".$request->year.") and semester (".$request->semester.") already exists. Save unsuccessful.";
        if(!$found){
            $this->model->create($attributes);
            $msg = "Added new OPCR!";
            $type='message';
        }
        // dd($attributes);

        return redirect('/opcrlist/'.$request->FFUNCCOD)
                ->with($type,$msg);
    }
    public function edit(Request $request, $id){
        $editData = $this->model->where('id', $id)->first();
        $FFUNCCOD = $editData->FFUNCCOD;
        $office = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->first();
        return inertia('OPCR/List/Create',[
            "editData"=>$editData,
            "FFUNCCOD"=>$FFUNCCOD,
            "office"=>$office,
            // 'can'=>[
            //     'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
            //     'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            // ],
        ]);
    }
    public function update(Request $request){
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'semester'        =>$request->semester,
            'date_from'          =>$request->date_from,
            'date_to'                   =>$request->date_to,
            'year'                 =>$request->year,
            'FFUNCCOD'                 =>$request->FFUNCCOD,
            'id'                        =>$request->id,
            'allotment'=>$request->allotment,
        ]);

        return redirect('/opcrlist/'.$request->FFUNCCOD)
                ->with('message','Added new OPCR!');
    }
    public function destroy(Request $request){

    }
}
