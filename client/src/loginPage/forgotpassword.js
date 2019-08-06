import React from "react";
import { userService } from "../services/user.service";

class ForgotPasswordPage extends React.Component {

    handleSubmit = e =>{
        
    e.preventDefault();

    this.setState({ submitted: true, failed: false });
    const { email, password} = this.state;

    // stop here if form is invalid
    if (!(email && password)) {
      return;
    }

    this.setState({ loading: true });
    userService
      .login(email, password)
      .then(() => {
        this.setState({
          submitted: false,
          loading: false,
          loggedIn: true,
          failed: false
        });
      })
      .catch(() => {
        this.setState({
          submitted: false,
          loading: false,
          failed: true
        });
      });
        //{this.props.match.params.token}

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Password:</h3>
                <input id="password" type="password" onChange={this.handleChange} />
                <h3>Confirm password:</h3>
                <input id="password2" type="password" onChange={this.handleChange} />  
                <input
                    type="submit"
                    value="Submit"
 //                   disabled={!this.validateForm() || this.state.submitted}
                />
            </form>
                
        );
    };

}
export default ForgotPasswordPage;
