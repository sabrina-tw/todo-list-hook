import React from "react";

const Todo = ({ name, isDone }) => {
  return (
    <div>
      <span>
        {isDone && (
          <img
            src={`${process.env.PUBLIC_URL}/tick.png`}
            alt="done"
            height="20"
          />
        )}
      </span>
      <span>{name}</span>
    </div>
  );
};

export default Todo;
