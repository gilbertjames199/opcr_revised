<?php

namespace App\Http\Controllers;

use App\Models\Appropriation;
use App\Models\ProgramAndProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AppropriationController extends Controller
{
    protected $appropriation, $paps;
    public function __construct(Appropriation $appropriation, ProgramAndProject $paps)
    {
        $this->appropriation=$appropriation;
        $this->paps = $paps;
    }
    public function index(Request $request, $idpaps){
        //dd("idpaps: ".$request->idpaps);

        $data = $this->appropriation->where('idpaps', $idpaps)->paginate(10);
        $paps = $this->paps->find($idpaps)->first();
        $idpaps = $request->query('idpaps');

        // Handle the request and any necessary logic based on $idpaps

        // Redirect the user to 'Appropriations/Index' using return inertia
        return inertia('Appropriations/Index',[
            "data"=>$data,
            "paps"=>$paps,
            "filters" => $request->only(['search']),
            'can'=>[
                'can_access_validation' => Auth::user()->can('can_access_validation',User::class),
                'can_access_indicators' => Auth::user()->can('can_access_indicators',User::class)
            ],
        ]);
    }
}
