import React, { useState } from "react";

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
        <div className="hoverGare">
          <p>
            {props.name} <br />
            <span style={{ marginTop: "200px" }}>
              {props.montant ? `Voyageur : ${props.montant}` : ""}
            </span>
          </p>
        </div>
      )}
      <div
        style={{
          backgroundColor: props.montant
            ? (props.montant < 1000 && "green") ||
              (props.montant > 1000 && props.montant < 5000 && "orange") ||
              (props.montant > 5000 && "red")
            : "black",
          width: props.montant
          ? (props.montant < 1000 && "1.5rem") ||
            (props.montant > 1000 && props.montant < 5000 && "2.5rem") ||
            (props.montant > 5000 && "3.7rem")
          : "1.8rem",
          height: props.montant
          ? (props.montant < 1000 && "1.5rem") ||
            (props.montant > 1000 && props.montant < 5000 && "2.5rem") ||
            (props.montant > 5000 && "3.7rem")
          : "1.8rem",
          borderRadius: "50%",
          opacity: "0.5"
        }}
      />
    </div>
  );
};

export default Marker;
