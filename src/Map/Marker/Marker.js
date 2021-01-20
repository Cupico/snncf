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
        <div class="hoverGare">
          <p>
            {props.name} <br />
            <span style={{ marginTop: "200px" }}>
              {props.montant ? `Voyageur : ${props.montant}` : ""}
            </span>
          </p>
        </div>
      )}
      <IoMdTrain
        style={{
          color: props.montant
            ? (props.montant < 1000 && "green") ||
              (props.montant > 1000 && props.montant < 5000 && "orange") ||
              (props.montant > 5000 && "red")
            : "black",
          fontSize: props.montant
          ? (props.montant < 1000 && "1.8rem") ||
            (props.montant > 1000 && props.montant < 5000 && "2.5rem") ||
            (props.montant > 5000 && "3.2rem")
          : "1.8rem",
        }}
      />
    </div>
  );
};

export default Marker;
