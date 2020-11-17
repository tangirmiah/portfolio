import React from "react"
import classes from "./Navbar.module.css"
import Navigation from "./Navigation/Navigation"
import NavIcon from "./NavIcons/NavIcons"

const Navbar = props => {
  return (
    <nav className={classes.Nav}>
      <Navigation />
      <NavIcon />
    </nav>
  )
}

export default Navbar
