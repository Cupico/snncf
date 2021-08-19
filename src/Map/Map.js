import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

import "./Map.css";
import "./Legende/Legende.css";

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

  const [testBtn, setTestBtn] = useState(false);

  const [testBtn2, setTestBtn2] = useState(false);

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

  const animeLignes = () => {
    let test = document.getElementById("animeLignes");
    setTestBtn((prevState) => !prevState);
    if (testBtn) {
      test.classList.remove("test");
      test.classList.add("test_2");
    } else {
      test.classList.remove("test_2");
      test.classList.add("test");
    }
  };

  const animeHoraire = () => {
    let test = document.getElementById("animeHoraire");
    setTestBtn2((prevState) => !prevState);
    if (testBtn2) {
      test.classList.remove("test");
      test.classList.add("test_3");
    } else {
      test.classList.remove("test_3");
      test.classList.add("test");
    }
  };

  //let testo = newGare && newGare.length > 0 ? newGare : [];

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

      <div class="logo">
    &nbsp;
      </div>

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
        <div className="block-bar test_2" id="animeLignes">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-10px",
            }}
            onClick={animeLignes}
          >
            <p style={{ cursor: "pointer" }}>Lignes de transport</p>
            <div>
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="15px"
                  height="15px"
                  viewBox="0 0 451.847 451.847"
                  style={{ enableBackground: "new 0 0 451.847 451.847" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <Legende setNewGare={setNewGare} />
        </div>

        <div className="block-bar_2 test_3" id="animeHoraire">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-10px",
            }}
            onClick={animeHoraire}
          >
            <p style={{ cursor: "pointer" }}>Tranches horaires</p>
            <div>
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="15px"
                  height="15px"
                  viewBox="0 0 451.847 451.847"
                  style={{ enableBackground: "new 0 0 451.847 451.847" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <TimeBar newGare={newGare} getAffluence={getAffluence} />
        </div>

        <div className="block-legende">
          <div className="affluence-title" style={{ textAlign: "center" }}>
            <p>Affluence</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="inferieur">
              <p>&#60; à 1000</p>
            </div>

            <div className="milieu">
              <p>Entre 1000 et 5000</p>
            </div>

            <div className="superieur">
              <p>&#62; à 5000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
