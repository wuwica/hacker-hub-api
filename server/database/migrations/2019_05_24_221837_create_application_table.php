<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateApplicationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Make all the fields nullable so that a user can save responses (even if the required fields aren't filled)
        // without submitting
        Schema::create('Applications', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id');
            $table->enum('is_accepted', [
                'No',
                'Yes',
                'Maybe'
            ])->default('No');
            $table->boolean('is_submitted');
            $table->string('school');
            $table->enum('degree_type', [
                'Undergraduate',
                'Graduate',
                'High school',
                'Other'
            ]);
            $table->string('graduation_year'); // enforce year
            $table->string('fields_of_study'); // make into an array
            $table->enum('gender', [
                'Female',
                'Male',
                'Other'
            ]);
            $table->enum('ethnicity', [
                'A',
                'B',
                'C',
                'D'
            ]);
            $table->string('github_url')->nullable();
            $table->string('linkedin_url')->nullable();
            $table->string('personal_url')->nullable();
            $table->string('other_links')->nullable();
            $table->string('resume');
            $table->text('question_1');
            $table->text('question_2');
            $table->text('question_3');

            // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Applications');
    }
}
