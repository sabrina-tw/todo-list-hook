import { CheckCircle, Clear, RadioButtonUnchecked } from "@material-ui/icons";
import React from "react";
import "./TodoItem.css";

const TodoItem = ({ name, isDone, id, toggleDone, deleteTodo }) => {
  return (
    <div className="todo-item">
      <span className="todo-item__completed" onClick={() => toggleDone(id)}>
        {!isDone && (
          <RadioButtonUnchecked data-testid="radio-button-unchecked-icon" />
        )}
        {isDone && <CheckCircle data-testid="check-circle-icon" />}
      </span>
      <span className={`todo-item__name ${isDone ? "completed" : ""}`}>
        {name}
      </span>
      <Clear
        data-testid="clear-icon"
        className="todo-item__delete"
        onClick={() => deleteTodo(id)}
      />
    </div>
  );
};

export default TodoItem;
