import React from "react"
import "./main.css"
import Layout from "../components/Layout/Layout"
import HomeSection from "./Sections/HomeSection"
import AboutSection from "./Sections/AboutSection"
import ProjectsSection from "./Sections/ProjectsSection"
import ContactSection from "./Sections/ContactSection"
import Helmet from "react-helmet"
import og from "../assets/logo/Tangir_32x32.png"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Tangir Miah Portfolio</title>
        <meta property="og:url" content="https://tangir.dev/"></meta>
        <meta property="og:title" content="Portfolio Tangir Miah"></meta>
        <meta property="og:site_name" content="tangir.dev"></meta>
        <meta
          property="og:description"
          content="This is my portfolio where i showcase my projects and you can learn something about me"
        ></meta>
        <meta property="og:image" content={og} data-rh="true"></meta>
      </Helmet>
      <Layout>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </Layout>
    </>
  )
}
