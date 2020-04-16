import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "../Videos.css";
function Videos() {
  const [isOpen, setIsOpen] = useState(false);
  const [vId, setVid] = useState("");

  return (
    <div className="maincontainer">
      <div className="headline">
        <span>Videos</span>
      </div>
      {/* //////////start modal///////////// */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={vId}
        onClose={(e) => {
          setIsOpen(false);
        }}
        wmode="transparent"
        theme="dark"
      />
      {/* ----------end modal-------------- */}
      <div className="vidscontainer">
        <div className="viddiv">
          <img
            alt="pic"
            src="//i1.ytimg.com/vi/LQnAnxNkIrk/mqdefault.jpg"
            id="LQnAnxNkIrk"
            className="img-responsive"
            onClick={(e) => {
              setIsOpen(true);
              setVid(e.target.id);
            }}
          />
          <p className="galeritext">
            Cocktailbar Casablanca bei Gilaniś Auf Livestyle Teil1: Equipment
          </p>
        </div>

        <div className="viddiv">
          <img
            alt="pic"
            src="//i1.ytimg.com/vi/FO9vCfcue_w/mqdefault.jpg"
            id="FO9vCfcue_w"
            className="img-responsive"
            onClick={(e) => {
              setIsOpen(true);
              setVid(e.target.id);
            }}
          />
          <p className="galeritext">
            Cocktailbar Casablanca bei Gilaniś Auf Livestyle Teil2: Tequila
            Sunrise
          </p>
        </div>

        <div className="viddiv">
          <img
            alt="pic"
            src="//i1.ytimg.com/vi/4BcEN41NcdE/mqdefault.jpg"
            id="4BcEN41NcdE"
            className="img-responsive"
            onClick={(e) => {
              setIsOpen(true);
              setVid(e.target.id);
            }}
          />
          <p className="galeritext">
            Cocktailbar Casablanca bei Gilaniś Auf Livestyle Teil3: Mojito
          </p>
        </div>

        <div className="viddiv">
          <img
            alt="pic"
            src="//i1.ytimg.com/vi/BOM8EEQyUWI/mqdefault.jpg"
            id="BOM8EEQyUWI"
            className="img-responsive"
            onClick={(e) => {
              setIsOpen(true);
              setVid(e.target.id);
            }}
          />
          <p className="galeritext">
            Cocktailbar Casablanca bei Gilaniś Auf Livestyle Teil4: Cosmopolitan
          </p>
        </div>

        <div className="viddiv">
          <img
            alt="pic"
            src="//i1.ytimg.com/vi/-dCmqY5yIHA/mqdefault.jpg"
            id="-dCmqY5yIHA"
            className="img-responsive"
            onClick={(e) => {
              setIsOpen(true);
              setVid(e.target.id);
            }}
          />
          <p className="galeritext">
            Cocktailbar Casablanca bei Gilaniś Auf Livestyle. "Showeffekt"
          </p>
        </div>

        <div className="viddiv">
          <img
            alt="pic"
            src="//i1.ytimg.com/vi/BCsFV12JiwI/mqdefault.jpg"
            id="BCsFV12JiwI"
            className="img-responsive"
            onClick={(e) => {
              setIsOpen(true);
              setVid(e.target.id);
            }}
          />
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
