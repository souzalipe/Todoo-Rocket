import React, { useState } from "react";
import style from "../styles/task.module.css";

import { Trash } from "phosphor-react";

export function Task({ content, onDeleteTask }) {

  const [isChecked, setIsChecked ] = useState(false)
  const [taskCount, setTaskCount] = useState([])

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleOnChange() {
    setIsChecked(!isChecked)
    if(!isChecked === false) {
      taskCount.push(taskCount.length)
    }
    setTaskCount([taskCount])
  }

 

  return (
    <div className={style.conteiner}>
      <div className={style.content}>
      
        <input type="checkbox" className={style.checkbox} checked={isChecked} onChange={handleOnChange} />
        <p>
          {isChecked ? <s>{content}</s> : content}
        </p>
        <button onClick={handleDeleteTask}>
          <Trash
            className={style.button} 
            size={12}
            style={{ height: "1.5rem", width: "1.5rem" }}
          />
        </button>
      </div>


    </div>
  );
}
