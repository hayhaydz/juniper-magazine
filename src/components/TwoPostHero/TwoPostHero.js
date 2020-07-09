import React from 'react'
import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const TwoPostHero = ({ TwoPosts }) => {
    const FirstPost = TwoPosts[0].node
    const SecondPost = TwoPosts[1].node

    return (
        <div className="TwoPostHero" >
            <Link to={FirstPost.fields.slug} className="TwoPostHero__link" >
                <BackgroundImage
                    className="TwoPostHero__backgroundImage TwoPostHero__backgroundImage--left"
                    fluid={FirstPost.frontmatter.featured_image.childImageSharp.fluid}
                >
                    <div className="TwoPostHero__titleContainer TwoPostHero__titleContainer--left" >
                        <h1 className="TwoPostHero__heading" >{FirstPost.frontmatter.title}</h1>
                        <h2 className="TwoPostHero__subheading" >{FirstPost.frontmatter.author}</h2>
                    </div>
                    <div className="TwoPostHero__tint"></div>
                </BackgroundImage>
            </Link>
            <Link to={SecondPost.fields.slug} className="TwoPostHero__link" >
                <BackgroundImage
                    className="TwoPostHero__backgroundImage TwoPostHero__backgroundImage--right"
                    fluid={SecondPost.frontmatter.featured_image.childImageSharp.fluid}
                >
                    <div className="TwoPostHero__titleContainer TwoPostHero__titleContainer--right" >
                        <h1 className="TwoPostHero__heading" >{SecondPost.frontmatter.title}</h1>
                        <h2 className="TwoPostHero__subheading" >{SecondPost.frontmatter.author}</h2>
                    </div>
                    <div className="TwoPostHero__tint"></div>
                </BackgroundImage>
            </Link>
        </div>
    )
}
export default TwoPostHero