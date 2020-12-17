import { render } from "@testing-library/react";
import { Checkout } from "./Checkout";
import React from "react";

describe("Checkout test suite", () => {
  const checkoutProps = {
    items: [
      {
        id: "0",
        name: "test",
        price: 0.0,
      },
    ],
    total: 0,
    switchToCart: jest.fn(),
  };
  test("Checkout renders correctly", () => {
    const { container } = render(
      <Checkout
        items={checkoutProps.items}
        switchToCart={checkoutProps.switchToCart}
        total={checkoutProps.total}
      />
    );
    expect(container).not.toBeNull();
  });
});
