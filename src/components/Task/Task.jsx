import React from "react";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import "./Task.css";
const Task = ({ isDone, topic, content, id }) => {
  const { deleteTask, doneTask, setId } = useContext(TaskContext);
  return (
    <div className="task">
      <span className={`task-line done-${isDone}`}></span>
      <div className="task__status">
        <div className="ball task__close" onClick={() => deleteTask(id)}></div>
        <div className="ball task__edit" onClick={() => setId(id)}></div>
        <div className="ball task__done" onClick={() => doneTask(id)}></div>
      </div>
      <h4 className="task__title">
        {isDone === true ? <del>{topic}</del> : topic}
      </h4>
      <p className="task__content">
        {isDone === true ? <del>{content}</del> : content}
      </p>
    </div>
  );
};

export default Task;
