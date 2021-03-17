import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Themes from "../components/themes"
import AboutMe from "../components/about-me"
import ThoughtsArchive from "../components/thoughts-archive"
import Private from "../components/privacytext"
const Index: React.FC<PageProps> = () => (
  <Layout>
    <Private />
  </Layout>
)

export default Index
