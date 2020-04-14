import React, { Component } from "react";
/* import Oben from "../images/nachoben.png"; */
/* import { Link } from "react-router-dom"; */

const axios = require("axios");
export class Suche extends Component {
  state = {
    /* answers: {
      staerke: "",
      geschmack: "",
      basis: "",
      size: ""
    }, */
    classes: {
      staerke: ["btnred", "btnred", "btnred", "btnred"],
      geschmack: ["btnred", "btnred", "btnred", "btnred", "btnred", "btnred"],
      basis: ["btnred", "btnred", "btnred", "btnred", "btnred", "btnred"],
      size: ["btnred", "btnred", "btnred", "btnred"],
    },
    answersResponse: null,
    /* classList: "btnred" */
  };
  setAnswers = (e) => {
    this.setState({
      answers: {
        ...this.state.answers,
        [e.target.name.split("_")[0]]: e.target.name.split("_")[1],
      },
    });
  };

  getDrinks = async () => {
    if (localStorage.getItem("user")) {
      await axios
        .post("http://localhost:5000/drinks/filter", this.state.answers)
        .then((res) => {
          this.setState({ answersResponse: res.data });
        });
    } else {
      alert(
        "Sie sollten sich zuerst anmelden und Sie müssen um sich bei uns registrieren zu konnen volljährig sein, um diese Website betreten zu dürfen. Es gehört zu unserem Engagement für verantwortungsvolles Trinkverhalten."
      );
    }
  };

  resetBtn = (arrayLength) => {
    var resetedArray = [];
    for (let i = 0; i < arrayLength; i++) {
      resetedArray.push("btnred");
    }
    return resetedArray;
  };

  fixButton = (e, arrayLength) => {
    var group = e.target.name.split("_")[0];
    var btnElem = e.target.id;

    if (this.state.classes[group][btnElem] === "btnred") {
      this.setState({
        classes: {
          ...this.state.classes,
          [group]: {
            ...this.resetBtn(arrayLength),
            [[parseInt(btnElem)]]: "btnredclicked",
          },
        },
      });
    } else {
      this.setState({
        classes: {
          ...this.state.classes,
          [group]: {
            ...this.resetBtn(arrayLength),
            [[parseInt(btnElem)]]: "btnred",
          },
        },
      });
    }
  };

  render() {
    return (
      <div className="maincontainer">
        <div className="headline">
          <span>Wie soll der Cocktail sein?</span>
        </div>

        <br></br>

        <button className="btnw" type="text">
          Stärke:
        </button>
        <br></br>
        <div id="staerke">
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 4);
            }}
            className={`${this.state.classes.staerke[0]}`}
            type="submit"
            name="staerke_0%ig"
            id="0"
          >
            0%ig
          </button>
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 4);
            }}
            className={`${this.state.classes.staerke[1]}`}
            type="submit"
            name="staerke_normal"
            id="1"
          >
            Normal
          </button>
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 4);
            }}
            className={`${this.state.classes.staerke[2]}`}
            id="2"
            type="submit"
            name="staerke_stark"
          >
            Stark
          </button>
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 4);
            }}
            className={`${this.state.classes.staerke[3]}`}
            id="3"
            type="submit"
            name="staerke_extra-stark"
          >
            Extra-Stark
          </button>
        </div>

        <button className="btnw" type="text">
          Geschmack:
        </button>
        <br></br>
        <div id="geschmaeck">
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 6);
            }}
            className={`${this.state.classes.geschmack[0]}`}
            id="0"
            type="submit"
            name="geschmack_cremig"
          >
            Cremig
          </button>
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 6);
            }}
            className={`${this.state.classes.geschmack[1]}`}
            id="1"
            type="submit"
            name="geschmack_fruchtig"
          >
            Fruchtig
          </button>
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 6);
            }}
            className={`${this.state.classes.geschmack[2]}`}
            id="2"
            type="submit"
            name="geschmack_suess"
          >
            Süss
          </button>
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 6);
            }}
            className={`${this.state.classes.geschmack[3]}`}
            id="3"
            type="submit"
            name="geschmack_sauer"
          >
            Sauer
          </button>
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 6);
            }}
            className={`${this.state.classes.geschmack[4]}`}
            id="4"
            type="submit"
            name="geschmack_herb"
          >
            Herb
          </button>
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 6);
            }}
            className={`${this.state.classes.geschmack[5]}`}
            id="5"
            type="submit"
            name="geschmack_scharf"
          >
            Scharf
          </button>
        </div>

        <button className="btnw" type="text">
          Basis:
        </button>
        <br></br>
        <div id="basis">
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 6);
            }}
            className={`${this.state.classes.basis[0]}`}
            id="0"
            type="submit"
            name="basis_wodka"
          >
            Wodka
          </button>
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 6);
            }}
            className={`${this.state.classes.basis[1]}`}
            id="1"
            type="submit"
            name="basis_rum"
          >
            Rum
          </button>
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 6);
            }}
            className={`${this.state.classes.basis[2]}`}
            id="2"
            type="submit"
            name="basis_tequila"
          >
            Tequila
          </button>
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 6);
            }}
            className={`${this.state.classes.basis[3]}`}
            id="3"
            type="submit"
            name="basis_gin"
          >
            Gin
          </button>
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 6);
            }}
            className={`${this.state.classes.basis[4]}`}
            id="4"
            type="submit"
            name="basis_whiskey"
          >
            Whiskey
          </button>
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 6);
            }}
            className={`${this.state.classes.basis[5]}`}
            id="5"
            type="submit"
            name="basis_likoer"
          >
            Likör
          </button>
        </div>

        <button className="btnw" type="text">
          Size:
        </button>
        <br></br>
        <div id="size">
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 4);
            }}
            className={`${this.state.classes.size[0]}`}
            id="0"
            type="submit"
            name="size_kurz"
          >
            Kurz
          </button>
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 4);
            }}
            className={`${this.state.classes.size[1]}`}
            id="1"
            type="submit"
            name="size_lang"
          >
            Lang
          </button>
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 4);
            }}
            className={`${this.state.classes.size[2]}`}
            id="2"
            type="submit"
            name="size_extra-lang"
          >
            Extra-Lang
          </button>
          <button
            onClick={(e) => {
              this.setAnswers(e);
              this.fixButton(e, 4);
            }}
            className={`${this.state.classes.size[3]}`}
            id="3"
            type="submit"
            name="size_heiss"
          >
            Heiss
          </button>
        </div>

        <button
          onClick={async () => {
            await this.getDrinks();
            if (localStorage.getItem("user")) {
              this.props.history.push({
                pathname: "/gefunden",
                state: { searchResp: this.state.answersResponse },
              });
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            } else {
              this.props.history.push("/loginform");
            }
          }}
          className="btngreen"
          type="submit"
        >
          Senden
        </button>


      </div>
    );
  }
}

export default Suche;
