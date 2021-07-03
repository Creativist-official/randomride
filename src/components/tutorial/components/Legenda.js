import React from "react";

import ItemLegenda from "./ItemLegenda";
import StartButton from "./startButton";

import position from "../img/icons/position.svg";
import marker from "../img/icons/marker.svg";
import marker_green from "../img/icons/marker_green.svg";
import offerta from "../img/icons/offerta.svg";
import richiesta from "../img/icons/richiesta.svg";
import time from "../img/icons/time.svg";
import time_green from "../img/icons/time_green.svg";

function Legenda() {
    const legenda = [
      {
        id: 1,
        icon: { marker },
        name: "marker",
        desc: "Punto di partenza",
      },
      {
        id: 2,
        icon: { marker_green },
        name: "marker_green",
        desc: "Punto di arrivo",
      },
      {
        id: 3,
        icon: { position },
        name: "position",
        desc: "La tua posizione",
      },
      {
        id: 4,
        icon: { time },
        name: "time",
        desc: "Durata del viaggio",
      },
      {
        id: 5,
        icon: { time_green },
        name: "time_green",
        desc: "Orario di partenza",
      },
      {
        id: 6,
        icon: { offerta },
        name: "offerta",
        desc: "Offerta",
      },
      {
        id: 7,
        icon: { richiesta },
        name: "richiesta",
        desc: "Richiesta",
      },
    ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="sf-pro-d-bold legenda f-s-25 ctext-primary a-center">
            Legenda icone
          </h1>
        </div>
      </div>
      {legenda.map((item) => {
        return (
          <ItemLegenda
            key={item.id}
            icon={item.icon}
            name={item.name}
            desc={item.desc}
          />
        );
      })}

      <div className="d-flex justify-content-center">
        <StartButton text="Ottimo!" to="/login"/>
      </div>
    </div>
  );
}

export default Legenda;
