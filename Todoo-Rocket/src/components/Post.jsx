import React, { useState } from "react";

import { Input } from "./Input";
import { Button } from "./Button";
import { Task } from "./Task"

import style from "../styles/Post.module.css";


export function Post() {

  const [ tasks, setTaks ] = useState(["estudadar matemática"])

  function handleCreateNewTask() { 
    event.preventDefault(); /*  <== Evita que a página recarregue ao enviar o formulário */

    // console.log(event.target.chore.value)

    setTaks([...tasks, tasks.length + 1]) /* <== Imutabilidade */


  }



  return (
    <article>
      <form onSubmit={handleCreateNewTask}>
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
      <section>
        <div>
          {tasks.map((task) => (
            <Task 
              content={task}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
