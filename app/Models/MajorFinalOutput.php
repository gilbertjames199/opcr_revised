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
        'idstrategy'
    ];
}
