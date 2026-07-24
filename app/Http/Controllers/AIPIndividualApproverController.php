<?php

namespace App\Http\Controllers;

use App\Models\AIPIndividualApprover;
use App\Models\UserEmployees;
use Illuminate\Http\Request;

class AIPIndividualApproverController extends Controller
{
    protected $aip_individual_approver;
    //
    public function __construct(AIPIndividualApprover $aip_individual_approver){
        $this->aip_individual_approver = $aip_individual_approver;
    }

    public function index(Request $request){
        $data = AIPIndividualApprover::with(['userEmployee.Office'])->paginate(15);

        // dd($data);
        return inertia('AIP/Approvers/Index',
        [
                "data" =>$data
            ]
        );
    }

    public function create(Request $request){
        $employees = UserEmployees::all();
        return inertia('AIP/Approvers/Create', [
            "employees"=>$employees
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'employee_code' => ['required', 'string'],
            'name' => ['required', 'string'],
            'position' => ['required', 'string'],
            'type' => ['required', 'string'],
        ]);

        $data = $request->only(['employee_code', 'name', 'position', 'type', 'with_signature']);
        $data['is_present'] = 1;
        $data['with_signature'] = 1;

        $this->aip_individual_approver->create($validated + $data);

        return redirect('/aip/approvers')->with('success', 'Approver saved successfully.');
    }

    public function edit(Request $request, $id){
        $employees = UserEmployees::all();
        $editData = AIPIndividualApprover::where('id', $id)->first();
        return inertia('AIP/Approvers/Create', [
            "employees"=>$employees,
            "editData"=>$editData
        ]);
    }

    public function destroy(Request $request){

    }

    public function update(Request $request){
        // dd($request);
        $validated = $request->validate([
            'employee_code' => ['required', 'string'],
            'name' => ['required', 'string'],
            'position' => ['required', 'string'],
            'type' => ['required', 'string'],
        ]);

        $approver = AIPIndividualApprover::where('id', $request->id)->first();
        $approver->name = $request->name;
        $approver->employee_code = $request->employee_code;
        $approver->position = $request->position;
        $approver->type = $request->type;
        $approver->save();

        return redirect('/aip/approvers')->with('success', 'Approver ('.$request->name.' updated successfully.');
    }

}
