import React from "react"
import classes from "./ContactForm.module.css"
import { RiMailSendLine } from "react-icons/ri"
const ContactForm = props => {
  return (
    <>
      <div className={classes.ContactFormContainer}>
        <h1 className={classes.FormTitle}>Contact me</h1>
        <form className={classes.Form} action="" method="post">
          <div className={classes.InputContainer}>
            <label>Name</label>
            <input
              type="text"
              name="fullname"
              className={classes.FormInput}
              placeholder="Write your name..."
              required
            />
          </div>
          <div className={classes.InputContainer}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Write your email..."
              className={classes.FormInput}
              required
            />
          </div>
          <div className={classes.InputContainer}>
            <label>Message</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Write your message..."
              className={classes.FormInput}
              required
            ></textarea>
          </div>

          <button type="submit" className={classes.SubmitButton}>
            Send &nbsp;
            <RiMailSendLine />
          </button>
        </form>
      </div>
    </>
  )
}

export default ContactForm
