import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <React.Fragment>
      <input type="type" value={name} onChange={handleChange}></input>
      <button onClick={() => addTodo(name)}>Add</button>
    </React.Fragment>
  );
};

export default TodoForm;
