import React, { Component } from "react";
//import Oben from "../images/nachoben.png";
import { Link } from "react-router-dom";

export class Welcom extends Component {
  render() {
    return (
      <div className="maincontainer">
        <div className="headline">
          <span>Wilkommen bei Gilanis Homebar</span>
        </div>
        <div className="addcontainer">
          <span className="inhalttextCentriert">
            Hi, hier kannst du aus die Cocktails die sich auf unsere Datenbank
            befinden per Auswahlverfahren Rezepte suchen die deine vorstellung
            entsprechen.
            <br />
            <br />
            Zu dem bekommst du interessante infos rund um das Kunst des
            BARKIPPING, Gechichte des Cocktails und was du noch so über Cocktail
            wiessen soltest. Ich zeige dir auch was du für deine classische
            Homebar brauchst.
            <br />
            Auch interessant für angehende Barkipper!
            <br />
            <br />
            Guck die auch unsere Videos an. Da sind hin und wieder tips und
            tricks zu sehen die dir eventuell nutzlich sein konnen.
            <br />
            <br />
            Ich wünschen dir viel Spaß!
            <br />
            <br />
            dein Farshid
          </span>
          {/* <img src="http://localhost:5000/img/10A.JPG" alt="pic" /> */}
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
        {/* <a href="#top"> <img className="nachoben" src={Oben} alt="Nach oben" /></a> */}
      </div>
    );
  }
}

export default Welcom;
