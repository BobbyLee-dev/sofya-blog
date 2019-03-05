import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AllPosts from "../components/allPosts"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <AllPosts />
  </Layout>
)

export default IndexPage
