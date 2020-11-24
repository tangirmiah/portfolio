import React from "react"
import Navbar from "../Navbar/Navbar"
import classes from "./Layout.module.css"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    // Make scroll behavior of internal links smooth
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <div className={classes.Layout}>
      <Navbar />
      <main className={classes.Main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
