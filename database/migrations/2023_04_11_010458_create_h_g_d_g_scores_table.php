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
            $table->bigInteger('idrevplan')->comment('Revision Plan ID');
            $table->bigInteger('question_id')->comment(' Question ID');
            $table->bigInteger('user_id')->comment('User ID');
            $table->decimal('score',12,2)->comment('Item Score');
            $table->string('result_comment')->comment('Evaluator\'s comment');
            $table->string('FFUNCCOD')->comment('Office Code');
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
