import React, { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import TodoListForm from "./TodoListForm/TodoListForm";

const TodoLists = () => {
  const [todoLists, setTodoLists] = useState([
    {
      id: uuidv4(),
      title: "Sabrina's TodoList",
    },
  ]);

  const addTodoList = (title) => {
    if (title.trim() === "") return;

    const newTodoList = {
      id: uuidv4(),
      title,
      isDone: false,
    };

    setTodoLists([...todoLists, newTodoList]);
  };

  const deleteTodoList = (id) => {
    const updatedTodoLists = [...todoLists].filter(
      (todoList) => todoList.id !== id
    );

    setTodoLists(updatedTodoLists);
  };

  return (
    <div>
      <TodoListForm addTodoList={addTodoList} />

      {todoLists.map((todoList) => (
        <TodoList
          title={todoList.title}
          id={todoList.id}
          deleteTodoList={deleteTodoList}
          key={todoList.id}
        />
      ))}
    </div>
  );
};

export default TodoLists;
