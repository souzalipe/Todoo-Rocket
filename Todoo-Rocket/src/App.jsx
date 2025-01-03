import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Post } from "./components/Post";
import { Task } from "./components/Task";

import "./styles/global.css";

const tasks = [
  {
    id: 1,
    title: "task 1",
    completed: 'true',
  },
  {
    id: 2,
    title:  "task 2",
    completed: 'true',
  },
  {
    id: 3,
    title:  "task 3",
    completed: 'true',
  },
];

function App() {
  return (
    <main>
      <div>
        <Header />
      </div>
      <section>
        <div>
          <Post />
        </div>
      </section>
      <section>
        <div>
          {tasks.map((task) => (
            <Task 
              key={task.id}
              title={task.title}
              completed={task.completed}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
