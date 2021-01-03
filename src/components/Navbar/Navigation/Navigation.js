import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import classes from "./Navigation.module.css"
import Img from "gatsby-image"
const Navigation = props => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo/Tangir_1080x1080.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div className={classes.Navigation} onClick={props.handleMenu}>
      <Link to="/#HomeSection">
        <Img
          fluid={data.logo.childImageSharp.fluid}
          alt="logo"
          className={classes.Logo}
        />
      </Link>
      <Link to="/#HomeSection">Home</Link>
      <Link to="/#AboutSection"> About </Link>
      <Link to="/#ProjectsSection"> Projects </Link>
      <Link to="/#ContactSection"> Contact </Link>
    </div>
  )
}

export default Navigation
