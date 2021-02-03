import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList", () => {
  describe("click on trash icon of default TodoList", () => {
    it("should call deleteTodoList and delete TodoList", () => {
      const deleteTodoList = jest.fn();
      render(<TodoList deleteTodoList={deleteTodoList} />);

      const deleteButton = screen.getByTestId("delete-todo-list-btn");
      fireEvent.click(deleteButton);
      const todoListTitle = screen.queryByText(/sabrina's todolist/i);

      expect(deleteTodoList).toHaveBeenCalled();
      expect(todoListTitle).toBeNull();
    });
  });
});
