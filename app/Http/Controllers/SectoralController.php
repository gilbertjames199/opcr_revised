<?php

namespace App\Http\Controllers;

use App\Models\MajorFinalOutput;
use App\Models\Sector;
use Illuminate\Http\Request;
use App\Models\Sectoral;
use Illuminate\Support\Facades\Auth;

class SectoralController extends Controller
{
    protected $model;
    public function __construct(Sectoral $model)
    {
       $this->model = $model;
    }


    //
    public function index(Request $request){

        $data = $this->model
                    ->orderBy('created_at', 'desc')
                    ->with('sectors')
                    ->paginate(10)
                    ->withQueryString();
        return inertia('Sectoral/Index',[
            "data"=>$data,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);

    }

    public function create(Request $request){
        $sectors = Sector::get();
        return inertia('Sectoral/addSector',[
            'sectors'=>$sectors,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function store(Request $request){

        $attributes = $request->validate([
            'goal_description' => 'required',
            'sector' => 'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/Sectoral')
                ->with('message','Sectoral Goal added');
    }

    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'goal_description',
            'sector',
        ]);
        $sectors = Sector::get();
        return inertia('Sectoral/addSector', [
            "editData" => $data,
            'sectors'=>$sectors,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'goal_description'=>$request->goal_description,
            'sector' => $request->sector
        ]);

        return redirect('/Sectoral')
                ->with('message','Sectoral Goal updated');
    }

    public function destroy(Request $request){
        $count_mfo =MajorFinalOutput::where('id_sec_outcome', $request->id)->count();
        $msg="";
        $status ="";
        if($count_mfo>0){
            $msg="Unable to delete!";
            $status ="error";
        }else{
            $msg="Sectoral outcome deleted";
            $status ="message";
            $data = $this->model->findOrFail($request->id);
            $data->delete();

        }
        //dd($request->raao_id);
        return redirect('/Sectoral')->with($status, $msg);

    }
}
