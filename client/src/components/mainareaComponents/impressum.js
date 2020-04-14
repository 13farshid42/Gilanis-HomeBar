import React, { Component } from "react";
//import Oben from "../images/nachoben.png";
/* import { Link } from "react-router-dom"; */

export class impressum extends Component {
  render() {
    return (
      <div className="maincontainer">
        <div className="headline">
          <span>IMPRESSUM</span>
        </div>
        <div className="addcontainer">
          <span className="inhalttextLinks">
            ddddddddddddddddddddddddddddddddddddddd
            <br />
            Zu dem kannst Du unter Menü interessante sachen rund um Cocktails
            finden.
            <br />
            Wir wünschen dir viel Spaß!
          </span>
          {/* <img src="http://localhost:5000/img/10A.JPG" alt="pic" /> */}
        </div>

        {/* <a href="#top"> <img className="nachoben" src={Oben} alt="Nach oben" /></a> */}
      </div>
    );
  }
}

export default impressum;
