import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter component", () => {
  test("counter-text is rendered", () => {
    render(<Counter />);
    expect(screen.getByTestId("counter-text")).toBeInTheDocument();
    expect(screen.getByTestId("counter-text").textContent).toEqual(
      "Лічильник: 0"
    );
  });

  test("counter-add is rendered", () => {
    render(<Counter />);
    expect(screen.getByTestId("counter-add")).toBeInTheDocument();
    expect(screen.getByTestId("counter-add").textContent).toEqual("+1");
  });

  test("counter-reset is rendered", () => {
    render(<Counter />);
    expect(screen.getByTestId("counter-reset")).toBeInTheDocument();
    expect(screen.getByTestId("counter-reset").textContent).toEqual(
      "Зкинути до нуля"
    );
  });

  test("increments counter value if counter-add clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId("counter-add"));

    expect(screen.getByTestId("counter-text").textContent).toEqual(
      "Лічильник: 1"
    );
  });

  test("resets counter value if counter-reset clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId("counter-add"));
    fireEvent.click(screen.getByTestId("counter-reset"));

    expect(screen.getByTestId("counter-text").textContent).toEqual(
      "Лічильник: 0"
    );
  });
});
