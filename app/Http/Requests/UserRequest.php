<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'account_confirmed' => 'nullable',
            'role' => 'required', // make required
            'is_applied' => 'nullable',
            'confirmed_attending' => 'nullable',
            'phone_number' => 'required',
            'dietary_restrictions' => 'nullable',
            'shirt_size' => 'required',
            'pronoun' => 'required',
            'dob' => 'required',
            'team' => 'nullable',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'email.unique' => 'Email already in use',
            // 'body.required'  => 'A message is required',
        ];
    }
}
