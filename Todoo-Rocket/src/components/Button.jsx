import React from 'react'
import styles from "../styles/Button.module.css"

export function Button() {
    return (
      <button className={styles.container} type="submit">
        Criar
      </button>
    )
  }