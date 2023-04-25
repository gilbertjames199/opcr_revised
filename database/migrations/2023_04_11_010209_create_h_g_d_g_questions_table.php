<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHGDGQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('h_g_d_g_questions', function (Blueprint $table) {
            $table->id();
            $table->string('question_number');
            $table->string('question');
            $table->bigInteger('checklist_id');
            $table->bigInteger('idquestion');
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
        Schema::dropIfExists('h_g_d_g_questions');
    }
}
