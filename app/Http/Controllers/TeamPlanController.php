<?php

namespace App\Http\Controllers;

use App\Models\AccountAccess;
use App\Models\Implementing_team;
use App\Models\RevisionPlan;
use App\Models\TeamPlan;
use App\Models\UserEmployees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TeamPlanController extends Controller
{
    protected $model;
    public function __construct(TeamPlan $model)
    {
        $this->model = $model;
    }
    public function index(Request $request, $revid)
    {

        $revs = RevisionPlan::findOrFail($revid);
        // $data = TeamPlan::where('revision_plan_id', $revid)
        //     ->get()
        //     ->map(function ($item) {
        //         $people = Implementing_team::where('id', $item->implementing_team_id)
        //             ->first();
        //         return [
        //             "id" => $item->id,
        //             "name" => $people->name,
        //             "position" => $people->position,
        //             "competency" => $people->competency,
        //             "role" => $item->role
        //         ];
        //     });
        //ImplementingTeamRevision
        $data = TeamPlan::with('userEmployee')
            ->where('revision_plan_id', $revid)
            ->get()
            ->map(function ($item) {
                // dd($item);
                return [
                    "id" => $item->id,
                    "name" => $item->userEmployee ? $item->userEmployee->employee_name : "",
                    "position" => $item->userEmployee ? $item->userEmployee->position_long_title : "",
                    "competency" => $item->competency,
                    "role" => $item->role,
                    "with_gad_training" => $item->with_gad_training
                ];
            });
        return inertia('ImplementingTeamRevision/Index', [
            "revs" => $revs,
            "revid" => $revid,
            "data" => $data,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function create(Request $request, $revid)
    {
        //dd("revid: ".$revid);
        $revs = RevisionPlan::findOrFail($revid);
        $uid = auth()->user()->recid;
        $FFUNCCOD = AccountAccess::where('iduser', $uid)->first();
        // $people = Implementing_team::where('FFUNCCOD',trim($FFUNCCOD->ffunccod))
        //             ->get();
        $people = UserEmployees::all();
        //dd($people);
        return inertia('ImplementingTeamRevision/Create', [
            "revs" => $revs,
            "revid" => $revid,
            "people" => $people,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function store(Request $request)
    {
        // dd($request);
        $attributes = $request->validate($this->rules(), $this->errorMessages());
        // $this->model->create($attributes);
        // dd($request);
        $us = UserEmployees::where('empl_id', $request->implementing_team_id)->first();
        $team = new TeamPlan();
        $team->revision_plan_id = $request->revision_plan_id;
        $team->implementing_team_id = $request->implementing_team_id;
        $team->role = $request->role;
        $team->empl_id = $us->empl_id;
        $team->competency = $request->competency;
        $team->position = $us->position_long_title;
        $team->with_gad_training = $request->with_gad_training;
        $team->save();
        return redirect('/team/' . $request->revision_plan_id . '/revision/plan/team')
            ->with('message', 'Team member added!');
    }
    public function edit(Request $request, $id)
    {
        $editData = TeamPlan::findOrFail($id);
        $revid = $editData->revision_plan_id;

        $revs = RevisionPlan::findOrFail($revid);
        $uid = auth()->user()->recid;
        $FFUNCCOD = AccountAccess::where('iduser', $uid)->first();
        $people = $people = UserEmployees::all();
        //dd($people);
        return inertia('ImplementingTeamRevision/Create', [
            "revs" => $revs,
            "revid" => $revid,
            "people" => $people,
            "editData" => $editData,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function update(Request $request)
    {
        //dd("update");
        // $data = $this->model->findOrFail($request->id);
        $attributes = $request->validate($this->rules(), $this->errorMessages());
        // $data->update($attributes);
        $us = UserEmployees::where('empl_id', $request->implementing_team_id)->first();
        $team = $this->model->findOrFail($request->id);
        $team->revision_plan_id = $request->revision_plan_id;
        $team->implementing_team_id = $request->implementing_team_id;
        $team->role = $request->role;
        $team->empl_id = $us->empl_id;
        $team->competency = $request->competency;
        $team->position = $us->position_long_title;
        $team->with_gad_training = $request->with_gad_training;
        $team->save();
        return redirect('/team/' . $request->revision_plan_id . '/revision/plan/team')
            ->with('message', 'Team member added!');
    }
    public function destroy(Request $request,  $id)
    {
        //dd("delete");
        $data = $this->model->findOrFail($id);
        $rev_id = $data->revision_plan_id;
        $data->delete();
        return redirect('/team/' . $rev_id . '/revision/plan/team')
            ->with('warning', 'Team member removed!');
    }
    public static function rules()
    {
        return [
            'revision_plan_id' => 'required',
            'implementing_team_id' => 'required|numeric',
            'role' => 'required',
        ];
    }

    public static function errorMessages()
    {
        return [
            'revision_plan_id.required' => 'The Revision Plan ID is required',
            'implementing_team_id.required' => 'Assign a team member',
            'implementing_team_id.numeric' => 'The ID of the team meber must be numeric',
            'role.required' => 'Role is required'
        ];
    }
}
