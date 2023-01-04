<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Strategy extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='strategies';
    protected $fillable = [
        'strat_desc',
        'idinteroutcome'
    ];
}
