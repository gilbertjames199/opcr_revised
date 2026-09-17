<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Strategy;
use App\Models\StrategyActivityRequest;
use App\Models\RevisionPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StrategyActivityRequestController extends Controller
{
    public function store(Request $request)
    {
        $strategyRows = $request->input('strategy_request_array', []);
        $revisionPlanId = $request->input('revision_plan_id');
        $programAndProjectId = $request->input('program_and_project_id');
        $createdBy = auth()->user()->recid;
        $idpaps = $request->input('idpaps');
        $revisionPlanId = $request->input('revision_plan_id');
        
        $revision_plan =RevisionPlan::with(['paps'])->where('id', $revisionPlanId)->first();
        $requestRecord = StrategyActivityRequest::create([
            'status' => '0',
            'program_and_project_id' => $programAndProjectId,
            'revision_plan_id' => $revisionPlanId,
            'created_by' => $createdBy,
        ]);
        dd(
            $strategyRows, 
            $revisionPlanId, 
            $programAndProjectId, 
            
            $createdBy, 
            $idpaps
        );
        foreach ($strategyRows as $strategyRow) {
            if (!is_array($strategyRow)) {
                continue;
            }

            $strategyDescription = trim((string) ($strategyRow['description'] ?? ''));
            if ($strategyDescription === '') {
                continue;
            }

            $strategyData = [
                'description' => $strategyDescription,
                'idpaps' => $programAndProjectId,
                'idmfo' => $strategyRow['idmfo'] ?? null,
                'status' => '0',
                'strategy_activity_request_id' => $requestRecord->id,
            ];

            $strategy = !empty($strategyRow['id'])
                ? Strategy::find($strategyRow['id'])
                : null;

            if ($strategy) {
                $strategy->update($strategyData);
            } else {
                $strategy = Strategy::create($strategyData);
            }

            $activities = $strategyRow['activities'] ?? [];

            foreach ($activities as $activityRow) {
                if (!is_array($activityRow)) {
                    continue;
                }

                $activityDescription = trim((string) ($activityRow['description'] ?? ''));
                if ($activityDescription === '') {
                    continue;
                }

                $activityData = [
                    'description' => $activityDescription,
                    'strategy_id' => $strategy->id,
                    'gad_issue' => $activityRow['gad_issue'] ?? null,
                    'date_from' => $activityRow['date_from'] ?? null,
                    'date_to' => $activityRow['date_to'] ?? null,
                    'ps_q1' => $activityRow['ps_q1'] ?? 0,
                    'ps_q2' => $activityRow['ps_q2'] ?? 0,
                    'ps_q3' => $activityRow['ps_q3'] ?? 0,
                    'ps_q4' => $activityRow['ps_q4'] ?? 0,
                    'mooe_q1' => $activityRow['mooe_q1'] ?? 0,
                    'mooe_q2' => $activityRow['mooe_q2'] ?? 0,
                    'mooe_q3' => $activityRow['mooe_q3'] ?? 0,
                    'mooe_q4' => $activityRow['mooe_q4'] ?? 0,
                    'co_q1' => $activityRow['co_q1'] ?? 0,
                    'co_q2' => $activityRow['co_q2'] ?? 0,
                    'co_q3' => $activityRow['co_q3'] ?? 0,
                    'co_q4' => $activityRow['co_q4'] ?? 0,
                    'fe_q1' => $activityRow['fe_q1'] ?? 0,
                    'fe_q2' => $activityRow['fe_q2'] ?? 0,
                    'fe_q3' => $activityRow['fe_q3'] ?? 0,
                    'fe_q4' => $activityRow['fe_q4'] ?? 0,
                    'ccet_code' => $activityRow['ccet_code'] ?? null,
                    'responsible' => $activityRow['responsible'] ?? null,
                    'status' => '0',
                    'strategy_activity_request_id' => $requestRecord->id,
                ];

                $activity = !empty($activityRow['activity_id'])
                    ? Activity::find($activityRow['activity_id'])
                    : null;

                if ($activity) {
                    $activity->update($activityData);
                } else {
                    Activity::create($activityData);
                }
            }
        }

        return back()->with('success', 'Strategy and activity request saved successfully.');
    }
}
