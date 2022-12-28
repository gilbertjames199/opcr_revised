<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Accomplishment extends Model
{
    use HasFactory;

    protected $fillable = [
        'idtarget',
        'accomplishment_qty',
        'actual_period_from',
        'actual_period_to',
        'actual_expenditure',
        'facilitating_timeliness',
        'facilitating_competency',
        'facilitating_logistics',
        'deterring_timeliness',
        'deterring_concerns',
        'deterring_logistics',
        'concerns_timeliness',
        'concerns_competency',
        'concerns_logistics',
        'new_strategy',
        'remarks',
        'date_accomplished_from',
        'date_accomplished_to',
        'validated_status',
        'validated_remarks',
        'validated_date'
    ];


}
