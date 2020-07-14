import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import ShopBanner from '../components/ShopBanner/ShopBanner'
import RecentArticles from '../components/RecentArticles/RecentArticles'

const Home = ({ data }) => {
  const articles = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <ShopBanner/>
      <RecentArticles articles={articles} />
    </Layout>
  )
}
export default Home

export const recentArticlesQuery = graphql`
  query recentArticlesQuery {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "article-post"}}}, limit: 4, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            author
            date(formatString: "DD/MM/YYYY")
            description
            featured_image {
              childImageSharp {
                fixed(height: 300, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

