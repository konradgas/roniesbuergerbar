import {render, screen} from "@testing-library/react";
import React from "react";
import {AddressDetails} from "./AddressDetails";

describe("AddressDetails test suite", () => {
    test('renders address header element', () => {
        render(<AddressDetails />);
        const header = screen.getByTestId("address-details_header");
        expect(header).toBeInTheDocument();
    });

    test('renders address subheader element', () => {
        render(<AddressDetails />);
        const header = screen.getByTestId("address-details_subheader");
        expect(header).toBeInTheDocument();
    });

    test('renders address details text element', () => {
        render(<AddressDetails />);
        const header = screen.getByTestId("address-details_text");
        expect(header).toBeInTheDocument();
    });

    test('renders phone number link element', () => {
        render(<AddressDetails />);
        const header = screen.getByTestId("phone-number-link");
        expect(header).toBeInTheDocument();
    });
})