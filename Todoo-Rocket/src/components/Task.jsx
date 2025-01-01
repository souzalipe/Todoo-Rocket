import React from "react";
import style from "../styles/task.module.css";

import { Trash } from "phosphor-react";

export function Task() {
    return (
        <div className={style.conteiner}>
            <div className={style.content}>
                <input 
                    type="checkbox"
                    className={style.checkbox} 
                />
                <p>Estudar React</p>
                <button>
                    <Trash size={16} />
                </button>
            </div>
           
        </div>
    );
}

