import React from "react";
import "./TodoItem.css";

const TodoItem = ({ name, isDone, id, toggleDone, deleteTodo }) => {
  return (
    <div className="todo-item">
      <span className="todo-item__completed" onClick={() => toggleDone(id)}>
        {isDone && (
          <img src={`${process.env.PUBLIC_URL}/tick.png`} alt="done" />
        )}
      </span>
      <span className="todo-item__name">{name}</span>
      <span className="todo-item__delete" onClick={() => deleteTodo(id)}>
        X
      </span>
    </div>
  );
};

export default TodoItem;
