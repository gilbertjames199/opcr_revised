<?php

namespace App\Http\Controllers;

use App\Models\DailyAccomplishment;
use App\Models\ProgramAndProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AddAccomplishmentController extends Controller
{
    //
    protected $model;
    public function __construct(DailyAccomplishment $model)
    {
        $this->model=$model;
    }

    public function index(Request $request, $idpaps){
        $paps = ProgramAndProject::findOrFail($idpaps);
        $data = $this->model
                    ->where('idpaps', $idpaps)
                    ->orderBy('created_at', 'desc')
                    ->paginate(10)
                    ->withQueryString();
        return inertia('DailyAccomplishment/Index',[
            "data"=>$data,
            "idpaps"=>$idpaps,
            "paps"=>$paps,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function create(Request $request, $idpaps){
        //dd('create');
        $paps = ProgramAndProject::findOrFail($idpaps);
        return inertia('DailyAccomplishment/Create',[
            'paps'=>$paps,
            'idpaps'=>$idpaps,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function store(Request $request){
        // dd($request);
        $id = $request->idpaps;
        $attributes = $request->validate([
            'description' => 'required',
            'quantity' => 'required',
            'date' => 'required',
            'remarks' => 'required',
            'Link' => 'required',
            'idpaps'=>'required',
        ]);

        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/AddAccomplishment/'.$id)
                ->with('message','Daily Accomplishment added');
    }

    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'description',
            'quantity',
            'date',
            'remarks',
            'Link',
            'idpaps'
        ]);
        $paps = ProgramAndProject::findOrFail($data->idpaps);
        return inertia('DailyAccomplishment/Create', [
            "editData" => $data,
            "idpaps"=>$data->idpaps,
            'paps'=>$paps,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }


    public function update(Request $request)
    {
        // dd($request);
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'description'=>$request->description,
            'quantity'=>$request->quantity,
            'date'=>$request->date,
            'remarks'=>$request->remarks,
            'Link'=>$request->Link,
            'idpaps'=>$request->idpaps
        ]);

        return redirect('/AddAccomplishment/'.$request->idpaps)
                ->with('message','Accomplishment updated');
    }

    public function destroy(Request $request){
        $data = $this->model->findOrFail($request->id);
        $id = $data->idpaps;
        $data->delete();
        //dd($request->raao_id);
        return redirect('/AddAccomplishment/'.$id)->with('warning', 'Accomplishment Deleted');

    }

}
