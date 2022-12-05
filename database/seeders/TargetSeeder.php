<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Target;
use Carbon\Carbon;

class TargetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $date = Carbon::now();
        $dateTime = $date->format('Y-m-d');
        $idraao=[1,1,1,2,2,2,3,3,3,4,4,4];
        for($i=0;$i<12;$i++)
        {

            if($i%2 == "0"){
                $ontg="Yes";
            }elseif( $i%2 == "1"){
                $ontg="No";
            }

            DB::table('targets')->insert([
                'idraao' => $idraao[$i],
                'idooe' => '0',
                'idindicator' =>'1',
                'description' => 'Target Description -> '.$i,
                'brgy' =>'Poblacion',
                'municipality' =>'NABUNTURAN (Capital)',
                'planned_period_from'=>$dateTime,
                'planned_period_to'=>$dateTime,
                'planned_budget'=>'100000',
                'target_qty'=>'100000',
                'onsite_tag'=>$ontg,
                'created_at' => $dateTime,
                'updated_at' => $dateTime,
            ]);
        }

    }
}
