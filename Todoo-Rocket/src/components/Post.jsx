import React, { useState } from "react";

import { Button } from "./Button";
import { Task } from "./Task";

import style from "../styles/Post.module.css";
import styles from "../styles/Input.module.css";


export function Post({id}) {

  const [tasks, setTaks] = useState(["Estudar Matemática"]);

  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateNewTask() {
    event.preventDefault(); /*  <== Evita que a página recarregue ao enviar o formulário */
    setTaks([...tasks, newCommentText]); /* <== Imutabilidade */
    setNewCommentText(""); /* <== Limpa o input */
  }

  function handleNewTaskChange() {
    setNewCommentText(event.target.value);
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
          {/* <Input /> */}
          <input
            name="input"
            value={
              newCommentText
            } /*<== o valor do input é controlado pelo estado */
            className={styles.container}
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
          />
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
        <div key={id}>
          {tasks.map((task, key ) => (
            <Task key={key} content={task} />
          ))}
        </div>
      </section>
    </article>
  );
}
