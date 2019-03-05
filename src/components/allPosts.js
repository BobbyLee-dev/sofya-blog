import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const AllPosts = () => (
  <StaticQuery
    query={graphql`
      query postListQuery {
        allWordpressPost {
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
    `}
    render={data => (
      <div>
        {data.allWordpressPost.edges.map(item => (
          <div key={item.node.id}>
            <Link to={`post/${item.node.slug}`}>
              {/* <img src={item.node.featured_media.source_url} /> */}
              <h2>{item.node.title}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: item.node.excerpt,
                }}
              />
            </Link>
          </div>
        ))}
      </div>
    )}
  />
)

export default AllPosts
