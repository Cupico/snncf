import React, { useState } from "react";

import { getAffluence } from "./../../callApi/callApi";

import { steps, gares } from "./../../constant";

const TimeBar = (props) => {
  const [step, setStep] = useState(0);

  const nextStep = (event) => {
    let newArr = [...props.infoGare];
    setStep(event.target.value);
    const time = steps[event.target.value - 1].time;
    for (let n = 0; n < gares.length; n++) {
      getAffluence(time, gares[n].code)
        .then((res) => {
          newArr[n] = res.records[0];
          setTimeout(() => {
            props.setInfoGare(newArr);
          }, 500);
          //loader
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div style={{ width: "90%", margin: "4% auto", marginLeft:'10%'}}>
      <div className="progress">
        <ul>
          {steps.map((e, i) => (
            <li
              className={step >= e.value + 1 ? "complete" : ""}
              value={e.value}
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
