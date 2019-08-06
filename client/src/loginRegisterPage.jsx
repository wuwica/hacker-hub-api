import React from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import "./loginPage/login.css";
import {authHeader} from "./helpers/auth-header"
import LoginPage from "./loginPage/loginpages";
import RegisterPage from "./registerPage/registerpages";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class LoginRegisterPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      login: authHeader(),
      value: this.props.match.url
    }
  }
  changeTab = (event,newValue) =>{
    this.setState({
      value: newValue
    });
  }

  render() {
    return Object.entries(this.state.login).length === 0 && this.state.login.constructor === Object ?  
    (
      <div className="LoginContainer">
        <div className="LoginCard"> 
        <Router>   
          <div id="LoginRegisterToggle">
            <Tabs onChange={this.changeTab} value={this.state.value} indicatorColor="primary" textColor="primary">
              <Tab value={'/login/'} label="Login" component={Link} to={"/login/"} />
              <Tab value={'/register/'} label="Register" component={Link} to={"/register/"}/>
            </Tabs>
          </div>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegisterPage} />
          </Router>
        </div>
      </div>
    ) : (
      <Redirect to="/" />
    ) ;
  }
}


export default LoginRegisterPage;
