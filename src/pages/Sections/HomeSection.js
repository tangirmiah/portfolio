import React from "react"
import classes from "./HomeSection.module.css"
import Hero from "../../components/Hero/Hero"
import Particles from "react-particles-js"
// import ParticlesBg from "particles-bg"

const HomeSection = () => {
  return (
    <div className={classes.Home} id="HomeSection">
      <div className={classes.ParticleBg}>
        <Hero />
        {/* <ParticlesBg color={"#f8f8f8"} num={100} type="cobweb" bg={true} /> */}
        {/* <Particles /> */}
      </div>
    </div>
  )
}

export default HomeSection
