import React, { Component } from "react";
/* import Oben from "../images/nachoben.png"; */
import { Link } from "react-router-dom";

export class Liste extends Component {
  render() {
    return (
      <div className="maincontainer">
        <div className="headline">
          <span>Liste der alle rezepte auf HOMEBAR</span>
        </div>
        <div>
          <span className="inhalttextLinks" id="liste">
            NOCH LEER
          </span>
        </div>
        <div>
          <button className="btngreen" type="submit">
            <Link
              to="/suche"
              className="Pagelink"
              onClick={() =>
                window.scroll({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              Cocktail Generator
            </Link>
          </button>
        </div>

        {/* <a href="#top">
          {" "}
          <img className="nachoben" src={Oben} alt="Nach oben" />
        </a> */}
      </div>
    );
  }
}

export default Liste;
