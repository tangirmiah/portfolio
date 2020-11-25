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
        // style={{
        //   opacity: "50%",
        // }}
        params={{
          particles: {
            number: {
              value: 200,
            },
            color: {
              value: "#f8f8f8",
            },
            interactivity: {
              detectsOn: "parent",
              onHover: {
                enable: true,
                mode: "repulse",
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
