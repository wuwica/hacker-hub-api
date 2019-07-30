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
      axios.post('http://127.0.0.1:8080/login', request).then(handleResponse)
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

function registerHacker(details){
  var request = {
    'first_name': details.firstname,
    'last_name': details.lastname,// string
    'email': details.email,// string
    'password': details.password,// string
    'account_confirmed': false,// bool
    'role': 1,// string, one of Hacker, Exec or Sponsor{1, 2, 3}
    'is_applied': false,// bool
    'confirmed_attending': false,// bool
    'phone_number': details.phonenumber,// string
    'dietary_restrictions': details.diet,// array of strings
    'shirt_size': details.size,// string, one of S, M, L, XL
    'pronoun': details.pronoun,// string
    'dob': details.dob// date
  }
  return new Promise((resolve, reject) => {
  axios.post('http://127.0.0.1:8080/register', request).then(handleResponse)
    .then( (response) => {
      if (response.data){
        response.data.email = details.email
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
  return new Promise((resolve,reject) => {
    const data = response;
    if (!response.statusText === 'ok') {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            logout();
            window.location.reload(true);
        }
        const error = (data && data.message) || response.statusText;
        reject(error);
    }
    resolve(data);
  });
}