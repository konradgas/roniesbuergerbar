import {render, screen} from "@testing-library/react";
import React from "react";
import {GoogleMap} from "./GoogleMap";

describe("GoogleMap component test suite", () => {
    const iframeTestId = "google-map_iframe";
    test('renders button element', () => {
        render(<GoogleMap  />);
        const button = screen.getByTestId(iframeTestId);
        expect(button).toBeInTheDocument();
    });
})