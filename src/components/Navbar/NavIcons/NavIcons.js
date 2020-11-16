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
    <div classname={classes.NavIcons}>
      <a href="https://github.com/tangirmiah" target="blank">
        <AiOutlineGithub className={classes.IconColor} />
      </a>
      <a href="https://github.com/tangirmiah" target="blank">
        <AiFillLinkedin className={classes.IconColor} />
      </a>
      <a href="https://github.com/tangirmiah" target="blank">
        <AiFillTwitterCircle className={classes.IconColor} />
      </a>
      <a href="https://github.com/tangirmiah" target="blank">
        <AiFillInstagram className={classes.IconColor} />
      </a>
    </div>
  )
}

export default NavIcons
