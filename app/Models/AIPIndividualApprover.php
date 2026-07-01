<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AIPIndividualApprover extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='aip_individual_approvers';
    protected $guarded = [
        'id'
    ];
}
