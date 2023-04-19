import styles from "./Header.module.css"
import NavList from "./NavList"

const Header = () => {
  const list = [
    { id: "home", text: "홈", href: "/" },
    { id: "signup", text: "회원가입", href: "/signup" },
    { id: "signin", text: "로그인", href: "/signin" },
    { id: "todo", text: "todo", href: "/todo" },
    { id: "logout", text: "logout", href: "/logout" },
  ]

  return (
    <header className={styles.header}>
      <nav className={styles.gnb}>
        <ul>
          {list.map((item) => (
            <NavList key={item.id} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
