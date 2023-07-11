<?php

namespace App\Http\Controllers;

use App\Helpers\PaginationHelper;
use App\Models\Division;
use App\Models\DivisionOutput;
use App\Models\IndividualFinalOutput;
use App\Models\MajorFinalOutput;
use App\Models\SubMfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IndividualFinalOutputController extends Controller
{
    protected $ifo, $submfo, $mfo, $division, $div_output;
    public function __construct(IndividualFinalOutput $ifo, SubMfo $submfo, Division $division, DivisionOutput $div_output, MajorFinalOutput $mfo)
    {
        $this->ifo = $ifo;
        $this->submfo = $submfo;
        $this->division = $division;
        $this->div_output = $div_output;
        $this->mfo = $mfo;
    }


    public function index(Request $request){
        //************************ */
        //ACCESS
        $idn = auth()->user()->recid;
        $access = DB::connection('mysql2')->table('accountaccess')
                        ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
                        ->join('systemusers','systemusers.recid','=','accountaccess.iduser')
                        ->where('systemusers.recid',$idn)
                        ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();

        //************************ */

        //DIVISIONS
        $divs = $this->division->get();
        $divs = $divs->whereIn('FFUNCCOD', $accessFFUNCCOD);

        //MFOs
        $mfos = $this->mfo->get();
        $mfos = $mfos->whereIn('FFUNCCOD', $accessFFUNCCOD);

        $data = IndividualFinalOutput::select('individual_final_outputs.ipcr_code','individual_final_outputs.id',
                    'individual_final_outputs.individual_output', 'individual_final_outputs.performance_measure',
                    'divisions.description AS division', 'division_outputs.output', 'major_final_outputs.mfo_desc',
                    'major_final_outputs.FFUNCCOD','sub_mfos.submfo_description'
                )
                ->join('division_outputs','division_outputs.id','individual_final_outputs.id_div_output')
                ->join('divisions','divisions.id','division_outputs.division_id')
                ->join('major_final_outputs','major_final_outputs.id', 'individual_final_outputs.idmfo')
                ->join('sub_mfos','sub_mfos.id','individual_final_outputs.idsubmfo')
                ->get();
        $result = $data->whereIn('FFUNCCOD', $accessFFUNCCOD);
        $showPerPage=10;
        $paginatedResult =PaginationHelper::paginate($result, $showPerPage);
        return inertia('IndividualOutputs/Index',[
            "data"=>$paginatedResult,
        ]);

    }
    public function create(Request $request){
        //ACCESS
        $idn = auth()->user()->recid;
        $access = DB::connection('mysql2')->table('accountaccess')
                        ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
                        ->join('systemusers','systemusers.recid','=','accountaccess.iduser')
                        ->where('systemusers.recid',$idn)
                        ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();

        //************************ */

        //DIVISIONS
        $divs = $this->division->get();
        $divs = $divs->whereIn('FFUNCCOD', $accessFFUNCCOD);

        //MFOs
        $mfos = $this->mfo->get();
        $mfos = $mfos->whereIn('FFUNCCOD', $accessFFUNCCOD);

        //subMFOs
        $submfos =$this->submfo->get();

        //DIVISION OUTPUTS
        $div_outputs =$this->div_output->get();
        return inertia('IndividualOutputs/Create',[
            "divisions"=>$divs,
            "mfos"=>$mfos,
            "div_outputs"=>$div_outputs,
            "submfos"=>$submfos
        ]);
    }
    public function store(Request $request){
        //dd($request);
        $attributes = $request->validate([
            'ipcr_code' => 'required',
            'idmfo' => 'required',
            'idsubmfo' => 'required',
            'id_div_output' => 'required',
            'individual_output' => 'required',
            'performance_measure' => 'required',
        ]);
        $this->ifo->create($attributes);
        return redirect('/individual/outputs')
                ->with('message','Division Output added');
    }
    public function edit(Request $request, $id){
        //ACCESS
        $idn = auth()->user()->recid;
        $access = DB::connection('mysql2')->table('accountaccess')
                        ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
                        ->join('systemusers','systemusers.recid','=','accountaccess.iduser')
                        ->where('systemusers.recid',$idn)
                        ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();

        //************************ */

        //DIVISIONS
        $divs = $this->division->get();
        $divs = $divs->whereIn('FFUNCCOD', $accessFFUNCCOD);

        //MFOs
        $mfos = $this->mfo->get();
        $mfos = $mfos->whereIn('FFUNCCOD', $accessFFUNCCOD);

        //subMFOs
        $submfos =$this->submfo->get();

        //DIVISION OUTPUTS
        $div_outputs =$this->div_output->get();

        //INDIVIDUAL FINAL OUTPUT
        $data = $this->ifo->where('id',$id)->first();

        $div_output_id =$data->id_div_output;

        $division_id =$this->div_output->where('id',$div_output_id)->first()->division_id;
        return inertia('IndividualOutputs/Create',[
            "divisions"=>$divs,
            "mfos"=>$mfos,
            "div_outputs"=>$div_outputs,
            "submfos"=>$submfos,
            "editData"=>$data,
            "divid"=>$division_id
        ]);
    }
    public function update(Request $request){
        //dd($request);
        $mifo = $this->ifo->find($request->id);
        $mifo->ipcr_code = $request->ipcr_code;
        $mifo->idmfo = $request->idmfo;
        $mifo->idsubmfo = $request->idsubmfo;
        $mifo->id_div_output = $request->id_div_output;
        $mifo->individual_output = $request->individual_output;
        $mifo->performance_measure = $request->performance_measure;
        $mifo->save();
        return redirect('/individual/outputs')
                ->with('message','Division Output updated');
    }
    public function destroy(Request $request, $id){

        $data = $this->ifo->findOrFail($id);
        $data->delete();
        //dd($request->raao_id);
        return redirect('/individual/outputs')->with('warning', 'IFO Deleted');
    }
}
