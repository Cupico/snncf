import React, { useState } from "react";
import "./Legende.css";

import { rera, rerb } from "../../constant";

const Legende = (props) => {
  const [toggleA, setToggleA] = useState(false);
  const [toggleB, setToggleB] = useState(false);

  let test = props.infoGare;

  const handleMarker = (event) => {
    if (event.target.id === "switch-1") {
      props.setStep(0);
      setToggleB(false);
      setToggleA((prevState) => !prevState);
      if (!toggleA) {
        props.setNewGare(rera);
      } else {
        props.setNewGare([]);
      }
    }
    if (event.target.id === "switch-2") {
      props.setStep(0);
      setToggleA(false);
      setToggleB((prevState) => !prevState);
      if (!toggleB) {
        props.setNewGare(rerb);
      } else {
        props.setNewGare([]);
      }
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="div-legende">
        <div className="affluence-title togglebtn">
          <div className="switch-container">
            <label>
              <input
                id="switch-1"
                checked={toggleA}
                onChange={handleMarker}
                className="switch"
                type="checkbox"
              />
              <div>
                <div></div>
              </div>
            </label>
          </div>
          <span className="rera">Rer A</span>
        </div>

        <div className="affluence-title togglebtn">
        <div className="switch-container">
            <label>
              <input
                id="switch-2"
                checked={toggleB}
                onChange={handleMarker}
                className="switch"
                type="checkbox"
              />
              <div>
                <div></div>
              </div>
            </label>
          </div>
          <span className="rera">Rer B</span>
        </div>
        <div className="affluence-title">
          <p>Affluence</p>
        </div>
        <div className="inferieur">
          <p>
            &#60; à 1000 en <span>jaune</span>
          </p>
        </div>
        <br />
        <div className="milieu">
          <p>
            Entre 1000 et 5000 en <span>orange</span>
          </p>
        </div>
        <br />
        <div className="superieur">
          <p>
            &#62; à 5000 en <span>rouge</span>
          </p>
        </div>
      </div>
      {props.infoGare &&
        props.infoGare.length > 0 &&
        test.map((e, i) => (
          <div key={i}>
            <p>
              {e.fields.nom_gare} | Montants : {e.fields.montants} | Ligne :{" "}
              {e.fields.ligne} | Date : {e.fields.date_comptage}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Legende;
