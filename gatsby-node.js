const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                title
                status
                content
              }
            }
          }
          allWordpressPost {
            edges {
              node {
                slug
                title
                content
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.error) {
        console.log(result.errors)
        reject(result.errors)
      }

      result.data.allWordpressPage.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve("./src/pages/page.js"),
          context: {
            slug: node.slug,
          },
        })
      })

      result.data.allWordpressPost.edges.forEach(({ node }) => {
        createPage({
          path: `post/${node.slug}`,
          component: path.resolve("./src/pages/post.js"),
          context: {
            slug: node.slug,
          },
        })
      })

      resolve()
    })
  })
}
