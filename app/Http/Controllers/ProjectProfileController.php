<?php

namespace App\Http\Controllers;

use App\Models\ProgramAndProject;
use App\Models\ProjectProfile;
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
        $FFUNCCOD = $request->FFUNCCOD;

        $data = ProgramAndProject::select(
            'id',
            'paps_desc',
            'FFUNCCOD',
            'FFUNDCOD',
            'fund_owner'
        )
            ->where('FFUNCCOD', $FFUNCCOD)
            ->whereHas('latestRevisionPlan')
            ->with([
                'latestRevisionPlan' => function ($q) {
                    $q->select(
                        'revision_plans.id',
                        'revision_plans.idpaps',
                        'revision_plans.project_title',

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
                        'budget' => $latestPlan->budget ? $latestPlan->budget->map(function ($budgetItem)use($FFUNDCOD) {
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

        return $data;
    }
}
