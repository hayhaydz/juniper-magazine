import React from 'react'
import { Link } from 'gatsby' 
import Img from 'gatsby-image'

const ArticleRoll = ({ data }) => {
    return (
        <div className="ArticleRoll">
            {data.map(({ node }) => {
                return (
                    <article key={node.fields.slug} className="ArticleRoll__article">
                        <Img fluid={node.frontmatter.featured_image.childImageSharp.fluid} className="ArticleRoll__article--img"/>
                        <header>
                            <h1 className="ArticleRoll__article--heading" >{node.frontmatter.title}</h1>
                            <h2 className="ArticleRoll__article--subheading">{node.frontmatter.subtitle}</h2>
                            <p className="ArticleRoll__article--meta">{node.frontmatter.date} | {node.frontmatter.author}</p>
                        </header>
                        <section className="ArticleRoll__article--section">
                            <p className="ArticleRoll__article--desc">{node.frontmatter.description}</p>
                            <Link to={node.fields.slug} className="ArticleRoll__article--link">View Post</Link>
                        </section>
                    </article>
                )
            })}
        </div>
    )
}
export default ArticleRoll