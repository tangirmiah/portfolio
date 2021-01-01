import React from "react"
import classes from "./NavIcons.module.css"
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai"

const NavIcons = () => {
  return (
    <div className={classes.NavIcons}>
      <a href="https://github.com/tangirmiah" target="blank">
        <AiOutlineGithub className={classes.IconColor} />
      </a>
      <a href="https://linkedin.com/in/tangirmiah/" target="blank">
        <AiFillLinkedin className={classes.IconColor} />
      </a>
      <a href="https://twitter.com/tangirmiah" target="blank">
        <AiFillTwitterCircle className={classes.IconColor} />
      </a>
      <a href="https://www.instagram.com/_badhon/" target="blank">
        <AiFillInstagram className={classes.IconColor} />
      </a>
    </div>
  )
}

export default NavIcons
