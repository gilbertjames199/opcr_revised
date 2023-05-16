<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\Implementing_team;
use App\Models\RevisionPlan;
use App\Models\TeamPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TeamPlanController extends Controller
{
    protected $model;
    public function __construct(TeamPlan $model)
    {
        $this->model=$model;
    }
    public function index(Request $request, $revid){

        $revs = RevisionPlan::findOrFail($revid);
        $data = TeamPlan::where('revision_plan_id', $revid)
                ->get()
                ->map(function($item){
                    $people = Implementing_team::where('id',$item->implementing_team_id)
                                ->first();
                    return [
                        "id"=>$item->id,
                        "name"=>$people->name,
                        "position"=>$people->position,
                        "competency"=>$people->competency,
                        "role"=>$item->role
                    ];
                });
        //ImplementingTeamRevision
        return inertia('ImplementingTeamRevision/Index',[
            "revs"=>$revs,
            "revid"=>$revid,
            "data"=>$data,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function create(Request $request, $revid){
        //dd("revid: ".$revid);
        $revs = RevisionPlan::findOrFail($revid);
        $uid = auth()->user()->recid;
        $FFUNCCOD = AccountAccess::where('iduser', $uid)->first();
        $people = Implementing_team::where('FFUNCCOD',trim($FFUNCCOD->ffunccod))
                    ->get();
        //dd($people);
        return inertia('ImplementingTeamRevision/Create',[
            "revs"=>$revs,
            "revid"=>$revid,
            "people"=>$people,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function store(Request $request){
        //dd($request);
        $attributes = $request->validate($this->rules(), $this->errorMessages());
        $this->model->create($attributes);
        return redirect('/team/'.$request->revision_plan_id.'/revision/plan/team')
                ->with('message','Team member added!');
    }
    public function edit(Request $request, $id){
        $editData = TeamPlan::findOrFail($id);
        $revid = $editData->revision_plan_id;

        $revs = RevisionPlan::findOrFail($revid);
        $uid = auth()->user()->recid;
        $FFUNCCOD = AccountAccess::where('iduser', $uid)->first();
        $people = Implementing_team::where('FFUNCCOD',trim($FFUNCCOD->ffunccod))
                    ->get();
        //dd($people);
        return inertia('ImplementingTeamRevision/Create',[
            "revs"=>$revs,
            "revid"=>$revid,
            "people"=>$people,
            "editData"=>$editData,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function update(Request $request){
        //dd("update");
        $data = $this->model->findOrFail($request->id);
        $attributes = $request->validate($this->rules(), $this->errorMessages());
        $data->update($attributes);
        return redirect('/team/'.$request->revision_plan_id.'/revision/plan/team')
                ->with('message','Team member added!');
    }
    public function destroy(Request $request,  $id){
        //dd("delete");
        $data = $this->model->findOrFail($id);
        $rev_id = $data->revision_plan_id;
        $data->delete();
        return redirect('/team/'.$rev_id.'/revision/plan/team')
                ->with('warning','Team member removed!');
    }
    public static function rules(){
        return [
            'revision_plan_id'=> 'required',
            'implementing_team_id'=>'required|numeric',
            'role'=>'required',
        ];
    }

    public static function errorMessages(){
        return [
            'revision_plan_id.required'=> 'The Revision Plan ID is required',
            'implementing_team_id.required'=> 'Assign a team member',
            'implementing_team_id.numeric'=> 'The ID of the team meber must be numeric',
            'role.required'=> 'Role is required'
        ];
    }
}
