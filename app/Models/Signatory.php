<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Signatory extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='signatories';
    protected $fillable = [
        'name',
        'position',
        'acted',
        'revision_plan_id',
    ];
}
