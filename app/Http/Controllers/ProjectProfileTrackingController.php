<?php

namespace App\Http\Controllers;

use App\Models\ProjectProfileTracking;
use App\Models\RevisionPlan;
use Illuminate\Http\Request;

class ProjectProfileTrackingController extends Controller
{
    protected $projectProfileTracking;
    public function __construct(ProjectProfileTracking $projectProfileTracking)
    {
        $this->projectProfileTracking = $projectProfileTracking;
    }

    public function status_update(Request $request, $id, $type, $new_status)
    {
        // dd($id, $type, $new_status);
        $us=auth()->user();
        // dd($us);
        $revplan = RevisionPlan::where('id', $id)->first();
        if (!$revplan) {
            return redirect()->back()->with('error', 'Revision Plan not found.');
        }

        // Only apply this check if submitting (new_status = 0)
        if ($new_status == 0) {
            $idpaps = $revplan->idpaps;

            // Check if any other revision plans of this idpaps are already submitted, reviewed, or approved
            $otherPlans = RevisionPlan::where('idpaps', $idpaps)
                ->where('id', '!=', $id)
                ->whereIn('status', ['0', '1', '2'])
                ->count();

            if ($otherPlans > 0) {
                return redirect()->back()->with('error', 'Cannot submit this Revision Plan because other plans for this PAP are already submitted, reviewed, or approved.');
            }
        }

        // Update the status
        $revplan->status = $new_status;
        $revplan->save();

        $this->projectProfileTracking->create([
            'action_by' => $us->recid,
            'action_type' => $type,
            'revision_plan_id' => $revplan->id,
            'remarks' => $request->remarks,
        ]);
        $action = ($new_status == 0) ? 'Submitted' : (($new_status == -1) ? 'Recalled' : 'Updated');
        return redirect()->back()->with('message', 'Revision Plan status '.$action.' successfully.');
    }

    public function index_ipp()
    {
        return inertia('ProjectProfiles/Index');
    }
}
