<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    use HasFactory;
    protected $connection = "mysql2";
    protected $table = 'programs';
    protected $guarded = [
        'id',
    ];

    // public function raaohs()
    // {
    //     return $this->hasMany(RAAOHS::class, 'idprogram', 'recid');
    // }
}
