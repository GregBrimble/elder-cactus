const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const comicPage = path.resolve(`./src/templates/comic.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const comics = result.data.allMarkdownRemark.edges

  comics.forEach((comic, index) => {
    const previous = index === comics.length - 1 ? null : comics[index + 1].node
    const next = index === 0 ? null : comics[index - 1].node

    createPage({
      path: comic.node.fields.slug,
      component: comicPage,
      context: {
        slug: comic.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  const { frontmatter } = node
  if (frontmatter) {
    const { image } = frontmatter
    if (image) {
      if (image.indexOf('/comics') === 0) {
        frontmatter.image = path.relative(
          path.dirname(node.fileAbsolutePath),
          path.join(__dirname, '/static/', image)
        )
      }
    }
  }

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
