import React, { Component } from "react";
const dateDiff = require("date-diff");

const axios = require("axios");
export class Regform extends Component {
  state = {
    newUser: {
      anrede: "",
      uname: "",
      uvorname: "",
      uemailadress: "",
      ugeburtsdatum: "",
      upassword: "",
      upasswordwieder: ""
    },
    pass: false
  };

  passcontrol = e => {
    if (this.state.newUser.upassword === this.state.newUser.upasswordwieder) {
      this.setState({ pass: true });
    }
  };

  changeHandler = e => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.id]: e.target.value
      }
    });
  };

  addUser = () => {
    axios
      .post("http://localhost:5000/users/add", this.state.newUser)
      .then(res => {
        console.log(res);
        if (res.data.token) {
          localStorage.setItem("user", res.data.token);
          alert("Successfully Registered!");
          window.location.href = "/welcome";
        } else if (res.data.msg === "failur") {
          alert("User not registered. Please try again.");
        }
      });
  };

  render() {
    return (
      <div className="Add new Coktail to the List">
        <div className="headline">
          <span>Registrierung</span>
        </div>
        <div className="addcontainer">
          <form
            className="addform"
            onSubmit={e => {
              e.preventDefault();
              this.addUser();
            }}
          >
            <div className="schalter">
              <select
                className="wahlfeld"
                id="anrede"
                required
                onChange={this.changeHandler}
              >
                <option value="">Anrede*</option>
                <option value="Weiblich">Weiblich</option>
                <option value="Männlich">Männlich</option>
              </select>
              <br></br>
            </div>
            <label className="fildlable">Name*:</label>
            <input
              className="addfild"
              id="uname"
              type="text"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <label className="fildlable">Vorname*:</label>
            <input
              className="addfild"
              id="uvorname"
              type="text"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <label className="fildlable">E-Mail Adresse*:</label>
            <input
              className="addfild"
              id="uemailadress"
              type="text"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <label className="fildlable">Geburtsdatum*:</label>
            <input
              className="addfild"
              id="ugeburtsdatum"
              type="date"
              onChange={e => {
                this.changeHandler(e);
              }}
              required
            />
            <br></br>
            <label className="fildlable">Password*:</label>
            <input
              className="addfild"
              id="upassword"
              type="password"
              minlength="6"
              placeholder=" Passwort muss 6 Zeichen beinhalten"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <label className="fildlable">Password wiederholen*:</label>
            <input
              className={this.state.pass ? "addfildgreen" : "addfildred"}
              id="upasswordwieder"
              type="password"
              minlength="6"
              onChange={e => {
                this.passcontrol(e);
                this.changeHandler(e);
              }}
              required
            />

            <br></br>
            <input
              className="addbutton"
              type="submit"
              value="Jetzt Registerieren"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Regform;
