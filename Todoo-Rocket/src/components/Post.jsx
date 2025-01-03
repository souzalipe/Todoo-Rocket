import React from "react";

import { Input } from "./Input";
import { Button } from "./Button";
import { Task } from "./Task"

import style from "../styles/Post.module.css";


export function Post() {
  return (
    <article>
      <form>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "-2rem",
          }}
        >
          <Input />
          <Button />
        </div>
      </form>

      <header>
        <div className={style.header}>
          <div className={style.createdTaskContainer}>
            <h3>Tarefas criadas</h3>
          </div>

          <div className={style.completedTaskContainer}>
            <h3>Concluídas</h3>
          </div>
        </div>
      </header>

    </article>
  );
}
