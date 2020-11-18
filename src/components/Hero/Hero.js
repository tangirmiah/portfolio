import React from "react"
import classes from "./Hero.module.css"
import { Link } from "gatsby"
import { BsChevronDoubleDown } from "react-icons/bs"

const Hero = props => {
  return (
    <div className={classes.PrimaryContainer}>
      <div className={classes.HeroContainer}>
        <h1 className={classes.HeroTitle}>Hello, I'm Tangir</h1>
        <p className={classes.HeroPara}>
          A Junior Web <span>Developer</span>
        </p>
        <Link to="/#AboutSection" className={classes.Arrow}>
          <BsChevronDoubleDown />
        </Link>
      </div>
    </div>
  )
}

export default Hero
