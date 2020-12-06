import React from "react"
import classes from "./Footer.module.css"
import css from "../../assets/css.svg"
import html from "../../assets/html.svg"
import nodejs from "../../assets/nodejs.svg"
import js from "../../assets/js.svg"
import react from "../../assets/react.svg"
import mongo from "../../assets/mongo.svg"
import jquery from "../../assets/jquery.svg"
const Footer = props => {
  return (
    <div className={classes.FooterContainer}>
      <img src={html} alt="HTML 5" className={classes.Icon}></img>
      <img src={css} alt="CSS " className={classes.Icon}></img>
      <img src={js} alt="JavaScript" className={classes.Icon}></img>
      <img src={jquery} alt="jQuery" className={classes.Icon}></img>
      <img src={nodejs} alt="Node.js" className={classes.Icon}></img>
      <img src={react} alt="React.js" className={classes.Icon}></img>
      <img src={mongo} alt="MongoDB" className={classes.Icon}></img>
  
    </div>
  )
}

export default Footer
