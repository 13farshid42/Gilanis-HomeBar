import React, { Component } from "react";
import { Link } from "react-router-dom";

const axios = require("axios");
export class Passabfrage extends Component {
  state = {
    passVorget: {
      uemailadress: ""
    }
  };

  changeHandler = e => {
    this.setState({
      passVorget: {
        ...this.state.passVorget,
        [e.target.id]: e.target.value
      }
    });
  };

  passVorget = () => {
    axios
      .post("http://localhost:5000/users/passvorget", this.state.passVorget)
      .then(res => {
        console.log(res);
      });
  };

  /* ---------------------------------------------------------------------------------------- */

  render() {
    return (
      <div className="login">
        <div className="headline">
          <span>Du hast dein Passwort vergessen?</span>
        </div>
        <div className="addcontainer">
          <form
            className="addform"
            onSubmit={e => {
              e.preventDefault();
              this.passVorget();
            }}
          >
            <br></br>
            <div className="infotext">
              <span>
                Trage deinen Email in untere Feld ein. Wir senden dir dann ein
                Code per Email die du benutzen kannst um eine eigene neue
                Passwort für dich zu wählen.
              </span>
            </div>
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
            <div className="logorout">
              <Link to="/welcome">
                <input
                  className="btnabbrechen"
                  type="button"
                  value="Abbrechen"
                />
              </Link>
              <input className="btnlogin" type="submit" value="Code Abfragen" />
              {/* <Link to="/register">
                <input className="bntgray" type="button" value="Registrieren" />
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Passabfrage;
