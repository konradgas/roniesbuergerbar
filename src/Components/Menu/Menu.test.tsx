import { render, screen, fireEvent } from "@testing-library/react";
import { Menu } from "./Menu";

describe("Menu test suire", () => {
  const mockMenuData = {
    Burgers: [
      {
        id: "0",
        name: "Ronnies Special Cheese (Cheese Burger)",
        price: 6.5,
      },
      {
        id: "1",
        name: "Ronnies Bacon Mix (Bacon & Cheese Burger)",
        price: 7.5,
      },
      {
        id: "2",
        name: "The Two Ronnies (Double Burger)",
        price: 9,
      },
      {
        id: "3",
        name: "Chicken Delight (Chicken Burger)",
        price: 7,
      },
      {
        id: "4",
        name: "Veggie Supreme (Veggie Burger)",
        price: 6.5,
      },
      {
        id: "5",
        name: "Cheesy Ronnies Halloumi Burger",
        price: 7,
      },
    ],
    Sides: [
      {
        id: "0",
        name: "Chips",
        price: 2.5,
      },
      {
        id: "1",
        name: "Onion Rings",
        price: 3,
      },
      {
        id: "2",
        name: "Sweet Potato Fries",
        price: 3.5,
      },
    ],
    Drinks: [
      {
        id: "0",
        name: "Cola",
        price: 1.5,
      },
      {
        id: "1",
        name: "Lemonade",
        price: 1.5,
      },
      {
        id: "2",
        name: "Fanta Orange",
        price: 1.5,
      },
      {
        id: "4",
        name: "Ronnies Special Shake (Chocolate, Banana, Strawberry, Vanilla)",
        price: 3,
      },
    ],
  };

  const onAddToCartMock = jest.fn();

  test("menu renders correctly", () => {
    const { container } = render(
      <Menu menuData={mockMenuData} onAddToCart={onAddToCartMock} />
    );
    expect(container).not.toBeNull();
  });
  test("calls onAddToCart when add button is clicked", () => {
    render(<Menu menuData={mockMenuData} onAddToCart={onAddToCartMock} />);
    const burgerButton = screen.getByTestId("burger-item-1").firstChild;
    const sidesButton = screen.getByTestId("sides-item-1").firstChild;
    const drinksButton = screen.getByTestId("drinks-item-1").firstChild;

    if (burgerButton) {
      fireEvent.click(burgerButton);
    }
    if (sidesButton) {
      fireEvent.click(sidesButton);
    }
    if (drinksButton) {
      fireEvent.click(drinksButton);
    }

    expect(onAddToCartMock).toBeCalledTimes(3);
  });
  test("calls onAddToCart with correct value when add button is clicked", () => {
    render(<Menu menuData={mockMenuData} onAddToCart={onAddToCartMock} />);
    const addButton = screen.getAllByText("add");
    fireEvent.click(addButton[0]);
    expect(onAddToCartMock).toBeCalledTimes(1);
    expect(onAddToCartMock).toBeCalledWith({
      ...mockMenuData.Burgers[0],
      id: expect.anything(),
    });
  });
});
