import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  const todoItem = {
    name: "Drink coffee",
    isDone: true,
    id: "123",
    toggleDone: jest.fn(),
    deleteTodo: jest.fn(),
  };

  it("should render name of TodoItem", () => {
    render(<TodoItem {...todoItem} />);
    const todoName = screen.getByText(todoItem.name);

    expect(todoName).toBeInTheDocument();
  });

  it("should render CheckCircle icon if TodoItem is done", () => {
    render(<TodoItem {...todoItem} />);
    const checkedIcon = screen.getByTestId("check-circle-icon");

    expect(checkedIcon).toBeInTheDocument();
  });

  it("should render RadioButtonUnchecked icon if TodoItem is not done", () => {
    const undoneTodoItem = {
      ...todoItem,
      isDone: false,
    };

    render(<TodoItem {...undoneTodoItem} />);
    const uncheckedIcon = screen.getByTestId("radio-button-unchecked-icon");

    expect(uncheckedIcon).toBeInTheDocument();
  });

  describe("toggleDone", () => {
    it("should call toggleDone when check icon is clicked", () => {
      const toggleDone = jest.fn();
      render(<TodoItem {...todoItem} toggleDone={toggleDone} />);

      const checkedIcon = screen.getByTestId("check-circle-icon");
      fireEvent.click(checkedIcon);

      expect(toggleDone).toHaveBeenCalled();
    });
  });

  describe("deleteTodo", () => {
    it("should call deleteTodo when clear icon is clicked", async () => {
      const deleteTodo = jest.fn();
      render(<TodoItem {...todoItem} deleteTodo={deleteTodo} />);

      const clearIcon = screen.getByTestId("clear-icon");
      fireEvent.click(clearIcon);

      expect(deleteTodo).toHaveBeenCalled();
      // await waitFor(() => {
      //   expect(screen.queryByText(/drink coffee/i)).not.toBeInTheDocument();
      // });
    });
  });
});
