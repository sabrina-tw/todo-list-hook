import { screen, render, fireEvent } from "@testing-library/react";
import TodoLists from "./TodoLists";

describe("TodoLists", () => {
  it("should display default TodoList", () => {
    render(<TodoLists />);
    const todoListTitle = screen.getByText(/sabrina's todolist/i);
    expect(todoListTitle).toBeInTheDocument();
  });

  describe("click on trash icon of default TodoList", () => {
    it("should delete the TodoList", () => {
      render(<TodoLists />);
      const deleteButton = screen.getByTestId("delete-todo-list-btn");
      fireEvent.click(deleteButton);
      const todoListTitle = screen.queryByText(/sabrina's todolist/i);
      expect(todoListTitle).toBeNull();
    });
  });
});
