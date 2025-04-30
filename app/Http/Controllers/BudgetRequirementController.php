<?php

namespace App\Http\Controllers;

use App\Models\ActivityProject;
use App\Models\BudgetRequirement;
use App\Models\RevisionPlan;
use App\Models\StrategyProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class BudgetRequirementController extends Controller
{
    protected $model;
    public function __construct(BudgetRequirement $model)
    {
        $this->model = $model;
    }
    public function getFirstLastName()
    {
        $date = '2023-12-31';
        return convertDateString($date);
        //return splitName("Gilbert James");
    }
    public function index(Request $request, $idrev)
    {
        // $start = microtime(true);
        // $data = $this->model->where('revision_plan_id','=',$idrev)
        //         ->orderBy('category', 'desc')
        //         ->orderBy('particulars')
        //         ->get();
        $revs = RevisionPlan::where('id', '=', $idrev)->get();
        // dd($revs);
        $total = 0;
        // dd($revs);
        if ($revs[0]->is_strategy_based) {
            $total = $this->getStratTotal($idrev);
        } else {
            $total = $this->getActivityTotal($idrev);
        }
        $imp_mooe = $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4');
        $imp_ps =  $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4');
        $imp_co = $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4');
        $total = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
            $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
            $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4');
        // dd($total);
        // $end = microtime(true);
        // $difference = $end - $start;
        // dd($difference);
        // dd($idrev);

        //MOOE
        $mooe_gad = $this->model->where('revision_plan_id', '=', $idrev)
            ->where('category', 'Maintenance, Operating, and Other Expenses')
            ->where('category_gad', 'GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $mooe_non = $this->model->where('revision_plan_id', '=', $idrev)
            ->where('category', 'Maintenance, Operating, and Other Expenses')
            ->where('category_gad', 'NON-GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $s_mooe_gad = $this->model->where('revision_plan_id', '=', $idrev)
            ->where('category', 'Maintenance, Operating, and Other Expenses')
            ->where('category_gad', 'GAD')
            ->sum('amount');
        $s_mooe_non = $this->model->where('revision_plan_id', '=', $idrev)
            ->where('category', 'Maintenance, Operating, and Other Expenses')
            ->where('category_gad', 'NON-GAD')
            ->sum('amount');
        //Capital Outlay
        $cap_gad = $this->model->where('revision_plan_id', '=', $idrev)
            ->where('category', 'Capital Outlay')
            ->where('category_gad', 'GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $cap_non = $this->model->where('revision_plan_id', '=', $idrev)
            ->where('category', 'Capital Outlay')
            ->where('category_gad', 'NON-GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $s_cap_gad = $this->model->where('revision_plan_id', '=', $idrev)
            ->where('category', 'Capital Outlay')
            ->where('category_gad', 'GAD')
            ->sum('amount');
        $s_cap_non = $this->model->where('revision_plan_id', '=', $idrev)
            ->where('category', 'Capital Outlay')
            ->where('category_gad', 'NON-GAD')
            ->sum('amount');
        //Personnel Services
        $ps_gad = $this->model->where('revision_plan_id', '=', $idrev)
            ->where('category', 'Personnel Services')
            ->where('category_gad', 'GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $ps_non = $this->model->where('revision_plan_id', '=', $idrev)
            ->where('category', 'Personnel Services')
            ->where('category_gad', 'NON-GAD')
            ->orderBy('category', 'desc')
            ->orderBy('particulars')
            ->get();
        $s_ps_gad = $this->model->where('revision_plan_id', '=', $idrev)
            ->where('category', 'Personnel Services')
            ->where('category_gad', 'GAD')
            ->sum('amount');
        $s_ps_non = $this->model->where('revision_plan_id', '=', $idrev)
            ->where('category', 'Personnel Services')
            ->where('category_gad', 'NON-GAD')
            ->sum('amount');
        //TOTAL GAD Amount
        $GAD_total = $this->model->where('revision_plan_id', '=', $idrev)
            ->where('category_gad', 'GAD')
            ->sum('amount');

        $BUD_total = $this->model->where('revision_plan_id', '=', $idrev)
            ->sum('amount');
        //dd($GAD_total);
        return inertia('BudgetRequirement/Index', [
            "mooe_gad" => $mooe_gad,
            "mooe_non" => $mooe_non,
            "cap_gad" => $cap_gad,
            "cap_non" => $cap_non,
            "ps_gad" => $ps_gad,
            "ps_non" => $ps_non,
            "idrev" => $idrev,
            "revs" => $revs,

            "s_mooe_gad" => $s_mooe_gad,
            "s_mooe_non" => $s_mooe_non,
            "s_cap_gad" => $s_cap_gad,
            "s_cap_non" => $s_cap_non,
            "s_ps_gad" => $s_ps_gad,
            "s_ps_non" => $s_ps_non,
            "implementation_plan" => $total,
            "imp_mooe" => $imp_mooe,
            "imp_ps" => $imp_ps,
            "imp_co" => $imp_co,
            "filters" => $request->only(['search']),
            "GAD_total" => $GAD_total,
            "BUD_total" => $BUD_total,

            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function getStratTotal($idrev)
    {
        $total = StrategyProject::where('project_id', $idrev)
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
                'co_q4'
            )
            ->where('is_active', '1')
            ->get();

        // $total = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
        //     $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
        //     $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4');
        return $total;
    }
    public function getActivityTotal($idrev)
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
                'co_q4'
            )
            ->where('is_active', '1')
            ->get();

        // $total = $total->sum('ps_q1') + $total->sum('ps_q2') + $total->sum('ps_q3') + $total->sum('ps_q4') +
        //     $total->sum('mooe_q1') + $total->sum('mooe_q2') + $total->sum('mooe_q3') + $total->sum('mooe_q4') +
        //     $total->sum('co_q1') + $total->sum('co_q2') + $total->sum('co_q3') + $total->sum('co_q4');
        return $total;
    }
    public function create(Request $request, $idrev)
    {
        $revs = RevisionPlan::where('id', $idrev)->get();
        $budgets = BudgetRequirement::where('revision_plan_id', $idrev)->get();
        $budgets = $budgets->pluck('account_code');
        $acc = DB::connection('mysql2')->table('chartofaccounts')->get();
        $accounts = $acc->pluck('FTITLE');
        $code = $acc->pluck('FACTCODE');
        //dd($idrev);
        return inertia('BudgetRequirement/Create', [
            "idrev" => $idrev,
            "revs" => $revs,
            "accounts" => $accounts,
            "budgets" => $budgets,
            "codes" => $code,
            "can" => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function store(Request $request)
    {
        //dd($request->revision_plan_id);
        $attributes = $request->validate([
            'revision_plan_id' => 'required',
            'particulars' => 'required',
            // 'account_code'=>'required',
            'amount' => 'required',
            'category' => 'required',
            'category_gad' => 'required',
        ]);

        $budg = new BudgetRequirement();
        $famount = $attributes['amount'];
        $budg->revision_plan_id = $attributes['revision_plan_id'];
        $budg->particulars = $attributes['particulars'];
        $budg->account_code = $request->account_code;
        $budg->amount = $attributes['amount'];
        $budg->category = $attributes['category'];
        $budg->category_gad = $attributes['category_gad'];
        $budg->source = $request->source;
        $budg->save();

        $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $attributes['revision_plan_id'])
            ->sum('amount');

        // $rev=RevisionPlan::find($attributes['revision_plan_id']);
        // $rev->amount = $budgetary_requirement;
        // $rev->save();
        $msg = "Successfully added budget requirement.";


        return redirect('/budget/' . $request->revision_plan_id)
            ->with('message', $msg);
        //dd($rev->amount);
    }
    public function edit(Request $request, $idbudget)
    {

        $editData = BudgetRequirement::find($idbudget);
        // dd($editData);
        $idrev = $editData->revision_plan_id;
        $revs = RevisionPlan::where('id', $idrev)->get();
        $budgets = BudgetRequirement::where('revision_plan_id', $idrev)->get();
        $budgets = $budgets->pluck('account_code');
        $acc = DB::connection('mysql2')
            ->table('chartofaccounts')
            ->selectRaw("
                            trim(FTITLE) as FTITLE,
                            FACTCODE
                        ")
            ->get();
        $accounts = $acc->pluck('FTITLE');
        $code = $acc->pluck('FACTCODE');

        //dd($idrev);
        return inertia('BudgetRequirement/Create', [
            "revision_plan_id" => $idrev,
            "revs" => $revs,
            "accounts" => $accounts,
            "budgets" => $budgets,
            "codes" => $code,
            "editData" => $editData,
            "can" => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function update(Request $request, $idrev)
    {
        // dd($request->id);
        // dd($request->revision_plan_id);
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        // dd($data);
        //dd($request);
        $data->update([
            'particulars' => $request->particulars,
            'account_code' => $request->account_code,
            'amount' => $request->amount,
            'category' => $request->category,
            'category_gad' => $request->category_gad,
            'source' => $request->source,
        ]);
        $budgetary_requirement = BudgetRequirement::where('revision_plan_id', $request->revision_plan_id)
            ->sum('amount');
        // $rev=RevisionPlan::find($request->revision_plan_id);
        // $rev->amount = $budgetary_requirement;
        // $rev->save();
        return redirect('/budget/' . $idrev)
            ->with('message', 'Budget Requirement updated');
    }

    public function destroy(Request $request)
    {
        //GET Revision Plan ID
        $revision_plan_id = BudgetRequirement::where('id', $request->id)->first();
        $revision_plan_id = $revision_plan_id->revision_plan_id;

        //DELETE BUDGET REQUIREMENT
        $data = $this->model->findOrFail($request->id);
        $data->delete();

        //GET THE TOTAL BUDGETARY REQUIREMENT
        // $budgetary_requirement =BudgetRequirement::where('revision_plan_id',$revision_plan_id)
        //                                     ->sum('amount');

        //UPDATE THE TOTAL AMOUNT OF THE REVISION PLAN
        // $rev=RevisionPlan::find($revision_plan_id);
        // $rev->amount = $budgetary_requirement;
        // $rev->save();

        //return back()->with('warning', 'Budget Requirement Deleted');
        return redirect('/budget/' . $revision_plan_id)
            ->with('message', 'Budget Requirement updated');
    }
}
