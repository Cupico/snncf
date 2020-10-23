import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

import Marker from "./Marker/Marker";
import Legende from "./Legende/Legende";
import TimeBar from "./TimeBar/TimeBar";

import { googleKey } from "./../api/apiGoogle.js";

import { gares } from "../constant";

function Map() {
  const [infoGare, setInfoGare] = useState([]);
  const [map, setMap] = useState({
    center: {
      lat: 48.9167,
      lng: 2.3833,
    },
    zoom: 11,
  });

  console.log(infoGare);

  return (
    <div style={{ height: "70vh", width: "100%", zIndex: 0 }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleKey }}
        defaultCenter={map.center}
        defaultZoom={map.zoom}
      >
        {gares.map((e, i) => (
          <Marker
            key={i}
            lat={e.lat}
            lng={e.lng}
            gare={e}
            infoGare={infoGare[i]}
            //background: linear-gradient(#e66465, #9198e5);
          />
        ))}
      </GoogleMapReact>

      <TimeBar infoGare={infoGare} setInfoGare={setInfoGare} />

      <Legende infoGare={infoGare} setInfoGare={setInfoGare} />
    </div>
  );
}

export default Map;
