import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
import SEO from '../components/seo'
const PostsPage = ({ data }) => {
  const {allMdx:{nodes:posts}}=data;

  return <Layout>
    <SEO title="Learning Tips For Front End Web Development"/>
    <Hero showChair/>
    <Posts posts={posts} title="all posts"/>
  </Layout>
}
export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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
          alt
        }
        id
        wordCount {
          words
        }
      }
    }
  }
`

export default PostsPage
