import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'

const Article = ({ data }) => {
    return (
        <Layout>
            <div className="Article">
                <h2 className="Article__date" style={{fontFamily: data.markdownRemark.frontmatter.date_font || 'AndaleMono'}} >{data.markdownRemark.frontmatter.date}</h2>
                <h1 className="Article__heading" style={{fontFamily: data.markdownRemark.frontmatter.title_font || 'BudhayantiScript'}} >{data.markdownRemark.frontmatter.title}</h1>
                <h4 className="Article__subheading" style={{fontFamily: data.markdownRemark.frontmatter.subtitle_font || 'IowanOldStyle'}} >{data.markdownRemark.frontmatter.subtitle}</h4>
                <h3 className="Article__author" style={{fontFamily: data.markdownRemark.frontmatter.author_font || 'AndaleMono'}} >{data.markdownRemark.frontmatter.author}</h3>
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} className="Article__container" style={{fontFamily: data.markdownRemark.frontmatter.body_font || 'IowanOldStyle'}} />
                {data.markdownRemark.frontmatter.credits &&
                    <div className="Article__credits">
                        <h1 className="Article__credits--heading">Credits</h1>
                        {data.markdownRemark.frontmatter.credits.map((value, index) => {
                            return <p key={index} className="Article__credits--credit">{value}</p>
                        })}
                    </div>
                }
            </div>
        </Layout>
    )
}
export default Article

export const pageQuery = graphql`
    query ArticlePostBySlug($slug: String) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                author
                date(formatString: "dddd Do MMMM YYYY")
                subtitle
                title
                author_font
                body_font
                credits
                date_font
                subtitle_font
                title_font
            }
            html
        }
    }
`