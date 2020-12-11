import React, {FC, useEffect, useState} from "react";
import {Button} from "../../Button/Button";
import './LoginForm.css';

interface ILoginFormProps {
    onModalCloseClick: Function;
}

export const LoginForm: FC<ILoginFormProps> = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassowrd] = useState("");
    const [passwordValidation, setPasswordValidation] = useState('valid');

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const onRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPassowrd(e.target.value);
    };

    useEffect(() => {
        if (password !== repeatPassword) {
            setPasswordValidation('invalid');
        } else {
            setPassword('valid');
        }
    }, [password, repeatPassword])

    const onCreateAccountClicked = async () => {
        await fetch("http://localhost:3001/api/order/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: name,
                password: password
            }),
        })
    };

    const displayValidationMessage = () => {
        if (password !== repeatPassword) {
            return <p className={`validation-text-${passwordValidation}`}>
                password do not match
            </p>
        }
    }

    return <div className="login-form-modal">
        <div className="close-container"><Button
            label="X"
            className="login-form-modal_close"
            onClick={props.onModalCloseClick}
        /></div>
            <div className="login-form-modal_form">
                <input
                    className="login-form-modal_input"
                    type="text"
                    placeholder="Name"
                    onChange={(e) => onNameChange(e)}
                    required
                />
                <input
                    className="login-form-modal_input"
                    type="password"
                    placeholder="password"
                    onChange={(e) => onPasswordChange(e)}
                    required
                />
                <input
                    className="login-form-modal_input"
                    type="password"
                    placeholder="repeat password"
                    onChange={(e) => onRepeatPasswordChange(e)}
                    required
                />{displayValidationMessage()}
                { passwordValidation === 'valid' &&
                    <Button className="login-form-button" label="create account"/>}

                { passwordValidation === 'invalid' &&
                <Button className="login-form-button-disabled" label="create account"/>}
            </div>
    </div>
}