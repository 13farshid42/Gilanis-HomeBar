import React, { Component } from "react";
/* import Oben from "../images/nachoben.png"; */
//import Pic from "../images/gallerieCosmopolitan.png";
//import Pic2 from "../images/galleriePicasso.png";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

export class gefunden extends Component {
  videoOnReady(event) {
    event.target.pauseVideo();

  }

  render() {
    const opts = {
      width: "280",
      height: "180",

      playerVars: {

        autoplay: 2,
      },
    };

    return (
      <div className="maincontainer">
        <div className="headline">
          <span>gefundene Cocktails</span>
        </div>
       

        <div className="ergiebnisres">
          <span className="rezeptrespons" id="rezres">
            {this.props.history.location.state.searchResp.map(
              (drink, index) => (
                <div className="packet" key={index}>
                  <img
                    className="auwpicres"
                    src={`http://localhost:5000/images/${drink.cpic}`}
                    alt="Thumb"
                  />
                  <div className="packetText">
                    <figcaption className="inhalttextLinks">
                      {drink.cname}
                    </figcaption>
                    <br></br>
                    <figcaption className="inhalttextLinks">
                      {drink.zutaten.map((elem, index) => (
                        <React.Fragment>
                          <span>{elem.menge + " " + elem.zutat}</span>

                          <br></br>
                        </React.Fragment>
                      ))}
                    </figcaption>
                    <br></br>
                    <figcaption className="inhalttextLinks">
                      {drink.zubreitung}
                    </figcaption>
                  </div>
                  <div className="viddiv">
                    <YouTube
                      className="videosgefunden"
                      videoId={drink.cvid}
                      opts={opts}
                      onReady={this.videoOnReady}
                    />
                    <p className="galeritext">{`${drink.cname} Lernvideo`}</p>
                  </div>
                </div>
              )
            )}
          </span>

        </div>

        <button className="btngreen" type="submit">
          <Link
            to="/suche"
            className="Pagelink"
            onClick={() =>
              window.scroll({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            Zurück zu Cocktail Generator
          </Link>
        </button>
        <br></br>


      </div>
    );
  }
}

export default gefunden;

/* 
$("#topbtn").on('click', function() {
  $(window).scrollTop(0);
}); */
