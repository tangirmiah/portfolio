import React from "react"
import classes from "./HomeSection.module.css"
import Hero from "../../components/Hero/Hero"
import ParticlesBg from "particles-bg"
import { Link } from "gatsby"

const HomeSection = () => {
  return (
    <div className={classes.Home} id="HomeSection">
      <div className={classes.ParticleBg}>
        <Hero />
        <ParticlesBg color={"#f8f8f8"} num={100} type="cobweb" bg={true} />
      </div>
    </div>
  )
}

export default HomeSection
