<?php

namespace App\Http\Controllers;

use App\Models\ActivityProject;
use App\Models\ExpectedRevisedOutput;
use App\Models\StrategyProject;
use Illuminate\Http\Request;

class ExpectedRevisedOutputController extends Controller
{
    protected $model;
    public function __construct(ExpectedRevisedOutput $model)
    {
        $this->model = $model;
    }
    public function index(Request $request, $id, $type)
    {
        // dd($type);
        // dd($id);
        $data = [];
        $project = [];
        if ($type == 'activity') {
            $compound_data = $this->activityOutput($id);
            // dd($compound_data['expected_Outputs']);
            $data = $compound_data['expected_Outputs'];
            // dd($compound_data);
            $project = $compound_data['project'];
            // $data = $compound_data->expected_Outputs;
        } else if ($type == 'strategy') {
            $compound_data = $this->strategyOutput($id);
            // dd($compound_data['expected_Outputs']);
            $data = $compound_data['expected_Outputs'];
            $project = $compound_data['project'];
        }
        // dd($compound_data);
        return inertia("ExpectedOutputRevised/Index", [
            "data" => $data,
            "type" => $type,
            "project" => $project
        ]);
        // dd($compound_data);
    }
    public function strategyOutput($id)
    {
        $strat_proj = StrategyProject::with(["strategy"])->where('id', $id)->get();
        $expected_Outputs = ExpectedRevisedOutput::where('is_strategy_output', '1')
            ->where('strategy_id', $strat_proj[0]->strategy_id)
            ->get();
        return [
            "project" => $strat_proj,
            "expected_Outputs" => $expected_Outputs
        ];
    }
    public function activityOutput($id)
    {
        $act_proj = ActivityProject::with(["activity"])->where('id', $id)->get();
        $expected_Outputs = ExpectedRevisedOutput::where('is_strategy_output', '0')
            ->where('activity_id', $act_proj[0]->activity_id)
            ->get();
        return [
            "project" => $act_proj,
            "expected_Outputs" => $expected_Outputs
        ];
    }
    public function create(Request $request, $id, $type)
    {

        if ($type == 'activity') {
            $project = $this->activityProjectOutput($id);
            // $data = $compound_data->expected_Outputs;
        } else if ($type == 'strategy') {

            $project = $this->strategyprojectOutput($id);
        }
        // dd($project);
        return inertia("ExpectedOutputRevised/Create", [
            "type" => $type,
            "project" => $project
        ]);
    }
    public function strategyProjectOutput($id)
    {
        return StrategyProject::with(["strategy"])->where('id', $id)->get();
        // $expected_Outputs = ExpectedRevisedOutput::where('is_strategy_output', '1')->get();
        // return $strat_proj;
    }
    public function activityProjectOutput($id)
    {
        return ActivityProject::with(["activity"])->where('id', $id)->get();
    }
    public function store(Request $request)
    {
        $type = $request->type;
        $request->validate([
            'description' => 'required',
            'is_strategy_output' => 'required'

        ]);
        // dd($request);
        $expected_output = new ExpectedRevisedOutput();
        $expected_output->id = $request->id;
        $expected_output->description = $request->description;
        $expected_output->strategy_id = $request->strategy_id;
        $expected_output->activity_id = $request->activity_id;
        $expected_output->strategy_project_id = $request->strategy_project_id;
        $expected_output->activity_project_id = $request->activity_project_id;
        // $expected_output->is_strategy_outcome = $request->is_strategy_outcome;
        $expected_output->project_id = $request->project_id;
        $expected_output->target_indicator = $request->target_indicator;
        $expected_output->date_from = $request->date_from;
        $expected_output->date_to = $request->date_to;
        $expected_output->physical_q1 = $request->physical_q1;
        $expected_output->physical_q2 = $request->physical_q2;
        $expected_output->physical_q3 = $request->physical_q3;
        $expected_output->physical_q4 = $request->physical_q4;
        $expected_output->ps_q1 = $request->ps_q1;
        $expected_output->ps_q2 = $request->ps_q2;
        $expected_output->ps_q3 = $request->ps_q3;
        $expected_output->ps_q4 = $request->ps_q4;
        $expected_output->mooe_q1 = $request->mooe_q1;
        $expected_output->mooe_q2 = $request->mooe_q2;
        $expected_output->mooe_q3 = $request->mooe_q3;
        $expected_output->mooe_q4 = $request->mooe_q4;
        $expected_output->co_q1 = $request->co_q1;
        $expected_output->co_q2 = $request->co_q2;
        $expected_output->co_q3 = $request->co_q3;
        $expected_output->co_q4 = $request->co_q4;
        $expected_output->gad_issue = $request->gad_issue;
        $expected_output->ccet_code = $request->ccet_code;
        $expected_output->responsible = $request->responsible;
        $expected_output->is_active = $request->is_active;
        $expected_output->created_at = $request->created_at;
        $expected_output->updated_at = $request->updated_at;
        $expected_output->is_strategy_output = $request->is_strategy_output;
        $expected_output->save();
        return redirect('/expected-outputs-revised/' . $request->project_id . "/" . $request->type);
        // if ($type == 'activity') {
        //     $this->storeActivityOutput($request);
        //     // $data = $compound_data->expected_Outputs;
        // } else if ($type == 'strategy') {
        //     $this->storeStrategyOutput($request);
        // }
    }
    protected function storeActivityOutput(Request $request) {}
    protected function storeStrategyOutput(Request $request) {}
    public function edit(Request $request, $id, $project_id,  $type)
    {
        $data = ExpectedRevisedOutput::findOrFail($id);
        if ($type == 'activity') {
            $project = $this->activityProjectOutput($project_id);
            // $data = $compound_data->expected_Outputs;
        } else if ($type == 'strategy') {
            $project = $this->strategyprojectOutput($project_id);
        }
        return inertia("ExpectedOutputRevised/Create", [
            "editData" => $data,
            "type" => $type,
            "project" => $project
        ]);
    }
    public function update(Request $request)
    {
        $type = $request->type;
        $request->validate([
            'description' => 'required',
            'is_strategy_output' => 'required'

        ]);
        $expected_output = ExpectedRevisedOutput::findOrFail($request->id);
        $expected_output->id = $request->id;
        $expected_output->description = $request->description;
        $expected_output->strategy_id = $request->strategy_id;
        $expected_output->activity_id = $request->activity_id;
        // $expected_output->is_strategy_outcome = $request->is_strategy_outcome;
        $expected_output->project_id = $request->project_id;
        $expected_output->target_indicator = $request->target_indicator;
        $expected_output->date_from = $request->date_from;
        $expected_output->date_to = $request->date_to;
        $expected_output->physical_q1 = $request->physical_q1;
        $expected_output->physical_q2 = $request->physical_q2;
        $expected_output->physical_q3 = $request->physical_q3;
        $expected_output->physical_q4 = $request->physical_q4;
        $expected_output->ps_q1 = $request->ps_q1;
        $expected_output->ps_q2 = $request->ps_q2;
        $expected_output->ps_q3 = $request->ps_q3;
        $expected_output->ps_q4 = $request->ps_q4;
        $expected_output->mooe_q1 = $request->mooe_q1;
        $expected_output->mooe_q2 = $request->mooe_q2;
        $expected_output->mooe_q3 = $request->mooe_q3;
        $expected_output->mooe_q4 = $request->mooe_q4;
        $expected_output->co_q1 = $request->co_q1;
        $expected_output->co_q2 = $request->co_q2;
        $expected_output->co_q3 = $request->co_q3;
        $expected_output->co_q4 = $request->co_q4;
        $expected_output->gad_issue = $request->gad_issue;
        $expected_output->ccet_code = $request->ccet_code;
        $expected_output->responsible = $request->responsible;
        $expected_output->is_active = $request->is_active;
        // $expected_output->created_at = $request->created_at;
        // $expected_output->updated_at = $request->updated_at;
        $expected_output->is_strategy_output = $request->is_strategy_output;
        $expected_output->save();
        return redirect('/expected-outputs-revised/' . $request->project_id . "/" . $type);
        // if ($type == 'activity') {
        //     $this->storeActivityOutput($request);
        //     // $data = $compound_data->expected_Outputs;
        // } else if ($type == 'strategy') {
        //     $this->storeStrategyOutput($request);
        // }
    }
    public function destroy(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $data->delete();
        //dd($request->raao_id);
        return redirect()->back()->with('deleted', 'Deleted Expected Output');
    }
}
