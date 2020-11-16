import React from "react"
import { Link } from "gatsby"
import classes from "./Navigation.module.css"

const Navigation = props => {
  return (
    <div className={classes.Navigation}>
      <Link to="/"> Home </Link>
      <Link to="/"> About </Link>
      <Link to="/"> Project </Link>
      <Link to="/"> Contact </Link>
    </div>
  )
}

export default Navigation
