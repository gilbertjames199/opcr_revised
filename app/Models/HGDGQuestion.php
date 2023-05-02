<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HGDGQuestion extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='hgdg_questions';
    protected $fillable = [
        'question_number',
        'question',
        'checklist_id',
    ];
}
