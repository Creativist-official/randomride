import React from "react";
import { Link } from "react-router-dom";

function StartButton() {
  return (
    <button className="btn start-btn bgc-secondary ctext-light mt-25p">
      <Link to="/tutorial" className="SFPDBold shadow">
        Inizia a viaggiare
      </Link>
    </button>
  );
}

export default StartButton;
