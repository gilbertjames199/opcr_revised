<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MunicipalitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::disableQueryLog();
        $chunk = array_chunk($this->data(), 1000);
        foreach ($chunk as $key => $value) {
            DB::table('municipalities')->insert($value);

        }
    }

    public function data(){
        return array(
            array('id' => '1284', 'psgcCode' => '118201000', 'citymunDesc' => 'COMPOSTELA', 'regDesc' => '11', 'provCode' => '1182', 'citymunCode' => '118201'),
            array('id' => '1285', 'psgcCode' => '118202000', 'citymunDesc' => 'LAAK (SAN VICENTE)', 'regDesc' => '11', 'provCode' => '1182', 'citymunCode' => '118202'),
            array('id' => '1286', 'psgcCode' => '118203000', 'citymunDesc' => 'MABINI (DOÑA ALICIA)', 'regDesc' => '11', 'provCode' => '1182', 'citymunCode' => '118203'),
            array('id' => '1287', 'psgcCode' => '118204000', 'citymunDesc' => 'MACO', 'regDesc' => '11', 'provCode' => '1182', 'citymunCode' => '118204'),
            array('id' => '1288', 'psgcCode' => '118205000', 'citymunDesc' => 'MARAGUSAN (SAN MARIANO)', 'regDesc' => '11', 'provCode' => '1182', 'citymunCode' => '118205'),
            array('id' => '1289', 'psgcCode' => '118206000', 'citymunDesc' => 'MAWAB', 'regDesc' => '11', 'provCode' => '1182', 'citymunCode' => '118206'),
            array('id' => '1290', 'psgcCode' => '118207000', 'citymunDesc' => 'MONKAYO', 'regDesc' => '11', 'provCode' => '1182', 'citymunCode' => '118207'),
            array('id' => '1291', 'psgcCode' => '118208000', 'citymunDesc' => 'MONTEVISTA', 'regDesc' => '11', 'provCode' => '1182', 'citymunCode' => '118208'),
            array('id' => '1292', 'psgcCode' => '118209000', 'citymunDesc' => 'NABUNTURAN (Capital)', 'regDesc' => '11', 'provCode' => '1182', 'citymunCode' => '118209'),
            array('id' => '1293', 'psgcCode' => '118210000', 'citymunDesc' => 'NEW BATAAN', 'regDesc' => '11', 'provCode' => '1182', 'citymunCode' => '118210'),
            array('id' => '1294', 'psgcCode' => '118211000', 'citymunDesc' => 'PANTUKAN', 'regDesc' => '11', 'provCode' => '1182', 'citymunCode' => '118211'),
        );

    }
}
