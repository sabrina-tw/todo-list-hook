import React, { useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm/TodoForm";

const TodoList = ({ title }) => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: "buy milk", isDone: false },
    { id: uuidv4(), name: "do push ups", isDone: true },
  ]);

  const toggleDone = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const updatedTodos = [...todos];
    updatedTodos[todoIndex].isDone = !updatedTodos[todoIndex].isDone;

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const addTodo = (name) => {
    if (name.trim() === "") return;

    const newTodo = {
      id: uuidv4(),
      name: name,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
  };

  const displayTodos = () => {
    return todos.map((todo) => (
      <TodoItem
        name={todo.name}
        isDone={todo.isDone}
        key={todo.id}
        id={todo.id}
        toggleDone={toggleDone}
        deleteTodo={deleteTodo}
      />
    ));
  };

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <TodoForm addTodo={addTodo}></TodoForm>
      <div>{displayTodos()}</div>
    </React.Fragment>
  );
};

export default TodoList;
