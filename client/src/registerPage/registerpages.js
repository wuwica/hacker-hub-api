import React from "react";
import { userService } from "../services/user.service";
import "../loginPage/login.css";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password2: "",
      submitted: false,
      loading: false,
      failed: "",
      loggedIn: false
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password2.length > 0
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ submitted: true, failed: "" });
    const { email, password, password2 } = this.state;

    var patt = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8}$");

    // stop here if form is invalid
    if (patt.test(password)){
      this.setState({ submitted: false, failed: "Password not secure enough" });
      return;
    }

    if (password !== password2){
      this.setState({ submitted: false, failed: "Password doesnt match" });
      return;
    }

    if (!(email && password)) {
      this.setState({ submitted: false, failed: "no password no email" });
      return;
    }

    this.setState({ loading: true });
    userService
      .registerHacker({
        email: this.state.email,
        password: this.state.password
      })
      .then(() => {
        this.setState({
          submitted: false,
          loading: false,
          loggedIn: true,
          failed: ""
        });
      })
      .catch(() => {
        this.setState({
          submitted: false,
          loading: false,
          failed: "no idea"
        });
      });
  };

  render() {
    return (
      <div className="Register">
        <div className="FormHeader">REGISTER</div>
        <form onSubmit={this.handleSubmit}>
          Email <br />
          <input
            id="email"
            value={this.state.email}
            type="email"
            onChange={this.handleChange}
          />
          <br />
          Password <br />
          <input
            id="password"
            value={this.state.password}
            type="password"
            onChange={this.handleChange}
          />
          <br />
          Confirm Password <br />
          <input
            id="password2"
            value={this.state.password2}
            type="password"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="submit"
            value="Register"
            disabled={!this.validateForm() || this.state.submitted}
          />
          {this.state.loading && <div>loading</div>}
          {this.state.failed && <div>Failed</div>}
        </form>
      </div>
    );
  }
}

export default RegisterPage;
