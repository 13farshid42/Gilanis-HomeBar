import React, { Component } from "react";
import Oben from "../images/nachoben.png";

const axios = require("axios");
export class Addform extends Component {
  state = {
    newDrink: {
      cname: "",
      basis: "",
      staerke: "",
      geschmack: "",
      size: "",
      zutaten: [],
      zubreitung: "",
      technik: "",
      eis: "",
      menge: "",
      zutat: "",

      cpic: "",
      cvid: ""
    }
  };

  changeHandler = e => {
    this.setState({
      newDrink: {
        ...this.state.newDrink,
        [e.target.id]: e.target.value
      }
    });
  };

  changeHandlerFile = (timePrefix, e) => {
    try {
      this.setState({
        ...this.state,
        newDrink: {
          ...this.state.newDrink,
          cpic:
            timePrefix.toString().slice(0, 9) + "__" + e.target.files[0].name
        }
      });

      var formData = new FormData();
      formData.append("picture", e.target.files[0]);
      axios
        .post(`http://localhost:5000/drinks/uploadpic`, formData)
        .then(resp1 => console.log(resp1));
    } catch (err) {
      console.log(err);
    }
  };

  zutatenContent = () => {
    this.setState({
      newDrink: {
        ...this.state.newDrink,
        zutaten: [
          ...this.state.newDrink.zutaten,
          { menge: this.state.newDrink.menge, zutat: this.state.newDrink.zutat }
        ],
        menge: "",
        zutat: ""
      }
    });
  };

  addDrinks = () => {
    const formData = new FormData();
    formData.append("file", this.state.newDrink.cpic);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    axios
      .post(
        "http://localhost:5000/drinks/add",
        this.state.newDrink,
        formData,
        config
      )
      .then(res => {
        console.log(res);
      });
  };

  render() {
    return (
      <div className="Add new Coktail to the List">
        <div className="headline">
          <span>Administration</span>
        </div>
        <div className="addcontainer">
          <form
            className="addform"
            onSubmit={e => {
              /* e.preventDefault(); */
              this.addDrinks();
            }}
          >
            <label className="fildlable">Cocktail Name*:</label>
            <input
              className="addfild"
              id="cname"
              type="text"
              onChange={this.changeHandler}
              placeholder="Auf Rechtschreibung achten"
              required
            />
            <br></br>
            <br></br>
            <div className="schalter">
              <select
                className="wahlfeld"
                id="basis"
                onChange={this.changeHandler}
                required
              >
                <option value="">Basis*</option>
                <option value="wodka">Wodka</option>
                <option value="rum">Rum</option>
                <option value="tequila">Tequila</option>
                <option value="gin">Gin</option>
                <option value="whiskey">Whiskey</option>
                <option value="likoer">Likör</option>
                <option value="0%ig">0%ig</option>
              </select>

              <select
                className="wahlfeld"
                id="staerke"
                onChange={this.changeHandler}
                required
              >
                <option value="">Stärke*</option>
                <option value="0%ig">0%ig</option>
                <option value="normal">Normal</option>
                <option value="stark">Stark</option>
                <option value="extra-stark">Extra-Stark</option>
              </select>
            </div>
            <br></br>

            <div className="schalter">
              <select
                className="wahlfeld"
                id="geschmack"
                onChange={this.changeHandler}
                required
              >
                <option value="">Geschmack*</option>
                <option value="cremig">Cremig</option>
                <option value="fruchtig">Fruchtig</option>
                <option value="suess">Süss</option>
                <option value="sauer">Sauer</option>
                <option value="herb">Herb</option>
                <option value="scharf">Scharf</option>
              </select>
              <br></br>

              <select
                className="wahlfeld"
                id="size"
                onChange={this.changeHandler}
                required
              >
                <option value="">Size* </option>
                <option value="kurz">Kurz</option>
                <option value="lang">Lang</option>
                <option value="extra-lang">Extra-Lang</option>
                <option value="heiss">Heiss</option>
              </select>
            </div>
            <br></br>
            <label className="fildlable">Rezept:</label>
            <div className="zutaten">
              <input
                className="addfildzutaten"
                id="menge"
                type="text"
                value={this.state.newDrink.menge}
                placeholder="Menge in cl*"
                onChange={this.changeHandler}
              />
              <input
                className="addfildzutaten"
                id="zutat"
                type="text"
                value={this.state.newDrink.zutat}
                placeholder="Zutat*"
                onChange={this.changeHandler}
              />
              <button
                className="addzutat"
                onClick={e => {
                  e.preventDefault();
                  this.zutatenContent();
                }}
                required
              >
                +
              </button>
            </div>
            <br></br>
            <div className="uebertrag">
              {this.state.newDrink.zutaten
                ? this.state.newDrink.zutaten.map((item, index) => {
                    console.log(item.menge + "_" + item.zutat);
                    return (
                      <span id="zutatenuebertrag" key={index}>
                        {item.menge + " " + item.zutat} <br></br>
                      </span>
                    );
                  })
                : null}
            </div>
            <br></br>
            <label className="fildlable">Zubreitung*:</label>
            <textarea
              className="addfildzubreitung"
              id="zubreitung"
              type="input"
              onChange={this.changeHandler}
              required
            />
            <br></br>
            <br></br>
            <div className="schalter">
              <select
                className="wahlfeld"
                id="technik"
                onChange={this.changeHandler}
                required
              >
                <option value="">Technik* </option>
                <option value="shaken">Shaken</option>
                <option value="blenden">Blenden</option>
                <option value="ruhren">Ruhren</option>
                <option value="schichten">Schichten</option>
              </select>
              <br></br>
              <select
                className="wahlfeld"
                id="eis"
                onChange={this.changeHandler}
                required
              >
                <option value="">Servie eis*</option>
                <option value="wuerfeleis">Wuerfeleis</option>
                <option value="crasheis">Crasheis</option>
                <option value="ohne eis">Ohne Eis</option>
              </select>
            </div>
            <br></br>

            {/* =======================add image================= */}
            <label className="fildlable">Cocktail Foto*:</label>
            <input
              className="addfile"
              id="cpic"
              type="file"
              onChange={e => {
                const RegTime = Date.now();
                this.changeHandlerFile(RegTime, e);
              }}
              required
            />
            <br></br>
            <br></br>
            <label className="fildlable">Video:</label>
            <input
              className="addfild"
              id="cvid"
              type="text"
              onChange={this.changeHandler}
              placeholder="Youtube Video-ID"
            />
            <br></br>
            <br></br>

            <input
              className="addbutton"
              type="submit"
              value="Add this new Drink to the Database"
            />
            <br></br>
            <br></br>
            <br></br>
          </form>
        </div>
        <a href="#top">
          {" "}
          <img className="nachoben" src={Oben} alt="Nach oben" />
        </a>
      </div>
    );
  }
}

export default Addform;
