import { authHeader } from '../helpers/auth-header';
import axios from 'axios';

export const userService = {
    login,
    logout,
    registerHacker,
    getAll
};

function login(email, password) {
    var request = {
        email: email,
        password: password
    }
    return new Promise((resolve, reject) => {
      axios.post('http://127.0.0.1:8080/login', request)
      .then( (response) => {
        if (response.data){
          response.data.email = email
          localStorage.setItem('goldenHackLogin', JSON.stringify(response.data))
        }
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      })
    })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://127.0.0.1:8080/users', requestOptions).then(handleResponse);
}

function registerHacker(firstname,lastname,email,password,phonenumber,diet,size,pronoun,dob){
  var request = {
    'first_name': firstname,
    'last_name': lastname,// string
    'email': email,// string
    'password': password,// string
    'account_confirmed': false,// bool
    'role': 1,// string, one of Hacker, Exec or Sponsor{1, 2, 3}
    'is_applied': false,// bool
    'confirmed_attending': false,// bool
    'phone_number': phonenumber,// string
    'dietary_restrictions': diet,// array of strings
    'shirt_size': size,// string, one of S, M, L, XL
    'pronoun': pronoun,// string
    'dob': dob// date
  }
  return new Promise((resolve, reject) => {
    axios.post('http://127.0.0.1:8080/login', request)
    .then( (response) => {
      if (response.data){
        response.data.email = email
        localStorage.setItem('goldenHackLogin', JSON.stringify(response.data))
      }
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    })
  })
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}