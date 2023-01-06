<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgramAndProject extends Model
{
    use HasFactory;
    protected $connection = "mysql";
    protected $table='program_and_projects';
    protected $fillable = [
        'paps_desc',
        'tyear',
        'FRAOTYPE',
        'FRAODESC',
        'FALLTCOD',
        'FFUNCCOD',
        'FFUNDCOD',
        'idsource',
        'idappttype',
        'idprogram',
        'aipcode',
        'date_created',
        'excludetag',
        'previd',
        'idpaps',
        'idmfo'
    ];
}
