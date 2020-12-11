import {render} from "@testing-library/react";
import {LoginForm} from "./LoginForm";

describe("LoginForm test suite", () => {
    const onModalCloseClickMock = jest.fn();
    test("LoginForm renders correctly", () => {
        const {container} = render(<LoginForm onModalCloseClick={onModalCloseClickMock} />);
        expect(container.querySelector('.login-form-modal')).not.toBeNull();
    })
})