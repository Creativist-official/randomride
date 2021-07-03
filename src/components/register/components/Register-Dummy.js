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
            <div className="col-12 d-flex justify-content-center align-items-center flex-column mb-4">
                <h1 className="w-100 text-center">
                    <Logo scale="0.8" />
                    <LoginText text="Registrati" />
                    <div className="inputs">
                        <Input type="Nome"/>
                        <Input type="Cognome"/>
                        <Input type="Email"/>
                        <Input type="Password"/>
                        <Input type="Conferma password"/>
                    </div>
                    <Button type="continue" />
                    <Text color="dark" text="oppure" /> 
                    <Button type="google"/>
                    <SmallText text="Hai già un account?" link="Accedi" linkRef="/login"/>
                </h1>
            </div>
        </>
    )
}

export default LoginDummy;
