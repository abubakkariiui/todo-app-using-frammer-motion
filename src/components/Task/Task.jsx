import React from "react";
import "./Task.css";
const Task = ({ isDone, topic, content }) => {
  return (
    <div className="task">
      <span className={`task-line done-${isDone}`}></span>
      <div className="task__status">
        <div className="ball task__close"></div>
        <div className="ball task__edit"></div>
        <div className="ball task__done"></div>
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
