import React, { useState } from "react";
import TodoBox from "../UI/TodoBox";
import FormControl from "../UI/FormControl";
import "./TodolistForm.css";

const TodolistForm = (props) => {
  const [task, setTask] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [period, setPeriods] = useState("AM");

  const [valid, setValid] = useState(true);

  const validInput = (e) => {
    if (e.target.value.trim().length > 0) setValid(true);
  };

  const submitTask = (e) => {
    validInput(e);
    setTask(e.target.value);
  };

  const submitHour = (e) => {
    validInput(e);
    setHour(e.target.value);
  };
  const submitMinute = (e) => {
    validInput(e);
    setMinute(e.target.value);
  };

  const submitPeriod = (e) => setPeriods(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    if (task.trim().length === 0) setValid(false);
    if (hour.trim().length === 0) setValid(false);
    if (minute.trim().length === 0) setValid(false);

    if (task && hour && minute !== 0) {
      const time = `${hour}:${minute}`;
      const id = (Math.random() * 1000 + 1).toFixed(4);

      const taskData = {
        id: id,
        task: task,
        time: time,
        period: period,
      };

      props.onAddNewTask(taskData);

      setTask("");
      setHour("");
      setMinute("");
      setPeriods("AM");
    }
  };

  return (
    <TodoBox className="todo__form-Box">
      <form action="" className="todo__form" onSubmit={submitHandler}>
        <div className="todo__form-controls">
          <FormControl valid={valid}>
            <label>Enter Task</label>
            <input
              type="text"
              className="todo__form-input"
              placeholder="Enter Task"
              value={task}
              onChange={submitTask}
            />
          </FormControl>
          <FormControl valid={valid}>
            <label>Enter Time</label>
            <div className="todo__form-control-time">
              <input
                type="text"
                className="todo__form-input todo__form-input-time"
                placeholder="Hour"
                maxLength={2}
                value={hour}
                onChange={submitHour}
              />
              <input
                type="text"
                className="todo__form-input todo__form-input-time"
                placeholder="Minute"
                maxLength={2}
                value={minute}
                onChange={submitMinute}
              />
              <select className="am__pm-dropdown" onChange={submitPeriod}>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </FormControl>
        </div>
        <div className="todo__form-button">
          <button type="submit" className="button">
            Add TASK
          </button>
        </div>
      </form>
    </TodoBox>
  );
};

export default TodolistForm;
