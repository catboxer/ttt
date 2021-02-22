import React from 'react'
import styled from 'styled-components'
import Categories from '../Categories'
import Title from './Title'
import {setLetterSpacing, setRadius, setTransition} from '../../themes/styles'
const BannerCategories = () => {
  return <Wrapper>
  <Title title="Categories"/>
  <Categories/>
  </Wrapper>
}
const Wrapper = styled.div`
  .category {
    text-transform: capitalize;
    display: block;
    padding: 0.5rem 0 0.5rem 1rem;
    letter-spacing: ${setLetterSpacing};
    transition: ${setTransition};
    border-radius: ${setRadius};
  }
  .category:hover {
    background: ${({theme}) => theme.grey10};
  }
`
export default BannerCategories
