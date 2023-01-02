import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

export default function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </ul>
  );
}
