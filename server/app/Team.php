<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $table = 'Team';

    protected $fillable = [
        'team_name', // must be unique
        'members', // array of users (id's) that belong to the team
        'table_number'
    ];

    public $timestamps = false;

    protected $casts = [
        'members' => 'array'
    ];
}
