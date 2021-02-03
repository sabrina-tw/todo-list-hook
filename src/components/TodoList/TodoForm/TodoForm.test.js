import { fireEvent, render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("TodoForm", () => {
  it("should render input box", () => {
    render(<TodoForm />);
    const inputBox = screen.getByRole("textbox");
    expect(inputBox).toBeInTheDocument();
  });

  it("should update value of input box when composing new todo item", () => {
    render(<TodoForm />);
    const inputBox = screen.getByLabelText("todo-composer");
    const newTodoValue = "Take a nap";

    fireEvent.change(inputBox, {
      target: { value: newTodoValue },
    });

    expect(inputBox.value).toEqual(newTodoValue);
  });

  it("should clear input box upon clicking Add", () => {
    const addTodo = jest.fn();
    render(<TodoForm addTodo={addTodo} />);
    const inputBox = screen.getByLabelText("todo-composer");
    const newTodoValue = "Take a nap";

    fireEvent.change(inputBox, {
      target: { value: newTodoValue },
    });

    const addButton = screen.getByText(/add/i);
    fireEvent.click(addButton);

    expect(addTodo).toHaveBeenCalledTimes(1);
    expect(inputBox.value).toEqual("");
  });
});
