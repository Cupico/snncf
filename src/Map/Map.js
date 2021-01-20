import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

import "./Map.css";

import Marker from "./Marker/Marker";
import Legende from "./Legende/Legende";
import TimeBar from "./TimeBar/TimeBar";

import { googleKey } from "./../api/apiGoogle.js";

import { steps, rera } from "../constant";

import { getAffluenceRER } from "../callApi/callApi";

function Map() {
  const [map, setMap] = useState({
    center: {
      lat: 48.85,
      lng: 2.3833,
    },
    zoom: 11,
  });

  //const [gareGeo, setGareGeo] = useState(ligne1constante);

  const [isLoading, setIsLoading] = useState(false);

  const [newGare, setNewGare] = useState([]);

  const getAffluence = (value) => {
    setIsLoading(true);
    const NoDataGare = 300;
    let array = [...newGare];
    if (rera && rera.length > 0) {
      for (let i = 0; i < rera.length; i++) {
        getAffluenceRER(rera[i].code, steps[value].time)
          .then((res) => {
            const affluence =
              res.records.length && res.records.length > 0
                ? res.records[0].fields.montants
                : NoDataGare;
            array[i] = {
              name: rera[i].name,
              montants: affluence,
              lat: rera[i].lat,
              lng: rera[i].lng,
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
    <div style={{ height: "100vh", width: "100%", zIndex: 1 }}>
      {isLoading && (
        <div className="spinner">
          <span class="ouro">
            <span className="left">
              <span className="anim"></span>
            </span>
            <span className="right">
              <span className="anim"></span>
            </span>
          </span>
        </div>
      )}

      <GoogleMapReact
        bootstrapURLKeys={{ key: googleKey }}
        defaultCenter={map.center}
        defaultZoom={map.zoom}
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
              //background: linear-gradient(#e66465, #9198e5);
            />
          ))}
      </GoogleMapReact>

      <div class="container-legende">
        <div class="block-bar"><TimeBar newGare={newGare} getAffluence={getAffluence} /></div>

        <div class="block-legende"><Legende setNewGare={setNewGare}/></div>
      </div>

    </div>
  );
}

export default Map;
