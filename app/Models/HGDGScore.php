<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HGDGScore extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='budget_requirements';
    protected $fillable = [
        'idppa',
        'question_id',
        'score',
        'result_comment',
        'FFUNCCOD',
    ];
}
