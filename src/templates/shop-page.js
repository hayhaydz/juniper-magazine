import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout/Layout'

const Shop = ({ data }) => {
    return (
        <Layout>
            <div className="Shop">
                <Img fluid={data.markdownRemark.frontmatter.coverImage.childImageSharp.fluid} className="Shop__coverImage"/>
                <h2 className="Shop__price">{data.markdownRemark.frontmatter.price}</h2>
                <h1 className="Shop__heading">{data.markdownRemark.frontmatter.title}</h1>
                <hr className="Shop__rule" />
                <p className="Shop__description">{data.markdownRemark.frontmatter.description}</p>
                <p className="Shop__details">{data.markdownRemark.frontmatter.details}</p>
                <div className="Shop__galleryImages">
                    {data.markdownRemark.frontmatter.galleryImages.map((value, index) => {
                        return (
                            <div data-sal="fade" data-sal-duration="500" data-sal-delay="100" key={index}>
                                <Img fluid={value.childImageSharp.fluid} className="Shop__galleryImages--img" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}
export default Shop

export const pageQuery = graphql`
    query pageQuery {
        markdownRemark(fields: {slug: {eq: "/shop/"}}) {
            frontmatter {
                coverImage {
                    childImageSharp {
                        fluid(maxWidth: 500, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                price
                title
                description
                details
                galleryImages {
                    childImageSharp {
                        fluid(maxWidth: 500, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`