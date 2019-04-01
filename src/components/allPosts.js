import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const PostsWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  article {
    width: 30%;
    min-width: 300px;
    &:first-of-type {
      width: 100%;
      .gatsby-image-wrapper {
        height: 500px;
      }
    }
    .gatsby-image-wrapper {
      height: 250px;
    }
  }
`

const POST_QUERY = graphql`
  query postListQuery {
    allWordpressPost(limit: 10, sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          slug
          title
          excerpt
          link
          title
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

const AllPosts = () => (
  <StaticQuery
    query={POST_QUERY}
    render={data => (
      <PostsWrap>
        {data.allWordpressPost.edges.map(item => (
          <article key={item.node.id}>
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
          </article>
        ))}
      </PostsWrap>
    )}
  />
)

export default AllPosts
