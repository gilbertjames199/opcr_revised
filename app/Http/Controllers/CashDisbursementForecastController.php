<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CashDisbursementForecast;
use App\Models\BudgetRequirement;
use App\Models\CashDisbursementForecastAccount;

class CashDisbursementForecastController extends Controller
{
    protected $cdf;

    public function __construct(CashDisbursementForecast $cdf){
        $this->cdf=$cdf;
    }

    public function set_cdf(Request $request, $revision_plan_id){
        $data = CashDisbursementForecast::where('revision_plan_id', $revision_plan_id)
                    ->get();
        if ($data->isEmpty()) {

            $newCDF  = CashDisbursementForecast::create([
                'revision_plan_id' => $revision_plan_id,
                'version' => 1,
                'status' => 1
            ]);
            // Return the newly created row
            // return [$new];


            // --------------------------
            // GET ALL BUDGET REQUIREMENTS
            // --------------------------
            $budgetRequirements = BudgetRequirement::where('revision_plan_id', $revision_plan_id)->get();

            // If no Budget Requirements → return empty (and CDF with no accounts)
            if ($budgetRequirements->isEmpty()) {
                return [$newCDF];
            }

            // --------------------------
            // CREATE A CDF ACCOUNT PER BUDGET REQUIREMENT
            // --------------------------
            foreach ($budgetRequirements as $br) {

                CashDisbursementForecastAccount::create([
                    'budget_requirement_id'         => $br->id,
                    'cash_disbursement_forecast_id' => $newCDF->id,

                    // Monthly defaults
                    'january'   => 0,
                    'february'  => 0,
                    'march'     => 0,
                    'april'     => 0,
                    'may'       => 0,
                    'june'      => 0,
                    'july'      => 0,
                    'august'    => 0,
                    'september' => 0,
                    'october'   => 0,
                    'november'  => 0,
                    'december'  => 0,
                ]);
            }

        }
        $data = CashDisbursementForecast::with(['cashDisbursementForecastAccount'])
                ->where('revision_plan_id', $revision_plan_id)
                    ->get();
        // If found, return data
        return $data;
    }
}
