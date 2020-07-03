// import React from 'react'
// import { graphql } from 'gatsby'

// const Article = ({ data }) => {
//     return (
//         <div className="Article">
//             <h1>Hello this is an article template</h1>
//             <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
//         </div>
//     )
// }
// export default Article

// export const pageQuery = graphql`
//     query  BlogPostBySlug($slug: String) {
//         markdownRemark(fields: { slug: { eq: $slug } }) {
//             html
//         }
//     }
// `