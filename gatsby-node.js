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
                id
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
        if (node.status === "publish") {
          createPage({
            path: node.slug,
            component: path.resolve("./src/components/pagesLayout.js"),
            context: {
              id: node.id,
            },
          })
        }
      })

      result.data.allWordpressPost.edges.forEach(({ node }) => {
        createPage({
          path: `post/${node.slug}`,
          component: path.resolve("./src/components/postLayout.js"),
          context: {
            id: node.id,
          },
        })
      })

      resolve()
    })
  })
}
