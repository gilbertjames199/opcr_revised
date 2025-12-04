<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CashDisbursementForecast;
use App\Models\BudgetRequirement;
use App\Models\CashDisbursementForecastAccount;
use App\Models\ActivityProject;
class CashDisbursementForecastController extends Controller
{
    protected $cdf;

    public function __construct(CashDisbursementForecast $cdf){
        $this->cdf=$cdf;
    }

    public function set_cdf(Request $request, $revision_plan_id){
        $data = CashDisbursementForecast::where('revision_plan_id', $revision_plan_id)
                    ->get();
        $budgetRequirements=[];
        $implementationSchedules=[];
        if ($data->isEmpty()) {
            $this->generateCDF($request, $revision_plan_id);
        }
        $data = $this->all_cdf_accounts($revision_plan_id);

        // dd($data);
        // If found, return data
        return inertia('CashDisbursementForecast/Index',[
            'data'=>$data,
            'revid'=>$revision_plan_id,
        ]);
    }
    public function generateCDF(Request $request, $revision_plan_id){
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

            // GET IMPLEMENTATION SCHEDULES
            $implementationSchedules = $this->getBudgetTotal($revision_plan_id);

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
        return $newCDF;
    }
    public function all_cdf_accounts($revision_plan_id){
        $categoriesOrder = [
            'Personnel Services',
            'Maintenance, Operating, and Other Expenses',
            'Financial Expenses',
            'Capital Outlay'
        ];
        return CashDisbursementForecast::with([
            'cashDisbursementForecastAccount.budgetRequirement',
            'revisionPlan.activityProject'
        ])
        ->where('revision_plan_id', $revision_plan_id)
        ->get()
        ->map(function($item) use ($categoriesOrder) {
            $grouped = [];

            // Initialize empty arrays for each category
            foreach ($categoriesOrder as $cat) {
                $grouped[$cat] = [
                    'category' => $cat,
                    'items' => []
                ];
            }

            // Loop through cashDisbursementForecastAccounts
            foreach ($item->cashDisbursementForecastAccount as $account) {
                $budget = $account->budgetRequirement;

                if ($budget && in_array($budget->category, $categoriesOrder)) {
                    $grouped[$budget->category]['items'][] = [
                        // CashDisbursementForecastAccount columns
                        'id' => $account->id,
                        'budget_requirement_id' => $account->budget_requirement_id,
                        'cash_disbursement_forecast_id' => $account->cash_disbursement_forecast_id,
                        'january' => $account->january,
                        'february' => $account->february,
                        'march' => $account->march,
                        'april' => $account->april,
                        'may' => $account->may,
                        'june' => $account->june,
                        'july' => $account->july,
                        'august' => $account->august,
                        'september' => $account->september,
                        'october' => $account->october,
                        'november' => $account->november,
                        'december' => $account->december,

                        // BudgetRequirement columns
                        'budget_id' => $budget->id,
                        'revision_plan_id' => $budget->revision_plan_id,
                        'particulars' => $budget->particulars,
                        'account_code' => $budget->account_code,
                        'sip_number' => $budget->sip_number,
                        'amount' => $budget->amount,
                        'proposed_budget' => $budget->proposed_budget,
                        'category' => $budget->category,
                        'category_gad' => $budget->category_gad,
                        'source' => $budget->source,
                    ];
                }
            }
            // dd($item->revisionPlan);
            // dd($grouped);
            return [
                'id' => $item->id,
                'revision_plan_id' => $item->revision_plan_id,
                'version' => $item->version,
                'status' => $item->status,
                'project_title' => $item->revisionPlan->project_title,
                'implementation' => $item->revisionPlan->activityProject,
                'cash_disbursement_forecast_accounts' => array_values($grouped),
            ];
        });
    }
    public function getBudgetTotal($idrev)
    {
        $total = ActivityProject::where('project_id', $idrev)
            ->select(
                'ps_q1',
                'ps_q2',
                'ps_q3',
                'ps_q4',
                'mooe_q1',
                'mooe_q2',
                'mooe_q3',
                'mooe_q4',
                'co_q1',
                'co_q2',
                'co_q3',
                'co_q4',
                'fe_q1',
                'fe_q2',
                'fe_q3',
                'fe_q4'
            )
            ->where('is_active', '1')
            ->whereHas('activity', function ($q) {
                $q->whereNull('deleted_at');   // activity must NOT be soft deleted
            })
            ->get();

        // $total = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
        //     $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
        //     $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4');
        return $total;
    }
    public function updateCdf(Request $request, $revision_plan_id)
    {
        $request->validate([
            'id' => 'required|integer',
            'column' => 'required|string',
            'data' => 'nullable'
        ]);

        // Find the tuple in CashDisbursementForecastAccount
        $account = CashDisbursementForecastAccount::find($request->id);

        if (!$account) {
            return response()->json(['message' => 'Record not found'], 404);
        }

        // Update only the specified column
        $column = $request->column;
        $account->$column = $request->data;

        $account->save();

        return response()->json([
            'message' => 'Updated successfully',
            'updated_column' => $column,
            'new_value' => $request->data
        ], 200);
    }
}
