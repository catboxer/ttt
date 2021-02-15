import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Title from './Title'
import styled from 'styled-components'
//...GatsbyImageSharpFixed

const About = () => {
  const data = useStaticQuery(query)
  return <Wrapper>
  <Title title="about me"/>
  <Image fixed={data.imageSharp.fixed} alt="photo of Rosalee Rester" className="img"/>

    <h4>Learning To Code? </h4>
<p>Cheatsheets, lessons learned, tips, links to curated resources. </p>
</Wrapper>
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
    border: black solid 2px;
    margin-bottom: 1rem;
  }
`

const query = graphql`
{
    imageSharp(fixed: {originalName: {eq: "rosalee.jpeg"}}) {
    fixed (width:100, height:100) {
      ...GatsbyImageSharpFixed
    }
  }
}
  `
export default About
