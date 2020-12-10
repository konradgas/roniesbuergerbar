import React from "react";
import { cleanup, render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("App test suite", () => {
  beforeEach(() => cleanup());
  test("renders correctly", () => {
    const { container } = render(<App />);
    expect(container).not.toBeNull();
  });
  test("opens modal when clicked on the cart button", () => {
    const { container } = render(<App />);
    const cartButton = screen.getByText("Cart(0)");
    fireEvent.click(cartButton);
    const modal = container.querySelector(".cart-modal");
    expect(modal).toBeInTheDocument();
  });
  test("closes modal when clicked on the modal x button", () => {
    const { container } = render(<App />);
    const cartButton = screen.getByText("Cart(0)");
    fireEvent.click(cartButton);
    const closeButton = screen.getByText("X");
    fireEvent.click(closeButton);
    const modal = container.querySelector(".cart-modal");
    expect(modal).not.toBeInTheDocument();
  });
});
