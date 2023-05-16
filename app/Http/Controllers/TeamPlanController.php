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
                        "Name"=>$people->role,
                        "Position"=>$people->position,
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
        //dd($uid);
        return inertia('ImplementingTeamRevision/Create',[
            "revs"=>$revs,
            "revid"=>$revid,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function store(Request $request){}
    public function edit(Request $request){}
    public function update(Request $request){}
    public function destroy(Request $request){}
}
