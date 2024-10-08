<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appropriation extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='appropriations';
    protected $guarded = [];

    public function paps(){
        return $this->hasOne(ProgramAndProject::class, 'id', 'idpaps');
    }
}
