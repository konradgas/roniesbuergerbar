import React, {FC, useState} from "react";
import {Logo} from "../Logo/Logo";
import {Button} from "../Button/Button";
import './HeaderContainer.css'

interface IHeaderContainerProps {
    cartItemCount: number;
}

export const HeaderContainer: FC<IHeaderContainerProps> = (props) => {
    return <div className="header-container">
        <Logo />
        <div className="button-set">
            <Button label="Login" className="login-button" onClick={() =>{}}/>
            <Button label={`Cart(${props.cartItemCount})`} className={"cart-button"} onClick={() =>{}} />
        </div>
        </div>
}