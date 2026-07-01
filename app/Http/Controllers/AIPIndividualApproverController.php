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
        $data = AIPIndividualApprover::paginate(15);
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

    public function store(Request $request){

    }

    public function edit(Request $request){

    }

    public function destroy(Request $request){

    }

    public function update(Request $request){

    }

}
