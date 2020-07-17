import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const ShopBanner = () => {
    return (
        <StaticQuery 
            query={graphql`
                query {
                    file(relativePath: { eq: "img/shopCover.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 1920, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            `}
            render={data => (
                <div className="ShopBanner">
                    <Link to={`/shop`} className="ShopBanner__link">
                        <BackgroundImage
                            className="ShopBanner__link--banner"
                            fluid={data.file.childImageSharp.fluid}
                        >
                            <h1 className="ShopBanner__link--heading">Issue No.1 // Juniper's First <br/> View Here</h1>
                            <div className="ShopBanner__link--tint"></div>
                        </BackgroundImage>
                    </Link>
                </div>
            )}
        />
    )
}
export default ShopBanner