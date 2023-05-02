<?php

namespace App\Http\Controllers;

use App\Models\HGDG_Checklist;
use App\Models\ProgramAndProject;
use App\Models\RevisionPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RevisionPlanController extends Controller
{
    protected $model;
    public function __construct(RevisionPlan $model)
    {
        $this->model=$model;
    }
    public function index(Request $request, $idpaps){
        $myid=auth()->user()->recid;
        //dd($idpaps);
        $data=$this->model
                ->Join(DB::raw('program_and_projects paps'), 'paps.id','=','revision_plans.idpaps')
                ->Join(DB::raw('projects.functions ff'), 'ff.FFUNCCOD','=','paps.FFUNCCOD')
                ->Join(DB::raw('projects.accountaccess acc'),'acc.ffunccod','=','ff.FFUNCCOD')
                ->where('acc.iduser','=',$myid)
                ->where('idpaps','=',$idpaps)
                ->get();
        //dd($data);
        return inertia('RevisionPlans/Index',[
            'data'=>$data,
            "idpaps"=>$idpaps,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function create(Request $request, $id){
        $paps=ProgramAndProject::where('id',$id)->get();
        $hgdg=HGDG_Checklist::get();
        //dd($paps);
        return inertia('RevisionPlans/Create',[
            'idpaps'=>$id,
            "hgdgs"=>$hgdg,
            'paps'=>$paps,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function store(Request $request){
        $attributes = $request->validate([
            'idpaps'=>'required',
            'description' => 'required',
        ]);
        $this->model->create($attributes);
        //$request->pass='';
        return redirect('/strategies/'.$request->idpaps)
                ->with('message','Outcome added');
    }


}
