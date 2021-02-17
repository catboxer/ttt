import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import styled from 'styled-components'
import Image from 'gatsby-image'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {setColor, setRadius, setLetterSpacing} from '../themes/styles'

const PostTemplate = ({data}) => {
  const {mdx:{
  frontmatter:{image, title, date, category, alt},  
  body
  }} = data;
  return <Layout>
    <Hero/>
    <Wrapper>
      {/* posts */}
      <article>
          <Image fluid={image.childImageSharp.fluid} alt={alt}/>
            <div className="post-info">
              <span>{category}</span>
              <h2>{title}</h2>
              <p>{date}</p>
              <div className="underline"></div>
            </div>
          <MDXRenderer>
            {body}
          </MDXRenderer>
      </article>
      {/* banner */}
      <article>
          <Banner/>
      </article>
    </Wrapper>
  </Layout>
}
export const query = graphql`
query GetSinglePost($slug:String) {
  mdx(frontmatter: {slug: {eq: $slug}}) {
    id
    body
    frontmatter {
      category
      date(formatString: "MMMM Do, YYYY")
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
  }
}
`

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: ${setColor.primary5};
      color: ${setColor.mainWhite};
      border-radius: ${setRadius};
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: ${setLetterSpacing};
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: ${setColor.grey5};
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: ${setColor.grey9};
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr 200px;
      column-gap: 4rem;
    }
  }
`

export default PostTemplate
