import React from "react"
import { Link } from "gatsby"
import classes from "./Navigation.module.css"

const Navigation = props => {
  return (
    <div className={classes.Navigation}>
      <Link to="/#HomeSection">Home</Link>
      <Link to="/#AboutSection"> About </Link>
      <Link to="/#ProjectsSection"> Projects </Link>
      <Link to="/#ContactSection"> Contact </Link>
    </div>
  )
}

export default Navigation
