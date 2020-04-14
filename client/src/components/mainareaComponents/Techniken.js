import React, { Component } from "react";

import MixPic from "../images/Steps/step-08-gilanis.JPG";
import Spica from "../images/Steps/step-01-gilanis.JPG";
import Spicb from "../images/Steps/step-02-gilanis.JPG";
import Spicc from "../images/Steps/step-03-gilanis.JPG";
import Spicd from "../images/Steps/step-04-gilanis.JPG";
import Spice from "../images/Steps/step-05-gilanis.JPG";
import Spicf from "../images/Steps/step-06-gilanis.JPG";
import Spicg from "../images/Steps/step-07-gilanis.JPG";
import Spich from "../images/Steps/step-08-gilanis.JPG";
import Spici from "../images/Steps/step-09-gilanis.JPG";
import Spicj from "../images/Steps/step-10-gilanis.JPG";
import Spick from "../images/Steps/step-11-gilanis.JPG";
import { Link } from "react-router-dom";

export class mixtechniken extends Component {
  render() {
    return (
      <div className="maincontainer">
        <div className="headline">
          <span>Why & How to Mix</span>
        </div>

        <img className="blendesh" src={MixPic} alt="Hahnen Schwanz" />
        <div className="howtomix">
          <img className="spic" src={Spica} alt="Mix Step" />
          <img className="spic" src={Spicb} alt="Mix Step" />
          <img className="spic" src={Spicc} alt="Mix Step" />
          <img className="spic" src={Spicd} alt="Mix Step" />
          <img className="spic" src={Spice} alt="Mix Step" />
          <img className="spic" src={Spicf} alt="Mix Step" />
          <img className="spic" src={Spicg} alt="Mix Step" />
          <img className="spic" src={Spich} alt="Mix Step" />
          <img className="spic" src={Spici} alt="Mix Step" />
          <img className="spic" src={Spicj} alt="Mix Step" />
          <img className="spic" src={Spick} alt="Mix Step" />
        </div>
        <p className="inhalttextLinksBig">
          Es gibt verschiedene Methoden, um ein Getränk zu mixen, die ich in
          folgenden Zeilen erklären möchte. Aber zuerst sollte man wissen, warum
          überhaupt ein Getränk gemixt werden soll und noch dazu auf
          verschiedene Arten? In der Regel besteht ein Cocktail aus
          verschiedenen Zutaten wie Säfte, Sirups, Liköre und Spirituosen, die
          je nach physischen Eigenschaften verschieden miteinander verbunden
          werden.
          <br />
          <br />
          Sinn des Mixens ist: die Konsistenz verschiedener Zutaten optimgl zu
          vermengen. z.b. Sirups sind mehr oder weniger sehr dickflüssig und
          wenn man die Säfte und Eis zufügt, allein durch die niedrige
          Temperatur des Eises, schwer lösbar, also man shakt sie kräftig, damit
          das Ziel der Lösung erreicht wird. Oder Sahne und andere Milchprodukte
          verstehen sich mit Säuren, die in Säften enthalten sind, nicht so gut,
          gerinnen und setzen sich ab (so wie man Käse herstellt), da kommt uns
          ein Elektromixer, in Fachsprache Englich Blender zu Hilfe, der das
          Ganze quasi durchschlägt! Es gibt allgemein vier Arten von Mixen:
        </p>
        <h5> Shaken:</h5>
        <p className="inhalttextLinks">
          hierbei werden die Zutaten inkl. Eiswürfel in den Shaker gegeben und
          beidhändig in waagerechter Haltung in Schulterhöhe nach vorn und
          hinten bewegt. Nach ca. 10 Sekunden ist das Getränk gut durchgemixt
          und gekühlt. Dabei soll man auf drei Sachen achten:
          <br />
          1. man nehme immer den längsten Weg
          <br />
          2. die Bewegung ist aus dem Ellebogen
          <br />
          3. Shake the Shaker, not yourself
        </p>
        <h5>Rühren:</h5>
        <p className="inhalttextLinks">
          hierbei werden die Zutaten inkl. Eiswürfel ins Rührglas gegeben und
          mit der Rückseite eines Barlöffels von unten nach oben gerührt.
        </p>
        <h5> Blenden:</h5>
        <p className="inhalttextLinks">
          hierbei werden die Zutaten inkl. Eiswürfel in den Blender-Becher
          gegeben und ca. 10 Sekunden geschlagen.
        </p>
        <h5> Gastglas-Zubereitung:</h5>
        <p className="inhalttextLinks">
          hierbei werden die Zutaten ins Gastglas auf Eis gegeben und je nach
          Rezept noch gerührt oder geschichtet.
        </p>
        <h5> Schichten:</h5>
        <p className="inhalttextLinks">
          hierbei werden die Zutaten nicht gemixt, sondern je nach Rezept mit
          oder ohne Eis aufeinander geschichtet wobei die Zutaten, die dichter
          und von der Konsistenz schwerer sind, zuerst ins Gastglas geschichtet
          werden. Damit die Zutaten sich nicht miteinander mischen, werden sie
          mit Hilfe eines Barlöffels ins Glas gegeben und zwar so, daß die
          Zutaten langsam auf die Rückseite des Barlöffels, der ganz dicht auf
          die oberste Schichtfläche gehalten wird, gegossen werden.
        </p>

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

export default mixtechniken;
