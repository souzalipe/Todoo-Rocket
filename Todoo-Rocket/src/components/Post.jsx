import React, { useState } from "react";

import { Input } from "./Input";
import { Button } from "./Button";
import { Task } from "./Task";

import style from "../styles/Post.module.css";

export function Post({ handleNewCommentChange}) {
  const [tasks, setTaks] = useState(["estudadar matemática"]);

  const [newCommentText, setNewCommentText] = useState(""); 

  function handleCreateNewTask() {
    event.preventDefault(); /*  <== Evita que a página recarregue ao enviar o formulário */

    const NewCommentText = event.target.input.value /* <== pegando o valor do input e armazenando em uma variável */;

    setTaks([...tasks, NewCommentText]); /* <== Imutabilidade */

    event.target.input.value = ""; /* <== limpando o input */
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
            <Task content={task} />
          ))}
        </div>
      </section>
    </article>
  );
}
