import React from 'react'
//import SocialLinks from '../constants/socialLinks'
import styled from 'styled-components'
import Grass from '../assets/grass.svg'
import { setLetterSpacing, setTransition, setShadow} from '../themes/styles'


const Footer = () => {
  return <Wrapper >
      <h4>
        &copy; {new Date().getFullYear()} The This That All Rights Reserved
      </h4>
  </Wrapper>
}


const Wrapper = styled.footer`
  height: 12rem;
  text-align: center;
  display: grid;
  place-items: end center;
  position: relative;
  padding-bottom: 2rem;

:after {
  content: '';
  position: absolute;
  bottom: 0;
  height: 12rem;
  z-index: -1;
  width: 100%;
  background: url(${Grass});
  background-size: cover;
}
/* .footer-icons {
  display: flex;
  justify-content: center;
  line-height: 1;
  margin-bottom: 0.5rem;
  ${setShadow.darkest}
}
.footer-icons a {
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: ${setTransition};
}
.footer-icons li {
  transition: ${setTransition};
}
.footer-icons li:hover {
  transform: translateY(-10%);
} */
h4 {
  margin-bottom: 0;
  color: ${({theme}) => theme.mainWhite};
  text-shadow: 2px 2px #000;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: ${setLetterSpacing(.5)};;
}
`
export default Footer
