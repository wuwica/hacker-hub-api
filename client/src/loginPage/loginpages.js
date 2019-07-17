import React from "react";
import { userService } from '../services/user.service';
//import "./login.css";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      submitted: false,
      loading: false
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

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password, returnUrl } = this.state;

    // stop here if form is invalid
    if (!(email && password)) {
        return;
    }

    this.setState({ loading: true });
    var test = await userService.login(email, password);
    console.log(test)
}

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
            email <br />
          <input id="email" type="email" onChange={this.handleChange}></input><br/>
            password <br />
          <input id="password" type="password" onChange={this.handleChange}></input><br/>
          <input type="submit" value="Login" disabled={!this.validateForm()} ></input>
        </form>
      </div>
    );
  }
}

export default LoginPage;
