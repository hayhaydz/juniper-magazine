import React from 'react'
// import { graphql } from 'gatsby'

// import Layout from '../components/Layout/Layout'
// import ArticleRoll from '../components/ArticleRoll/ArticleRoll'

// const Interviews = ({ data }) => {
//     const posts = data.allMarkdownRemark.edges
//     return (
//         <Layout>
//             <ArticleRoll data={posts} />
//         </Layout>
//     )
// }
// export default Interviews

// export const pageQuery = graphql`
// query {
//     allMarkdownRemark(
//         filter: { fileAbsolutePath: { regex: "\/interviews/"}}
//         sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "DD/MM/YYYY")
//             author
//             description
//             subtitle
//             title
//             featured_image {
//               childImageSharp {
//                 fluid(maxWidth: 500, quality: 100) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
  
// `
const interviews = () => {
    return <div></div>
}
export default interviews