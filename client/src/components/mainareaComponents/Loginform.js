import React, { Component } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");

export class Loginform extends Component {
  state = {
    logUser: {
      uemailadress: "",
      upassword: ""
    }
  };

  changeHandler = e => {
    this.setState({
      logUser: {
        ...this.state.logUser,
        [e.target.id]: e.target.value
      }
    });
  };

  logUser = () => {
    axios
      .post("http://localhost:5000/users/login", this.state.logUser)
      .then(res => {
        console.log(res);
        if (res.data.msg === "user does not exist") {
          alert(`This user does'nt exist. Please Register First.`);
          window.location.href = "/register";
        } else if (res.data.token) {
          localStorage.setItem("user", res.data.token);
          localStorage.setItem(
            "uvorname",
            JSON.parse(window.atob(res.data.token.split(".")[1])).uvorname
          );
          console.log(
            JSON.parse(window.atob(localStorage.getItem("user").split(".")[1]))
          );
          window.location.href = "/welcome";
        }
      });
  };

  /* ---------------------------------------------------------------------------------------- */

  render() {
    return (
      <div className="login">
        <div className="headline">
          <span>Login</span>
        </div>
        <div className="addcontainer">
          <form
            className="addform"
            onSubmit={e => {
              e.preventDefault();
              this.logUser();
            }}
          >
            <br></br>

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

            <br></br>
            <label className="fildlable">Password*:</label>
            <input
              className="addfild"
              id="upassword"
              type="password"
              minLength="4"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <div className="logorout">
              <Link to="/welcome">
                <input
                  className="btnabbrechen"
                  type="button"
                  value="Abbrechen"
                />
              </Link>
              <input
                className="btnlogin"
                type="submit"
                value="Jetzt Einlogen"
              />
            </div>

            <div>
              <Link className="anylink" to="/passabfrage">
                Passwort vergessen?
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Loginform;
