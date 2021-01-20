import React, { useState } from "react";

import { steps } from "./../../constant";

const TimeBar = (props) => {
  const [step, setStep] = useState(0);

  const nextStep = (event) => {
    if(props.newGare && props.newGare.length > 0){
      setStep(event.target.value);
      props.getAffluence(event.target.value - 1);
    }
  };

  return (
    <div style={{ width: "90%", margin: "2% auto 1% 10%" }}>
      <div className="progress">
        <ul>
          {steps.map((e, i) => (
            <li
              className={step >= e.value + 1 ? "complete" : ""}
              value={e.value}
              id={e.time}
              key={i}
              onClick={nextStep}
            >
              <span className={step === e.value ? "current" : undefined}>
                {e.time}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimeBar;
