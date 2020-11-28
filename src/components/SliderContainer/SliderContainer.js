import React from "react"
import Carousel from "react-elastic-carousel"
import classes from "./SliderContainer.module.css"
import Project from "../Project/Project"
import "./sliderStyle.css"
import { graphql, useStaticQuery } from "gatsby"
const SliderContainer = props => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 800, itemsToShow: 3, itemsToScroll: 3 },
  ]
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              live
              github
              description
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
    }
  `)

  const slides = data.projects.edges.map((project, index) => (
    <Project
      key={project.node.frontmatter.title}
      title={project.node.frontmatter.title}
      description={project.node.frontmatter.description}
      imgDescription={project.node.frontmatter.image.childImageSharp.fluid}
      gitHub={project.node.frontmatter.github}
      live={project.node.frontmatter.live}
    />
  ))

  return (
    <div className={classes.SliderContainer}>
      <h1 className={classes.Title}>My Projects</h1>
      <Carousel itemsToShow={3} breakPoints={breakPoints}>
        {slides}
      </Carousel>
    </div>
  )
}

export default SliderContainer
