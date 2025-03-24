<?php

namespace App\Http\Controllers;

use App\Models\ExpectedRevisedOutcome;
use App\Models\StrategyProject;
use Illuminate\Http\Request;

class ExpectedRevisedOutcomeController extends Controller
{
    //
    protected $model;
    public function __construct(ExpectedRevisedOutcome $model)
    {
        $this->model = $model;
    }
    public function index(Request $request, $id, $type)
    {
        dd($id);
        if ($type == 'activity') {
        } else if ($type == 'strategy') {
        }
    }
    public function strategyOutcome($id)
    {
        $strat_proj = StrategyProject::where('id', $id)->get();
        return [];
    }
}
