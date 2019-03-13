import React, { Component } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "./layout"
import SEO from "./seo"

export default class Post extends Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <SEO title="Posts" />
        <p>{img}</p>
        {data.wordpressPost.featured_media !== null ? (
          <Img
            fluid={
              data.wordpressPost.featured_media.localFile.childImageSharp.fluid
            }
          />
        ) : null}

        <h1>{data.wordpressPost.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.wordpressPost.content,
          }}
        />
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
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
