<?php

namespace App\Http\Controllers;

use App\Models\RevisionPlan;
use App\Models\Signatory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SignatoryController extends Controller
{
    protected $model;
    //
    public function __construct(Signatory $model)
    {
       $this->model = $model;
    }

       //
       public function index(Request $request, $revid){
        $revs = RevisionPlan::findOrFail($revid);
        $data = $this->model
                    ->orderBy('created_at', 'desc')
                    ->paginate(10)
                    ->withQueryString();
        return inertia('Signatories/Index',[
            "data"=>$data,
            "revid"=>$revid,
            "revs"=>$revs,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function create(Request $request, $revid){
        //dd('create');
        $revs = RevisionPlan::findOrFail($revid);
        return inertia('Signatories/Create',[
            'revs'=>$revs,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function store(Request $request){
        //dd($request);
        $id = $request->revision_plan_id;
        $attributes = $request->validate([
            'name' => 'required',
            'position' => 'required',
            'acted' => 'required',
            'revision_plan_id'=>'required',
        ]);
        //dd($attributes);
        $this->model->create($attributes);
        return redirect('/Signatories/'.$id)
                ->with('message','Signatories added');
    }

    public function edit(Request $request, $id){
        $data = $this->model->where('id', $id)->first([
            'id',
            'name',
            'position',
            'acted',
            'revision_plan_id'
        ]);
        $revs = RevisionPlan::findOrFail($data->revision_plan_id);
        return inertia('Signatories/Create', [
            "editData" => $data,
            'revs'=>$revs,
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }

    public function update(Request $request)
    {
        // dd('update');
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'name'=>$request->name,
            'position'=>$request->position,
            'acted'=>$request->acted,
            'revision_plan_id'=>$request->revision_plan_id
        ]);

        return redirect('/Signatories/'.$request->revision_plan_id)
                ->with('message','Signatories updated');
    }

    public function destroy(Request $request){
        $data = $this->model->findOrFail($request->id);
        $id = $data->revision_plan_id;
        $data->delete();
        //dd($request->raao_id);
        return redirect('/Signatories/'.$id)->with('warning', 'Signatories Deleted');

    }



}
