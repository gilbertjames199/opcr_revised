<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClimateChangeTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('climate_change_tags', function (Blueprint $table) {
            $table->id();
            $table->string('code')->comment('CCET Code');
            $table->string('activity')->comment('Activity Description');
            $table->string('strategic_priority')->comment('Strategic priority');
            $table->string('sub_priority')->comment('Sub priority');
            $table->string('instrument_of_delivery')->comment('Instrument of delivery');
            $table->string('type')->comment('Indicate adaptation or mitigation');
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
        Schema::dropIfExists('climate_change_tags');
    }
}
