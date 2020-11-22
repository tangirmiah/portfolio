import React from "react"
import "./main.css"
import Layout from "../components/Layout/Layout"
import HomeSection from "./Sections/HomeSection"
import AboutSection from "./Sections/AboutSection"
import ProjectsSection from "./Sections/ProjectsSection"
import ContactSection from "./Sections/ContactSection"

export default function Home() {
  return (
    <>
      <Layout>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </Layout>
    </>
  )
}
