import React from "react";
import Logo from "./logo";
import LoginText from "./Login-Title";
import Input from "./Input";
import Button from "./Button";
import Text from "./Text";
import SmallText from "./SmallText";

function LoginDummy(){
    return(
        <>
            <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                <h1 className="w-100 text-center">
                    <Logo scale="0.8" />
                    <LoginText text="Login" />
                    <div className="inputs">
                        <Input type="Email"/>
                        <Input type="Password"/>
                    </div>
                    <Text color="primary" text="forgot" /> 
                    <Button type="continue" />
                    <Text color="dark" text="oppure" /> 
                    <Button type="google"/>
                    <SmallText text="Non sei ancora registrato?" link="Fallo ora" linkRef="/register"/>
                </h1>
            </div>
        </>
    )
}

export default LoginDummy;
