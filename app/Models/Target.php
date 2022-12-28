<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Target extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='targets';
    protected $fillable = [
        'idraao',
        'idooe',
        'idindicator',
        'description',
        'brgy',
        'municipality',
        'planned_period_from',
        'planned_period_to',
        'planned_budget',
        'target_qty',
        'onsite_tag',
        'target_qty1',
        'target_qty2',
        'target_qty3',
        'target_qty4'
    ];
    public function accomp()
    {
        return $this->hasMany(Accomplishment::class,'idtarget','id');
    }

}
