<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IntermediateOutcome extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='intermediate_outcomes';
    protected $fillable = [
        'io_desc',
        'idoutcome'
    ];
}
