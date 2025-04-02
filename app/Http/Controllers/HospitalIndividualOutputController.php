<?php

namespace App\Http\Controllers;

use App\Models\hospital_individual_output;
use App\Models\hospital_section_output;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HospitalIndividualOutputController extends Controller
{
    //
    protected $model;
    public function __construct(hospital_individual_output $model)
    {
        $this->model = $model;
    }

    public function index(Request $request, $idHSPCR)
    {
        // dd($idHSPCR);
        $HSPCR = hospital_section_output::where('id', $idHSPCR)->first();
        // dd($HDPCR);
        $data = $this->model
            ->where('idhspcr', $idHSPCR)
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            ->withQueryString();
        // dd($data);
        return inertia('HPCR_Section/Index', [
            "data" => $data,
            "HSPCR" => $HSPCR,
            "idhspcr" => $idHSPCR,
            'can' => [
                'can_access_validation' => Auth::user()->can('can_access_validation', User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators', User::class)
            ],
        ]);
    }
}
