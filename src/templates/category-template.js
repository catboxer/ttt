import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = (props) => {
  const {data:{categories:{nodes:posts}}}= props
  const {pageContext:{category}}=props
  return <Layout>
    <Hero showChair/>
    <Posts posts={posts} title={`category / ${category}`}/>
  </Layout>
}
export const query = graphql `query GetCategories($category: String) {
  categories:allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {category: {eq: $category}}}) {
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
}`
export default CategoryTemplate
