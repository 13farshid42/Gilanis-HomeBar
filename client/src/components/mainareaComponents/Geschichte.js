import React, { Component } from "react";
/* import Oben from "../images/nachoben.png"; */
import GeschPic from "../images/hahnenkampf1.jpg";
import { Link } from "react-router-dom";

export class geschichte extends Component {
  render() {
    return (
      <div className="maincontainer">
        <div className="headline">
          <span>Wie ist Cocktail zu stehen gekommen</span>
        </div>
        <img className="blende" src={GeschPic} alt="Hahnen Schwanz" />
        <p className="inhalttextLinksBig">
          Viele unserer englischsprechenden Getränkeverköstiger haben es schon
          erraten, Cocktail heißt eigentlich Hahnenschwanz. ( für alle
          Loriotfanatiker, nicht Hundschwanz!!) Damals, als das Leben noch schön
          war, durfte man sich noch bei Hahnenkämpfen amüsieren und wenn der
          eigene Gockel den Gegner zu Chicken Wings verarbeitet hatte, war es
          Sitte, dem gerupften Hahn auch noch die Schwanzfedern auszurupfen,
          selbige kamen in den Umtrunk und : Cheers, on the cock`s tail! Da das
          wahrscheinlich eh keinen interessiert, kommen wir direkt zum
          Wesentlichen, dem Alkohol.
          <br />
          <br />
          Drinks pur zu genießen war was für hartgesottene Kapitäne,
          Berufskiller und Mannsweiber. Für die Mehrheit gab es Grund genug, das
          reichliche Spirituosenangebot, reinen Whiskey, gefilterten Whiskey und
          verschnittenen Whiskey, mit Honig, Zucker, Früchten und aromatischen
          Ingredienzien auf ein erträgliches Maß zu verfeinern. Mitten im 19.
          Jahrhundert haben Einwanderer endlich auch andere Spirituosen und
          Liköre destilliert, damit Nordamerika nicht nur von Long John Silvers
          und Pistolenpepes überschwemmt wird, sprich: die neue Heimat wurde nun
          auf dem Importwege von good Old Europe infiltriert, und damit stand
          der Genuss- und Experimentierfreude der Amerikaner nichts mehr im Weg.
          <br />
          <br />
          Wegen der wachsenden Anzahl an Versuchen möglichst viele Zutaten in
          ein Glas zu kippen, wovon dann ca.10% tatsächlich genießbar waren,
          wurde es Zeit, diese Gesöffe in Gruppen einzuordnen. Da gibt es die
          Shortdrinks, die in Before- und After-Dinner-Drinks wiederum
          unterteilt sind. Sie zeichnen sich durch viel Stoff und wenig Beiwerk
          aus, also wenig im Glas, aber viel im Kopf! Mit Säften und Limonaden
          "gepanschte", ähh, gestreckte Alkoholika schimpfen sich Longdrinks.
          Und um die Leser dieses Buches vollends zu verwirren, werden Short-
          und Longdrinks je nach Zubereitungsart, Zutaten und Verwendung in
          inzwischen ca. 30 Gruppen eingeteilt, die sich zu verschiedenen
          Gelegenheiten anbieten. Kommen wir mal zurück nach Deutschland.
          <br />
          <br />
          Hier erhielt der Cocktail seinen Stellenwert erst in den 50igern weil
          wir nun mal ein Volk von Bier und Schnappestrinkern waren, und wat der
          Buur nicht kennt, dat freet der nicht! Was in London, Paris und New
          York also schon lääängs an der Tagesordnung war, fand Germany erst
          wirklich abgefahren und kultig in den 70igern, dadurch wuchs natürlich
          auch der Anteil an internationalen Getränken und die Bar, so wie wir
          sie heute kennen, hat sich einen festen Platz in der Gastronomie
          erobert, nur die Hahnenkämpfe sehen irgendwie inzwischen anders aus.
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

export default geschichte;
