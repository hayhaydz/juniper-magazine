// import React from 'react'
// import { graphql } from 'gatsby'

// import Layout from '../components/Layout/Layout'
// import ArticleRoll from '../components/ArticleRoll/ArticleRoll'

// const Lifestyle = ({ data }) => {
//     const posts = data.allMarkdownRemark.edges
//     return (
//         <Layout>
//             <ArticleRoll data={posts} />
//         </Layout>
//     )
// }
// export default Lifestyle

// export const pageQuery = graphql`
// query {
//     allMarkdownRemark(
//         filter: { fileAbsolutePath: { regex: "\/lifestyle/"}}
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
//           }
//         }
//       }
//     }
//   }
  
// `

import React from 'react'

const Lifestyle = () => {
    return (
        <div>
            <p>hi</p>
        </div>
    )
}

export default Lifestyle