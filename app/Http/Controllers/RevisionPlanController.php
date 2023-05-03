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
                ->select('revision_plans.id', 'revision_plans.project_title',
                            'revision_plans.version','revision_plans.type',
                            'ff.FFUNCTION')
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
        $duplicate=RevisionPlan::where('idpaps',$id)->get();
        //dd($id);
        return inertia('RevisionPlans/Create',[
            "idpaps"=>$id,
            "hgdgs"=>$hgdg,
            "paps"=>$paps,
            "duplicate"=>$duplicate,
            "can"=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function store(Request $request){
        //dd($request);
        $idpaps=$request->idpaps;
        $attributes = $request->validate([
            'idpaps'=>'required',
            'project_title' => 'required',
            'list_of_lgu_covered'=>'required',
            'date_start'=>'required',
            'date_end'=>'required',
            'beneficiary_male'=>'required',
            'beneficiary_female'=>'required',
            'baseline_male'=>'required',
            'baseline_female'=>'required',
            'baseline_total'=>'required',
            'rationale'=>'required',
            'objective'=>'required',
            'beneficiaries'=>'required',
        ]);
        $version = RevisionPlan::where('idpaps','=', $request->idpaps)->max('version');
        if($version){
            $version=$version+1;
        }else{
            $version=1;
        }
        //dd($version);
        $rev = new RevisionPlan();
        $rev->idpaps=$attributes['idpaps'];
        $rev->project_title=$attributes['project_title'];
        $rev->list_of_lgu_covered=$attributes['list_of_lgu_covered'];
        $rev->date_start=$attributes['date_start'];
        $rev->date_end=$attributes['date_end'];
        $rev->beneficiary_male=$attributes['beneficiary_male'];
        $rev->beneficiary_female=$attributes['beneficiary_female'];
        $rev->baseline_male=$attributes['baseline_male'];
        $rev->baseline_female=$attributes['baseline_female'];
        $rev->baseline_total=$attributes['baseline_total'];
        $rev->rationale=$attributes['rationale'];
        $rev->objective=$attributes['objective'];
        $rev->beneficiaries=$attributes['beneficiaries'];
        $rev->amount='0.00';
        $rev->attributed_amount='0.00';
        $rev->checklist_id='0';
        $rev->hgdg_score='0';
        $rev->version=$version;
        $rev->type='p';
        $rev->final='0';
        $rev->supplemental='0';
        $rev->user_id=auth()->user()->recid;
        $rev->save();
        // if($attributes){
        //     dd('all validated');
        // }
        //$this->model->create($attributes);
        //$request->pass='';
        return redirect('/revision/'.$idpaps)
                ->with('message','Revision Plan added');
    }


}
