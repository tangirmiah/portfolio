import React from "react"
import classes from "./Project.module.css"
import BackgroundImage from "gatsby-background-image"
const Project = ({ title, description, imgDescription }) => {
  return (
    <div className={classes.Project}>
      <BackgroundImage
        Tag="section"
        className={classes.Img}
        fluid={imgDescription}
        backgroundColor={`#040e18`}
      >
        <div className={classes.ProjectInfo}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Project
