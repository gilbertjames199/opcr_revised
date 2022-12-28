<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccomplishmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accomplishments', function (Blueprint $table) {
            $table->id();
            $table->string('idtarget')->nullable();
            $table->string('accomplishment_qty')->nullable();
            $table->string('actual_period_from')->nullable();
            $table->string('actual_period_to')->nullable();
            $table->string('actual_expenditure')->nullable();
            $table->string('facilitating_timeliness')->nullable();
            $table->string('facilitating_competency')->nullable();
            $table->string('facilitating_logistics')->nullable();
            $table->string('deterring_timeliness')->nullable();
            $table->string('deterring_concerns')->nullable();
            $table->string('deterring_logistics')->nullable();
            $table->string('concerns_timeliness')->nullable();
            $table->string('concerns_competency')->nullable();
            $table->string('concerns_logistics')->nullable();
            $table->string('new_strategy')->nullable();
            $table->string('remarks')->nullable();
            $table->date('date_accomplished_from')->nullable();
            $table->date('date_accomplished_to')->nullable();
            $table->string('validated_status')->nullable();
            $table->string('validated_remarks')->nullable();
            $table->date('validated_date')->nullable();
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
        Schema::dropIfExists('accomplishments');
    }
}
