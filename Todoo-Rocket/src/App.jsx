import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Post } from "./components/Post";
import { Task } from "./components/Task";

import "./styles/global.css";

const tasks = [
  {
    id: 1,
    title: "Estudar React",
    completed: false,
  },
  {
    id: 2,
    title: "Estudar CSS",
    completed: true,
  },
  {
    id: 3,
    title: "Estudar HTML",
    completed: false,
  },
];

function App() {
  return (
    <main>
      <div>
        <Header />
      </div>
      <main>
        <div>
          <Post />
        </div>
        {tasks.map((task) => {  /*aqui vou retornar o componente Task */
          return (
            <Task/>
          );
        })}
      </main>
    </main>
  );
}

export default App;
