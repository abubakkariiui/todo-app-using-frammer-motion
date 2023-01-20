import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskContext from "../context/TaskContext";
import "./AddTask.css";
const AddTask = () => {
  const { addTasks } = useContext(TaskContext);
  const [text, setText] = useState({ topic: "", content: "" });

  const handleTopic = (e) => {
    setText({ ...text, topic: e.target.value });
  };

  const handleContent = (e) => {
    setText({ ...text, content: e.target.value });
  };

  const handleSubmit = () => {
    setText({ topic: "", content: "" });
    if (text.topic.trim() !== "" && text.content.trim() !== "") {
      addTasks(text.topic, text.content);
    } else {
      errorMessage();
    }
  };
  const errorMessage = () => {
    toast.error("Please fill the following form");
  };

  return (
    <>
      <div className="add-task">
        <ToastContainer />
        <div className="add-task__title">
          <img
            className="add-task__title__icon"
            src="./svg/add-task.svg"
            alt=""
          />
          <h2 className="add-task__title__text">Make New Task</h2>
        </div>
        <div className="add-task__inputs">
          <div>
            <p className="add-task__lether-count">{text.topic.length}/50</p>
            <input
              maxLength={50}
              value={text.topic}
              onChange={handleTopic}
              className="input add-task__inputs__name"
              type="text"
              placeholder="your task topic"
            />
          </div>
          <div>
            <p className="add-task__lether-count">{text.content.length}/150</p>
            <textarea
              maxLength={150}
              value={text.content}
              onChange={handleContent}
              className="input add-task__inputs__content"
              type="text"
              placeholder="more info about task"
            />
          </div>
          <motion.button
            whileTap={{scale:0.9}}
            onClick={handleSubmit}
            className="add-task__inputs__submit"
          >
            Create New Task
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
