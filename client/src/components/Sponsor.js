import React, { Component } from "react";
import "../App.css";
import Bolslogo from "./images/bols.png";
import Vahingelogo from "./images/vahinger.png";
import Havanalogo from "./images/havana.png";
import Smirnoflogo from "./images/smirnof.png";

export class Sponsor extends Component {
  render() {
    return (
      <div className="sponsnav">
        <a href="https://bols.com//" target="_blank" rel="noopener noreferrer">
          <img className="sponslogo" src={Bolslogo} alt="Sponsor Logo" />
        </a>
        <a href="https://niehoffs-vaihinger.de/" target="_blank" rel="noopener noreferrer">
          <img className="sponslogo" src={Vahingelogo} alt="Vahinger Logo" />
        </a>
        <a href="https://havana-club.com/en-ww/" target="_blank" rel="noopener noreferrer">
          <img className="sponslogo" src={Havanalogo} alt="Havana Logo" />
        </a>
        <a href="https://www.smirnoff.com/de-de/" target="_blank" rel="noopener noreferrer">
          <img className="sponslogo" src={Smirnoflogo} alt="Smirnoff Logo" />
        </a>
      </div>
    );
  }
}

export default Sponsor;
