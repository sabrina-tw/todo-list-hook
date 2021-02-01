import { render, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  const todoItem = {
    name: "Drink coffee",
    isDone: true,
    id: "123",
    toggleDone: jest.fn(),
    deleteTodo: jest.fn(),
  };

  it("should render title of todo item", () => {
    render(<TodoItem {...todoItem} />);

    const todoTitle = screen.getByText(todoItem.name);
    expect(todoTitle).toBeInTheDocument();
  });
});
