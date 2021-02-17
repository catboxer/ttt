import React from 'react'
import ArmchairImg from "../assets/armchair.svg"
import styled from 'styled-components'
import CloudImg from "../assets/vector.svg"
import {setColor} from '../themes/styles'
const Hero = ({showChair}) => {
  return <Wrapper>
  { 
    showChair && <Image src={ArmchairImg} alt="hand-drawn yellow armchair"/>
  }
  </Wrapper>
}


const Wrapper = styled.header`
  background: ${setColor.primary7};
  /* linear-gradient(0deg, rgba(255,255,255,1) 0%, hsl(180, 57%, 50%)  60%); */
  height: 6rem;
  position: relative;
  z-index: -1;
    &:after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 6rem;
    width: 100%;
    background: url(${CloudImg});
    background-size: cover;
    }
@media screen and (min-width: 800px){
  height: 12rem;
}
`
const Image = styled.img`
display: none;
@media screen and (min-width: 800px){
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
}
`
export default Hero
