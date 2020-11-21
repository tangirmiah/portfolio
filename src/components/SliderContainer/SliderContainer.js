import React from "react"
import Carousel from "react-elastic-carousel"
import classes from "./SliderContainer.module.css"
import Project from "../Project/Project"
import "./sliderStyle.css"
import { graphql, useStaticQuery } from "gatsby"
const SliderContainer = props => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
  ]
  const data = useStaticQuery(graphql`
    query {
      projects: allProjectJson {
        edges {
          node {
            id
            slug
            title
            url
            description
            github
            live
            image {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const slides = data.projects.edges.map((project, index) => (
    <Project
      key={project.node.title}
      title={project.node.title}
      description={project.node.description}
      imgDescription={project.node.image.childImageSharp.fluid}
      gitHub={project.node.github}
      live={project.node.live}
    />
  ))

  console.log({ data })
  return (
    <div className={classes.SliderContainer}>
      <Carousel itemsToShow={3} breakPoints={breakPoints}>
        {slides}
      </Carousel>
    </div>
  )
}

export default SliderContainer
