import React from 'react'
import styles from "../styles/Input.module.css"

export function Input({completed}) {
  return (
    <input
      className={styles.container}
      placeholder="Adicione uma nova tarefa"
   
    />
  );
}
