<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SuccessIndicator extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='success_indicators';
    protected $fillable = [
        'success_indicator',
        'idpaps',
    ];

}
