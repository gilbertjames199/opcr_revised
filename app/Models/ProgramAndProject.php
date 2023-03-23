<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgramAndProject extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='program_and_projects';
    protected $fillable = [
        'paps_desc',
        'plan_period_from',
        'plan_period_to',
        'plan_amount_year1',
        'plan_amount_year2',
        'plan_amount_year3',
        'plan_amount_year4',
        'plan_amount_year5',
        'plan_amount_year6',
        'FFUNCCOD',
        'aipcode',
        'idmfo',
    ];
    public static function rules(){
        return [
            'paps_desc'=> 'required',
            'plan_period_from'=> 'required|numeric',
            'plan_period_to'=> 'required|numeric',
            'plan_amount_year1'=> 'required|numeric',
            'plan_amount_year2'=> 'required|numeric',
            'plan_amount_year3'=> 'required|numeric',
            'plan_amount_year4'=> 'required|numeric',
            'plan_amount_year5'=> 'required|numeric',
            'plan_amount_year6'=> 'required|numeric',
            'FFUNCCOD'=> 'required|numeric',
            //'aipcode'=> 'required',
            'idmfo'=> 'required|numeric',
        ];
    }

    public static function errorMessages(){
        return [
            'paps_desc.required' => 'The programs and projects description field is required',
            'plan_period_from.required' => 'The plan period (beginning) year is required',
            'plan_period_from.numeric' => 'The plan period (beginning) year must be a number',
            'plan_period_to.required' => 'The plan period (end) year is required',
            'plan_period_to.numeric' => 'The plan period (end) year must be a number',
            'plan_amount_year1.required' => 'The plan amount for year 1 is required',
            'plan_amount_year1.numeric' => 'The plan amount for year 1 must be a number',
            'plan_amount_year2.required' => 'The plan amount for year 2 is required',
            'plan_amount_year2.numeric' => 'The plan amount for year 2 must be a number',
            'plan_amount_year3.required' => 'The plan amount for year 3 is required',
            'plan_amount_year3.numeric' => 'The plan amount for year 3 must be a number',
            'plan_amount_year4.required' => 'The plan amount for year 4 is required',
            'plan_amount_year4.numeric' => 'The plan amount for year 4 must be a number',
            'plan_amount_year5.required' => 'The plan amount for year 5 is required',
            'plan_amount_year5.numeric' => 'The plan amount for year 5 must be a number',
            'plan_amount_year6.required' => 'The plan amount for year 6 is required',
            'plan_amount_year6.numeric' => 'The plan amount for year 6 must be a number',
            'FFUNCCOD.required' => 'The office/department code is required',
            'FFUNCCOD.numeric' => 'The office/department must be a number',
            'idmfo.required' => 'The MFO is required',
            'idmfo.numeric' => 'The MFO must be a number',
        ];
    }
}
