import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTodo } from "../../contexts/TodoContext";
import "./TodoItem.css";

function TodoItem({ id, title, completed }) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(completed);
  const { editTodoCompleted, getTodos } = useTodo();

  function handleChange() {
    setChecked(!checked);
    editTodoCompleted(id, checked);
    getTodos();
  }

  return (
    <li className="todo">
      <input
        className="custom-checkbox"
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id} className="custom-checkbox-label" />
      <span
        role="note"
        className="todo-title"
        onClick={() => {
          navigate("/todo", {
            state: {
              isExisted: true,
              todoId: id,
            },
          });
        }}
      >
        {title}
      </span>
    </li>
  );
}

export default TodoItem;
