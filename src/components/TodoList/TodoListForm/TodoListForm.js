import React, { useState } from "react";

const TodoListForm = ({ addTodoList }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addTodoList(title);
    setTitle("");
  };

  return (
    <React.Fragment>
      <form onSubmit={handleAdd}>
        <input
          aria-label="todolist-composer"
          type="type"
          value={title}
          onChange={handleChange}
        ></input>
        <button onClick={handleAdd}>Add</button>
      </form>
    </React.Fragment>
  );
};

export default TodoListForm;
