<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChiefExecutiveAgendaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('chief_executive_agenda', function (Blueprint $table) {
            $table->id();
            $table->longText('agenda_description');
            $table->date('yearfrom');
            $table->date('yearto');
            $table->string('rationale');
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
        Schema::dropIfExists('_chief_executive_agenda');
    }
}
