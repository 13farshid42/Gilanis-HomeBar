import React, { Component } from "react";

const axios = require("axios");
export class Changepass extends Component {
  state = {
    changeUpass: {
      neucode: "",
      upassword: "",
      upasswordwieder: ""
    },
    pass: false
  };

  passcontrol = e => {
    if (
      this.state.changeUpass.upassword ===
      this.state.changeUpass.upasswordwieder
    ) {
      this.setState({ pass: true });
    }
  };

  changeHandler = e => {
    this.setState({
      changeUpass: {
        ...this.state.changeUpass,
        [e.target.id]: e.target.value
      }
    });
  };

  changePass = () => {
    axios
      .post("http://localhost:5000/users/changepass", this.state.changeUpass)
      .then(res => {
        console.log(res);
      });
  };

  render() {
    return (
      <div className="Add new Coktail to the List">
        <div className="headline">
          <span>Passwort ändern mit Code</span>
        </div>
        <div className="addcontainer">
          <form
            className="addform"
            onSubmit={e => {
              e.preventDefault();
              this.changePass();
            }}
          >
            <label className="fildlable">Code*:</label>
            <input
              className="addfild"
              id="neucode"
              type="text"
              placeholder=" Hier den Code eintragen"
              onChange={this.changeHandler}
              required
            />
            <br></br>

            <label className="fildlable">Neue Password*:</label>
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
            <label className="fildlable">Neue Password wiederholen*:</label>
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
              value="Jetzt Passwort ändern"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Changepass;
