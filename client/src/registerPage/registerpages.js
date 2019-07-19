import React from "react";
import { userService } from "../services/user.service";
import { Redirect } from "react-router-dom";
//import "./login.css";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      phonenumber: "",
      diet: "",
      size: "",
      pronoun: "",
      dob: "",
      submitted: false,
      loading: false,
      failed: false,
      loggedIn: false
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.pronoun &&
      this.state.firstname &&
      this.state.lastname &&
      this.state.phonenumber
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ submitted: true, failed: false });
    const { email, password, returnUrl } = this.state;

    // stop here if form is invalid
    if (!(email && password)) {
      return;
    }

    this.setState({ loading: true });
    userService
      .registerHacker({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
        phonenumber: this.state.phonenumber,
        diet: this.state.diet,
        size: this.state.size,
        pronoun: this.state.pronoun,
        dob: this.state.dob
      })
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
      this.state.loggedIn ? 
      (<Redirect to="/"/>) 
      :
      (
      <div className="Register">
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
          Pronoun <br />
          <input
            id="pronoun"
            value={this.state.pronoun}
            type="text"
            onChange={this.handleChange}
          />
          <br />
          First Name <br />
          <input
            id="firstname"
            value={this.state.firstname}
            type="text"
            onChange={this.handleChange}
          />
          <br />
          Last Name <br />
          <input
            id="lastname"
            value={this.state.lastname}
            type="text"
            onChange={this.handleChange}
          />
          <br />
          Phone Number
          <br />
          <input
            id="phonenumber"
            value={this.state.phonenumber}
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={this.handleChange}
          />
          <br />
          Dietary Restrictions <br />
          <input
            id="diet"
            value={this.state.diet}
            type="text"
            onChange={this.handleChange}
          />
          <br />
          Shirt Size <br />
          <select id="size" onChange={this.handleChange}>
            <option value={null} />
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <br />
          Date of Birth <br />
          <input
            id="dob"
            value={this.state.dob}
            type="date"
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
      )
    );
  }
}

export default RegisterPage;
