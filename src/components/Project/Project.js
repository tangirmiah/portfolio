import React from "react"
import classes from "./Project.module.css"
import BackgroundImage from "gatsby-background-image"
import { DiGithub, DiChrome } from "react-icons/di"
import { AiOutlineGithub } from "react-icons/ai"
import {
  VscGithubAlt,
  VscLink,
  VscLinkExternal,
  VscGithub,
} from "react-icons/vsc"
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
              <VscGithubAlt />
            </a>
            <a href={live} target="_blank" title="Go to live page">
              <VscLinkExternal />
            </a>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Project
