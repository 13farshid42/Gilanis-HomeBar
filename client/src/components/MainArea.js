import React, { Component } from "react";
import "../App.css";
import Welcome from "./mainareaComponents/Welcome";
import Suche from "./mainareaComponents/Suche";
import Gefunden from "./mainareaComponents/Gefunden";
import Geschichte from "./mainareaComponents/Geschichte";
import Techniken from "./mainareaComponents/Techniken";
import Equipment from "./mainareaComponents/Equipment";
import Add from "./mainareaComponents/Addneudrinkform";
import Reg from "./mainareaComponents/Regform";
import Log from "./mainareaComponents/Loginform";
import Pasver from "./mainareaComponents/Passabfrage";
import Chpass from "./mainareaComponents/Changepasswort";
import List from "./mainareaComponents/Liste";
import Vid from "./mainareaComponents/Videos";
import Imp from "./mainareaComponents/impressum";
import Datensch from "./mainareaComponents/datenschutz";
import Oben from "./images/oben.png";

import { Route } from "react-router-dom";

export class MainArea extends Component {
  render() {
    return (
      <div>
        <Route path="/welcome" exact component={Welcome} />
        <Route path="/geschichte" exact component={Geschichte} />
        <Route path="/equipment" exact component={Equipment} />
        <Route path="/techniken" exact component={Techniken} />
        {/* <Route path="/cocktailliste" exact component={Cocktailliste} />
        <Route path="/video" exact component={Video} /> */}
        <Route path="/" exact component={Welcome} />
        <Route path="/suche" exact component={Suche} />
        <Route path="/gefunden" exact component={Gefunden} />
        <Route path="/register" exact component={Reg} />
        <Route path="/addneudrink" exact component={Add} />
        <Route path="/loginform" exact component={Log} />
        <Route path="/passabfrage" exact component={Pasver} />
        <Route path="/changepass" exact component={Chpass} />
        <Route path="/liste" exact component={List} />
        <Route path="/videos" exact component={Vid} />
        <Route path="/impressum" exact component={Imp} />
        <Route path="/datenschutz" exact component={Datensch} />

        {/*  <a href="#top">
          {" "}
          <img className="nachoben" src={Oben} alt="Nach oben" />
        </a> */}

        <img
          className="nachoben"
          src={Oben}
          onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
          alt="Nach oben"
        />

        {/*  <img
          className="nachoben"
          id="totop"
          onClick={scrolling('totop', 'top')}
          src={Oben}
          alt="Nach oben"
        /> */}
      </div>
    );
  }
}

export default MainArea;
