import React from "react";
import Logo from "./logo";
import RrText from "./rrText";
import RrSubText from "./rrSubText";
import StartButton from "./startButton";

function Dummy() {
  return (
    <div className="col-12 d-flex justify-content-center align-items-center flex-column mt-25p">
      <h1 className="w-100 text-center">
        <Logo/>
        <RrText />
      </h1>
      <RrSubText />
      <StartButton />
    </div>
  );
}

export default Dummy;
