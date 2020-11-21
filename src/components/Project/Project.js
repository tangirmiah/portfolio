import React from "react"
import classes from "./Project.module.css"
import BackgroundImage from "gatsby-background-image"
import { DiGithub, DiChrome } from "react-icons/di"
const Project = ({ title, description, imgDescription, gitHub, live }) => {
  return (
    <div className={classes.Project}>
      <BackgroundImage
        Tag="section"
        className={classes.Img}
        fluid={imgDescription}
        backgroundColor={`#040e18`}
      >
        <div className={classes.ProjectInfo}>
          <div className={classes.Internal}>
            <h1>{title} :</h1>
            <h5>Description:</h5>
            <p>{description}</p>
          </div>
          <div className={classes.External}>
            <a href={gitHub} target="_blank" title="Go to GitHub repo">
              <DiGithub />
            </a>
            <a href={live} target="_blank" title="Go to live page">
              <DiChrome />
            </a>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Project
