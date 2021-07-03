import React from "react";
import { Link } from 'react-router-dom';
 
function SmallText(props){

    let destination = props.linkRef;
    let text = props.text;
    let link = props.link;

    return(
        <div className="col-9 sf-pro-d-regular register">
            <span>{text} </span><Link className={props.linkColor} to={destination}>{link}</Link>
        </div>
    )
}

export default SmallText;