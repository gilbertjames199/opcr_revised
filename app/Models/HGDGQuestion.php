<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HGDGQuestion extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='h_g_d_g_questions';
    protected $fillable = [
        'question_number',
        'question',
        'checklist_id',
    ];
}
