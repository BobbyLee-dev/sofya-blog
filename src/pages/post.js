import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Post extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <SEO title="Posts" />
        <h1>{data.wordpressPost.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.wordpressPost.content,
          }}
        />
        <Img
          fluid={
            data.wordpressPost.featured_media.localFile.childImageSharp.fluid
          }
        />
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      slug
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
