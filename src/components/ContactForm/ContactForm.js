import React, { useState } from "react"
import classes from "./ContactForm.module.css"
import { RiMailSendLine } from "react-icons/ri"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ContactForm = props => {
  const [formState, setFormState] = useState({
    fullname: "",
    email: "",
    message: "",
  })

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = event => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...formState,
      }),
    })
      .then(() =>
        toast.success("Your message was delivered!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        })
      )
      .catch(error =>
        toast.success("There was an error with your message", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        })
      )
    event.preventDefault()
  }

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={classes.ContactFormContainer}>
        <h1 className={classes.FormTitle}>Contact me</h1>
        <form
          name="contact form"
          method="POST"
          data-netlify="true"
          className={classes.Form}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact form" />

          <div className={classes.InputContainer}>
            <label>Name</label>
            <input
              type="text"
              name="fullname"
              className={classes.FormInput}
              placeholder="Write your name..."
              value={formState.name}
              onChange={handleChange}
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
              value={formState.email}
              onChange={handleChange}
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
              value={formState.message}
              onChange={handleChange}
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
