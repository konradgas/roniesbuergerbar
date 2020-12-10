import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import { Button } from "./Button";

describe("button test suite", () => {
  beforeEach(() => cleanup());
  const testLabel = "test label";
  const testClassName = "test-Classname";
  const mockFunction = jest.fn();
  test("renders button element", () => {
    render(<Button />);
    const button = screen.getByTestId("button-component");
    expect(button).toBeInTheDocument();
  });
  test("renders button element with label", () => {
    render(<Button label={testLabel} />);
    const button = screen.getByTestId("button-component");
    const labelText = screen.getByText("test label");
    expect(button).toBeInTheDocument();
    expect(labelText).toBeInTheDocument();
  });
  test("renders button element with classname", () => {
    const { container } = render(<Button className={testClassName} />);
    const button = screen.getByTestId("button-component");
    const className = container.firstChild;
    expect(button).toBeInTheDocument();
    expect(className).toHaveClass(`button ${testClassName}`);
  });
  test("renders button element with on click event", () => {
    render(<Button onClick={mockFunction} />);
    const button = screen.getByTestId("button-component");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockFunction).toBeCalledTimes(1);
  });
});
