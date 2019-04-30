<?php

namespace App\Http\Repositories;

use App\User;
use SendGrid;
use SendGrid\Mail\Mail;

class EmailRepo
{
    // Send confirm account email
    public static function confirmAccount($userId)
    {
        $user = User::where('id', $userId)->get();

        $email = new Mail();
        $email->setFrom("noreply@thegoldenhack.ca", "The GoldenHack");
        $email->setSubject("Confirm Your Email");
        $email->addTo($user->email, $user->name());
        $email->addContent("text/plain", "Click this link to confirm your email!");
        // Generate links
        // Populate template

        $sendgrid = new SendGrid(env('SENDGRID_API_KEY'));
        try {
            $response = $sendgrid->send($email);
            print $response->statusCode() . "\n";
            print_r($response->headers());
            print $response->body() . "\n";
        } catch (Exception $e) {
            return response()->json('Caught exception: '. $e->getMessage());
        }
    }

    // Send reset password email
    public static function resetPassword($userId)
    {
        $user = User::where('id', $userId)->get();

        $email = new Mail();
        $email->setFrom("noreply@thegoldenhack.ca", "The GoldenHack");
        $email->setSubject("Confirm Your Email");
        $email->addTo($user->email, $user->name());
        $email->addContent("text/plain", "Click this link to reset your password!");
        // Generate links
        // Populate template

        $sendgrid = new SendGrid(env('SENDGRID_API_KEY'));
        try {
            $response = $sendgrid->send($email);
            print $response->statusCode() . "\n";
            print_r($response->headers());
            print $response->body() . "\n";
        } catch (Exception $e) {
            return response()->json('Caught exception: '. $e->getMessage());
        }
    }
}
