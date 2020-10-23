import React, { useState } from "react";
import { IoMdTrain } from "react-icons/io";

const Marker = (props) => {
  const [display, setDisplay] = useState(false);

  const displayInfo = () => {
    setDisplay(true);
  };

  const closeDisplayInfo = () => {
    setDisplay(false);
  };

  return (
    <div
      onMouseEnter={props.infoGare ? displayInfo : undefined}
      onMouseLeave={closeDisplayInfo}
      style={{ zIndex: 9999, cursor: "pointer" }}
    >
      <IoMdTrain
        style={{
          color: props.infoGare
            ? props.infoGare.fields.montants < 6000
              ? "green"
              : "red"
            : "black",
          fontSize: "2.5rem",
        }}
      />
      {display && (
        <div
          style={{
            position: "absolute",
            width: "300px",
            background: "rgba(0, 0, 0, 0.5)",
            textAlign: "center",
            fontSize: "1.1rem",
          }}
        >
          <p style={{ color: "white", fontWeight: "600px" }}>
            {props.gare.name}, Ligne: {props.infoGare.fields.ligne}, Montants :{" "}
            {props.infoGare.fields.montants}
          </p>
        </div>
      )}
    </div>
  );
};

export default Marker;
