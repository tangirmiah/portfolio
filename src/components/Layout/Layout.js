import React from "react"
import Navbar from "../Navbar/Navbar"
import classes from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={classes.Layout}>
      <Navbar />
      <main className={classes.Main}>{children}</main>
    </div>
  )
}

export default Layout
