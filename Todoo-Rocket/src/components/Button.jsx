import React from 'react'
import styles from "../styles/Button.module.css"

import { PlusCircle } from 'phosphor-react';

export function Button() {
    return (
      <button className={styles.container} type="submit">
        Criar <PlusCircle width={16} height={16} />
      </button>
    )
  }