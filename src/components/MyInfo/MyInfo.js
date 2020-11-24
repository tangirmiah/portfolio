import React from "react"
import classes from "./MyInfo.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { IoMdCloudDownload } from "react-icons/io"
import cv from "../../assets/CV_Tangir_Miah.pdf"
const MyInfo = props => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data.profile.childImageSharp.fluid)
  return (
    <div className={classes.Container}>
      <div className={classes.InfoContainer}>
        <p className={classes.AboutText}>
          Hi. My Name is Tangir, Junior full stack web developer graduated in
          Computer Science with first class. I love software development and I
          focus on web technologies such as HTML5, CSS, JavaScript, jQuery,
          Node.js, React.js
        </p>
        <a href={cv} download>
          <p>Resume&nbsp;</p>
          <IoMdCloudDownload />
        </a>
      </div>
      <Img className={classes.Img} fluid={data.profile.childImageSharp.fluid} />
    </div>
  )
}

export default MyInfo
