<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHGDGScoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('h_g_d_g_scores', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idppa');
            $table->bigInteger('question_id');
            $table->bigInteger('user_id');
            $table->decimal('score',12,2);
            $table->string('result_comment');
            $table->string('FFUNCCOD');
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
        Schema::dropIfExists('h_g_d_g_scores');
    }
}
