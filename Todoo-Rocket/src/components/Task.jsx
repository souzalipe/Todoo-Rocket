import React from "react";
import style from "../styles/task.module.css";

import { Trash } from "phosphor-react";

export function Task({ content, completed, deleteTask }) {
  function handleDeleteTask() {
    

    deleteTask(content);
  }

  return (
    <div className={style.conteiner}>
      <div className={style.content}>
        <input type="checkbox" className={style.checkbox} status={completed}  />
        <p>
          {content}
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
