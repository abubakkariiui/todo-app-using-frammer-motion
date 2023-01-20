import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { v4 as uuid4 } from "uuid";
const { createContext } = require("react");

const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    !localStorage.getItem("tasks")
      ? localStorage.setItem("tasks", JSON.stringify([]))
      : []
  );
  const [doneTaskList, setDoneTask] = useState([]);
  const [PopUp, setPopUp] = useState({ in: false, item: null });

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  useEffect(() => {
    const alldoneTask = tasks.filter((task) => task.isDone === true);
    setDoneTask(alldoneTask);
  }, [tasks]);

  // add tasks

  const addTasks = (topic, content) => {
    const oldTask = JSON.parse(localStorage.getItem("tasks"));
    const newTask = {
      id: uuid4(),
      isDone: false,
      topic,
      content,
    };
    localStorage.setItem("tasks", JSON.stringify([newTask, ...oldTask]));
    setTasks([newTask, ...tasks]);
    toast.success("Task Added Successfully", { autoClose: 1500 });
  };

  // delete tasks

  const deleteTask = (id) => {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
    toast.error("Task deleted", { autoClose: 1500 });
  };

  // delete all task
  const deleteAll = () => {
    setTasks([]);
    localStorage.setItem("tasks", JSON.stringify([]));
    if (tasks.length) {
      toast.error("All task deleted", { autoClose: 1500 });
    }
  };

  // done tasks

  const doneTask = (id) => {
    const newTask = [...tasks];
    const index = newTask.findIndex((task) => task.id === id);
    newTask[index].isDone = !newTask[index].isDone;
    if (newTask[index].isDone) {
      toast.success("Task Mark as completed", { autoClose: 1500 });
    } else if (!newTask[index].isDone) {
      toast.info("Task Mark as Uncompleted", { autoClose: 1500 });
    }
    setTasks(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
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
    newTask[index].topic = text.topic;
    newTask[index].content = text.content;
    setTasks(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
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
        deleteAll,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
export default TaskContext;
