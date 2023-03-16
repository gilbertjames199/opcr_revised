<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Outcome extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='outcomes';
    protected $fillable = [
        'plan_period',
        'oc_desc',
        'id_org_goals',
        'id_sec_goals',
        'id_sdg_goals',
        'id_cea',
        'id_sea',
        'id_ela',
        'id_rea',
        'FFUNCCOD'
    ];
}
