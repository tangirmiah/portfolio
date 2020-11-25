import React from "react"
import classes from "./HomeSection.module.css"
import Hero from "../../components/Hero/Hero"
import Particles from "react-particles-js"

const HomeSection = () => {
  return (
    <div className={classes.Home} id="HomeSection">
      <Hero />
      <Particles
        className={classes.ParticleBg}
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                area: 250,
                factor: 5000,
              },
            },
            color: {
              value: "#f8f8f8",
            },
            interactivity: {
              resize: true,
            },
          },
        }}
      />
    </div>
  )
}

export default HomeSection
