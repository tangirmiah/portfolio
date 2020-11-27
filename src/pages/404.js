import React from "react"
import Layout from "../components/Layout/Layout"
import Particles from "react-particles-js"
import classes from "./404.module.css"

export default function Home() {
  return (
    <>
      <Layout>
        <div className={classes.Container404}>
          <div className={classes.Content}>
            <h1>Error 404</h1>
            <p>The page you are looking for, do ot exist</p>
          </div>

          <Particles
            params={{
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
      </Layout>
    </>
  )
}
