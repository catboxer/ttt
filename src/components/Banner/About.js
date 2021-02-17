import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Title from './Title'
import styled from 'styled-components'
import {setColor} from '../../themes/styles'
//...GatsbyImageSharpFixed

const About = () => {
  const data = useStaticQuery(query)
  return <Wrapper>
  <Title title="Info"/>
  <Image fixed={data.imageSharp.fixed} alt="photo of Rosalee Rester" className="img"/>

    <h3>Learning To Code? </h3>
<p>Cheatsheets, lessons learned, tips, links to curated resources. </p>
</Wrapper>
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: ${setColor.grey5};
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
