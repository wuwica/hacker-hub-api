import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StaticSite from './staticHTMLsite'
import LoginPage from './loginPage/loginpages'
import RegisterPage from './registerPage/registerpages'

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
          <Route path="/register" exact component={RegisterPage} />
          
        </div>
      </Router>
    );
  }
}
export default App;
