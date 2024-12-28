import React from "react";
import { Input } from "./Input";
import { Button } from "./Button";

import style from "../styles/Post.module.css";

export function Post() {
  return (
    <article>
      <form>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "-2rem" }}>
          <Input />
          <Button />
        </div>
      </form>
      <header>
        <div>
          <h3>Tarefas criadas</h3>
        </div>

        <div>
          <h3>Concluídas</h3>
        </div>
      </header>
    </article>
  );
}
