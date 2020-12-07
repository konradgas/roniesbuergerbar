import {FC} from "react";
import './Button.css';

interface ILoginButtonProps {
    label: string;
    className?: string;
    onClick?: Function;
}

export const Button: FC<ILoginButtonProps> = (props ) => {
    return <button className={`button ${props.className}`}><p className="label">{props.label}</p></button>
}