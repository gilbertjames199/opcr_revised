<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MajorFinalOutput extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='major_final_outputs';
    protected $fillable = [
        'mfo_desc',
        'idinteroutcome',
        'FFUNCCOD'
    ];
    public static function rules(){
        return [
            'mfo_desc'=> 'required',
            'idinteroutcome'=>'required|numeric',
            'FFUNCCOD'=>'required|numeric',
        ];
    }

    public static function errorMessages(){
        return [
            'mfo_desc.required'=> 'The MFO description field is required',
            'idinteroutcome.required'=>'The intermediate outcomes description field is required',
            'FFUNCCOD.required'=>'The office code field is required',
            'FFUNCCOD.numeric'=>'Office code must be a number.',
        ];
    }
}
