import React, { useState } from "react"
import classes from "./Navbar.module.css"
import Navigation from "./Navigation/Navigation"
import NavIcon from "./NavIcons/NavIcons"
import { AiOutlineMenu } from "react-icons/ai"
import { MdClose } from "react-icons/md"

import sal from "sal.js"
const Navbar = props => {
  const [showMenu, setShowMenu] = useState(false)
  const handleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <>
      <div className={classes.NavMobile}>
        <div
          className={showMenu ? classes.MenuBtnClose : classes.MenuBtn}
          onClick={handleMenu}
        >
          {showMenu ? <MdClose /> : <AiOutlineMenu />}
        </div>

        <nav
          className={showMenu ? classes.Nav : classes.HideNav}
          data-sal="slide-up"
        >
          <Navigation handleMenu={handleMenu} />
          <NavIcon />
        </nav>
      </div>
      <div className={classes.NavLarge}>
        <nav className={classes.Nav} data-sal="slide-up">
          <Navigation handleMenu={handleMenu} />
          <NavIcon />
        </nav>
      </div>
    </>
  )
}

export default Navbar
