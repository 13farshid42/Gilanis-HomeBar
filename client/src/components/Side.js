import React, { Component } from "react";
import "../App.css";

import Sidebar from "./Sidebar";
import Sponsor from "./Sponsor";

export class Side extends Component {
  render() {
    return (
      <div className="sidenav">
        <Sidebar />
        <Sponsor />
      </div>
    );
  }
}

export default Side;
