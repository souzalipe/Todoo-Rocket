import React from 'react'
import styles from "../styles/Input.module.css"

export function Input({input}) {
  return (
    <input
      className={styles.container}
      placeholder="Adicione uma nova tarefa"
      // name={chore} /* <== name é um atributo do input para eu acessar no Post */
    />
  );
}
