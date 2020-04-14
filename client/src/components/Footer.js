import React, { Component } from "react";
import Mail from "./images/email.png";
import Insta from "./images/insta.png";
import Face from "./images/facebook.png";
import { Link } from "react-router-dom";
import "../App.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="redline"></div>

        <div className="socialnet">
          <a href="mailto:mail@gilanis.de">
            <img className="footicon" src={Mail} alt="E-Mail" />
          </a>
          <a
            href="https://www.instagram.com/tayo_no_hikari/?hl=de"
            target="_blank" rel="noopener noreferrer"
          >
            <img className="footicon" src={Insta} alt="Instergram" />
          </a>
          <a
            href="https://www.instagram.com/tayo_no_hikari/?hl=de"
            target="_blank" rel="noopener noreferrer"
          >
            <img className="footicon" src={Face} alt="Facebook" />
          </a>
          <Link to="/impressum" className="footlink">
            <span>Impressum</span>
          </Link>
          <br></br>
          <br></br>
          <Link to="/datenschutz" className="footlink">
            <span>Datenschutz</span>
          </Link>
        </div>
        
      </div>
    );
  }
}

export default Footer;
