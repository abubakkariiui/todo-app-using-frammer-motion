import "./PopUp.css";
import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
const PopUp = () => {
  const [text, setText] = useState("");
  const { PopUp, setPopUp, editTask } = useContext(TaskContext);
  const handleSubmit = (isOk) => {
    if (isOk === true) {
      console.log("yes");
      editTask(text);
    }
    setPopUp({ in: false, item: null });
    setText("");
  };

  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className={PopUp.in === false ? "pop-up" : "pop-up pop-up-show"}>
      <h4 className="pop-up__title">Are you sure to edit ?</h4>
      <input
        placeholder={
          PopUp.item !== null ? "you editing " + PopUp.item.topic : "nothing"
        }
        value={text}
        onChange={handleText}
        type="text"
        className="pop-up__input"
      />
      <div className="pop-up__buttons">
        <button
          onClick={() => handleSubmit(true)}
          className="pop-up__button ok"
        >
          Confirm
        </button>
        <button
          onClick={() => handleSubmit(false)}
          className="pop-up__button no"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PopUp;
