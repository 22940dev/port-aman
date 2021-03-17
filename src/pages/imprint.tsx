import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Themes from "../components/themes"
import AboutMe from "../components/about-me"
import ThoughtsArchive from "../components/thoughts-archive"
import Imprint from "../components/imprint"
const Index: React.FC<PageProps> = () => (
  <Layout>
    <Imprint />
  </Layout>
)

export default Index
