import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

import "./Map.css";

import Marker from "./Marker/Marker";
import Legende from "./Legende/Legende";
import TimeBar from "./TimeBar/TimeBar";
import Aide from "./Aide/Aide";

import { googleKey, style1, style2 } from "./../api/apiGoogle.js";

import { steps } from "../constant";

import { getAffluenceRER } from "../callApi/callApi";

const map = {
  center: {
    lat: 48.85,
    lng: 2.3833,
  },
  zoom: 11,
};

function Map() {
  //const [gareGeo, setGareGeo] = useState(ligne1constante);
  const [mapStyle, setMapStyle] = useState(style1);

  const [isLoading, setIsLoading] = useState(false);

  const [newGare, setNewGare] = useState([]);

  const [step, setStep] = useState(0);

  const getAffluence = (value) => {
    setIsLoading(true);
    const NoDataGare = 300;
    let array = [...newGare];
    if (newGare && newGare.length > 0) {
      for (let i = 0; i < newGare.length; i++) {
        getAffluenceRER(newGare[i].code, steps[value].time)
          .then((res) => {
            const affluence =
              res.records.length && res.records.length > 0
                ? res.records[0].fields.montants
                : NoDataGare;
            array[i] = {
              name: newGare[i].name,
              montants: affluence,
              lat: newGare[i].lat,
              lng: newGare[i].lng,
              img: newGare[i].img,
            };
          })
          .catch((err) => console.log(err));
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 4000);

      setTimeout(() => {
        setNewGare(array);
      }, 4000);
    }
  };

  

  return (
    <div id="Map" className="Map">
      {isLoading && (
        <div className="spinner">
          <span className="ouro">
            <span className="left">
              <span className="anim"></span>
            </span>
            <span className="right">
              <span className="anim"></span>
            </span>
          </span>
        </div>
      )}

      <div className="container-button-style-map">
        <div className="btn-map-style1">
          <button
            onClick={() => setMapStyle(style1)}
            style={
              mapStyle === style1
                ? { border: "1px solid white" }
                : { border: "1px solid transparent" }
            }
          ></button>
        </div>
        <div className="btn-map-style2">
          <button
            onClick={() => setMapStyle(style2)}
            style={
              mapStyle === style2
                ? { border: "1px solid white" }
                : { border: "1px solid transparent" }
            }
          ></button>
        </div>
      </div>

      <Aide />

      <GoogleMapReact
        bootstrapURLKeys={{ key: googleKey }}
        defaultCenter={map.center}
        defaultZoom={map.zoom}
        options={{
          styles: mapStyle,
        }}
      >
        {newGare &&
          newGare.length > 0 &&
          newGare.map((e, i) => (
            <Marker
              key={i}
              lat={e.lat}
              lng={e.lng}
              montant={e.montants}
              name={e.name}
              img={e.img}
              //background: linear-gradient(#e66465, #9198e5);
            />
          ))}
      </GoogleMapReact>

      <div className="container-legende">
        <div className="block-bar">
          <TimeBar
            step={step}
            setStep={setStep}
            newGare={newGare}
            getAffluence={getAffluence}
          />
        </div>

        <div className="block-legende">
          <Legende setNewGare={setNewGare} setStep={setStep} />
        </div>
      </div>
    </div>
  );
}

export default Map;
