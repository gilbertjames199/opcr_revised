<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\ImplementationPlan;
use App\Models\IntermediateOutcome;
use App\Models\MajorFinalOutput;
use App\Models\ProgramAndProject;
use App\Models\Strategy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StrategyController extends Controller
{
    protected $model;
    public function __construct(Strategy $model)
    {
        //$this->middleware(['auth','verified']);
        $this->model = $model;
    }
    public function index(Request $request, $id, $ismfo)
    {
        // dd($id);
        $data = [];

        if ($ismfo == 1) {
            //dd("true: ".$ismfo);
            $data = $this->model
                ->where('idmfo', $id)
                ->with('mfos')
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();
        } else {
            $ismfo = 0;
            //dd("false: ".$ismfo);
            $data = $this->model
                ->where('idpaps', $id)
                ->with('paps')
                ->orderBy('created_at', 'desc')
                ->paginate(10)
                ->withQueryString();
        }


        return inertia('Strategies/Index', [
            "data" => $data,
            "idpaps" => $id,
            "ismfo" => $ismfo,
            "filters" => $request->only(['search']),
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }


    public function create(Request $request, $id, $ismfo)
    {
        $mfos = MajorFinalOutput::get();
        $paps = ProgramAndProject::get();
        $idpaps = 0;
        $idmfo = 0;
        if ($ismfo == 1) {
            $idmfo = $id;
        } else {
            $idpaps = $id;
        }
        //dd('$idmfo: '.$idmfo.'idpaps: '.$idpaps);
        return inertia('Strategies/Create', [
            'idpaps' => $idpaps,
            'idmfo' => $idmfo,
            'paps' => $paps,
            'mfos' => $mfos,
            'ismfo' => $ismfo,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }


    public function store(Request $request)
    {
        //dd($request);
        $ismfo = '0';

        $attributes = $request->validate([
            'idpaps' => 'required',
            'idmfo' => 'required',
            'description' => 'required',
        ]);
        $this->model->create($attributes);
        //$request->pass='';
        if ($request->idpaps == '0') {
            $ismfo = '1';
            return redirect('/strategies/' . $request->idmfo . '/' . $ismfo . '/strat/mfo')
                ->with('message', 'Outcome added');
        } else {
            $ismfo = '0';
            return redirect('/strategies/' . $request->idpaps . '/' . $ismfo . '/strat/mfo')
                ->with('message', 'Outcome added');
        }
    }


    public function show(Strategy $strategy)
    {
        //
    }


    public function edit(Request $request, $id, $idpaps, $ismfo)
    {
        $mfos = MajorFinalOutput::get();
        $paps = ProgramAndProject::get();
        $idpaps = 0;
        $idmfo = 0;
        if ($ismfo == 1) {
            $idmfo = $id;
        } else {
            $idpaps = $id;
        }
        $paps = ProgramAndProject::get();
        $data = $this->model->where('id', $id)->first([
            'id',
            'description',
            'idpaps'
        ]);

        return inertia('Strategies/Create', [
            "editData" => $data,
            "paps" => $paps,
            "idpaps" => $idpaps,
            'idmfo' => $idmfo,
            'mfos' => $mfos,
            'ismfo' => $ismfo,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }


    public function update(Request $request, Strategy $strategy)
    {
        $data = $this->model->findOrFail($request->id);
        //dd($request->plan_period);
        $data->update([
            'description' => $request->description,
            'idpaps' => $request->idpaps
        ]);

        return redirect('/strategies/' . $request->idpaps)
            ->with('message', 'Strategy updated');
    }


    public function destroy(Request $request, $id, $idpaps)
    {
        //dd('destroy strat');
        $strat = $this->model->where('id', $id)->first();
        //dd($strat->idpaps);
        $count_imp = ImplementationPlan::where('idstrategy', $id)->count();
        $count_act = Activity::where('strategy_id', $id)->count();
        $ismfo = "0";
        if ($strat->idpaps == "0") {
            $ismfo = "1";
        }
        $msg = "";
        $status = "";
        if ($count_imp > 0 || $count_act > 0) {
            $msg = "Unable to delete!";
            if ($count_imp > 0) {
                $msg = $msg . " \nDelete its child implementation plans first!";
            }
            if ($count_act > 0) {
                $msg = $msg . " \nDelete its child activities first!";
            }
            $status = "error";
        } else {
            $msg = "GAD Issue successfully deleted!";
            $status = "message";

            $data = $this->model->findOrFail($id);
            $data->delete();
        }
        //dd($request->raao_id);
        return redirect('/strategies/' . $idpaps . '/' . $ismfo . '/strat/mfo')->with($status, $msg);
    }
}
