<?php

namespace App\Http\Controllers;

use App\Models\RevisionPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectDesignController extends Controller
{
    //
    protected $revision_plans;
    public function __construct(RevisionPlanController $revision_plans)
    {
        $this->revision_plans = $revision_plans;
    }

    public function generateProjectDesign(Request $request, $id)
    {
        // dd($request->input('type'));
        // 1️⃣ Check if a project design already exists
        $existing = RevisionPlan::where('reference_profile_id', $id)->first();

        if ($existing) {
            return redirect()->back()->with(
                'error',
                'A project design has already been generated for this project.'
            );
        }

        // 2️⃣ Proceed with cloning
        $result = $this->cloneRevisionPlan($id, $request->input('type'));

        if (isset($result['error'])) {
            return redirect()->back()->with('error', $result['error']);
        }

        return redirect()->back()->with('message', $result['message']);
    }
    public function cloneRevisionPlan($id, $type)
    {
        DB::beginTransaction();

        try {

            $rev_plan = RevisionPlan::with([
                'budget',
                'strategyProject',
                'activityProject',
                'activityProject.expected_output',
                'activityProject.expected_outcome',
                'teamPlans',
                'monitoringAndEvaluations',
                'riskManagements',
                'signatories',
                'hgdgScores'
            ])->findOrFail($id);

            // -----------------------------------------------------------
            // 1) CLONE MAIN REVISION PLAN
            // -----------------------------------------------------------
            $new_plan = $rev_plan->replicate([
                'id',
                'created_at',
                'updated_at'
            ]);

            $new_plan->type = $type;
            $new_plan->status = "-1";
            $new_plan->reference_profile_id = $rev_plan->id;
            $new_plan->created_at = now();
            $new_plan->updated_at = now();
            $new_plan->version = (int)$rev_plan->version + 1; // optional
            $new_plan->final = 0;
            $new_plan->save();

            // Mapping arrays for child IDs
            $activityProjectMap = [];
            $strategyProjectMap = [];

            // -----------------------------------------------------------
            // 2) CLONE BUDGET REQUIREMENTS
            // -----------------------------------------------------------
            foreach ($rev_plan->budget as $item) {
                $clone = $item->replicate(['id', 'created_at', 'updated_at']);
                $clone->revision_plan_id = $new_plan->id;
                $clone->created_at = now();
                $clone->updated_at = now();
                $clone->save();
            }

            // -----------------------------------------------------------
            // 3) CLONE STRATEGY PROJECTS
            // -----------------------------------------------------------
            foreach ($rev_plan->strategyProject as $item) {

                $oldId = $item->id;

                $clone = $item->replicate(['id', 'created_at', 'updated_at']);
                $clone->project_id = $new_plan->id;
                $clone->created_at = now();
                $clone->updated_at = now();
                $clone->save();

                $strategyProjectMap[$oldId] = $clone->id;
            }

            // -----------------------------------------------------------
            // 4) CLONE ACTIVITY PROJECTS
            // -----------------------------------------------------------
            foreach ($rev_plan->activityProject as $item) {

                $oldActivityId = $item->id;

                $clone = $item->replicate(['id', 'created_at', 'updated_at']);
                $clone->project_id = $new_plan->id;
                $clone->created_at = now();
                $clone->updated_at = now();
                $clone->save();

                $activityProjectMap[$oldActivityId] = $clone->id;

                // ---------------------------
                // CLONE EXPECTED OUTPUTS
                // ---------------------------
                foreach ($item->expected_output as $output) {
                    $outClone = $output->replicate(['id', 'created_at', 'updated_at']);
                    $outClone->activity_project_id = $clone->id;
                    $outClone->project_id = $new_plan->id;

                    // Remap strategy project if used
                    if ($output->strategy_project_id && isset($strategyProjectMap[$output->strategy_project_id])) {
                        $outClone->strategy_project_id = $strategyProjectMap[$output->strategy_project_id];
                    }

                    $outClone->created_at = now();
                    $outClone->updated_at = now();
                    $outClone->save();
                }

                // ---------------------------
                // CLONE EXPECTED OUTCOMES
                // ---------------------------
                foreach ($item->expected_outcome as $outcome) {
                    $ocClone = $outcome->replicate(['id', 'created_at', 'updated_at']);
                    $ocClone->activity_project_id = $clone->id;

                    if ($outcome->strategy_project_id && isset($strategyProjectMap[$outcome->strategy_project_id])) {
                        $ocClone->strategy_project_id = $strategyProjectMap[$outcome->strategy_project_id];
                    }

                    $ocClone->created_at = now();
                    $ocClone->updated_at = now();
                    $ocClone->save();
                }
            }

            // -----------------------------------------------------------
            // 5) CLONE TEAM PLANS
            // -----------------------------------------------------------
            foreach ($rev_plan->teamPlans as $item) {
                $clone = $item->replicate(['id', 'created_at', 'updated_at']);
                $clone->revision_plan_id = $new_plan->id;
                $clone->created_at = now();
                $clone->updated_at = now();
                $clone->save();
            }

            // -----------------------------------------------------------
            // 6) CLONE MONITORING & EVALUATION
            // -----------------------------------------------------------
            foreach ($rev_plan->monitoringAndEvaluations as $item) {
                $clone = $item->replicate(['id', 'created_at', 'updated_at']);
                $clone->revision_plan_id = $new_plan->id;
                $clone->created_at = now();
                $clone->updated_at = now();
                $clone->save();
            }

            // -----------------------------------------------------------
            // 7) CLONE RISK MANAGEMENTS
            // -----------------------------------------------------------
            foreach ($rev_plan->riskManagements as $item) {
                $clone = $item->replicate(['id', 'created_at', 'updated_at']);
                $clone->revision_plan_id = $new_plan->id;
                $clone->created_at = now();
                $clone->updated_at = now();
                $clone->save();
            }

            // -----------------------------------------------------------
            // 8) CLONE SIGNATORIES
            // -----------------------------------------------------------
            foreach ($rev_plan->signatories as $item) {
                $clone = $item->replicate(['id', 'created_at', 'updated_at']);
                $clone->revision_plan_id = $new_plan->id;
                $clone->created_at = now();
                $clone->updated_at = now();
                $clone->save();
            }

            // -----------------------------------------------------------
            // 9) CLONE HGDG SCORES
            // -----------------------------------------------------------
            foreach ($rev_plan->hgdgScores as $item) {
                $clone = $item->replicate(['id', 'created_at', 'updated_at']);
                $clone->idrevplan = $new_plan->id;
                $clone->created_at = now();
                $clone->updated_at = now();
                $clone->save();
            }

            DB::commit();

            return [
                'message' => 'Revision Plan successfully cloned.',
                'new_plan_id' => $new_plan->id
            ];
        } catch (\Exception $e) {
            DB::rollBack();
            return [
                'error' => $e->getMessage()
            ];
        }
    }
}
