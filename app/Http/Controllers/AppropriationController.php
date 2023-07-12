<?php

namespace App\Http\Controllers;

use App\Models\AIP;
use App\Models\Appropriation;
use App\Models\ProgramAndProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AppropriationController extends Controller
{
    protected $appropriation, $paps;
    public function __construct(Appropriation $appropriation, ProgramAndProject $paps)
    {
        $this->appropriation=$appropriation;
        $this->paps = $paps;
    }
    public function index(Request $request, $idpaps){
        //dd("idpaps: ".$request->idpaps);

        $data = $this->appropriation
                ->where('idpaps', $idpaps)
                ->with('paps')
                ->paginate(10);
        $paps = $this->paps->where('id',$idpaps)->first();
        $idpaps = $request->query('idpaps');

        // Handle the request and any necessary logic based on $idpaps

        // Redirect the user to 'Appropriations/Index' using return inertia
        return inertia('Appropriations/Index',[
            "data"=>$data,
            "paps"=>$paps,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
    public function create(Request $request, $idpaps){
        //AIP CODE
        $aip = AIP::where('idpaps', $idpaps)->first();
        $total_budget_year = $this->getTotalAppropriationByPAPS($idpaps);
        //dd("create: ".$idpaps);
        $paps = ProgramAndProject::find($idpaps);
        $all_paps = ProgramAndProject::get();
        $accounts = DB::connection('mysql2')->table('chartofaccounts')->get();
        $acc = $accounts->pluck('FTITLE');
        $code = $accounts->pluck('FACTCODE');
        return inertia("Appropriations/Create",[
            "pap1"=>$paps,
            "paps"=>$all_paps,
            "accounts"=>$acc,
            "codes"=>$code,
            "aip"=>$aip,
            "total_budget_year"=>$total_budget_year
        ]);
    }
    public function store(Request $request){

        //validate if budget
        $idpaps = $request->idpaps;
        $aip=[];
        $is_greater =false;

        if($idpaps){
            $aip=AIP::where('idpaps', $request->idpaps)->first();
            if($aip){
                $mooe = $aip->MOOE;
                $ps = $aip->PS;
                $co = $aip->CO;

                $cat_selected = $request->category;

                if($cat_selected){

                    $total_amount = Appropriation::where('idpaps', $idpaps)
                                        ->where('category',$cat_selected)
                                        ->sum('budget_year');

                    if($cat_selected=="Capital Outlay"){
                        if($total_amount>$co){
                            $request->merge(['budget_year' => null]);
                        }
                    }
                    if($cat_selected=="Maintenance, Operating, and Other Expenses"){
                        if($total_amount>$mooe){
                            $request->merge(['budget_year' => null]);
                        }
                    }
                    if($cat_selected=="Personnel Services"){
                        if($total_amount>$ps){
                            $request->merge(['budget_year' => null]);
                        }
                    }
                }
            }else{
                $request->merge(['budget_year' => null]);
            }


        }

        $attributes = $request->validate([
            'object_of_expenditure' => 'required',
            'past_year' => 'required',
            'first_sem' => 'required',
            'second_sem' => 'required',
            'budget_year' => 'required',
            'idpaps' => 'required',
            'category' => 'required',
        ]);
        $this->appropriation->create($attributes);
        return redirect('/appropriations/'.$request->idpaps)
                ->with('message','Division Output added');
    }
    public function edit(Request $request, $id){

        $data = $this->appropriation::where('id',$id)->first();
        $idpaps = $data->idpaps;

        $aip = AIP::where('idpaps', $idpaps)->first();
        $total_budget_year = $this->getTotalAppropriationByPAPS($idpaps);
        $paps = ProgramAndProject::find($idpaps);
        $all_paps = ProgramAndProject::get();
        $accounts = DB::connection('mysql2')->table('chartofaccounts')->get();
        $acc = $accounts->pluck('FTITLE');
        $code = $accounts->pluck('FACTCODE');
        return inertia("Appropriations/Create",[
            "pap1"=>$paps,
            "paps"=>$all_paps,
            "accounts"=>$acc,
            "codes"=>$code,
            "editData"=>$data,
            "aip"=>$aip,
            "total_budget_year"=>$total_budget_year
        ]);
    }
    public function update(Request $request){
        //dd("update");
        $idpaps = $request->idpaps;
        $aip=[];
        $is_greater =false;

        if($idpaps){
            $aip=AIP::where('idpaps', $request->idpaps)->first();
            $mooe = $aip->MOOE;
            $ps = $aip->PS;
            $co = $aip->CO;

            $cat_selected = $request->category;

            if($cat_selected){

                $total_amount = Appropriation::where('idpaps', $idpaps)
                                    ->where('category',$cat_selected)
                                    ->sum('budget_year');

                if($cat_selected=="Capital Outlay"){
                    if($total_amount>$co){
                        $request->merge(['budget_year' => null]);
                    }
                }
                if($cat_selected=="Maintenance, Operating, and Other Expenses"){
                    if($total_amount>$mooe){
                        $request->merge(['budget_year' => null]);
                    }
                }
                if($cat_selected=="Personnel Services"){
                    if($total_amount>$ps){
                        $request->merge(['budget_year' => null]);
                    }
                }
            }

        }

        $attributes = $request->validate([
            'object_of_expenditure' => 'required',
            'past_year' => 'required',
            'first_sem' => 'required',
            'second_sem' => 'required',
            'budget_year' => 'required',
            'idpaps' => 'required',
            'category' => 'required',
        ]);
        $approp = $this->appropriation->find($request->id);
        //dd($request->id);
        $approp->object_of_expenditure = $request->object_of_expenditure;
        $approp->account_code = $request->account_code;
        $approp->past_year = $request->past_year;
        $approp->first_sem = $request->first_sem;
        $approp->second_sem = $request->second_sem;
        $approp->budget_year = $request->budget_year;
        $approp->idpaps = $request->idpaps;
        $approp->category = $request->category;
        $approp->GAD = $request->GAD;
        $approp->CCET = $request->CCET;
        $approp->save();
        return redirect('/appropriations/'.$request->idpaps)
                ->with('message','Division Output updated');
    }
    public function getTotalAppropriationByPAPS($idpaps){
        $total_mooe_approp=$this->appropriation
                            ->where('category','Maintenance, Operating, and Other Expenses')
                            ->where('idpaps',$idpaps)
                            ->sum('budget_year');
        $total_ps_approp=$this->appropriation
                            ->where('category','Personnel Services')
                            ->where('idpaps',$idpaps)
                            ->sum('budget_year');
        $total_co_approp=$this->appropriation
                            ->where('category','Personnel Services')
                            ->where('idpaps',$idpaps)
                            ->sum('budget_year');
        return [
            "total_approp_mooe"=>$total_mooe_approp,
            "total_ps_approp"=>$total_ps_approp,
            "total_co_approp"=>$total_co_approp
        ];

    }
    public function destroy(Request $request, $id){

        $data = $this->appropriation->findOrFail($id);
        $idpaps = $data->idpaps;
        $data->delete();
        //dd($request->raao_id);
        return redirect('/appropriations/'.$idpaps)->with('warning', 'Record Deleted');
    }
    public function main(Request $request){
        $dept_head = $request->dept_head;
        $FFUNCCOD = $request->FFUNCCOD;
        $office_code = $request->office_code;
    }
}
