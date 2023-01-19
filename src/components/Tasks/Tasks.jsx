import React, { useContext } from "react";
import Task from "../Task/Task";
import taskContext from "../context/TaskContext";
import "./Tasks.css";
const Tasks = () => {
  const { tasks } = useContext(taskContext);
  return (
    <div className="tasks">
      <div className="tasks__title">
        <img className="tasks__title__icon" src="./svg/all-task.svg" alt="" />
        <h2 className="tasks__title__text">All Tasks</h2>
      </div>
      <div className="tasks__sort">
        <select name="" id="">
          <option value="">All Tasks</option>
          <option value="">Done Tasks</option>
        </select>
      </div>
      <div className="tasks__container">
        {tasks.map((task) => (
          <Task
            key={task.id}
            isDone={task.isDone}
            topic={task.topic}
            content={task.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
