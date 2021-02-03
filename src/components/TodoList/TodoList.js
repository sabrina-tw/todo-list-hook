import React, { useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm/TodoForm";
import "./TodoList.css";
import { Delete } from "@material-ui/icons";

const TodoList = ({ title, id, deleteTodoList }) => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: "do push ups", isDone: true },
    {
      id: uuidv4(),
      name: "stop lying about having done push ups",
      isDone: false,
    },
  ]);

  const toggleDone = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const updatedTodos = [...todos];
    updatedTodos[todoIndex].isDone = !updatedTodos[todoIndex].isDone;

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const addTodo = (name) => {
    if (name.trim() === "") return;

    const newTodo = {
      id: uuidv4(),
      name: name,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
  };

  const displayTodos = () => {
    return todos.map((todo) => (
      <TodoItem
        name={todo.name}
        isDone={todo.isDone}
        key={todo.id}
        id={todo.id}
        toggleDone={toggleDone}
        deleteTodo={deleteTodo}
      />
    ));
  };

  return (
    <div className="todo-list" data-testid="todo-list">
      <Delete
        data-testid="delete-todo-list-btn"
        className="todo-list__delete"
        onClick={() => deleteTodoList(id)}
      />
      <h1>{title}</h1>
      <TodoForm addTodo={addTodo}></TodoForm>
      <div>{displayTodos()}</div>
    </div>
  );
};

export default TodoList;
