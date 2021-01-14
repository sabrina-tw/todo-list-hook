import React, { useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import { v4 as uuidv4 } from "uuid";

const Todolist = () => {
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

  const displayTodos = () => {
    return todos.map((todo) => (
      <TodoItem
        name={todo.name}
        isDone={todo.isDone}
        key={todo.id}
        id={todo.id}
        toggleDone={toggleDone}
      />
    ));
  };

  return (
    <React.Fragment>
      <h1>Todolist</h1>
      <div>{displayTodos()}</div>
    </React.Fragment>
  );
};

export default Todolist;
