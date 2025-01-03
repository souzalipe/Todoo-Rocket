import React from "react";
import style from "../styles/task.module.css";

import { Trash } from "phosphor-react";

export function Task({ id , title }) {
  return (
    <div className={style.conteiner}>
      <div className={style.content}>
        <input type="checkbox" className={style.checkbox} />
        <p id={id}>
          {title}
        </p>
        <button >
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
