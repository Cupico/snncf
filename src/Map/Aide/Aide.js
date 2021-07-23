import React, { useState } from "react";

const Aide = () => {
  const [toggleAide, setToggleAide] = useState(false);

  console.log(toggleAide);

  return (
    <div>
      <div className="container-aide-style-map">
        <button onClick={() => setToggleAide(true)} style={{borderRadius: "2px"}}>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="20px"
            height="20px"
            viewBox="0 0 510 510"
            style={{ enableBackground: "new 0 0 510 510" }}
            xmlSpace="preserve"
          >
            <g>
              <g id="help">
                <path
                  d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M280.5,433.5h-51v-51h51V433.5z
     M334.05,237.15L311.1,260.1c-20.399,17.851-30.6,33.15-30.6,71.4h-51v-12.75c0-28.05,10.2-53.55,30.6-71.4L290.7,214.2
    c10.2-7.65,15.3-20.4,15.3-35.7c0-28.05-22.95-51-51-51s-51,22.95-51,51h-51c0-56.1,45.9-102,102-102c56.1,0,102,45.9,102,102
    C357,201.45,346.8,221.85,334.05,237.15z"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>

      {toggleAide && (
        <div className="modal-aide">
          <button onClick={() => setToggleAide(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              viewBox="0 0 24 24"
              width="30"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
          <p style={{ fontWeight: "bold" }}>Qu'est ce que Safe Travel ?</p>
          <p>
            C'est une application web qui met en avant les affluences des gares
            des transports transiliens en fonction des horaires permettant aux
            utilisateurs de prévoir leur trajet de manière réfléchie pour ne pas
            se retrouver dans des trains bondés.
          </p>

          <p style={{ fontWeight: "bold" }}>Comment ça fonctionne ?</p>

          <p>
            Pour l'utiliser, il suffit de cliquer sur l'un des boutons
            correspondant à votre ligne (RER A, RER B...) et ensuite de préciser
            votre tranche horaire.
            <br />
            Vous pourrez donc connaître l'affluence de chaque gare en fonction
            de l'heure choisie en passant la souris sur la gare voulue.
          </p>
        </div>
      )}
    </div>
  );
};

export default Aide;
