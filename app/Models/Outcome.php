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
        'oc_desc'
    ];
}
