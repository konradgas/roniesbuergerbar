import {FC} from "react";
import {Button} from "../../Button/Button";

export const LoginForm: FC = () => {
    return <div className="login-form">
            <form>
                <input
                    className="login-form-modal_input"
                    type="text"
                    placeholder="Name"
                    required
                />
                <input
                    className="login-form-modal_input"
                    type="password"
                    placeholder="password"
                    required
                />
                <input
                    className="login-form-modal_input"
                    type="password"
                    placeholder="repeat password"
                    required
                />
                <Button className="login-form-button" label="create account" />
            </form>
    </div>
}