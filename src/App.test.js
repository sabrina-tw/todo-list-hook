import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render TodoList", () => {
    render(<App />);
    const todoList = screen.getByText(/todolist/i);
    expect(todoList).toBeInTheDocument();
  });
});
