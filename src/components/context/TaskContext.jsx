import { useState, useEffect } from "react";
import { v4 as uuid4 } from "uuid";
const { createContext } = require("react");

const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [doneTaskList, setDoneTask] = useState([]);
  const [PopUp, setPopUp] = useState({ in: false, item: null });

  useEffect(() => {
    const alldoneTask = tasks.filter((task) => task.isDone === true);
    setDoneTask(alldoneTask);
  }, [tasks]);

  // add tasks

  const addTasks = (topic, content) => {
    const newTask = {
      id: uuid4(),
      isDone: false,
      topic,
      content,
    };
    setTasks([newTask, ...tasks]);
  };

  // delete tasks

  const deleteTask = (id) => {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
  };

  // done tasks

  const doneTask = (id) => {
    const newTask = [...tasks];
    const index = newTask.findIndex((task) => task.id === id);
    newTask[index].isDone = !newTask[index].isDone;
    setTasks(newTask);
  };

  // setId of selected todo

  const setId = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    setPopUp({ in: !PopUp.in, item: tasks[index] });
  };

  // edit task

  const editTask = (text) => {
    const newTask = [...tasks];
    const index = newTask.findIndex((task) => task.id === PopUp.item.id);
    newTask[index].topic = text;
    setTasks(newTask);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTasks,
        deleteTask,
        doneTask,
        PopUp,
        setPopUp,
        editTask,
        setId,
        doneTaskList,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
export default TaskContext;
