<?php

namespace App\Http\Controllers;

use App\Models\BudgetRequirement;
use App\Models\RevisionPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class BudgetRequirementController extends Controller
{
    protected $model;
    public function __construct(BudgetRequirement $model)
    {
        $this->model=$model;
    }
    public function getFirstLastName(){
        $date ='2023-12-31';
        return convertDateString($date);
        //return splitName("Gilbert James");
    }
    public function index(Request $request, $idrev){
        // $start = microtime(true);
        $data = $this->model->where('revision_plan_id','=',$idrev)->get();
        $revs = RevisionPlan::where('id','=',$idrev)->get();
        // $end = microtime(true);
        // $difference = $end - $start;
        // dd($difference);
        //dd($idrev);

        return inertia('BudgetRequirement/Index',[
            'data'=>$data,
            "idrev"=>$idrev,
            "revs"=>$revs,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function create(Request $request, $idrev){
        $revs = RevisionPlan::where('id',$idrev)->get();
        $budgets = BudgetRequirement::where('revision_plan_id',$idrev )->get();
        $budgets = $budgets->pluck('account_code');
        $acc = DB::connection('mysql2')->table('chartofaccounts')->get();
        $accounts = $acc->pluck('FTITLE');
        $code = $acc->pluck('FACTCODE');
        //dd($idrev);
        return inertia('BudgetRequirement/Create',[
            "idrev"=>$idrev,
            "revs"=>$revs,
            "accounts"=>$accounts,
            "budgets"=>$budgets,
            "codes"=>$code,
            "can"=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function store(Request $request){
        //dd($request->revision_plan_id);
        $attributes=$request->validate([
            'revision_plan_id'=>'required',
            'particulars' => 'required',
            'account_code'=>'required',
            'amount'=>'required',
            'category'=>'required',
            //'category_gad'=>'required',
        ]);

        $budg=new BudgetRequirement();
        $famount=$attributes['amount'];
        $budg->revision_plan_id=$attributes['revision_plan_id'];
        $budg->particulars=$attributes['particulars'];
        $budg->account_code=$attributes['account_code'];
        $budg->amount=$attributes['amount'];
        $budg->category=$attributes['category'];
        $budg->category_gad="NON-GAD";
        $budg->save();
        $rev=RevisionPlan::find($attributes['revision_plan_id']);
        $revamount = $rev->amount;
        $rev->amount = $revamount + $famount;
        $rev->save();
        $msg="Successfully added budget requirement.";


        return redirect('/budget/'.$request->revision_plan_id)
                ->with('message',$msg);
        //dd($rev->amount);
    }
    public function edit(Request $request, $idbudget){

        $editData=BudgetRequirement::find($idbudget);
        // dd($editData);
        $idrev=$editData->revision_plan_id;
        $revs = RevisionPlan::where('id',$idrev)->get();
        $budgets = BudgetRequirement::where('revision_plan_id',$idrev )->get();
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
        return inertia('BudgetRequirement/Create',[
            "revision_plan_id"=>$idrev,
            "revs"=>$revs,
            "accounts"=>$accounts,
            "budgets"=>$budgets,
            "codes"=>$code,
            "editData"=>$editData,
            "can"=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
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
        $data->update([
            'particulars'=>$request->particulars,
            'account_code'=>$request->account_code,
            'amount'=>$request->amount,
            'category'=>$request->category,
            'category_gad'=>$request->category_gad,
        ]);

        return redirect('/budget/'.$idrev)
                ->with('message','Budget Requirement updated');
    }

    public function destroy(Request $request){
        $revision_plan_id = BudgetRequirement::where('id',$request->id)->get();
        // $revision_plan_id -> revision_plan_id;

        $data = $this->model->findOrFail($request->id);

        $data->delete();

        //dd($request->raao_id);
        return back()->with('warning', 'Budget Requirement Deleted');

    }
}
