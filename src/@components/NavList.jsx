import { NavLink } from "react-router-dom"

const NavList = ({ item }) => {
  return (
    <li>
      <NavLink to={item.href}>{item.text}</NavLink>
    </li>
  )
}

export default NavList
