import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render form to create TodoList", () => {
    render(<App />);
    const todoListForm = screen.getByTestId("todo-list-form");
    expect(todoListForm).toBeInTheDocument();
  });
});
