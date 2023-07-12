<?php

namespace App\Http\Controllers;

use App\Models\DailyAccomplishment;
use App\Models\MajorFinalOutput;
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

    public function index(Request $request){
        $mfo = MajorFinalOutput::get();
        $paps = ProgramAndProject::get();
        $data = $this->model->with('MFO')
                    ->orderBy('created_at', 'desc')
                    ->paginate(10)
                    ->withQueryString();
        return inertia('DailyAccomplishment/Index',[
            "data"=>$data,
            "paps"=>$paps,
            "mfos"=>$mfo,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function create(Request $request){
        //dd('create');
        $paps = ProgramAndProject::get();
        $mfo = MajorFinalOutput::get();
        return inertia('DailyAccomplishment/Create',[
            'paps'=>$paps,
            'mfo'=>$mfo,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function store(Request $request){
        // dd($request);

        $request->validate([
            'description' => 'required',
            'date' => 'required',
            'remarks' => 'required',
            'Link' => 'required',
            'idpaps'=>'required',
        ]);

        $this->model->create($request->all());
        return redirect('/AddAccomplishment')
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
            'idpaps',
            'idmfo',
            'responsible_person',
            'source_of_fund',
            'amount'
        ]);
        $paps = ProgramAndProject::get();
        $mfo = MajorFinalOutput::get();
        return inertia('DailyAccomplishment/Create', [
            "editData" => $data,
            "idpaps"=>$data->idpaps,
            "mfo"=>$mfo,
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
            'idpaps'=>$request->idpaps,
            'idmfo'=>$request->idmfo,
            'amount'=>$request->amount,
            'source_of_fund'=>$request->source_of_fund,
            'responsible_person'=>$request->responsible_person,
        ]);

        return redirect('/AddAccomplishment')
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
