<?php

namespace App\Http\Controllers;

use App\Models\RevisionPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RevisionPlanController extends Controller
{
    protected $model;
    public function __construct(RevisionPlan $model)
    {
        $this->model=$model;
    }
    public function index(Request $request){
        $myid=auth()->user()->recid;
        //dd($myid);
        $data=$this->model
                ->Join(DB::raw('program_and_projects paps'), 'paps.id','=','revision_plans.idpaps')
                ->Join(DB::raw('projects.functions ff'), 'ff.FFUNCCOD','=','paps.FFUNCCOD')
                ->Join(DB::raw('projects.accountaccess acc'),'acc.ffunccod','=','ff.FFUNCCOD')
                ->where('acc.iduser','=',$myid)
                ->where('revision_plans.idpaps','=',$request->idpaps)
                ->get();
        //dd($data);
        return inertia('/RevisionPlans/Index',[
            'data'=>$data
        ]);
    }
}
