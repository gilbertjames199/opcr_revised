<?php

namespace App\Http\Controllers;

use App\Models\ProgramAndProject;
use App\Models\ProjectProfile;
use App\Models\RevisionPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectProfileController extends Controller
{
    //
    protected $model;

    public function __construct(ProjectProfile $model)
    {
        $this->model = $model;
    }
    public function index(Request $request)
    {
        return inertia('ProjectProfile/Index', [
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function create(Request $request)
    {
        return inertia('ProjectProfile/Create', [
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function PPMP_PPA(Request $request)
    {
        // test
        $FFUNCCOD = $request->FFUNCCOD;
        $year = $request->year;

        $gas_data = ProgramAndProject::select(
            'id',
            'paps_desc',
            'FFUNCCOD',
            'FFUNDCOD',
            'fund_owner'
        )
            ->where('FFUNCCOD', $FFUNCCOD)
            ->where('type', 'GAS')
            ->get()
            ->map(function ($item)use($year) {
                // dd($item->FFUNCCOD);
                $latestPlan = RevisionPlan::where('FFUNCCOD', $item->FFUNCCOD)
                    ->where('status', '1')
                    ->whereYear(('date_start'), $year)
                    ->where('idpaps',0)
                    ->with('budget')
                    ->orderBY('created_at', 'desc')
                    ->first();
                // dd($latestPlan->budget);
                $FFUNDCOD = $item->FFUNDCOD;
                // $latestPlan = $item->latestRevisionPlan;


                return [
                    'id' => $item->id,
                    'paps_desc' => $item->paps_desc,
                    'FFUNCCOD' => $item->FFUNCCOD,
                    'fund_owner' => $item->fund_owner,
                    'latest_revision_plan' => $latestPlan ? [
                        'id' => $latestPlan->id,
                        'idpaps' => $latestPlan->idpaps,
                        'project_title' => $latestPlan->project_title,
                        'budget' => $latestPlan->budget ? $latestPlan->budget->map(function ($budgetItem) use ($FFUNDCOD) {
                            return [
                                'idooe' => $budgetItem->idooe,
                                'particulars' => $budgetItem->particulars,
                                'account_code' => $budgetItem->account_code,
                                'FFUNDCOD' => $FFUNDCOD,
                                'amount' => $budgetItem->amount,
                                'proposed_budget' => $budgetItem->proposed_budget,
                                'category' => $budgetItem->category,
                                'category_gad' => $budgetItem->category_gad,
                                'source' => $budgetItem->source,
                                'remarks' => $budgetItem->remarks,
                                'sip_number' => $budgetItem->sip_number,
                            ];
                        })->toArray() : [],
                    ] : null,
                ];
            });
        $data = ProgramAndProject::select(
            'id',
            'paps_desc',
            'FFUNCCOD',
            'FFUNDCOD',
            'fund_owner',
        )
            ->where('FFUNCCOD', $FFUNCCOD)
            ->whereHas('latestRevisionPlan', function ($q) use ($year) {
                $q->whereYear('date_start', $year);
            })
            ->with([
                'latestRevisionPlan' => function ($q) {
                    $q->select(
                        'revision_plans.id',
                        'revision_plans.idpaps',
                        'revision_plans.project_title',
                        'revision_plans.year_period',
                    );
                },
                'latestRevisionPlan.budget'
            ])
            ->get()
            ->map(function ($item) {
                $FFUNDCOD = $item->FFUNDCOD;
                $latestPlan = $item->latestRevisionPlan;
                return [
                    'id' => $item->id,
                    'paps_desc' => $item->paps_desc,
                    'FFUNCCOD' => $item->FFUNCCOD,
                    'fund_owner' => $item->fund_owner,
                    'latest_revision_plan' => $item->latestRevisionPlan ? [
                        'id' => $item->latestRevisionPlan->id,
                        'idpaps' => $item->latestRevisionPlan->idpaps,
                        'project_title' => $item->latestRevisionPlan->project_title,
                        'year' => $item->latestRevisionPlan->year_period,
                        'budget' => $latestPlan->budget ? $latestPlan->budget->map(function ($budgetItem) use ($FFUNDCOD) {
                            return [
                                'idooe' => $budgetItem->idooe,
                                'particulars' => $budgetItem->particulars,
                                'account_code' => $budgetItem->account_code,
                                'FFUNDCOD' => $FFUNDCOD,
                                'amount' => $budgetItem->amount,
                                'proposed_budget' => $budgetItem->proposed_budget,
                                'category' => $budgetItem->category,
                                'category_gad' => $budgetItem->category_gad,
                                'source' => $budgetItem->source,
                                'remarks' => $budgetItem->remarks,
                                'sip_number' => $budgetItem->sip_number,
                            ];
                        })->toArray() : [],
                    ] : null,
                ];
            });

        return $data->concat($gas_data);
    }
}
