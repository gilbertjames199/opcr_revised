<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIndividualFinalOutputsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('individual_final_outputs', function (Blueprint $table) {
            $table->id();
            $table->integer('ipcr_code');
            $table->integer('idmfo');
            $table->integer('idsubmfo');
            $table->integer('id_div_output');
            $table->text('individual_output');
            $table->text('performance_measure');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('individual_final_outputs');
    }
}
