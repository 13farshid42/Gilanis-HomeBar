import React, { Component, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import Close from "../images/close.png";
const queryString = require("query-string");
function videoOnReady(event) {
  event.target.pauseVideo();
}

function Videos() {
  const outside = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  const handleClick = (e) => {
    setData(queryString.parse(window.location.search).vid);
    console.log(data);
    if (outside.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
    window.location.href = "/videos";
  };

  useEffect(() => {
    const getClick = document.addEventListener("click", handleClick);

    return () => {
      getClick();
    };
  }, []);

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
        <span>Videos</span>
      </div>
      {/* ==============================MODAL===================================== */}

      <div className="vidscontainer" ref={outside}>
        {isOpen ? (
          <div className="modalisinside">
            <div className="modal">
              <div className="close">
                <Link to="/videos">
                  <img
                    className="closepic"
                    src={Close}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  />
                </Link>
              </div>
              <YouTube
                className="videos"
                videoId={data}
                opts={opts}
                onReady={videoOnReady}
              />
            </div>
            <div
              className="modal-overlay"
              onClick={() => {
                setIsOpen(false);
              }}
            ></div>
          </div>
        ) : null}
        {/* =========================================================================== */}
        <div className="viddiv" onClick={() => setIsOpen(!isOpen)}>
          <Link to="/videos/?vid=LQnAnxNkIrk">
            <img
              src="//i1.ytimg.com/vi/LQnAnxNkIrk/mqdefault.jpg"
              className="img-responsive"
            />
          </Link>
          <p className="galeritext">
            Cocktailbar Casablanca bei Gilaniś Auf Livestyle Teil1: Equipment
          </p>
          {/* <p className="galeritext">{`${drink.cname} Lernvideo`}</p> */}
        </div>
        <div className="viddiv" onClick={() => setIsOpen(!isOpen)}>
          <Link to="/videos/?vid=FO9vCfcue_w">
            <img
              src="//i1.ytimg.com/vi/FO9vCfcue_w/mqdefault.jpg"
              className="img-responsive"
            />
          </Link>
          <p className="galeritext">
            Cocktailbar Casablanca bei Gilaniś Auf Livestyle Teil2: Tequila
            Sunrise
          </p>
        </div>
        <div className="viddiv" onClick={() => setIsOpen(!isOpen)}>
          <Link to="/videos/?vid=4BcEN41NcdE">
            <img
              src="//i1.ytimg.com/vi/4BcEN41NcdE/mqdefault.jpg"
              className="img-responsive"
            />
          </Link>
          <p className="galeritext">
            Cocktailbar Casablanca bei Gilaniś Auf Livestyle Teil3: Mojito
          </p>
        </div>
        <div className="viddiv" onClick={() => setIsOpen(!isOpen)}>
          <Link to="/videos/?vid=BOM8EEQyUWI">
            <img
              src="//i1.ytimg.com/vi/BOM8EEQyUWI/mqdefault.jpg"
              className="img-responsive"
            />
          </Link>
          <p className="galeritext">
            Cocktailbar Casablanca bei Gilaniś Auf Livestyle Teil4: Cosmopolitan
          </p>
        </div>
        <div className="viddiv" onClick={() => setIsOpen(!isOpen)}>
          <Link to="/videos/?vid=-dCmqY5yIHA">
            <img
              src="//i1.ytimg.com/vi/-dCmqY5yIHA/mqdefault.jpg"
              className="img-responsive"
            />
          </Link>
          <p className="galeritext">
            Cocktailbar Casablanca bei Gilaniś Auf Livestyle. "Showeffekt"
          </p>
        </div>
        <div className="viddiv" onClick={() => setIsOpen(!isOpen)}>
          <Link to="/videos/?vid=BCsFV12JiwI">
            <img
              src="//i1.ytimg.com/vi/BCsFV12JiwI/mqdefault.jpg"
              className="img-responsive"
            />
          </Link>
          <p className="galeritext">Gilaniś Cocktails an Bocholter Markt</p>
        </div>
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
    </div>
  );
}

export default Videos;
