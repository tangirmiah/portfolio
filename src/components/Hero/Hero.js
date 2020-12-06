import React, { useEffect } from "react"
import classes from "./Hero.module.css"
import { Link } from "gatsby"
import { BsChevronDoubleDown } from "react-icons/bs"
import AOS from "aos"
import "aos/dist/aos.css"

const Hero = props => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])
  return (
    <div className={classes.HeroContainer}>
      <div className={classes.Writing}>
        <h1 className={classes.HeroTitle} data-aos="fade-down">
          Hello, I'm Tangir
        </h1>
        <p
          className={classes.HeroPara}
          data-aos-delay="1000"
          data-aos="fade-down"
        >
          A Junior Web <span>Developer</span>
        </p>
      </div>
      <Link to="/#AboutSection" className={classes.Arrow}>
        <BsChevronDoubleDown />
      </Link>
    </div>
  )
}

export default Hero
