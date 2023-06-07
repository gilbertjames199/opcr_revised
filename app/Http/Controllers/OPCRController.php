<?php

namespace App\Http\Controllers;
use App\Models\FFUNCCOD;
use App\Models\AccountAccess;
use App\Models\rating;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class OPCRController extends Controller
{
    //
    protected $model;
    public function __construct(AccountAccess $model)
    {
        $this->model=$model;
    }

    public function index(Request $request){
        //dd('logframe');
        //dd(auth()->user()->recid);
        // $accounts = $this->model->where('iduser',auth()->user()->recid)
        //             ->with('func')->get();

        $functions =$this->model
                        ->select('ff.FFUNCCOD','FFUNCTION')
                        ->Join(DB::raw('fms.functions ff'),'ff.FFUNCCOD','=','accountaccess.ffunccod')
                        ->where('iduser',auth()->user()->recid)
                        ->get();
        //dd($functions);
        //dd($accounts); 1121
        //$functions = $accounts->pluck('func');
        //$fa = FFUNCCOD::where('FFUNCCOD','1121')->with('acc')->get();
        //dd($fa[0]->FFUNCCOD." gaccounce ".$accounts[0]->ffunccod);
        //dd($fa);
        return inertia('OPCR/Index', [
            "data"=>$functions,
        ]);
    }

    public function showopcr(Request $request, $FFUNCCOD){

        // $data = $this->model
        //         ->where('idpaps',$id)
        //         ->with('paps')
        //         ->orderBy('created_at', 'desc')
        //         ->paginate(10)
        //         ->withQueryString();
        // dd($FFUNCCOD);
        $timelinessSub = "SELECT idpaps, GROUP_CONCAT(timeliness SEPARATOR ',') as timeliness
                     FROM `timelinesses`
                     GROUP by idpaps";
        $ratingSub = "SELECT
                    idpaps,
                    GROUP_CONCAT(numerical_rating SEPARATOR ',') as numerical_rating ,
                    GROUP_CONCAT(adjectival_rating SEPARATOR ',') as adjectival_rating,
                    GROUP_CONCAT(efficiency_quantity SEPARATOR ',') as efficiency_quantity
                    FROM `ratings` GROUP BY idpaps";

        $qualitySub = "SELECT
                    idpaps,
                    GROUP_CONCAT(quality SEPARATOR ',') as qualities
                    FROM `qualities` GROUP BY idpaps";
        $functions = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->get();
        $office=$functions->pluck('FFUNCTION');
        $results = DB::table('major_final_outputs')
        ->select(
            'major_final_outputs.id',
            'major_final_outputs.mfo_desc',
            'program_and_projects.id',
            'program_and_projects.paps_desc',
            'outputs.Outputs',
            'performances.performance',
            'success_indicators.success_indicator',
            'office_accountables.office_accountable',
            'ratings.numerical_rating',
            'ratings.adjectival_rating',
            'ratings.efficiency_quantity',
            'rating_remarks.rating_remarks',
            'qualities.qualities',
            'quality_remarks.quality_remarks',
            'timelinesses.timeliness',
            'timeliness_remarks.timeliness_remarks',
            'monitorings.monitoring'
        )
        // ->selectRaw("
        // GROUP_CONCAT(DISTINCT ratings.numerical_rating SEPARATOR ',') AS numerical_ratings
        // ")
            ->leftJoin('program_and_projects', 'major_final_outputs.id', '=', 'program_and_projects.idmfo')
            ->leftJoin('outputs', 'program_and_projects.id', '=', 'outputs.idpaps')
            ->leftJoin('performances', 'program_and_projects.id', '=', 'performances.idpaps')
            ->leftJoin('success_indicators', 'program_and_projects.id', '=', 'success_indicators.idpaps')
            ->leftJoin('office_accountables', 'program_and_projects.id', '=', 'office_accountables.idpaps')
            ->leftJoinSub($ratingSub, 'ratings', 'program_and_projects.id', '=', 'ratings.idpaps')
            ->leftJoin('rating_remarks', 'program_and_projects.id', '=', 'rating_remarks.idpaps')
            ->leftJoinSub($qualitySub, 'qualities', 'program_and_projects.id', '=', 'qualities.idpaps')
            ->leftJoin('quality_remarks', 'program_and_projects.id', '=', 'quality_remarks.idpaps')
            ->leftJoinSub($timelinessSub, 'timelinesses', 'program_and_projects.id', '=', 'timelinesses.idpaps')
            ->leftJoin('timeliness_remarks', 'program_and_projects.id', '=', 'timeliness_remarks.idpaps')
            ->leftJoin('monitorings', 'program_and_projects.id', '=', 'monitorings.idpaps')
            // ->leftJoinSub($timelinessSub, 'timelinesses', 'program_and_projects.id', '=', 'timelinesses.idpaps')
            ->get()
            ->groupBy('mfo_desc');
            // dd($results);
            foreach ($results as $key => $row) {

                foreach ($row as $key => $value) {
                    // dd($value['numerical_ratings']);
                    $value->numerical_rating = explode(',',$value->numerical_rating);
                    $value->adjectival_rating = explode(',',$value->adjectival_rating);
                    $value->efficiency_quantity = explode(',',$value->efficiency_quantity);
                    $value->qualities = explode(',',$value->qualities);
                    $value->timeliness = explode(',', $value->timeliness);
                }
            }

            // dd($results);
            // dd($results);
            // ->map(function($item){
            //     $rating = rating::where('idpaps',$item->id)->get();
            //     return [];
            // });
        return inertia('OPCR/OPCR', [
            "data"=>$results,
            "FFUNCCOD"=>$office,
        ]);
    }
    public function OPCRprint(Request $request, $FFUNCCOD){
        $timelinessSub = "SELECT idpaps, GROUP_CONCAT(timeliness SEPARATOR ',') as timeliness
            FROM `timelinesses`
            GROUP by idpaps";
        $ratingSub = "SELECT
            idpaps,
            GROUP_CONCAT(numerical_rating SEPARATOR ',') as numerical_rating ,
            GROUP_CONCAT(adjectival_rating SEPARATOR ',') as adjectival_rating,
            GROUP_CONCAT(efficiency_quantity SEPARATOR ',') as efficiency_quantity
            FROM `ratings` GROUP BY idpaps";

        $qualitySub = "SELECT
            idpaps,
            GROUP_CONCAT(quality SEPARATOR ',') as qualities
            FROM `qualities` GROUP BY idpaps";
        $functions = FFUNCCOD::where('FFUNCCOD', $FFUNCCOD)->get();
        $office=$functions->pluck('FFUNCTION');
        $results = DB::table('major_final_outputs')
            ->select(
                'major_final_outputs.id',
                'major_final_outputs.mfo_desc',
                'program_and_projects.id',
                'program_and_projects.paps_desc',
                'outputs.Outputs',
                'performances.performance',
                'success_indicators.success_indicator',
                'office_accountables.office_accountable',
                'ratings.numerical_rating',
                'ratings.adjectival_rating',
                'ratings.efficiency_quantity',
                'rating_remarks.rating_remarks',
                'qualities.qualities',
                'quality_remarks.quality_remarks',
                'timelinesses.timeliness',
                'timeliness_remarks.timeliness_remarks',
                'monitorings.monitoring'
            )
            // ->selectRaw("
            // GROUP_CONCAT(DISTINCT ratings.numerical_rating SEPARATOR ',') AS numerical_ratings
            // ")
            ->leftJoin('program_and_projects', 'major_final_outputs.id', '=', 'program_and_projects.idmfo')
            ->leftJoin('outputs', 'program_and_projects.id', '=', 'outputs.idpaps')
            ->leftJoin('performances', 'program_and_projects.id', '=', 'performances.idpaps')
            ->leftJoin('success_indicators', 'program_and_projects.id', '=', 'success_indicators.idpaps')
            ->leftJoin('office_accountables', 'program_and_projects.id', '=', 'office_accountables.idpaps')
            ->leftJoinSub($ratingSub, 'ratings', 'program_and_projects.id', '=', 'ratings.idpaps')
            ->leftJoin('rating_remarks', 'program_and_projects.id', '=', 'rating_remarks.idpaps')
            ->leftJoinSub($qualitySub, 'qualities', 'program_and_projects.id', '=', 'qualities.idpaps')
            ->leftJoin('quality_remarks', 'program_and_projects.id', '=', 'quality_remarks.idpaps')
            ->leftJoinSub($timelinessSub, 'timelinesses', 'program_and_projects.id', '=', 'timelinesses.idpaps')
            ->leftJoin('timeliness_remarks', 'program_and_projects.id', '=', 'timeliness_remarks.idpaps')
            ->leftJoin('monitorings', 'program_and_projects.id', '=', 'monitorings.idpaps')
            // ->leftJoinSub($timelinessSub, 'timelinesses', 'program_and_projects.id', '=', 'timelinesses.idpaps')
            ->get()
            ->groupBy('mfo_desc');
            // dd($results);
        foreach ($results as $key => $row) {

            foreach ($row as $key => $value) {
                // dd($value['numerical_ratings']);
                $value->numerical_rating = explode(',',$value->numerical_rating);
                $value->adjectival_rating = explode(',',$value->adjectival_rating);
                $value->efficiency_quantity = explode(',',$value->efficiency_quantity);
                $value->qualities = explode(',',$value->qualities);
                $value->timeliness = explode(',', $value->timeliness);
            }
        }
        // dd($results);
        // dd($results);
        return $results;
    }

}
