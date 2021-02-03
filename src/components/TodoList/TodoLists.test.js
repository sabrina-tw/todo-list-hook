import { screen, render, fireEvent } from "@testing-library/react";
import TodoLists from "./TodoLists";

describe("TodoLists", () => {
  it("should display default TodoList", () => {
    render(<TodoLists />);
    const todoListTitle = screen.getByText(/sabrina's todolist/i);
    expect(todoListTitle).toBeInTheDocument();
  });
});
