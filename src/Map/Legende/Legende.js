import React from "react";
import "./Legende.css";

const Legende = (props) => {
  let test = props.infoGare;
  console.log(test);

  return (
    <div style={{ width: "100%", textAlign:'center'}}>
      Légende <br /> Visiteurs : <br />
      Inférieur à 6000 en <span style={{ color: "green" }}>vert</span>
      <br />
      Supérieur à 6000 en <span style={{ color: "red" }}>rouge</span>
      {props.infoGare &&
        props.infoGare.length > 0 &&
        test.map((e, i) => (
          <div key={i}>
            <p>
              {e.fields.nom_gare}, Montants :{e.fields.montants}, Ligne :{" "}
              {e.fields.ligne}, Date : {e.fields.date_comptage}
            </p>
          </div>
        ))}
      <br />
    </div>
  );
};

export default Legende;
