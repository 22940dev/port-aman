import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Blogs from "../components/blogs"
import ThoughtsArchive from "../components/thoughts-archive"
import AboutMe from "../components/about-me"
import Project from "../components/project"
const Index: React.FC<PageProps> = () => (
  <Layout>
    <Project />
    <Blogs />

  </Layout>
)

export default Index
