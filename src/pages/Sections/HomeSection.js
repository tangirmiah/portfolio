import React from "react"
import classes from "./HomeSection.module.css"
import Hero from "../../components/Hero/Hero"
import Particles from "react-particles-js"
// import ParticlesBg from "particles-bg"

const HomeSection = () => {
  return (
    <div className={classes.Home} id="HomeSection">
      <Hero />
      <Particles
        className={classes.ParticleBg}
        params={{
          particles: {
            number: {
              value: 300,
            },
            color: {
              value: "#fff",
            },
            opacity: {
              value: 0.1,
              anim: {
                enable: true,
              },
            },
          },
        }}
      />
      {/* <ParticlesBg color={"#f8f8f8"} num={100} type="cobweb" bg={true} /> */}
    </div>
  )
}

export default HomeSection
