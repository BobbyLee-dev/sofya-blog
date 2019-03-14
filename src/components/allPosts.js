import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

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
      <section>
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
      </section>
    )}
  />
)

export default AllPosts
