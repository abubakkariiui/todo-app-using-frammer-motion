import { motion } from "framer-motion";
import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import Tooltip from "../Tooltip/Tooltip";
import "./Task.css";
const Task = ({ isDone, topic, content, id }) => {
  const { deleteTask, doneTask, setId } = useContext(TaskContext);

  return (
    <motion.div
      className="task"
      initial={{ x: "-100%", margin: 0 }}
      animate={{ x: 0, marginTop: 25 }}
      exit={{
        x: "-100%",
        height: 0,
        marginTop: 0,
        padding: 0,
        opacity: 0,
        width: 0,
        transition: {
          duration: 0.3,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 10,
      }}
    >
      <span className={`task-line done-${isDone}`}></span>
      <div className="task__status">
        <Tooltip content="Delete Todo" direction="top">
          <motion.button
            whileTap={{ scale: 2 }}
            onClick={() => deleteTask(id)}
            className="ball task__close"
          ></motion.button>
        </Tooltip>
        <Tooltip content="Edit Todo" direction="top">
          <motion.button
            whileTap={{ scale: 2 }}
            onClick={() => setId(id)}
            className="ball task__edit"
          ></motion.button>
        </Tooltip>
        <Tooltip content="Mark Completed" direction="left">
          <motion.button
            whileTap={{ scale: 2 }}
            onClick={() => doneTask(id)}
            className="ball task__done"
          ></motion.button>
        </Tooltip>
      </div>
      <h4 className="task__title">
        {isDone === true ? <del>{topic}</del> : topic}
      </h4>
      <p className="task__content">
        {isDone === true ? <del>{content}</del> : content}
      </p>
    </motion.div>
  );
};
export default Task;
