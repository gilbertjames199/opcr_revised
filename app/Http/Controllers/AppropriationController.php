<?php

namespace App\Http\Controllers;

use App\Models\AIP;
use App\Models\Appropriation;
use App\Models\Category;
use App\Models\ProgramAndProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
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
        $app = new Appropriation();
        $app->object_of_expenditure=$request->object_of_expenditure;
        $app->account_code=$request->account_code;
        $app->past_year=$request->past_year;
        $app->first_sem=$request->first_sem;
        $app->second_sem=$request->second_sem;
        $app->budget_year=$request->budget_year;
        $app->idpaps=$request->idpaps;
        $app->category=$request->category;
        $app->GAD="";
        $app->save();
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
                            ->where('category','Capital Outlay')
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
        $department_head = $request->department_head;
        $budget_officer = $request->budget_officer;
        $department_code = $request->department_code;
        $office = $request->office;
        $local_chief = $request->local_chief;

        return [
            'department_code'=>$department_code,
            'office'=>$office,
            'department_head'=>$department_head,
            'budget_officer'=>$budget_officer,
            'local_chief'=>$local_chief,
            'total_past_year'=>$request->total_past_year,
            'total_first_sem'=>$request->total_first_sem,
            'total_second_sem'=>$request->total_second_sem,
            'total_total'=>$request->total_total,
            'total_budget_year'=>$request->total_budget_year,
        ];
    }
    public function paps_types(Request $request){
        $department_code = $request->department_code;
        $paps_types = ProgramAndProject::selectRaw('DISTINCT(type)')
                        ->join('appropriations','appropriations.idpaps','program_and_projects.id')
                        ->orderByRaw(DB::raw("CASE WHEN program_and_projects.type = 'GAS' THEN 0
                            WHEN program_and_projects.type = 'Project' THEN 1
                            WHEN program_and_projects.type = 'Program' THEN 2
                            WHEN program_and_projects.type = 'Activity' THEN 3 ELSE 4
                            END")
                        )
                        ->get()
                        ->map(function($item)use($department_code){
                            return [
                                'paps_type'=>$item->type,
                                'department_code'=>$department_code
                            ];
                        });
        return $paps_types;
    }
    public function paps(Request $request){
        //
        $paps = ProgramAndProject::select('program_and_projects.id', 'program_and_projects.paps_desc', DB::raw('MAX(appropriations.id) AS column_name'))
                    ->join('appropriations', 'appropriations.idpaps', '=', 'program_and_projects.id')
                    ->where('program_and_projects.type', '=', $request->paps_type)
                    ->where('program_and_projects.department_code', '=', $request->department_code)
                    ->groupBy('program_and_projects.id', 'program_and_projects.paps_desc')
                    ->get()
                    ->map(function($item)use($request){
                        return [
                            "idpaps"=>$item->id,
                            "paps_desc"=>$item->paps_desc,
                            "type"=>$request->paps_type
                        ];
                    });
        return $paps;
    }
    public function paps_categories(Request $request){
        $categories = Category::select('categories.category')
            ->where('appropriations.idpaps', $request->idpaps)
            ->join('appropriations','appropriations.category','categories.category')
            ->groupBy('categories.category')
            ->orderByRaw(DB::raw("CASE WHEN categories.category = 'Personnel Services' THEN 0
                            WHEN categories.category = 'Maintenance, Operating, and Other Expenses' THEN 1
                            WHEN categories.category = 'Capital Outlay' THEN 2 ELSE 3
                            END")
                        )
            ->get()
            ->map(function($item)use($request){
                //$categ = Str::upper($item->category);
                return [
                    "category"=>$item->category,
                    "type"=>$request->type,
                    "idpaps"=>$request->idpaps
                ];
            });
        return $categories;
    }
    public function appropriations(Request $request){
        //dd($request->type);
        $appropriations = Appropriation::select('program_and_projects.paps_desc','program_and_projects.type',
            'appropriations.account_code','program_and_projects.department_code')
            ->selectRaw('appropriations.object_of_expenditure')
            ->selectRaw('SUM(appropriations.past_year) AS past_year')
            ->selectRaw('SUM(appropriations.first_sem) AS first_sem')
            ->selectRaw('SUM(appropriations.second_sem) AS second_sem')
            ->selectRaw('(SUM(appropriations.first_sem) + SUM(appropriations.second_sem)) AS total')
            ->selectRaw('SUM(appropriations.budget_year) AS budget_year')
            ->leftjoin('program_and_projects', 'program_and_projects.id', 'appropriations.idpaps')
            ->where('appropriations.category', $request->category)
            ->where('appropriations.idpaps', $request->idpaps)
            ->when($request->category === 'Capital Outlay', function ($query) {
                $query->groupBy('appropriations.object_of_expenditure');
            })
            ->when($request->category === 'Maintenance, Operating, and Other Expenses', function ($query) {
                $query->groupBy('appropriations.account_code');
            })
            ->when($request->category === 'Personnel Services', function ($query) {
                $query->groupBy('appropriations.account_code');
            })
            ->get()
            ->map(function($item){
                return [
                    "paps_desc"=>$item->paps_desc,
                    "type"=>$item->type,
                    "account_code"=>$item->account_code,
                    "object_of_expenditure"=>$item->object_of_expenditure,
                    "past_year"=>number_format($item->past_year, 2, '.', ','),
                    "first_sem"=>number_format($item->first_sem, 2, '.', ','),
                    "second_sem"=>number_format($item->second_sem, 2, '.', ','),
                    "total"=>number_format($item->total, 2, '.', ','),
                    "budget_year"=>number_format($item->budget_year, 2, '.', ','),
                    "department_code"=>number_format($item->department_code, 2, '.', ','),
                ];
            });
        return $appropriations;
    }
}