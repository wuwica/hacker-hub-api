import React from "react";
import { userService } from '../services/user.service';
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
    //var test = await userService.login(email, password);
    console.log(test)
}


// email: "",
// password: "",
// firstname: "",
// lastname: "",
// phonenumber: "",
// diet: "",
// size: "",
// pronoun: "",
// dob: "",
// submitted: false,
// loading: false

  render() {
    return (
      <div className="Register">
        <form onSubmit={this.handleSubmit}>
            email <br />
          <input id="email" type="email" onChange={this.handleChange}></input><br/>
            password <br />
          <input id="password" type="password" onChange={this.handleChange}></input><br/>
            Pronoun <br />
          <input id="Pronoun" type="text" onChange={this.handleChange}></input><br/>
            first name <br />
          <input id="firstname" type="text" onChange={this.handleChange}></input><br/>
            last name <br />
          <input id="lastname" type="text" onChange={this.handleChange}></input><br/>
            phone number<br />
          <input type="tel" name="phonenumber" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input><br />
            Dietary Restrictions <br />
          <input id="diet" type="text" onChange={this.handleChange}></input><br/>
            Shirt Size <br />
          <select>
            <option value={null}></option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select><br/>
            Date of Birth <br />
          <input id="dob" type="date" onChange={this.handleChange}></input><br/>
          <input type="submit" value="Login" disabled={!this.validateForm()} ></input>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
