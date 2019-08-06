import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StaticSite from "./staticPage/staticHTMLsite";
import LoginRegisterPage from "./loginRegisterPage";
import ApplicaitonPage from "./applicationPage/applicationpages"
import ForgotPasswordPage from './loginPage/forgotpassword'

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img className="height50" src="img/logo.png" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto p-2">
                <li className="nav-item">
                  <a className="nav-link" href="/#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#sponsors">
                    Sponsors
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register/">Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login/">Login</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={StaticSite} />
          <Route path="/application" exact component={ApplicaitonPage} />
          <Route path="/(login|register)" exact component={LoginRegisterPage} />
          <Route path='/password/reset/:token' component={ForgotPasswordPage} />
        </div>
      </Router>
    );
  }
}
export default App;
