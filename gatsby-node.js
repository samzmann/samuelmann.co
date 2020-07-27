/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const authAction = path.resolve('./src/templates/authAction.js')

  createPage({
    path: '/__/auth/action',
    component: authAction,
  })

  const legalTemplate = path.resolve('./src/templates/legal.js')

  const legal = await graphql(`
    {
      allMdx(filter: { frontmatter: { siteSection: { eq: "legal" } } }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (legal.errors) {
    console.log(legal.errors)
    reporter.panicOnBuild(`Error while running GraphQL query.`)
  }

  legal.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: legalTemplate,
    })
  })
}
