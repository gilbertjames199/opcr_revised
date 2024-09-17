<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToIndividualFinalOutput4 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('individual_final_outputs', function (Blueprint $table) {
            $table->integer('quantity_type')->default('1')->nullable()->after('concerned_indiviual')->comment('1 for to be rated, 2 not to be rated');
            $table->integer('quality_error')->default('1')->nullable()->after('quantity_type')->comment('1=error based: 2=feedback: 3=not rated: 4=accuracy rule');
            $table->integer('time_based')->default('1')->nullable()->after('quality_error')->comment('1=based on time spent:  2=deadline: 3= not rated');
            $table->integer('time_range_code')->default('1')->nullable()->after('quality_error')->comment('Based on time range table');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('individual_final_outputs', function (Blueprint $table) {
            //
        });
    }
}
