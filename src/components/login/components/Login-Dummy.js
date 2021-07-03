import React from "react";
import Logo from "./logo";
import LoginText from "./Login-Title";
import Input from "./Input";

function LoginDummy(){
    return(
        <>
            <div className="col-12 d-flex justify-content-center align-items-center flex-column mt-25p">
                <h1 className="w-100 text-center">
                    <Logo scale="0.75" />
                    <LoginText text="Login" />
                    <Input type="Email" icon="mail16Regular"/>
                    <Input type="Password" icon="bxLock"/>
                </h1>
            </div>
        </>
    )
}

export default LoginDummy;
