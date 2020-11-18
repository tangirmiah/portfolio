import React from "react"
import classes from "./Navbar.module.css"
import Navigation from "./Navigation/Navigation"
import NavIcon from "./NavIcons/NavIcons"
import sal from "sal.js"

const Navbar = props => {
  return (
    <nav className={classes.Nav} data-sal="slide-up">
      <Navigation />
      <NavIcon />
    </nav>
  )
}

export default Navbar
