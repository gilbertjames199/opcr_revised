<?php

namespace App\Http\Controllers;

use App\Models\AnnualInvestmentInstitutionalTracking;
use App\Models\AnnualInvestmentPlanInstitutional;
use Illuminate\Http\Request;

class AnnualInvestmentPlanInstitutionalController extends Controller
{
    protected $aip_institutional;
    public function __construct(AnnualInvestmentPlanInstitutional $aip_institutional)
    {
        $this->aip_institutional = $aip_institutional;
    }
    public function index(Request $request)
    {
        // where('ldc_approved', 0)->orWhere('sp_approved', 0)->get
        $AllAIP = AnnualInvestmentPlanInstitutional::all();
        // dd($AllAIP);
        return inertia("AnnualInvestmentPlan/Institutional/Index", [
            "data" => $AllAIP
        ]);
    }
    public function updateInstitutionalAIPStatus(Request $request, $type)
    {
        // dd("AIP");
        // 1️⃣ Validate input
        // dd($request->year_period);
        $request->validate([
            'year_period' => 'required',
        ]);

        $yearPeriod = $request->year_period;
        // dd($yearPeriod);
        $userId = auth()->user()->recid;

        // 2️⃣ Find or create the AIP row
        $aip = AnnualInvestmentPlanInstitutional::firstOrCreate(
            ['year_period' => $yearPeriod],
            [
                'ldc_approved' => "-1",
                'sp_approved' => "-1",
                'sip_period' => 0,
            ]
        );

        // 3️⃣ Update status based on $type
        switch ($type) {
            // LDC actions
            case 'LDC0': // Submitted for LDC review
                $aip->ldc_approved = 0;
                break;
            case 'LDC-2': // Returned by LDC
                $aip->ldc_approved = -2;
                break;
            case 'LDC1': // Approved by LDC
                $aip->ldc_approved = 1;
                break;

            // SP actions
            case 'SP0': // Submitted for SP review
                $aip->sp_approved = 0;
                break;
            case 'SP-2': // Returned by SP
                $aip->sp_approved = -2;
                break;
            case 'SP1': // Approved by SP
                $aip->sp_approved = 1;
                break;

            default:
                return back()->with('error', 'Invalid type specified.');
        }

        $aip->updated_at = now();
        $aip->save();

        // 4️⃣ Log the action in the tracking table
        AnnualInvestmentInstitutionalTracking::create([
            'aip_id' => $aip->id,
            'user' => $userId,
            'type' => $type,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return redirect()->back()->with('message', 'AIP status updated successfully.');
    }
}
