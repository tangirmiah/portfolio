import React from "react"
import classes from "./Hero.module.css"

const Hero = props => {
  return (
    <div className={classes.HeroContainer}>
      <h1 className={classes.HeroTitle}>Hello, I'm Tangir</h1>
      <p className={classes.HeroPara}>
        A Junior Web <span>Developer</span>
      </p>
    </div>
  )
}

export default Hero
