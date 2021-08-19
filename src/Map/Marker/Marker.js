import React from "react";

const Marker = (props) => {
  return (
    <div
      style={{ zIndex: "99999 !important", cursor: "pointer" }}
      className="marker"
    >
      <div className="hoverGare">
        <div className="container-card-img">
          <img src={props.img} alt="Background card" />
        </div>
        <p>
          {props.name} <br />
          <span
            className="montant"
            style={{
              marginTop: "10px",
              color: props.montant
                ? props.montant < 1000
                  ? "#FBD256"
                  : props.montant > 1000 && props.montant < 5000
                  ? "#F0842C"
                  : "#A31700"
                : "#20222B",
            }}
          >
            {props.montant ? props.montant : ""}
          </span>
          <br />
          <span style={{ color: "#707070", fontSize: "1.1rem" }}>
            Voyageurs
          </span>
        </p>
      </div>

      <div
        style={{
          backgroundColor: props.montant
            ? (props.montant < 1000 && "#FBD256") ||
              (props.montant > 1000 && props.montant < 5000 && "#F0842C") ||
              (props.montant > 5000 && "#A31700")
            : "#20222B",
          width: props.montant
            ? (props.montant < 1000 && "1.4rem") ||
              (props.montant > 1000 && props.montant < 5000 && "2.1rem") ||
              (props.montant > 5000 && "3.2rem")
            : "1.8rem",
          height: props.montant
            ? (props.montant < 1000 && "1.4rem") ||
              (props.montant > 1000 && props.montant < 5000 && "2.1rem") ||
              (props.montant > 5000 && "3.2rem")
            : "1.8rem",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default Marker;
