import React, { useState } from "react";

import { rera, rerb, rerc } from "../../constant";

const Legende = (props) => {
  const [toggleA, setToggleA] = useState(false);
  const [toggleB, setToggleB] = useState(false);
  const [toggleC, setToggleC] = useState(false);


  //let test = props.infoGare;

  const handleMarker = (event) => {
    if (event.target.id === "switch-1") {
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
          style={{ display: "flex", alignItems: "center", justifyContent:"center" }}
        >
       <img alt="rer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Paris_RER_A_icon.svg/1200px-Paris_RER_A_icon.svg.png" style={{width: "20px", height: "20px", margin: "0px"}}/>
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
          style={{ display: "flex", alignItems: "center", justifyContent:"center"  }}
        >
          <img alt="rer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Paris_RER_B_icon.svg/2048px-Paris_RER_B_icon.svg.png" style={{width: "20px", height: "20px", margin: "0px"}}/>
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
          style={{ display: "flex", alignItems: "center", justifyContent:"center"  }}
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Paris_RER_C_icon.svg/1024px-Paris_RER_C_icon.svg.png" alt="Fichier:Paris RER C icon.svg — Wikipédia" jsname="HiaYvf" jsaction="load:XAeZkd;" class="n3VNCb" data-noaft="1" style={{width: "20px", height: "20px", margin: "0px"}}/>
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
