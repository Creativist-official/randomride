import React from "react";
import "../css/Page.css";

import foglie from "../img/Foglie-sx.png";

function Page(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="title py-40 sf-pro-d-bold a-center f-s-25 ctext-primary">
              {props.title}
            </h1>
          </div>
          <div className="col-12 justify-content-center">
            {props.padding === true && (
              <h3 className="sf-pro-d-SBold a-center f-s-21 py-20 p-b-23">
                {props.description}
              </h3>
            )}
            {props.padding === false && (
              <h3 className="sf-pro-d-SBold a-center f-s-21 py-50 p-b-23">
                {props.description}
              </h3>
            )}
          </div>
        </div>
      </div>
      {props.foglie === true && (
        <img class="p-absolute plant" src={foglie} alt="foglia"></img>
      )}
      <img
        className="p-b-26 d-flex justify-content-center"
        src={props.img}
        alt={props.alt}
      ></img>
    </React.Fragment>
  );
}

export default Page;
