<?php

namespace App\Http\Controllers;

use App\Models\Division;
use App\Models\FFUNCCOD;
use App\Models\MajorFinalOutput;
use App\Models\ProgramAndProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DivisionController extends Controller
{
    protected $model;
    public function __construct(Division $model)
    {
        $this->model = $model;
    }
    public function index(Request $request, $papsID)
    {
        // dd($papsID);
        $PAPS = ProgramAndProject::where('id', $papsID)->first();

        $data = $this->model
            ->where('idpaps', $papsID)
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();
        // dd($data);
        return inertia('Division/Index', [
            "data" => $data,
            "paps" => $PAPS,
            "idPaps" => $papsID,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function create(Request $request, $idpaps)
    {
        // dd($papsID);
        $paps = ProgramAndProject::where('id', $idpaps)->first();
        return inertia('Division/Create', [
            "paps" => $paps,
            'idpaps' => $idpaps,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
    public function store(Request $request)
    {
        // dd($request->all());

        $id = $request->idpaps;
        $attributes = $request->validate([
            'output' => 'required',
            'office_accountable' => 'required',
            'monitoring' => 'required',
            'prescribed_period' => 'required',
            'quality1' => 'required',
            'quality2' => 'required',
            'quality3' => 'required',
            'efficiency1' => 'required',
            'efficiency2' => 'required',
            'efficiency3' => 'required',
            'timeliness' => 'required',
            'quantity' => 'required',
            'idpaps' => 'required',
        ]);

        $verb = $request->input('verb'); // Retrieve verb directly from the request
        $output = $attributes['output']; // Get output from the validated attributes
        $prescribed_period = $attributes['prescribed_period']; // Get output from the validated attributes
        $attributes['performance_measure'] = "{$verb} {$output} with a satisfactory rating for quality/effectiveness and satisfactory in efficiency at {$prescribed_period}";

        // dd($attributes);
        $this->model->create($attributes);
        return redirect('/divisions/' . $request->idpaps)
            ->with('message', 'Division added');
    }
    public function edit(Request $request, $id)
    {
        // dd("Divisions: " . $id);

        // dd($request->id);
        $editData = $this->model
            ->where('id', $id)->first([
                'id',
                'output',
                'office_accountable',
                'monitoring',
                'prescribed_period',
                'quality1',
                'quality2',
                'quality3',
                'efficiency1',
                'efficiency2',
                'efficiency3',
                'timeliness',
                'idpaps',
                'quantity',
            ]);
        // dd($editData);
        $data = ProgramAndProject::where('id', $editData->idpaps)->first();
        return inertia('Division/Create', [
            "data" => $data,
            'idpaps' => $editData->idpaps,
            "data" => $data,
            "editData" => $editData,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }

    public function MFO_Division(Request $request)
    {
        $functions = strtoupper($request->FUNCTION);

        $mfos = MajorFinalOutput::select(DB::raw('"' . $functions . '" as `FUNCTION`'), "mfo_desc", "id")
            ->where('FFUNCCOD', $request->id)
            ->where("id", ">", "45")
            ->get();

        return $mfos;

        // dd($mfos);
    }

    public function PAPS_Division(Request $request)
    {
        $paps = ProgramAndProject::select(
            'program_and_projects.id',
            'program_and_projects.paps_desc',
            'division_outputs.output',
            'division_outputs.performance_measure',
            'division_outputs.office_accountable',
            'division_outputs.monitoring',
            'division_outputs.prescribed_period',
            'division_outputs.quality1',
            'division_outputs.quality2',
            'division_outputs.quality3',
            'division_outputs.efficiency1',
            'division_outputs.efficiency2',
            'division_outputs.efficiency3',
            'division_outputs.timeliness',

        )
            ->leftJoin('division_outputs', 'program_and_projects.id', '=', 'division_outputs.idpaps')
            ->where('idmfo', $request->idmfo)
            ->groupBy('program_and_projects.id')
            ->get();

        return $paps;
    }
    public function update(Request $request)
    {
        // dd($request->all());
        $data = $this->model->findOrFail($request->id);
        // dd($data);
        $data->update([
            'output' => $request->output,
            'office_accountable' => $request->office_accountable,
            'monitoring' => $request->monitoring,
            'prescribed_period' => $request->prescribed_period,
            'quality1' => $request->quality1,
            'quality2' => $request->quality2,
            'quality3' => $request->quality3,
            'efficiency1' => $request->efficiency1,
            'efficiency2' => $request->efficiency2,
            'efficiency3' => $request->efficiency3,
            'timeliness' => $request->timeliness,
            'quantity' => $request->quantity,
        ]);

        return redirect('/divisions/' . $request->idpaps)
            ->with('message', 'Division Output updated');
    }
    public function destroy(Request $request)
    {

        $data = $this->model->findOrFail($request->id);
        // dd($data);
        $idpaps = $data->idpaps;
        $data->delete();
        return redirect('/divisions/' . $idpaps)->with('warning', 'Division Deleted');
    }

    public function loadDivisions(Request $request, $FFUNCCOD) {}
}
