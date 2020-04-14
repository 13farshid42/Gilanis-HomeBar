import React, { Component } from "react";
/* import Oben from "../images/nachoben.png"; */
//import GeschPic from "../images/14A.JPG";
import EqPic from "../images/equipment-gilanis.png";
import { Link } from "react-router-dom";

export class equipment extends Component {
  render() {
    return (
      <div className="maincontainer">
        <div className="headline">
          <span>Das Equipment Deiner Bar</span>
        </div>
        <img className="blende2" src={EqPic} alt="Mixtechnik" />
        <p className="inhalttextLinksBig">
          Sie muß nicht einer Profibar ähneln, aber mitunter gibt es doch einige
          Möglichkeiten, eine Hausbar zu optimieren oder tunen, wie der
          Ottonormaluser sagt.
          <br />
          <br />
          Da ist als wichtigstes Gerät der Shaker, wobei Profis meistens mit
          einem Boston-Shaker arbeiten. Er besteht aus einem größeren
          Edelstahlbecher und einem kleineren aus dickem Kristallglas. Anfänger
          aufgepasst: So ein Kristallglass ist schneller kaputt, als Du gucken
          kannst; schööön vorsichtig!
          <br />
          <br />
          Ein guter Barkeeper gießt exakt die genaue Menge "aus der Hüfte", wer
          aber nicht so versiert ist, kommt an einem cl-Maß, das im oberen Teil
          4cl, im unteren 2cl mißt, nicht vorbei. Denn bereits ein kleines
          Zuviel oder Zuwenig kann einen Drink völlig ruinieren, und nichts ist
          schlimmer als wenn dein Gegenüber glaubt, dass Du Ihn oder Sie
          besoffen machen willst. Cocktails werden in der Regel auch an normalen
          Tagen mit 6 cl Alkoholika berechnet, wobei sich die Flüssigkeitsmenge
          durch beim Schütteln oder Rühren geschmolzenes Eis um 1-2 cl erhöht.
          Außerdem brauchst Du unbedingt einen Strainer (Barsieb), da jeder im
          Shaker oder Rührglas zubereitete Drink abgeseiht wird.
          <br />
          <br />
          Und ganz wichtig: Benutze Eis niemals zweimal! Eis, was zum Mixen
          gebraucht wurde, landet niemals im Glas, sondern im Ausguss!
          <br />
          <br />
          Der Strainer sorgt durch seine gelochte Platte und die sich jeder
          Shaker- und Glasgröße anpassende Spiralfeder dafür, daß kein Eis ins
          Glas rutschen kann. Zum Rühren wie zum Abmessen braucht man Barlöffel
          mit ihrem langen Stiel, mit denen man die Zutaten von unten nach oben
          verrührt. Das geht am einfachsten, wenn man den Rührlöffel verkehrt
          herum verwendet. Für alle Blitzmerker, nicht den Stiel ins Glas
          rammen, sondern die Masse mit dem Löffelrücken von unten nach oben
          heben, jaaa, so ists gut.
          <br />
          <br />
          Ferner brauchst Du natürlich Trinkhalme in unterschiedlichen Größen
          und Stärken sowie Spießchen für die Oliven, Kirschen oder
          Perlzwiebeln, die in die jeweiligen Drinks gestellt werden. Für unsere
          Retrofreaks gibt es da noch ein besonderes Schmankerl, bei Manufaktum
          http://www.manufaktum.de gibt es noch echte "Stroh"-halme... Wenn Du
          tierisch darauf stehst,Tropical- oder Fruchtdrinks zu mixen, gehört
          auch ein Blender an die Sonne. Wenn du aber nicht wie Wir täglich
          deinen eigenen huldigen willst (ist halt eine Finanzfrage), leih dir
          bei Muttern einfach einen Küchenmixer. Eisbehälter, Eiszange oder
          Barschaufel gehören ebenfalls in deine Grundausstattung. Was Du an
          weiterenm Equipment zum Mixen brauchst, gibt's ebenfalls bei Mutter.
          <br />
          <br />
          Vom Schneidbrett und Obst-Messer über Korkenzieher, Zitruspresse und
          Flaschenöffner bis zur Muskatreibe. Da gibt es sogar noch ne Menge
          mehr, aber wir sind nicht zum Kochen hier, und alles was Du dir
          leihst, musst Du auch wieder putzen. Für angebrochenen Sekt oder
          Champagner gibt es zwei Möglichkeiten: Die Fery- Methode: Verschließe
          die Flasche sorgfältig mit einem Sektverschluss. Die Basti-Methode:
          Nicht lang schnacken, Kopp in Nacken! Für die Zubereitung von Crushed
          Ice gibt es auch etliche Methoden, aber die wirkungsvollste ist
          folgende: Ein mit Muskelschmalz betriebener Eiscrusher gibt es schon
          für 20 Euro. Ach ja, natürlich oben Eiswürfel rein, kurbeln, unten
          Crushed Ice raus.
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
        {/*  <a href="#top">
          {" "}
          <img className="nachoben" src={Oben} alt="Nach oben" />
        </a> */}
      </div>
    );
  }
}

export default equipment;
