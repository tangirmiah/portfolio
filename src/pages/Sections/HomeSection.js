import React from "react"
import classes from "./HomeSection.module.css"
import Hero from "../../components/Hero/Hero"
import Particles from "react-particles-js"

const HomeSection = () => {
  return (
    <div className={classes.Home} id="HomeSection">
      <Hero />
      <Particles
        params={{
          backgroundMode: {
            enable: true,
            zIndex: -1,
          },
          particles: {
            size: {
              value: 4,
              anim: {
                enable: true,
                speed: 20,
              },
            },
            color: {
              value: "#f8f8f8",
            },
            number: {
              value: 200,
              density: {
                enable: true,
                area: 250,
                factor: 5000,
              },
            },
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                mode: ["grab"],
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 2,
                },
              },
            },
            resize: true,
          },
          retina_detect: true,
        }}
        className={classes.ParticleBg}
      />
    </div>
  )
}

export default HomeSection
