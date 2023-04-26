<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImplementationPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('implementation_plans', function (Blueprint $table) {
            $table->id();
            $table->string('aip_code')->nullable()->comment('AIP code of the activity');
            $table->bigInteger('idrev_plan')->comment('ID of the revision plan');
            $table->bigInteger('idactivity')->comment('Activity ID');
            $table->bigInteger('idstrategy')->comment('Strategy ID');
            $table->bigInteger('idissue')->comment('Gender Issues ID');
            $table->date('date_from')->comment('date from');
            $table->date('date_to')->comment('date to');
            $table->decimal('amount',12,2)->comment('Budget/cost of the implementation plan');
            $table->decimal('cc_adaptation',12,2)->comment('Budget/cost for climate change adaptation');
            $table->decimal('cc_migitagion',12,2)->comment('Budget/cost for climate change mitigation');
            $table->string('cc_topology')->comment('Climate Change Topology Code');
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
        Schema::dropIfExists('implementation_plans');
    }
}
