import React, { useState } from "react";

const TodoListForm = ({ addTodoList }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAdd = () => {
    addTodoList(title);
    setTitle("");
  };

  return (
    <React.Fragment>
      <input
        aria-label="todolist-composer"
        type="type"
        value={title}
        onChange={handleChange}
      ></input>
      <button onClick={handleAdd}>Add</button>
    </React.Fragment>
  );
};

export default TodoListForm;
