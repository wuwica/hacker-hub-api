<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id')->unqiue();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->boolean('account_confirmed')->default(false);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->enum('role', [
                'hacker',
                'exec',
                'sponsor-1',
                'sponsor-2',
                'sponsor-3',
                'sponsor-4',
                'sponsor-5'
                ])->default('hacker');
            $table->string('phone_number');
            $table->json('dietary_restrictions')->default(null);
            $table->enum('shirt_size', ['S', 'M', 'L', 'XL']);
            $table->string('pronoun');
            $table->date('dob');
            $table->string('team')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
