import React from 'react'
import ArmchairImg from "../assets/armchair.svg"
import styled from 'styled-components'
import CloudImg from "../assets/vector.svg"
import {media} from './../themes/styles'
const Hero = ({showChair}) => {
  return  <Wrapper>
  { 
    showChair && <Image src={ArmchairImg} alt="hand-drawn yellow armchair"/>
  }
  </Wrapper>
}


const Wrapper = styled.header`
  background: ${({theme}) => theme.primary7};
  margin-bottom: 2rem;
  height: 4rem;
  position: relative;
    &:after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4rem;
    width: 100%;
    background: url(${CloudImg});
    background-size: cover;
    }
  ${media.tablet `
    height: 12rem;
      &:after{
      height: 8rem;
    `}
`
const Image = styled.img`
display: none;
${media.tablet `
  display: inline-block;
    padding-bottom: 1em;
    width: 12rem;
    height: 12rem;
    display: block;
    position: absolute;
    bottom: 0;
    left: 70%;
    transform: translate(-20%, 15%);
    z-index: 4; 
    `
  }
`
export default Hero
