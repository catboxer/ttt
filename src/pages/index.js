import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

const IndexPage = ({data}) => {
  const {
    allMdx:{nodes:posts}
  } = data
  return <Layout>
  <SEO title="Home"/>
  <Hero showChair/>
  <Posts posts={posts} title="Recently Published"/>
  </Layout>
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 5) {
      nodes {
        excerpt
        frontmatter {
          author
          category
          date(formatString: "MMMM Do, YYYY", difference: "")
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slug
          title
        }
        id
        wordCount {
          words
        }
      }
    }
  }
`

export default IndexPage
