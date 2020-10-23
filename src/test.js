import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";



export function MapContainer(props) {
  return (
    <Map google={props.google} zoom={10}>
      <Marker position={{ lat: 20.02, lng: -77.01 }} />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: googleKey,
})(MapContainer);

// APP

import React from "react";
import "./App.css";

import GoogleApiWrapper from "./test";

function App() {
  return (
    <div className="App">
      <GoogleApiWrapper />
    </div>
  );
}

export default App;

// 'AIzaSyCnLKbU8bgG8LHDV_wZ7R4xBws_pGBp1ww'
