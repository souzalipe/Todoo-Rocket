import { Button } from "./components/Button"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import "./styles/global.css"

function App() {

  return (
    <main>
      <div>
       <Header />
      </div>
      <section>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "-2rem" }}>
          <Input />
          <Button />
        </div>
      </section>
    </main>
  )
}

export default App