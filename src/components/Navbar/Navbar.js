import React from "react"
import classes from "./Navbar.module.css"
import Navigation from "./Navigation/Navigation"

const Navbar = props => {
  return (
    <nav className={classes.Nav}>
      <Navigation />
    </nav>
  )
}

export default Navbar
