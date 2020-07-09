import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'

const Article = ({ data }) => {
    return (
        <Layout>
            <div className="Article">
                <h2 className="Article__date" >{data.markdownRemark.frontmatter.date}</h2>
                <h1 className="Article__heading" >{data.markdownRemark.frontmatter.title}</h1>
                <h4 className="Article__subheading">{data.markdownRemark.frontmatter.subtitle}</h4>
                <h3 className="Article__author">{data.markdownRemark.frontmatter.author}</h3>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} className="Article__container" />
            </div>
        </Layout>
    )
}
export default Article

export const pageQuery = graphql`
    query  ArticlePostBySlug($slug: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                author
                date(formatString: "dddd Do MMMM YYYY")
                subtitle
                title
            }
        }
    }
`