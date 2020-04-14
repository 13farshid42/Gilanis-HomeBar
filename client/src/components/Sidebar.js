import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    return (
      <ul className="pagenav">
        <Link to="/welcome" className="Pagelink">
          <li
            className="nav-link"
            onClick={() =>
              window.scroll({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            HOMEBAR
          </li>
        </Link>
        <Link to="/suche" className="Pagelink">
          <li
            className="nav-link"
            onClick={() =>
              window.scroll({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            Cocktail Generator
          </li>
        </Link>
        <Link to="/geschichte" className="Pagelink">
          <li
            className="nav-link"
            onClick={() =>
              window.scroll({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            Geschichte des Cocktails
          </li>
        </Link>

        <Link to="/equipment" className="Pagelink">
          <li
            className="nav-link"
            onClick={() =>
              window.scroll({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            Equipment für ein Haus-Bar
          </li>
        </Link>

        <Link to="/techniken" className="Pagelink">
          <li
            className="nav-link"
            onClick={() =>
              window.scroll({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            Mix-Techniken
          </li>
        </Link>
        <Link to="/liste" className="Pagelink">
          <li
            className="nav-link"
            onClick={() =>
              window.scroll({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            Liste aller Cocktails
          </li>
        </Link>
        <Link to="/videos" className="Pagelink">
          <li
            className="nav-link"
            onClick={() =>
              window.scroll({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            Videos
          </li>
        </Link>
      </ul>
    );
  }
}

export default Sidebar;
