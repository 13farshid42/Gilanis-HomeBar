import React, { Component } from "react";
import Logo from "./images/GilanisHomebar-2020_ok_250x100_white.png";
import "../App.css";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/welcome">
          <img className="hblogo" src={Logo} alt="Homebar Logo" />
        </Link>
        {localStorage.getItem("user") ? (
          <div className="btnsheader">
            <Link
              className="linkeins"
              onClick={() => {
                localStorage.clear();
                window.location.href = "/welcome";
              }}
            >
              Logout
            </Link>
            <Link className="linkeins">
              {"Hello " + localStorage.getItem("uvorname")}
            </Link>
          </div>
        ) : (
          <div className="btnsheader">
            <Link className="linkeins" to="/loginform">
              LOGIN
            </Link>
            <Link className="linkeins" to="/register">
              Neu bei HOMEBAR?
            </Link>
          </div>
        )}

        
      </div>
    );
  }
}

export default Header;
