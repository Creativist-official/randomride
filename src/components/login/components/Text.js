import React from "react";
import { Link } from 'react-router-dom';
 
function Text(props){

    let className = props.text + ' sf-pro-d-regular ctext-' + props.color;
    let textToShow = 'testo';
    let destination = '';

    if(props.text === 'forgot'){
        textToShow = "Hai dimenticato la password?";
        destination = "forgotPassword";
    } else if (props.text === 'oppure') {
        textToShow = "oppure";
        className+=" text-decoration-none";
        destination = false;
    }

    return(
        <div className="text-center">
            <Link className={className} to={destination}>{textToShow}</Link>
        </div>
    )
}

export default Text;