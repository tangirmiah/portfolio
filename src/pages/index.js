import React from "react"
import "./main.css"
import Layout from "../components/Layout/Layout"
import HomeSection from "./Sections/HomeSection"
import AboutSection from "./Sections/AboutSection"
import ProjectsSection from "./Sections/ProjectsSection"
import ContactSection from "./Sections/ContactSection"
import Helmet from "react-helmet"
import og from "../assets/portfolioicon.png"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Tangir Miah Portfolio</title>
        <meta property="og:title" content="Portfolio Tangir Miah"></meta>
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
