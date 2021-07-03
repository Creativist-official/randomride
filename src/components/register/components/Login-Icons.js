import React from "react";
import { Icon } from '@iconify/react';
import mail16Regular from '@iconify/icons-fluent/mail-16-regular';

const icons = {
    "email": <Icon icon={mail16Regular} style={{fontSize: '16px'}} />,
    "password" :  "https://img.icons8.com/ios/16/000000/lock--v1.png",
    "passwordEye" : "https://img.icons8.com/material-outlined/16/000000/visible--v1.png"
}

function LoginIcon(props){
    return (
        <img src={icons[props.icon]} alt="Login icon"/>
    )
}

export default LoginIcon;