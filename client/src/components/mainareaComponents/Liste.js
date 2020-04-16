import React, { Component } from "react";
/* import Oben from "../images/nachoben.png"; */
import { Link } from "react-router-dom";
import { Header, Image, Modal } from "semantic-ui-react";
import axios from "axios";
//import "semantic-ui-css/semantic.min.css";

export class Liste extends Component {
  state = {
    cocktails: [],
  };
  componentDidMount() {
    axios
      .post("http://localhost:5000/drinks/filter")
      .then((result) => {
        this.setState({
          ...this.state,
          cocktails: result.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="maincontainer">
        <div className="headline">
          <span>Liste der alle rezepte auf HOMEBAR</span>
        </div>
        <div style={{ paddingTop: "10px" }}>
          {this.state.cocktails
            ? this.state.cocktails.map((cocktail, index) => (
                <Modal
                  trigger={
                    <img
                      src={`http://localhost:5000/images/${cocktail.cpic}`}
                      alt="cocktail_pic"
                      style={{
                        marginRight: "10px",
                        width: "10%",
                        marginBottom: "15px",
                        borderBottom: "solid white 2px",
                      }}
                    />
                  }
                  key={index}
                  centered={true}
                  closeIcon={true}
                  style={{
                    display: "flex !important",
                    flexDirection: "column !important",
                  }}
                >
                  {/* <Modal.Header className="modal_header">
                    {cocktail.cname}
                  </Modal.Header> */}
                  <Modal.Content className="modal_content">
                    <Image
                      size="small"
                      src={`http://localhost:5000/images/${cocktail.cpic}`}
                    />

                    <span style={{ display: "inline-block !important" }}>
                      How to make {cocktail.cname}:
                      <br />
                      {cocktail.zubreitung}
                    </span>
                  </Modal.Content>
                </Modal>
              ))
            : null}
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

        {/* <a href="#top">
          {" "}
          <img className="nachoben" src={Oben} alt="Nach oben" />
        </a> */}
      </div>
    );
  }
}

export default Liste;
