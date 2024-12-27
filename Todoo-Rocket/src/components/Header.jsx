import style from '../styles/Header.module.css'
import todooLogo from "../assets/todoo-logo.svg"

export function Header() {
    return (
      <header className={style.container}>
        <img src={todooLogo} alt="logo da aplicação" />
      </header>
    )
  }