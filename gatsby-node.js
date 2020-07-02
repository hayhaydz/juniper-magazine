// const path =require('path')
// const { createFilePath } = require('gatsby-source-filesystem')

// exports.createPages = ({ actions, graphql }) => {
//     const { createPage } = actions

//     return graphql(`
//         query {
//             allMarkdownRemark(limit: 1000) {
//                 edges {
//                     node {
//                         id
//                         fields {
//                             slug
//                         }
//                         frontmatter {
//                             templateKey
//                         }
//                     }
//                 }
//             }
//         }
//     `).then((result) => {
//         if(result.errors) {
//             result.errors.forEach((e) => console.error(e.toString()))
//             return Promise.reject(result.errors)
//         }

//         const articles = result.data.allMarkdownRemark.edges

//         articles.forEach((edge) => {
//             const id = edge.node.id
//             createPage({
//                 path: edge.node.fields.slug,
//                 component: path.resolve(
//                     `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
//                 ),
//                 context: {
//                     id,
//                 }
//             })
//         })
//     })
// }