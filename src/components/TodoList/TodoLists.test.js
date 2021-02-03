import { screen, render, fireEvent } from "@testing-library/react";
import TodoLists from "./TodoLists";

describe("TodoLists", () => {
  it("should display default TodoList", () => {
    render(<TodoLists />);
    const todoListTitle = screen.getByText(/sabrina's todolist/i);
    expect(todoListTitle).toBeInTheDocument();
  });

  describe("addTodoList", () => {
    it("should create new TodoList if form is valid", () => {
      render(<TodoLists />);
      const todoListComposer = screen.getByLabelText("todo-list-composer");
      fireEvent.change(todoListComposer, {
        target: { value: "groceries" },
      });
      fireEvent.submit(todoListComposer);

      const newTodoListTitle = screen.getByText(/groceries/i);
      const todoLists = screen.getAllByTestId("todo-list");

      expect(newTodoListTitle).toBeInTheDocument();
      expect(todoLists.length).toEqual(2);
    });

    it("should not create new TodoList if form is empty", () => {
      render(<TodoLists />);
      const todoListComposer = screen.getByLabelText("todo-list-composer");
      fireEvent.change(todoListComposer, {
        target: { value: " " },
      });
      fireEvent.submit(todoListComposer);

      const todoLists = screen.getAllByTestId("todo-list");

      expect(todoLists.length).toEqual(1);
    });
  });
});
