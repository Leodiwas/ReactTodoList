import React, { useState, useEffect } from "react";
import TodolistForm from "./Components/TodoList-Form/TodolistForm";
import TodoList from "./Components/TodoList/TodoList";
import TodoTitle from "./Components/TodoTitle/TodoTitle";

// Get the tasks to local storage
const getStorageItems = () =>
  localStorage.getItem("todoTask")
    ? JSON.parse(localStorage.getItem("todoTask"))
    : [];

const App = () => {
  const [task, setTask] = useState(getStorageItems());

  const addTask = (newTask) => setTask((prevTask) => [newTask, ...prevTask]);

  const deleteTask = (id) =>
    setTask([...task].filter((todo) => todo.id !== id));

  // Save the Tasks to Local Storage
  useEffect(
    () => localStorage.setItem("todoTask", JSON.stringify(task)),
    [task]
  );

  return (
    <main className="todo__container">
      <TodoTitle />
      <TodolistForm onAddNewTask={addTask} />
      <TodoList items={task} onDeleteItems={deleteTask} />
    </main>
  );
};

export default App;
