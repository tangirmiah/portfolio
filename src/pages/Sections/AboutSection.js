import React from "react"
import classes from "./AboutSection.module.css"
import { Link } from "gatsby"
import MyInfo from "../../components/MyInfo/MyInfo"

const AboutSection = () => {
  return (
    <div id="AboutSection" className={classes.About}>
      <MyInfo />
    </div>
  )
}

export default AboutSection
