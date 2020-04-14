import React from "react";

import Header from "./components/Header";
import Side from "./components/Side";
//import Sidebar from "./components/Sidebar";
//import Sponsor from "./components/Sponsor";
import Footer from "./components/Footer";
import MainArea from "./components/MainArea";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="app">
        <div className="header">
          <Header />
        </div>
        <div className="mitte">
          <div className="side">
            <Side />
          </div>
          <div className="mainarea">
            <MainArea />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
