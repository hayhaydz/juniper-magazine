import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const RecentArticles = ({articles}) => {
    return (
        <div className="RecentArticles">
            <h1 className="RecentArticles__heading">Recently created.</h1>
            <div className="RecentArticles__articlesContainer">
                {articles.map((value, index) => {
                    return (
                        <Link to={value.node.fields.slug} className="RecentArticles__articlesContainer--link" key={index}>
                            <article className="RecentArticles__articlesContainer--article">
                                <Img fixed={value.node.frontmatter.featured_image.childImageSharp.fixed} className="RecentArticles__articlesContainer--article--img" placeholderStyle={{filter: `blur(16px)`, transform: `scale(1.04)`}} />
                                <header className="RecentArticles__articlesContainer--article--headings">
                                    <h1 className="RecentArticles__articlesContainer--article--heading">{value.node.frontmatter.title}</h1>
                                    <h2 className="RecentArticles__articlesContainer--article--subheading">{value.node.frontmatter.subtitle}</h2>
                                    <h4 className="RecentArticles__articlesContainer--article--date">{value.node.frontmatter.date} // <span className="RecentArticles__articlesContainer--article--author">{value.node.frontmatter.author}</span></h4>
                                    <p className="RecentArticles__articlesContainer--article--description">{value.node.frontmatter.description}</p>
                                </header>
                            </article>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
export default RecentArticles