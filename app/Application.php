<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $table = 'Applications';

    // Add timestamps!
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'is_accepted', // one of yes, no, maybe, default no
        'is_submitted', // bool, default false
        // 'is_saved', // bool default
        'school',
        'degree_type', // one of undergraduate, graduate, high school (?)
        'graduation_year',
        'fields_of_study', // array
        'gender', // enum, one of male, female, other
        'ethnicity', //
        'github_url',
        'linkedin_url',
        'personal_url',
        'other_links',
        'resume', // link to s3 bucket
        'question_1',
        'question_2',
        'question_3'
    ];
}
