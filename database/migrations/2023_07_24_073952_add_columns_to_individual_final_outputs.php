<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToIndividualFinalOutputs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('individual_final_outputs', function (Blueprint $table) {
            $table->text('success_indicator')->nullable()->after('performance_measure');
            $table->text('concerned_indiviual')->nullable()->after('success_indicator');
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
