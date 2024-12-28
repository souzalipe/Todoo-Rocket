import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Post } from "./components/Post";

import "./styles/global.css";

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
    </main>
  );
}

export default App;
