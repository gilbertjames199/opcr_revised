<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Risk_manangement extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='risk_manangements';
    protected $fillable = [
        'possible_risk',
        'person_affected',
        'management',
        'revision_plan_id',
    ];
}
