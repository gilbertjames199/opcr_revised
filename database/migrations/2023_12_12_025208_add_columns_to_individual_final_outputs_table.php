<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToIndividualFinalOutputsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('individual_final_outputs', function (Blueprint $table) {
            $table->string('activity')->nullable()->after('time_based');
            $table->string('verb')->nullable()->after('activity');
            $table->string('error_feedback')->nullable()->after('verb');
            $table->string('within')->nullable()->after('error_feedback');
            $table->string('unit_of_time')->nullable()->after('within');
            $table->string('concatenate')->nullable()->after('unit_of_time');
            $table->string('from_excel')->nullable()->after('concatenate');
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
