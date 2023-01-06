<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProgramAndProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('program_and_projects', function (Blueprint $table) {
            $table->id();
            $table->string('paps_desc')->nullable();
            $table->integer('tyear',11)->nullable();
            $table->string('FRAOTYPE',1)->nullable();
            $table->string('FRAODESC',200)->nullable();
            $table->string('FALLTCOD',3)->nullable();
            $table->string('FFUNCCOD',6)->nullable();
            $table->string('FFUNDCOD',3)->nullable();
            $table->integer('idsource',11)->nullable();
            $table->integer('idappttype',11)->nullable();
            $table->integer('idprogram',11)->nullable();
            $table->string('aipcode',30)->nullable();
            $table->timestamp('date_created')->nullable();
            $table->integer('excludetag',11)->nullable();
            $table->integer('previd',11)->nullable();
            $table->string('idpaps')->nullable();
            $table->string('idmfo')->nullable();
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
        Schema::dropIfExists('program_and_projects');
    }
}
