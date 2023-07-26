<?php

namespace App\Http\Controllers;

use App\Helpers\PaginationHelper;
use App\Models\Division;
use App\Models\DivisionOutput;
use App\Models\FFUNCCOD;
use App\Models\IndividualFinalOutput;
use App\Models\MajorFinalOutput;
use App\Models\SubMfo;
use Box\Spout\Reader\Common\Creator\ReaderEntityFactory;
use Carbon\Carbon;
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
                    'divisions.division_name1 AS division', 'division_outputs.output', 'major_final_outputs.mfo_desc',
                    'major_final_outputs.FFUNCCOD','sub_mfos.submfo_description'
                )
                ->leftjoin('division_outputs','division_outputs.id','individual_final_outputs.id_div_output')
                ->leftjoin('divisions','divisions.id','division_outputs.division_id')
                ->leftjoin('major_final_outputs','major_final_outputs.id', 'division_outputs.idmfo')
                ->leftjoin('sub_mfos','sub_mfos.id','individual_final_outputs.idsubmfo')
                ->orderBy('individual_final_outputs.ipcr_code')
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
        $divs = $this->division
                ->where('department_code',auth()->user()->department_code)
                ->get();
        //dd(auth()->user()->department_code);
        //$divs = $divs->whereIn('FFUNCCOD', $accessFFUNCCOD);

        //MFOs
        $mfos = $this->mfo->get();
        $mfos = $mfos->whereIn('FFUNCCOD', $accessFFUNCCOD);

        //subMFOs
        $submfos =$this->submfo
                    ->select('sub_mfos.id','sub_mfos.submfo_description','sub_mfos.idmfo')
                    ->join('major_final_outputs','major_final_outputs.id','sub_mfos.idmfo')
                    ->where('department_code',auth()->user()->department_code)
                    ->get();
        //dd($submfos);

        //DIVISION OUTPUTS
        $div_outputs =$this->div_output
                        ->select('division_outputs.id','division_outputs.output','division_outputs.output')
                        ->leftjoin('major_final_outputs','major_final_outputs.id', 'division_outputs.idmfo')
                        ->where('major_final_outputs.department_code',auth()->user()->department_code)
                        ->get();
        //dd($div_outputs);
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
        //ACCESS 147
        $idn = auth()->user()->recid;
        $access = DB::connection('mysql2')->table('accountaccess')
                        ->select(DB::raw('TRIM(accountaccess.ffunccod) AS a_ffunccod'))
                        ->join('systemusers','systemusers.recid','=','accountaccess.iduser')
                        ->where('systemusers.recid',$idn)
                        ->get();
        $accessFFUNCCOD = $access->pluck('a_ffunccod')->toArray();

        //************************ */

        //DIVISIONS
        $divs = $this->division
                ->where('department_code',auth()->user()->department_code)
                ->get();

        //MFOs
        $mfos = $this->mfo->get();
        $mfos = $mfos->whereIn('FFUNCCOD', $accessFFUNCCOD);

        //subMFOs
        //$idmfos = $mfos->pluck('id');
        $submfos =$this->submfo
                    ->select('sub_mfos.id','sub_mfos.submfo_description','sub_mfos.idmfo')
                    ->join('major_final_outputs','major_final_outputs.id','sub_mfos.idmfo')
                    ->where('department_code',auth()->user()->department_code)
                    ->get();

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
    public function importIPCR(Request $request){
        $date = Carbon::now();
        $dateTime = $date->format('Y-m-d');
        $file = $request->myfile;
        $validate = $request->validate([
            'myfile' => 'required|mimes:xlsx,csv',
        ]);
        if($validate){
            $fileName = $file->getClientOriginalName();
            $file->move(storage_path('app/public'), "file.xlsx");
            $reader = ReaderEntityFactory::createReaderFromFile(storage_path('app/public') . "file.xlsx");

            $reader->open(public_path() . "/storage/file.xlsx");

            $row_index_arr =[];
            foreach ($reader->getSheetIterator() as $sheet) {
                //dd("validate import");
                if($sheet->getIndex()===0){
                    foreach($sheet->getRowIterator() as $rowIndex => $row){
                        $cells = $row->getCells();
                        //$my_index = $rowIndex;
                        $ipcr_code = $cells[0]->getValue();
                        $mfo_desc = $cells[1]->getValue();
                        $submfo_desc = $cells[2]->getValue();
                        $div_output = $cells[3]->getValue();
                        $ind_output = $cells[4]->getValue();
                        $per = $cells[5]->getValue();
                        $concerned = $cells[6]->getValue();
                        $success = $cells[7]->getValue();
                        $dept_code = $cells[8]->getValue();
                        $dept = $cells[9]->getValue();
                        if($dept==="HOSPITALS"){
                            $FFUNCCOD_1 = "4421-1";
                            $FFUNCCOD_2 = "4421-2";
                            $FFUNCCOD_3 = "4421-3";
                            $FFUNCCOD_4 = "4421-4";
                            $FFUNCCOD="00";
                        }else{
                            $FFUNCCOD = $this->getFFUNCCOD($dept_code, $dept);
                            //$FFUNCCOD = $FFUNCCOD->pluck('FFUNCCOD');
                        }
                        if(!$FFUNCCOD){
                            $FFUNCCOD="00";
                        }
                        //$FFUNCCOD =$this->getFFUNCCOD($dept_code, $dept);
                        // if($dept_code==="-"){$dept_code="00";}
                        // if(!$FFUNCCOD){$FFUNCCOD="0";}
                        if($rowIndex>4){
                            if($dept==="HOSPITALS"){
                                $FFUNCCOD_1 = "4421-1";
                                $FFUNCCOD_2 = "4421-2";
                                $FFUNCCOD_3 = "4421-3";
                                $FFUNCCOD_4 = "4421-4";
                                $idmfo1=$this->saveMFO($mfo_desc, $dept_code, $FFUNCCOD_1);
                                $idmfo2=$this->saveMFO($mfo_desc, $dept_code, $FFUNCCOD_2);
                                $idmfo3=$this->saveMFO($mfo_desc, $dept_code, $FFUNCCOD_3);
                                $idmfo4=$this->saveMFO($mfo_desc, $dept_code, $FFUNCCOD_4);
                                $idsubmfo1 = $this->saveSubMFO($idmfo1, $submfo_desc);
                                $idsubmfo2 = $this->saveSubMFO($idmfo2, $submfo_desc);
                                $idsubmfo3 = $this->saveSubMFO($idmfo3, $submfo_desc);
                                $idsubmfo4 = $this->saveSubMFO($idmfo4, $submfo_desc);
                                $iddid1 = $this->saveDivisionOutput($idmfo1, $div_output);
                                $iddid2 = $this->saveDivisionOutput($idmfo2, $div_output);
                                $iddid3 = $this->saveDivisionOutput($idmfo3, $div_output);
                                $iddid4 = $this->saveDivisionOutput($idmfo4, $div_output);
                                $this->saveIndivOutput($ipcr_code, $idmfo1, $idsubmfo1,
                                        $iddid1,$ind_output, $per, $success, $concerned);
                                $this->saveIndivOutput($ipcr_code, $idmfo2, $idsubmfo2,
                                        $iddid2,$ind_output, $per, $success, $concerned);
                                $this->saveIndivOutput($ipcr_code, $idmfo3, $idsubmfo3,
                                        $iddid3,$ind_output, $per, $success, $concerned);
                                $this->saveIndivOutput($ipcr_code, $idmfo4, $idsubmfo4,
                                        $iddid4,$ind_output, $per, $success, $concerned);
                            }else{
                                $idmfo=$this->saveMFO($mfo_desc, $dept_code, $FFUNCCOD);
                                $idsubmfo = $this->saveSubMFO($idmfo, $submfo_desc);
                                $iddid = $this->saveDivisionOutput($idmfo, $div_output);
                                //saveIndivOutput($ipcr_code, $idmfo, $idsubmfo,
                                                // $id_div_output, $indiv, $perf, $success, $con)
                                $this->saveIndivOutput($ipcr_code, $idmfo, $idsubmfo,
                                        $iddid,$ind_output, $per, $success, $concerned);
                            }
                            $details =[
                                "index"=>$rowIndex,
                                "ipcr_code"=>$ipcr_code,
                                "dept_code"=>$dept_code,
                                "dept"=>$dept,
                                "FFUNCCOD"=>$FFUNCCOD,
                                "my_mfo"=>$mfo_desc
                            ];

                            array_push($row_index_arr, $details);
                        }

                    }
                }
            }
            return redirect('/individual/outputs')
                ->with('message','Division Output added');

        }

    }
    public function getFFUNCCOD($dept_code, $dept){
        $FFUNCCOD = FFUNCCOD::select('FFUNCCOD')->where("department_code", $dept_code)
                        ->first();
        if($FFUNCCOD){
            $FFUNCCOD = $FFUNCCOD->FFUNCCOD;
        }

        if($dept_code==="16"){
            $FFUNCCOD="8751";
        }
        if($dept_code==="17"){
            $FFUNCCOD="4490";
        }
        if(!$dept_code){
            $FFUNCCOD="00";
        }
        return $FFUNCCOD;
    }
    public function saveMFO($mfo_desc, $dept_code, $FFUNCCOD){
        $my_mfo = DB::table('major_final_outputs')
                    ->where("mfo_desc","=",$mfo_desc)
                    ->where("department_code", $dept_code)
                    ->get();
        if(!$my_mfo->count()){

            $mfo = new MajorFinalOutput;
            $mfo->department_code= $dept_code;
            $mfo->FFUNCCOD=$FFUNCCOD;
            $mfo->mfo_desc=$mfo_desc;
            $mfo->save();

        }
        $my_mfo = DB::table('major_final_outputs')
                    ->where("mfo_desc","=",$mfo_desc)
                    ->first();
        return $my_mfo->id;
    }
    public function saveSubMFO($idmfo, $submfo_desc){
        $my_submfo = DB::table("sub_mfos")
                        ->where("idmfo", $idmfo)
                        ->where("submfo_description", $submfo_desc)
                        ->first();

        if(!$my_submfo){

            $submfo = new SubMfo;
            $submfo->idmfo = $idmfo;
            $submfo->submfo_description = $submfo_desc;
            $submfo->save();

        }
        $my_submfo = DB::table("sub_mfos")
                        ->where("idmfo", $idmfo)
                        ->where("submfo_description", $submfo_desc)
                        ->first();
        //$my_submfo = SubMfo::get();

        return $my_submfo->id;
    }
    public function saveDivisionOutput($idmfo, $div_output){
        $my_div_output = DivisionOutput::where("idmfo", $idmfo)
                            ->where('output', $div_output)
                            ->first();
        if(!$my_div_output){
            $div_out = new DivisionOutput;
            $div_out->idmfo = $idmfo;
            $div_out->output = $div_output;
            $div_out->save();
        }
        $my_div_output = DivisionOutput::where("idmfo", $idmfo)
                            ->where('output', $div_output)
                            ->first();
        return $my_div_output->id;
    }
    public function saveIndivOutput($ipcr_code, $idmfo, $idsubmfo, $id_div_output, $indiv, $perf, $success, $con){
        $my_indiviudal = IndividualFinalOutput::where("ipcr_code", $ipcr_code)
                            ->where("idmfo", $idmfo)
                            ->where("idsubmfo", $idsubmfo)
                            ->where("id_div_output", $id_div_output)
                            ->where("individual_output", $indiv)
                            ->first();
        if(!$my_indiviudal){
            $ind = new IndividualFinalOutput;
            $ind->ipcr_code = $ipcr_code;
            $ind->idmfo = $idmfo;
            $ind->idsubmfo = $idsubmfo;
            $ind->id_div_output = $id_div_output;
            $ind->individual_output = $indiv;
            $ind->performance_measure = $perf;
            $ind->success_indicator = $success;
            $ind->concerned_indiviual = $con;
            $ind->save();
        }
        $my_indiviudal = IndividualFinalOutput::where("ipcr_code", $ipcr_code)
                            ->where("idmfo", $idmfo)
                            ->where("idsubmfo", $idsubmfo)
                            ->where("id_div_output", $id_div_output)
                            ->where("individual_output", $indiv)
                            ->first();
        //return $my_indiviudal->id;
    }
}
