import React, { useState } from "react";
import { IoMdTrain } from "react-icons/io";

const Marker = (props) => {
  const [display, setDisplay] = useState(false);

  const enter = () => {
    setDisplay(true);
  };

  const leave = () => {
    setDisplay(false);
  };

  return (
    <div
      style={{ zIndex: 9999, cursor: "pointer" }}
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      {display && (
        <div
          style={{
            zIndex: 9999,
            color: "#ffffff",
            position: "absolute",
            bottom: "10px",
            background: "rgba(0,0,0,0.5)",
            width: "100px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign:'center'
          }}
        >
          <p>
            {props.name} <br />
            <span style={{marginTop:"20px"}}>{props.montant ?  `Voyageur : ${props.montant}` : ""}</span>
          </p>
        </div>
      )}
      <IoMdTrain
        style={{
          color: props.montant
            ? props.montant > 1000
              ? "red"
              : "green"
            : "black",
          fontSize: "1.8rem",
        }}
      />
    </div>
  );
};

export default Marker;
