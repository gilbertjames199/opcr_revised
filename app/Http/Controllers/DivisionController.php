<?php

namespace App\Http\Controllers;

use App\Models\Division;
use App\Models\FFUNCCOD;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DivisionController extends Controller
{
    protected $model;
    public function __construct(Division $model)
    {
        $this->model = $model;
    }
    public function index(Request $request, $FFUNCCOD)
    {
        // dd($FFUNCCOD);
        $dept = FFUNCCOD::where('department_code', $FFUNCCOD)->first();

        $data = $this->model
            ->where('department_code', $FFUNCCOD)
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();
        // dd($dept);
        return inertia('Division/Index', [
            "data" => $data,
            "dept" => $dept,
            "FFUNCCOD" => $FFUNCCOD,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function create(Request $request, $FFUNCCOD)
    {
        $dept = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->first();
        return inertia('Division/Create', [
            "dept" => $dept,
            'FFUNCCOD' => $FFUNCCOD,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function store(Request $request)
    {

        $attributes = $request->validate([
            'description'    => 'required',
            'FFUNCCOD'             => 'required',
        ]);
        // dd($attributes);
        $this->model->create($attributes);
        return redirect('/divisions/' . $request->FFUNCCOD)
            ->with('message', 'Division added');
    }
    public function edit(Request $request, $id)
    {
        // dd("Divisions: " . $id);
        $editData = $this->model
            ->where('id', $id)->first([
                'id',
                'division_name1',
                'FFUNCCOD'
            ]);
        // dd($editData);
        $dept = FFUNCCOD::where('FFUNCCOD', $editData->FFUNCCOD)->first();
        return inertia('Division/Create', [
            "dept" => $dept,
            'FFUNCCOD' => $editData->FFUNCCOD,
            "dept" => $dept,
            "editData" => $editData,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function update(Request $request)
    {
        //dd("update");
        $data = $this->model->findOrFail($request->id);
        $data->update([
            'description'        => $request->description,
            'FFUNCCOD'                 => $request->FFUNCCOD
        ]);

        return redirect('/divisions/' . $request->FFUNCCOD)
            ->with('message', 'Research Agenda updated');
    }
    public function destroy(Request $request)
    {
        $data = $this->model->findOrFail($request->id);
        $FFUNCCOD = $data->FFUNCCOD;
        $data->delete();
        return redirect('/divisions/' . $FFUNCCOD)->with('warning', 'Division Deleted');
    }

    public function loadDivisions(Request $request, $FFUNCCOD)
    {
    }
}
