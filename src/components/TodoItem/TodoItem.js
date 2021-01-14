import React from "react";
import "./TodoItem.css";

const TodoItem = ({ name, isDone }) => {
  return (
    <div className="todo-item">
      <span className="todo-item__completed">
        {isDone && (
          <img src={`${process.env.PUBLIC_URL}/tick.png`} alt="done" />
        )}
      </span>
      <span className="todo-item__name">{name}</span>
    </div>
  );
};

export default TodoItem;
