import React from "react";
import { steps } from "../../constant";

const TimeBar = (props) => {
  const nextStep = (event) => {
    if (props.newGare && props.newGare.length > 0) {
      props.getAffluence(event.target.value - 1);
      console.log(event.target.value - 1)
    }
  };

  return (
    <div>
      <div style={{width: "90%", margin: "0 auto"}}>
          {steps.map((e, i) => (
            <div id={e.time} key={i} style={{listStyle: "none", display: "flex", justifyContent: "space-between", marginBottom: i === 4 ? "0px" : "10px"}}>
              <span>
                {e.time}
              </span>
              <input type="radio" value={e.value} onClick={nextStep} style={{cursor:"pointer"}} name="timebar"/>
            </div>
          ))}
        </div>
    </div>
  );
};

export default TimeBar;

