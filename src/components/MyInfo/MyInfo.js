import React from "react"
import classes from "./MyInfo.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

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
        <p>
          Hi. My Name is Tangir, Junior full stack web developer graduated in
          Computer Science with first class. I love software development and I
          focus on web technologies such as HTML5, CSS, JavaScript, jQuery,
          Node.js, React.js
        </p>
        <a href="CV_Tangir_Miah.pdf" download>
          Resume
        </a>
      </div>
      <Img className={classes.Img} fluid={data.profile.childImageSharp.fluid} />
    </div>
  )
}

export default MyInfo
