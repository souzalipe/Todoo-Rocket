import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Post } from "./components/Post";

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
        {tasks.map((task) => {
          return (
            
          );
        })}
        <div>
          <Post />
        </div>
      </main>
    </main>
  );
}

export default App;
