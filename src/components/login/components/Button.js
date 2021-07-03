import React from "react";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import googleIcon from '@iconify/icons-flat-color-icons/google';
 
function Button(props){
    let className;
    let destination;
    let text;
    let logo;
    let divClassNames;

    if(props.type === 'continue'){
        divClassNames = "d-grid gap-2 col-6 mx-auto";
        className="btn bottone bgc-secondary ctext-light";
        destination="home";
        text = 'Continua'
    } else if (props.type === 'google'){
        divClassNames = "d-grid gap-2 col-8 mx-auto";
        className="sf-pro-d-SBold btn google shadow bottone bgc-light ctext-dark";
        destination="googleSignIn";
        text = 'Accedi con Google'
        logo=<Icon icon={googleIcon} style={{fontSize: '28px'}}/>
    }
    
    return(
        <div className={divClassNames}>
            <Link className={className} to={destination}>{logo}<span>{text}</span></Link>
        </div>
    )
}

export default Button;