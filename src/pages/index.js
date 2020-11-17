import React from "react"
import "./main.css"
import Layout from "../components/Layout/Layout"
import HomeSection from "./Sections/HomeSection"
import AboutSection from "./Sections/AboutSection"
import ParticlesBg from "particles-bg"
import { Link } from "gatsby"

export default function Home() {
  return (
    <>
      <Layout>
        <HomeSection />

        <AboutSection />
      </Layout>
    </>
  )
}
