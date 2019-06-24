import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StaticSite from './staticHTMLsite'
import LoginPage from './loginpages'
import axios from 'axios'

function Static() {
  return <StaticSite
  />;
}

function Register() {
  return (
    <Register 
    />
  );
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
                <Link to="/register/">Register</Link>
              </li>
              <li>
                <Link to="/login/">Login</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Static} />
          <Route path="/login" exact component={LoginPage} />
          
        </div>
      </Router>
    );
  }
}
export default App;
