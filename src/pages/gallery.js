import React from "react"
import { Link } from "gatsby"

import Photos from "../components/photos"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = () => (
  <Layout>
    <SEO title="Page two" />
    <Photos />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Gallery
