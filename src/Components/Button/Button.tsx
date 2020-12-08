import {FC} from "react";
import './Button.css';

interface ILoginButtonProps {
    label: string;
    className?: string;
    onClick: Function;
}

export const Button: FC<ILoginButtonProps> = (props ) => {
    return <button className={`button ${props.className}`} onClick={(item) => props.onClick(item)}>
        <p className="label">
            {props.label}
        </p>
    </button>
}