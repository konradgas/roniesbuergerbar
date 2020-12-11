import React, {FC, useState} from "react";
import {Button} from "../../Button/Button";
import {LoginForm} from "../LoginForm/LoginForm";

import './Login.css'

interface ILoginProps {
    onModalCloseClick: Function
}

export const Login: FC<ILoginProps> = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isSignin, setIsSignin] = useState(false);

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSwitchToSignIn = () => {
        setIsSignin(!isSignin);
    }

    if (isSignin) {
        return <LoginForm handleSwitchToLogin={handleSwitchToSignIn} />
    } else
    {return (<div className="login-modal">

            <div className="close-container"><Button
                label="X"
                className="login-form-modal_close"
                onClick={(e: React.ChangeEvent<HTMLInputElement>) => props.onModalCloseClick(e)}
            /></div>
            <input
                className="login-modal_input"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => onNameChange(e)}
                required
            />
            <input
                className="login-modal_input"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => onPasswordChange(e)}
                required
            />
            <div>
                <Button label="login"/>
                <Button label="Sign in" onClick={handleSwitchToSignIn}/>
            </div>
            </div>)}
}