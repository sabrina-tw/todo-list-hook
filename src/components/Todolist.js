import React, { useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import { v4 as uuidv4 } from "uuid";

const Todolist = () => {
  const [todos] = useState([
    { id: uuidv4(), name: "buy milk", isDone: false },
    { id: uuidv4(), name: "do push ups", isDone: true },
  ]);

  const displayTodos = () => {
    return todos.map((todo) => (
      <TodoItem name={todo.name} isDone={todo.isDone} key={todo.id} />
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
