import React from "react"
import classes from "./ContactSection.module.css"
import ContactForm from "../../components/ContactForm/ContactForm"

const ContactSection = () => {
  return (
    <div id="ContactSection" className={classes.Contact}>
      <ContactForm />
    </div>
  )
}

export default ContactSection
