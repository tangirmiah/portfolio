import React, { useState } from "react"
import classes from "./Navbar.module.css"
import Navigation from "./Navigation/Navigation"
import NavIcon from "./NavIcons/NavIcons"
import { AiOutlineMenu } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import Burger from "@animated-burgers/burger-squeeze"
// don't forget the styles
import "@animated-burgers/burger-squeeze/dist/styles.css"
import sal from "sal.js"
const Navbar = props => {
  const [showMenu, setShowMenu] = useState(false)
  const handleMenu = () => {
    setShowMenu(!showMenu)
    !showMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "")
  }
  return (
    <>
      <div className={classes.NavMobile}>
        <div className={showMenu ? classes.MenuBtnClose : classes.MenuBtn}>
          {/* {showMenu ? <MdClose /> : <AiOutlineMenu />} */}
          <Burger isOpen={showMenu} onClick={handleMenu} />
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
