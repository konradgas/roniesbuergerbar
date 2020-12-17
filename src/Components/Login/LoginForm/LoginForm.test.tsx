import {render} from "@testing-library/react";
import {LoginForm} from "./LoginForm";
import React from "react";

describe("LoginForm test suite", () => {
    const handleSwitchToLoginMock = jest.fn();
    test("LoginForm renders correctly", () => {
        const {container} = render(<LoginForm handleSwitchToLogin={handleSwitchToLoginMock} />);
        expect(container.querySelector('.login-form-modal')).not.toBeNull();
    })
})