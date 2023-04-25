<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HGDG_Checklist extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='h_g_d_g__checklists';
    protected $fillable = [
        'box_number',
        'subsector_id',
    ];
}
