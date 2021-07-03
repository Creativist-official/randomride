import React from "react";
import "../css/Page.css";

function Page(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="title sf-pro-d-bold a-center f-s-25 ctext-primary p-t-159">
              {props.title}
            </h1>
          </div>
          <div className="col-12 justify-content-center">
            <h3 className="sf-pro-d-SBold a-center f-s-21 py-50 p-b-23">
              {props.description}
            </h3>
          </div>
        </div>
      </div>
      <img class="p-absolute plant" src={props.foglia} alt="foglia"></img>
      <img
        className="p-b-26 d-flex justify-content-center"
        src={props.img}
        alt={props.alt}
      ></img>
    </React.Fragment>
  );
}

export default Page;
