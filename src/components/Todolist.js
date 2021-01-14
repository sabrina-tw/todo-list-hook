import React, { useState } from "react";

const Todolist = () => {
  const [todos] = useState([
    { name: "buy milk", isDone: false },
    { name: "do push ups", isDone: true },
  ]);

  const displayTodos = () => {
    return todos.map((todo) => (
      <div>
        <span>{todo.name}</span>
        <span>{todo.isDone ? " - completed" : ""}</span>
      </div>
    ));
  };

  return (
    <div>
      <h1>Todolist</h1>
      <div>{displayTodos()}</div>
    </div>
  );
};

export default Todolist;
