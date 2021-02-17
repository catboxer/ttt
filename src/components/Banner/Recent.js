import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import Title from './Title'
import {setColor, setRadius} from '../../themes/styles'
//...GatsbyImageSharpFluid

const Recent = () => {
  return <Wrapper>Banner Recent</Wrapper>
}

const Wrapper = styled.div`
  .post {
    display: grid;
    grid-template-columns: 75px 1fr;
    column-gap: 1rem;
    margin-bottom: 1rem;
  }
  .img {
    border-radius: ${setRadius};
  }
  h5 {
    font-size: 0.7rem;
    margin-bottom: 0.25rem;
    letter-spacing: 0;
    line-height: 1.2;
    color: ${setColor.grey1};
  }
  p {
    font-size: 0.6rem;
    margin-bottom: 0;
    color: ${setColor.grey5};
  }
  .post:hover {
    h5 {
      color: ${setColor.primary5};
    }
  }
`

export default Recent
