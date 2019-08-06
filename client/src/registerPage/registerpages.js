import React from "react";
import { userService } from "../services/user.service";
import "../loginPage/login.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
    if (patt.test(password)) {
      this.setState({ submitted: false, failed: "Password not secure enough" });
      return;
    }

    if (password !== password2) {
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
        <form onSubmit={this.handleSubmit} className={"User-Form"}>
          <TextField
            id="email"
            type="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={this.state.password1}
            margin="normal"
            onChange={this.handleChange}
          />
          <TextField
            id="password2"
            label="Confirm Password"
            type="password"
            value={this.state.password2}
            margin="normal"
            onChange={this.handleChange}
          />
          <div className="Single-Item-Center">
            <Button
              type="submit"
              variant="contained"
              disabled={!this.validateForm() || this.state.submitted}
            >
              Register
            </Button>
            {this.state.loading && <div>loading</div>}
            {this.state.failed && <div>Failed</div>}
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
