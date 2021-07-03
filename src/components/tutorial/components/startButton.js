import React from "react";
import { Link } from "react-router-dom";

function StartButton(props) {
  if (props.margintop) {
    return (
      <button className="btn start-btn bgc-secondary ctext-light shadow mt-25p">
        <Link to="/tutorial" className="SFPDBold">
          {props.text}
        </Link>
      </button>
    );
  } else {
    return (
      <button className="btn btn-sec bgc-secondary ctext-light shadow">
        <Link to={props.to} className="SFPDBold">
          {props.text}
        </Link>
      </button>
    );
  }
  
}

export default StartButton;
