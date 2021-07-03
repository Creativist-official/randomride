import React from "react";
import { Icon } from '@iconify/react';
import mail16Regular from '@iconify/icons-fluent/mail-16-regular';
import bxLock from '@iconify/icons-bx/bx-lock';
import eyeOpen from '@iconify/icons-el/eye-open';
import userOutlined from '@iconify/icons-ant-design/user-outlined';

function Input(props){
    let RegisterIcon;
    let eyeIcon;
    let className;
    
    if(props.type === "Email"){
        RegisterIcon = <Icon icon={mail16Regular} style={{fontSize: '16px'}} />
        className = "rounded-right border-l-none form-control";

    } else if (props.type === "Password") {
        RegisterIcon = <Icon icon={bxLock} style={{fontSize: '18px'}} />

        eyeIcon = 
                    <button class="d-flex align-center rounded-right button btn btn-outline-secondary" type="button" id="button-addon2">
                        <Icon icon={eyeOpen} style={{color: '#152029', fontSize: '20px'}} />
                    </button>

        className = "border-l-none border-r-none form-control"

    } else if(props.type === "Nome" || props.type === "Cognome") {
        RegisterIcon = <Icon icon={userOutlined} style={{fontSize: '16px'}} />
        className = "rounded-right border-l-none form-control";
    } else if (props.type === "Conferma password") {
        RegisterIcon = <Icon icon={bxLock} style={{fontSize: '18px'}} />

        eyeIcon = 
                    <button class="d-flex align-center rounded-right button btn btn-outline-secondary" type="button" id="button-addon2">
                        <Icon icon={eyeOpen} style={{color: '#152029', fontSize: '20px'}} />
                    </button>

        className = "border-l-none border-r-none form-control"
    }




    return (
        <div className="input-group mb-3">
            <span className="rounded-left input-image input-group-text" id="basic-addon1">
            {RegisterIcon}
            </span>
            <input type={props.type} className={className} placeholder={props.type}/>
            {eyeIcon}
        </div>
    )
}

export default Input;