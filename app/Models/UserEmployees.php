<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserEmployees extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='user_employees';
    protected $guarded=['id'];
}
