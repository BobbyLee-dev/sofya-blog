import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const GalleryWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  article {
    width: 30%;
    min-width: 300px;
    &:first-of-type {
      width: 100%;
      .gatsby-image-wrapper {
        height: auto;
      }
    }
    .gatsby-image-wrapper {
      height: 250px;
    }
  }
`

const PHOTO_QUERY = graphql`
  query photoQuery {
    allWordpressPost(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          slug
          title
          excerpt
          link
          title
          categories {
            name
          }
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
    }
  }
`

const Photos = () => (
  <StaticQuery
    query={PHOTO_QUERY}
    render={data => (
      <GalleryWrap>
        {data.allWordpressPost.edges.map(item =>
          item.node.categories.map(cat =>
            cat.name === "Photography" ? (
              <div key={item.node.id}>
                <Link to={`post/${item.node.slug}`}>
                  {item.node.featured_media !== null ? (
                    <Img
                      fluid={
                        item.node.featured_media.localFile.childImageSharp.fluid
                      }
                    />
                  ) : null}
                  <h2>{item.node.title}</h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.node.excerpt,
                    }}
                  />
                </Link>
              </div>
            ) : null
          )
        )}
      </GalleryWrap>
    )}
  />
)

export default Photos
