import {render} from "@testing-library/react";
import {Login} from "./Login";


describe("LoginForm test suite", () => {
    const onModalCloseClickMock = jest.fn();
    test("LoginForm renders correctly", () => {
        const {container} = render(<Login onModalCloseClick={onModalCloseClickMock}/>);
        expect(container.querySelector('.login-modal')).not.toBeNull();
    })
})