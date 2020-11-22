import React from "react"
import classes from "./ContactForm.module.css"

const ContactForm = props => {
  const formStyle = {
    textAlign: "left",
  }
  const buttonsStyle = {
    margin: "1rem",
    textAlign: "center",
  }
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
              rows="5"
              placeholder="Write your message..."
              className={classes.FormInput}
              required
            ></textarea>
          </div>

          <button type="submit" className="button special">
            Send
          </button>
        </form>
      </div>
    </>
  )
}

export default ContactForm
