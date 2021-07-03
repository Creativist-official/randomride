import React from "react";
import "../css/Legenda.css";
import ItemLegenda from "./ItemLegenda";

function Legenda() {
    const legenda = [
      {
        id: 1,
        icon: "marker",
        desc: "Punto di partenza",
        color: "#32CD19",
      },
      {
        id: 2,
        icon: "marker",
        desc: "Punto di arrivo",
        color: "#EA352B",
      },
      {
        id: 3,
        icon: "position",
        desc: "La tua posizione",
        color: "#007AFF",
      },
      {
        id: 4,
        icon: "time",
        desc: "Durata del viaggio",
        color: "var(--secondary)",
      },
      {
        id: 5,
        icon: "time",
        desc: "Orario di partenza",
        color: "var(--success)",
      },
      {
        id: 6,
        icon: "thumb",
        desc: "Offerta",
        color: "var(--secondary)",
      },
      {
        id: 7,
        icon: "richiesta",
        desc: "Richiesta",
        color: "var(--primary)",
      }
    ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="sf-pro-d-bold title f-s-25 ctext-primary a-center">
            Legenda icone
          </h1>
        </div>
          </div>
      {legenda.map(item => {
        return <ItemLegenda key={item.id} icon={item.icon} desc={item.desc} />
      })}
    </div>
  );
}

export default Legenda;
