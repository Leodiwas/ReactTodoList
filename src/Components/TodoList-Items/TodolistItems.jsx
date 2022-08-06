import React from "react";
import "./TodolistItems.css";

const TodolistItems = (props) => {
  const deleteTask = () => props.onDelete(props.id);

  return (
    <li className="todo__item" onClick={deleteTask}>
      <h3 className="todo-time">
        {props.time} {props.period}
      </h3>
      <h4 className="todo-task">{props.task}</h4>
    </li>
  );
};

export default TodolistItems;
