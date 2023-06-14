<?php

namespace App\Http\Controllers;

use App\Models\FFUNCCOD;
use App\Models\OfficePerformanceCommitmentRating;
use App\Models\OfficePerformanceCommitmentRatingList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
                        ->get();
        $office = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->first();

        //TOTAL AND AVERAGE



        // 'total'=>$total,
        //     'ave'=>$ave,
        //     'dept_head'=>$dept_head,
        //     'opcr_date'=>$opcr_date,
        //     'mooe'=>$mooe,
        //     'ps'=>$ps,
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
