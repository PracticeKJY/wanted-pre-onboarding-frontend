import { NavLink } from "react-router-dom"
import styles from "./NavList.module.css"

const NavList = ({ item }) => {
  return (
    <li>
      <NavLink to={item.href} className={styles.NavLink}>
        {item.text}
      </NavLink>
    </li>
  )
}

export default NavList
