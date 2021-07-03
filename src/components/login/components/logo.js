import React from "react";
import Logo from "../../../assets/img/logo_car.svg";

function logo(props) {
  const style={transform: 'scale('+props.scale+')'}
  
  return <img style={style} src={Logo} alt="RandomRideLogo" />
}

export default logo;
