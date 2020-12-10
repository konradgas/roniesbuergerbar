import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { ShoppingCartModal } from "./ShoppingCartModal";

describe("ShoppingCartModal test suite", () => {
  const emptyShoppingCartModalProps = {
    itemsAdded: [
      {
        id: "",
        name: "",
        price: 0,
      },
    ],
    onModalCloseClick: jest.fn(),
    decreaseItemNumber: jest.fn(),
    cartTotal: 0,
  };
  const populatedShoppingCartModalProps = {
    itemsAdded: [
      {
        id: "11111",
        name: "Burger",
        price: 10,
      },
    ],
    onModalCloseClick: jest.fn(),
    decreaseItemNumber: jest.fn(),
    cartTotal: 0,
  };
  test("renders logo initial text", () => {
    render(
      <ShoppingCartModal
        itemsAdded={emptyShoppingCartModalProps.itemsAdded}
        onModalCloseClick={emptyShoppingCartModalProps.onModalCloseClick}
        decreaseItemNumber={emptyShoppingCartModalProps.decreaseItemNumber}
        cartTotal={emptyShoppingCartModalProps.cartTotal}
      />
    );
    const modal = screen.getByTestId("cart-modal");
    expect(modal).toBeInTheDocument();
  });
  test("calls decreaseItemNumberFunction when removing item from cart", () => {
    render(
      <ShoppingCartModal
        itemsAdded={populatedShoppingCartModalProps.itemsAdded}
        onModalCloseClick={populatedShoppingCartModalProps.onModalCloseClick}
        decreaseItemNumber={populatedShoppingCartModalProps.decreaseItemNumber}
        cartTotal={populatedShoppingCartModalProps.cartTotal}
      />
    );
    const modal = screen.getByTestId("cart-modal");
    const removeButton = screen.queryAllByText("remove");
    expect(modal).toBeInTheDocument();
    fireEvent.click(removeButton[0]);
    expect(populatedShoppingCartModalProps.decreaseItemNumber).toBeCalledTimes(
      1
    );
  });
});
