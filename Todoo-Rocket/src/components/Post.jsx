import React, { useState } from "react";

import { Button } from "./Button";
import { Task } from "./Task";

import style from "../styles/Post.module.css";
import styles from "../styles/Input.module.css";


export function Post({ id }) {

  const [tasks, setTaks] = useState(["Estudar Matemática"]);

  const [newCommentText, setNewCommentText] = useState(""); /* <== Estado do input */

  function handleCreateNewTask() {
    event.preventDefault(); /*  <== Evita que a página recarregue ao enviar o formulário */
    setTaks([...tasks, newCommentText]); /* <== Imutabilidade */
    setNewCommentText(""); /* <== Limpa o input*/
  }

  function handleNewTaskChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteTask(tasksToDeleted) {
    const taskWithoutDeletedOne = tasks.filter(tasks => {
      return tasks !== tasksToDeleted;
    })

    setTaks(taskWithoutDeletedOne)
  }

  function handleNewTaskInvalid() {
    event.target.setCustomValidity("Por favor, preencha este campo.");
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
            value={newCommentText} /*<== o valor do input é controlado pelo estado */
            className={styles.container}
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
            maxLength={30}
            onInvalid={handleNewTaskInvalid}
            required
          />
          <Button  />
        </div>
      </form>

      <header>
        <div className={style.header}>
          <div className={style.createdTaskContainer}>
            <h3>Tarefas criadas</h3>
            <div className={style.taskCounter}>
             {tasks.length}
            </div>
          </div>

          <div className={style.completedTaskContainer}>
            {/* <h3>Concluídas</h3>
            <div className={style.taskCounter}>
             {`${tasks.length} de ${taskCount}`}
            </div> */}
          </div>
        </div>
      </header>
      <section>
        <div key={id}>
          {tasks.map((task, key) => (
            <Task
              key={key}
              content={task}
              onDeleteTask={deleteTask}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
