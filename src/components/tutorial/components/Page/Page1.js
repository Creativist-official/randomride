import React from "react";
import "../../css/Page1.css";
import Img from "../../img/img-page1.png";

function Page1() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="title sf-pro-d-bold a-center f-s-25 ctext-primary p-t-159">
              Cerca e offri un passaggio senza impegno
            </h1>
          </div>
          <div className="col-12 justify-content-center">
            <h3 className="sf-pro-d-SBold a-center f-s-21 py-60 p-b-23">
              Puoi cercare o offrire un passaggio per una località quando e come
              vuoi
            </h3>
          </div>
        </div>
      </div>
      <img
        className="p-b-26"
        src={Img}
        alt="ragazza-che-chiede-passaggio"
      ></img>
    </React.Fragment>
  );
}

export default Page1;
