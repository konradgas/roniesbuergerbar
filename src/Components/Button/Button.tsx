import { FC } from "react";
import "./Button.css";

interface ILoginButtonProps {
  label?: string;
  className?: string;
  onClick?: Function;
  disabled?: boolean;
}

export const Button: FC<ILoginButtonProps> = (props) => {
  if (!props.disabled) {
    return (
      <button
        className={`button ${props.className}`}
        onClick={() => (props.onClick ? props.onClick() : null)}
        data-testid="button-component"
      >
        <p className="label">{props.label}</p>
      </button>
    );
  } else {
    return (
      <button
        className={`button ${props.className}`}
        onClick={() => (props.onClick ? props.onClick() : null)}
        data-testid="button-component"
        disabled
      >
        <p className="label">{props.label}</p>
      </button>
    );
  }
};
