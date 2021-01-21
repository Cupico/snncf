import React, { useState } from "react";
import "./Legende.css";

import { rera } from "../../constant";

const Legende = (props) => {
  const [toggle, setToggle] = useState(false);

  let test = props.infoGare;

  const handleMarker = () => {
    setToggle((prevState) => !prevState);
    if (!toggle) {
      props.setNewGare(rera);
    } else {
      props.setNewGare([]);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="div-legende">
        <div className="affluence-title togglebtn">
          <div className="chk-dv">
            <input
              type="checkbox"
              className="toggle-btn"
              id="switch-1"
              onClick={handleMarker}
            />
            <label className="toggle-action" htmlFor="switch-1"></label>
          </div>
          <span className="rera">Rer A</span>
        </div>
        <div className="affluence-title">
          <p>Affluence</p>
        </div>
        <div className="inferieur">
          <p>
            &#60; à 1000 en <span>vert</span>
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
