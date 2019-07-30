import React from "react";
import { userService } from "../services/user.service";
//import "./login.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      submitted: false,
      loading: false,
      failed: false,
      loggedIn: false
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = e => {
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
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          email <br />
          <input id="email" type="email" onChange={this.handleChange} />
          <br />
          password <br />
          <input id="password" type="password" onChange={this.handleChange} />
          <br />
          <input
            type="submit"
            value="Login"
            disabled={!this.validateForm() || this.state.submitted}
          />
          {this.state.loading && <div>loading</div>}
          {this.state.failed && <div>Failed</div>}
        </form>
      </div>
    );
  }
}

export default LoginPage;
