import React, { useState } from "react";
import Todo from "./Todo";

const Todolist = () => {
  const [todos] = useState([
    { name: "buy milk", isDone: false },
    { name: "do push ups", isDone: true },
  ]);

  const displayTodos = () => {
    return todos.map((todo) => <Todo name={todo.name} isDone={todo.isDone} />);
  };

  return (
    <React.Fragment>
      <h1>Todolist</h1>
      <div>{displayTodos()}</div>
    </React.Fragment>
  );
};

export default Todolist;
