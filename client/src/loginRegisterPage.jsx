import React from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import "./loginPage/login.css";
import {authHeader} from "./helpers/auth-header"
import LoginPage from "./loginPage/loginpages";
import RegisterPage from "./registerPage/registerpages";

class LoginRegisterPage extends React.Component {
  render() {
    return authHeader() ? (
      <Redirect to="/" />
    ) : 
    (
      <div className="LoginContainer">
        <div className="LoginCard"> 
        <Router>   
          <div id="LoginRegisterToggle">
            <Link className="nav-link" to="/login/">Login</Link>
            <Link className="nav-link" to="/register/">Register</Link>
          </div>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegisterPage} />
          </Router>
        </div>
      </div>
    );
  }
}


export default LoginRegisterPage;
