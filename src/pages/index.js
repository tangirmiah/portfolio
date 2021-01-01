import React from "react"
import "./main.css"
import Layout from "../components/Layout/Layout"
import HomeSection from "./Sections/HomeSection"
import AboutSection from "./Sections/AboutSection"
import ProjectsSection from "./Sections/ProjectsSection"
import ContactSection from "./Sections/ContactSection"
import Helmet from "react-helmet"
import og from "../assets/logo/Tangir_32x32.png"
import { graphql, useStaticQuery } from "gatsby"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      icon: allFile(filter: { name: { eq: "Tangir_1080x1080" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  console.log(data.icon.edges[0].node.publicURL)
  return (
    <>
      <Helmet>
        <title>Tangir Miah Portfolio</title>
        <meta name="author" content="Tangir Ahammed Miah" />
        <meta property="og:url" content="https://tangir.dev/" />
        <meta property="og:title" content="Portfolio Tangir Miah" />
        <meta property="og:site_name" content="tangir.dev" />
        <meta
          property="og:description"
          content="This is my portfolio where i showcase my projects and you can learn something about me"
        />
        <meta
          property="og:image"
          content={data.icon.edges[0].node.publicURL}
          data-rh="true"
        />
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
