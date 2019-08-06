import React from "react";
import { userService } from "../services/user.service";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
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
    const { email, password } = this.state;

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
        <form onSubmit={this.handleSubmit} className={"User-Form"}>
          <TextField
            id="email"
            type="email"
            label="Email"
            onChange={this.handleChange}
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            onChange={this.handleChange}
          />
          <div className={"Single-Item-Center"}>
          <Button
            type="submit"
            variant="contained"
            disabled={!this.validateForm() || this.state.submitted}
          >
            Login
          </Button>
          {this.state.loading && <div>loading</div>}
          {this.state.failed && <div>Failed</div>}
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
