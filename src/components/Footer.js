import React from 'react'
import SocialLinks from '../constants/socialLinks'
import styled from 'styled-components'
import Grass from '../assets/grass.svg'
import {setColor, setLetterSpacing, setTransition, setShadow} from '../styles'


const Footer = () => {
  return <Wrapper >
    <div className="footer">
      <SocialLinks styleClass="footer-icons"/>
      <p>
        &copy; {new Date().getFullYear()} The This That All Rights Reserved
      </p>
    </div>
  </Wrapper>
}


const Wrapper = styled.footer`
.footer {
  height: 12rem;
  text-align: center;
  display: grid;
  place-items: end center;
  position: relative;
  padding-bottom: 2rem;
}
.footer:after {
  content: '';
  position: absolute;
  bottom: 0;
  height: 12rem;
  z-index: -1;
  width: 100%;
  background: url(${Grass});
  background-size: cover;
}
.footer-icons {
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
}
.footer p {
  margin-bottom: 0;
  color: ${setColor.mainBlack};
  text-transform: uppercase;
  letter-spacing: ${setLetterSpacing};;
}
`
export default Footer
