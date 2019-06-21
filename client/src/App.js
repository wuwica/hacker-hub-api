import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StaticSite from './staticHTMLsite'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8080',
  timeout: 1000,
  headers: {"Content-Type": "application/x-www-form-urlencoded",}
});

function Index() {
  return <StaticSite></StaticSite>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class App extends React.Component {
  componentDidMount(){
    axios.post('http://127.0.0.1:8080/login', {
      email: 'sponsor@sponsor.com',
      password: 'sponsor'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  render(){
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          
        </div>
      </Router>
    );
  }
}
export default App;
