import React from "react";
import TodolistItems from "../TodoList-Items/TodolistItems";
import TodoBox from "../UI/TodoBox";
import "./TodoList.css";

const TodoList = (props) => {
  if (props.items.length === 0)
    return <h4 className="todoTask__falldown">No Tasks Found !!!</h4>;

  const deleteHandler = (id) => props.onDeleteItems(id);

  return (
    <TodoBox className="todo__items">
      <ul className="todo__items">
        {props.items.map((tasks) => (
          <TodolistItems
            key={tasks.id}
            id={tasks.id}
            time={tasks.time}
            task={tasks.task}
            period={tasks.period}
            onDelete={deleteHandler}
          />
        ))}
      </ul>
    </TodoBox>
  );
};

export default TodoList;
