import React, { useState } from "react";

import { rera, rerb, rerc } from "../../constant";

const Legende = (props) => {
  const [toggleA, setToggleA] = useState(false);
  const [toggleB, setToggleB] = useState(false);
  const [toggleC, setToggleC] = useState(false);


  //let test = props.infoGare;

  const handleMarker = (event) => {
    if (event.target.id === "switch-1") {
      props.setStep(0);
      setToggleB(false);
      setToggleC(false);
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
      setToggleC(false);
      setToggleB((prevState) => !prevState);
      if (!toggleB) {
        props.setNewGare(rerb);
      } else {
        props.setNewGare([]);
      }
    }
    if (event.target.id === "switch-3") {
      props.setStep(0);
      setToggleA(false);
      setToggleB(false);
      setToggleC((prevState) => !prevState);
      if (!toggleC) {
        props.setNewGare(rerc);
      } else {
        props.setNewGare([]);
      }
    }
  };


  return (
    <div>
      <div>
        <div
          className="affluence-title togglebtn"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <span className="rera">RER A</span>
          </div>
          <div className="switch-container" style={{marginLeft:"20px"}}>
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
        </div>

        <div
          className="affluence-title togglebtn"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <span className="rera">RER B</span>
          </div>
          <div className="switch-container" style={{marginLeft:"20px"}}>
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
        </div>
        <div
          className="affluence-title togglebtn"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <span className="rera">RER C</span>
          </div>
          <div className="switch-container" style={{marginLeft:"20px"}}>
            <label>
              <input
                id="switch-3"
                checked={toggleC}
                onChange={handleMarker}
                className="switch"
                type="checkbox"
              />
              <div>
                <div></div>
              </div>
            </label>
          </div>
        </div>
      </div>
      {/*props.infoGare &&
        props.infoGare.length > 0 &&
        test.map((e, i) => (
          <div key={i}>
            <p>
              {e.fields.nom_gare} | Montants : {e.fields.montants} | Ligne :{" "}
              {e.fields.ligne} | Date : {e.fields.date_comptage}
            </p>
          </div>
        ))*/}
    </div>
  );
};

export default Legende;
