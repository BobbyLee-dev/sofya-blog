import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const Posts = () => (
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
              featured_media {
                source_url
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

export default Posts
