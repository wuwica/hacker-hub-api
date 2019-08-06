import React from "react";
import { userService } from "../services/user.service";

class ApplicationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      gender: "",
      genderOther: "",
      phone_number: "",
      university: "",
      program: "",
      year: "",
      dietary_restrictions: "",
      shirt_size: "",
      other_accomodations: "",
      teammates: "",
      hacker_rating: "",
      hackathons_attended: "",
      skill_set: [""],
      why_should_you_be_selected: "",
      best_project: "",
      get_out_of_hackathon: "",
      located: "",
      hear_about: "",
      resume: null,
      submitted: false,
      loading: false,
      failed: false,
      loggedIn: false
    };
  }

  validateForm() {}

  handleChange = event => {
    if (event.target.options) {
      let mutliselect = [...event.target.options].map(t => {
        return t.selected ? t.value : null;
      });
      this.setState({
        [event.target.id]: mutliselect
      });
    } else if (event.target.files){
      this.setState({
        [event.target.id]: event.target.files[0]
      });
    }
    else {
      this.setState({
        [event.target.id]: event.target.value
      });
    }
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
    var ApplicationMap = [
      {
        name: "First Name",
        id: "fname",
        value: this.state.firstname,
        type: "text"
      },
      {
        name: "Last Name",
        id: "lname",
        value: this.state.lastname,
        type: "text"
      },
      {
        name: "Gender",
        id: "gender",
        value: this.state.gender,
        type: "select",
        optionSet: ["Male", "Female", "Non-Binary", "Other"],
        otherValue: this.state.otherValue,
        otherid: "genderOther"
      },
      {
        name: "Telephone Number",
        id: "phone_number",
        value: this.state.phone_number,
        type: "tel"
      },
      {
        name: "University",
        id: "university",
        value: this.state.university,
        type: "text"
      },
      {
        name: "Program",
        id: "program",
        value: this.state.program,
        type: "text"
      },
      {
        name: "Year",
        id: "year",
        value: this.state.year,
        type: "text"
      },
      {
        name: "Dietary Restriction",
        id: "dietary_restrictions",
        value: this.state.dietary_restrictions,
        type: "select",
        optionSet: ["None", "Halal", "Vegetarian", "Vegan", "Other"]
      },
      {
        name: "Shirt Size",
        id: "shirt_size",
        value: this.state.shirt_size,
        type: "select",
        optionSet: ["XS", "S", "M", "L", "XL"]
      },
      {
        name: "Other Accomodations",
        id: "other_accomodations",
        value: this.state.other_accomodations,
        type: "text"
      },
      {
        name:
          "List any team members you are applying with, leave blank if none (teams of 4):",
        id: "teammates",
        value: this.state.teammates,
        type: "text"
      },
      {
        name:
          "How would you rate yourself as a hacker (*We are just asking as a survey):",
        id: "hacker_rating",
        value: this.state.hacker_rating,
        type: "select",
        optionSet: ["Beginner", "Intermediate", "Expert"]
      },
      {
        name: "How many hackathons have you attended?:",
        id: "hackathons_attended",
        value: this.state.hackathons_attended,
        type: "text"
      },
      {
        name:
          "What do you want to identify as for this hackathon in terms of skill-set? (you can select more than one):",
        id: "skill_set",
        value: this.state.skill_set,
        type: "multiselect",
        optionSet: ["Business", "Developer", "Designer"]
      },
      {
        name:
          "Why should you be selected for this hackathon? (Elevator Pitch style):",
        id: "why_should_you_be_selected",
        value: this.state.why_should_you_be_selected,
        type: "text"
      },
      {
        name: "What is your most successful project?:",
        id: "best_project",
        value: this.state.best_project,
        type: "text"
      },
      {
        name: "What do you hope to get out of this hackathon?:",
        id: "get_out_of_hackathon",
        value: this.state.get_out_of_hackathon,
        type: "text"
      },
      {
        name: "Where are you coming from: ",
        id: "located",
        value: this.state.located,
        type: "text"
      },
      {
        name: "How did you hear about the GoldenHacks:",
        id: "hear_about",
        value: this.state.hear_about,
        type: "text"
      }
    ];

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {ApplicationMap.map(i => {
            switch (i.type) {
              case "text":
                return (
                  <div key={i.id}>
                    <h5>{i.name}</h5>
                    <input
                      id={i.id}
                      value={i.value}
                      type="text"
                      onChange={this.handleChange}
                    />
                  </div>
                );
              case "tel":
                return (
                  <div key={i.id}>
                    <h5>{i.name}</h5>
                    <input
                      id={i.id}
                      value={i.value}
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      onChange={this.handleChange}
                    />
                  </div>
                );
              case "select":
                return (
                  <div key={i.id}>
                    <h5>{i.name}</h5>
                    <select
                      id={i.id}
                      value={i.value}
                      onChange={this.handleChange}
                    >
                      <option value={null} />
                      {i.optionSet.map(k => {
                        return (
                          <option key={k} value={k}>
                            {k}
                          </option>
                        );
                      })}
                    </select>
                    {i.value.toLowerCase() === "other" ? (
                      <div>
                        <br />
                        <input
                          id={i.otherid}
                          value={i.otherValue}
                          type="text"
                          onChange={this.handleChange}
                        />
                      </div>
                    ) : null}
                  </div>
                );
              case "multiselect":
                return (
                  <div key={i.id}>
                    <h5>{i.name}</h5>
                    <select
                      multiple
                      id={i.id}
                      value={i.value}
                      onChange={this.handleChange}
                    >
                      {i.optionSet.map(k => {
                        return (
                          <option key={k} value={k}>
                            {k}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                );
            }
          })}
          <input
            type="file"
            id="resume"
            onChange={this.handleChange}
            name="resume"
            accept=".doc,.docx,.pdf"
          />
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

export default ApplicationPage;
