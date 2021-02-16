import React, {useRef} from 'react'
import { Link } from 'gatsby'
// import logo from '../assets/logo.svg'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'
import styled from 'styled-components'
import {setColor, setFont, setLetterSpacing, setMaxWidth, setRadius, setTransition} from '../styles'
//import Categories from './Categories'


const Navbar = ({toggle}) => {
const activatorRef = useRef(null)

  return <Wrapper>
  <div className="navbar">
  <div className="nav-center">
    <div className="nav-header">
      <Link to="/" className="nav-logo">
      {/* <img src={logo} alt="the this that"/> */}
<svg id="Logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="203.03" height="55.97" viewBox="0 0 203.03 37.97"><path d="M37.37,2.1a1.27,1.27,0,0,1,.75,1.83,1.28,1.28,0,0,1-1.29.85,1.71,1.71,0,0,1-.5-.1,23.84,23.84,0,0,0-5.9-1.39L17.68,3a22.73,22.73,0,0,0-.41,3.17l1.2,23.33c.43,2.51.83,4,1.19,4.32a1.28,1.28,0,0,1,.1,2,1.37,1.37,0,0,1-1.93.1q-1.35-1.14-2.19-6.45c-.43-2.68-.78-6.19-1-10.51s-.3-7.87-.2-10.72A42.13,42.13,0,0,1,14.85,3h-.74c-1.29.07-2.6.16-3.92.27L6.74,3.6l-2.66.27c-.79.08-1.4.16-1.83.22l-.65,0a1.23,1.23,0,0,1-1-.25A1.4,1.4,0,0,1,0,3a1.44,1.44,0,0,1,.3-1A1.43,1.43,0,0,1,1.2,1.4l.41,0,1.11-.12L4.39,1C5,.94,5.75.86,6.6.78L9.18.55,12.09.34Q13.71.21,15.24.16,30.74-.57,37.37,2.1Z" fill="#d75727"/><path d="M25.61,1.75A3.32,3.32,0,0,1,27,2.19,4.74,4.74,0,0,1,28,3.06c.28.31.39.55.32.72Q27.5,6.25,27.2,13.85a116.2,116.2,0,0,0,.35,13.84A13.17,13.17,0,0,1,30.37,24a4.91,4.91,0,0,1,3.13-1.34,4.79,4.79,0,0,1,1.19.15h.16a4.85,4.85,0,0,1,1.69.79A3.93,3.93,0,0,1,38.22,26a17.94,17.94,0,0,1,.45,2.83,19.49,19.49,0,0,0,.45,3,4.27,4.27,0,0,0,1,2l0,.05a1.24,1.24,0,0,1,.45.77c0,.21-.15.32-.45.32a3.45,3.45,0,0,1-2.28-1.09,7.44,7.44,0,0,1-1.94-3.37,18.56,18.56,0,0,1-.49-3.22,17.11,17.11,0,0,0-.25-2.14,4.67,4.67,0,0,0-1.84.94,12.69,12.69,0,0,0-2.68,3.53,22,22,0,0,0-1.27,2.58c-.38.92-.65,1.65-.82,2.18l-.24.79a.42.42,0,0,1-.45.25,2.36,2.36,0,0,1-1-.3,4,4,0,0,1-1.14-.77,1.56,1.56,0,0,1-.55-.81A115.67,115.67,0,0,1,24,12.22c.2-5.06.59-8.47,1.19-10.22A.4.4,0,0,1,25.61,1.75Z" fill="#d75727"/><path d="M45.12,22.89a5.55,5.55,0,0,1,3,1,8.4,8.4,0,0,1,2.53,2.54.12.12,0,0,1,0,.09c.7,1.32,0,2.05-2,2.17-.1,0-.2,0-.3,0l-.35,0a11.18,11.18,0,0,1-1.73-.2,9.6,9.6,0,0,1-1.84-.49,6.72,6.72,0,0,0-.5,2,4.64,4.64,0,0,0,.65,3,.37.37,0,0,0,.2.07,1.07,1.07,0,0,0,.25,0h.25a7.18,7.18,0,0,0,2.53-.61A11.85,11.85,0,0,0,50.48,31a6.75,6.75,0,0,0,1.68-1.71.63.63,0,0,1,.45-.15,3.23,3.23,0,0,1,1.54.55,3.38,3.38,0,0,1,1,.84c.21.3.27.53.17.69a10,10,0,0,1-4.61,3.48,7.71,7.71,0,0,1-3,.69h-.44a7.6,7.6,0,0,1-2.43-.64,8.19,8.19,0,0,1-2.68-1.94c-.07-.06-.1-.11-.1-.15a5.82,5.82,0,0,1-1.19-4.21,6.76,6.76,0,0,1,1.29-3.73A3.65,3.65,0,0,1,45,22.87Zm.7,3.63h.44a2.05,2.05,0,0,0,1.17-.35q.38-.3.27-.6a1.7,1.7,0,0,0-.35-.45,3.1,3.1,0,0,0-2,1.39Z" fill="#d75727"/><path d="M99.35,2.1a1.27,1.27,0,0,1,.74,1.83,1.29,1.29,0,0,1-1.29.85,1.71,1.71,0,0,1-.5-.1,23.84,23.84,0,0,0-5.9-1.39L79.65,3a21.3,21.3,0,0,0-.4,3.17l1.19,23.33c.43,2.51.83,4,1.19,4.32a1.28,1.28,0,0,1,.1,2,1.37,1.37,0,0,1-1.93.1c-.9-.76-1.62-2.91-2.19-6.45-.43-2.68-.77-6.19-1-10.51s-.3-7.87-.2-10.72A44.72,44.72,0,0,1,76.81,3h-.74c-1.29.07-2.6.16-3.92.27L68.7,3.6l-2.65.27c-.8.08-1.41.16-1.84.22l-.64,0a1.25,1.25,0,0,1-1-.25A1.41,1.41,0,0,1,62,3a1.44,1.44,0,0,1,.3-1,1.38,1.38,0,0,1,.89-.55l.4,0,1.12-.12L66.35,1C67,1,67.72.87,68.57.79s1.7-.16,2.58-.22L74.07.34Q75.68.21,77.22.16,92.7-.57,99.35,2.1Z" fill="#d75727"/><path d="M87.59,1.75a3.33,3.33,0,0,1,1.33.44A4.74,4.74,0,0,1,90,3.06c.28.31.39.55.32.72q-.84,2.47-1.14,10.07a116.2,116.2,0,0,0,.35,13.84A13.17,13.17,0,0,1,92.34,24a5,5,0,0,1,3.13-1.33,4.68,4.68,0,0,1,1.19.15h.15a4.76,4.76,0,0,1,1.69.79A3.94,3.94,0,0,1,100.19,26a17.92,17.92,0,0,1,.44,2.83,19.49,19.49,0,0,0,.45,3,4.37,4.37,0,0,0,1,2l.05.05a1.24,1.24,0,0,1,.45.77c0,.21-.15.32-.45.32a3.49,3.49,0,0,1-2.28-1.09,7.42,7.42,0,0,1-1.93-3.37,18.58,18.58,0,0,1-.5-3.22,17.11,17.11,0,0,0-.25-2.14,4.59,4.59,0,0,0-1.83.95,12.48,12.48,0,0,0-2.68,3.52,19.79,19.79,0,0,0-1.27,2.57c-.38.92-.65,1.65-.82,2.18l-.25.79a.4.4,0,0,1-.44.25,2.36,2.36,0,0,1-1-.3,4.07,4.07,0,0,1-1.15-.77,1.53,1.53,0,0,1-.54-.81A115.67,115.67,0,0,1,86,12.22c.2-5.06.59-8.47,1.19-10.22A.41.41,0,0,1,87.59,1.75Z" fill="#d75727"/><path d="M107.09,22.89a5.6,5.6,0,0,1,3,1,8.51,8.51,0,0,1,2.53,2.54.16.16,0,0,1,0,.09c.69,1.33,0,2.05-2,2.19l-.29,0-.35,0a12.88,12.88,0,0,1-1.74-.2,9.52,9.52,0,0,1-1.83-.5,6.56,6.56,0,0,0-.5,2,4.67,4.67,0,0,0,.64,3,.39.39,0,0,0,.21.08l.24,0h.25a7.3,7.3,0,0,0,2.53-.6A11.6,11.6,0,0,0,112.43,31a6.82,6.82,0,0,0,1.69-1.71.65.65,0,0,1,.45-.15,3.31,3.31,0,0,1,1.53.55,3.27,3.27,0,0,1,1,.84c.22.3.27.53.17.7a10.05,10.05,0,0,1-4.61,3.47,7.89,7.89,0,0,1-3,.7h-.44a7.61,7.61,0,0,1-2.43-.65,8,8,0,0,1-2.68-1.93c-.07-.07-.1-.12-.1-.15a5.89,5.89,0,0,1-1.19-4.22,6.7,6.7,0,0,1,1.29-3.72A3.68,3.68,0,0,1,107,22.88Zm.69,3.63h.45a2,2,0,0,0,1.16-.35c.25-.2.34-.4.28-.6a1.94,1.94,0,0,0-.35-.45,3.09,3.09,0,0,0-2,1.39Z" fill="#d75727"/><path d="M161.32,2.1a1.27,1.27,0,0,1,.74,1.83,1.28,1.28,0,0,1-1.29.85,1.71,1.71,0,0,1-.5-.1,23.84,23.84,0,0,0-5.9-1.39L141.62,3a24.33,24.33,0,0,0-.41,3.17l1.2,23.33c.43,2.51.83,4,1.19,4.32a1.28,1.28,0,0,1,.1,2,1.37,1.37,0,0,1-1.93.1c-.9-.76-1.62-2.91-2.19-6.45-.43-2.68-.77-6.19-1-10.51s-.3-7.87-.2-10.72A42.13,42.13,0,0,1,138.79,3H138c-1.29.07-2.59.16-3.92.27l-3.45.33L128,3.87c-.8.08-1.41.16-1.84.22l-.64,0a1.22,1.22,0,0,1-1-.25A1.38,1.38,0,0,1,124,3a1.44,1.44,0,0,1,.3-1,1.43,1.43,0,0,1,.89-.55l.4,0,1.12-.12,1.66-.2C129,1,129.69.87,130.54.79s1.7-.16,2.58-.22L136,.34q1.61-.14,3.15-.18Q154.67-.57,161.32,2.1Z" fill="#d75727"/><path d="M149.56,1.75a3.41,3.41,0,0,1,1.34.44,4.92,4.92,0,0,1,1.06.87q.42.47.33.72-.85,2.47-1.15,10.07a116.2,116.2,0,0,0,.35,13.84A13.17,13.17,0,0,1,154.31,24a5,5,0,0,1,3.14-1.33,4.79,4.79,0,0,1,1.19.15h.14a4.76,4.76,0,0,1,1.69.79,4.53,4.53,0,0,1,1.09,1.05,4.37,4.37,0,0,1,.61,1.29,19.17,19.17,0,0,1,.45,2.83,18.33,18.33,0,0,0,.44,3,4.18,4.18,0,0,0,1,2l0,.05a1.24,1.24,0,0,1,.45.77c0,.21-.15.32-.45.32a3.49,3.49,0,0,1-2.28-1.09,7.42,7.42,0,0,1-1.93-3.37,18.58,18.58,0,0,1-.5-3.22,17.11,17.11,0,0,0-.25-2.14,4.59,4.59,0,0,0-1.83.95,12.48,12.48,0,0,0-2.68,3.52,19.85,19.85,0,0,0-1.28,2.57c-.38.92-.65,1.65-.82,2.18l-.24.79a.42.42,0,0,1-.45.25,2.36,2.36,0,0,1-1-.3,4,4,0,0,1-1.14-.77,1.5,1.5,0,0,1-.55-.81,115.67,115.67,0,0,1-1.19-21.28q.3-7.59,1.19-10.22A.42.42,0,0,1,149.56,1.75Z" fill="#d75727"/><path d="M170.64,23.68a6.37,6.37,0,0,1,1.24.15,4.18,4.18,0,0,1,1.84.94l.15-.17a.8.8,0,0,1,.15-.17,1.24,1.24,0,0,1,.44-.35,1.6,1.6,0,0,1,1.14,0c.24.07.47.15.7.24a4.58,4.58,0,0,1,1.44,1.15,1.54,1.54,0,0,1,.3.49,2.69,2.69,0,0,1,.14.75,13.47,13.47,0,0,1,0,1.68,33.31,33.31,0,0,0,.15,4.07c0,.1.08.24.13.42a1.69,1.69,0,0,1,.07.38,7.34,7.34,0,0,0,1-.2,16.27,16.27,0,0,0,3.43-1.74c.4-.3,1.11-.08,2.13.64a3,3,0,0,1,.82.87q.23.42,0,.57a19,19,0,0,1-3.62,1.84,5.53,5.53,0,0,1-2.88.2,7.3,7.3,0,0,1-2.18-1A6.55,6.55,0,0,1,176,33.06a4.55,4.55,0,0,1-.75-2c0-.18-.07-.37-.1-.57s0-.39,0-.42a6.08,6.08,0,0,1-.49,1,13.05,13.05,0,0,1-2.38,3.38,3.89,3.89,0,0,1-1.54.94,4.92,4.92,0,0,1-2.63-.25c-.24-.1-.47-.22-.7-.34a5,5,0,0,1-1.43-1.24,3.17,3.17,0,0,1-.5-.85,3.91,3.91,0,0,1-.3-1.59,8.77,8.77,0,0,1,.84-3.42,8.53,8.53,0,0,1,2.24-3A4,4,0,0,1,170.64,23.68ZM173,26a4.87,4.87,0,0,0-1.89.8,8.51,8.51,0,0,0-2.83,5.9V33a2.09,2.09,0,0,0,.85-.65,11.4,11.4,0,0,0,2.28-3.22c.23-.4.52-1,.87-1.69S172.88,26.23,173,26Z" fill="#d75727"/><path d="M191.23,4.08a3.28,3.28,0,0,1,1.19.35,5,5,0,0,1,1.1.79c.29.3.41.55.34.75-.2,1.26-.41,2.84-.64,4.76a53,53,0,0,1,7.34.45h.05a3.39,3.39,0,0,1,2.18,1.29c.24.29.29.53.18.69s-.37.22-.77.15a56.17,56.17,0,0,0-9.28-.35c-.13,1.1-.28,2.5-.45,4.22q-1.08,12.36-.09,17.22a3.59,3.59,0,0,0,.44,1.39,4.56,4.56,0,0,0,1.14-.35,10.21,10.21,0,0,0,2.71-1.79,14.35,14.35,0,0,0,2.21-2.33v-.05c.3-.36,1-.24,1.94.35a2.86,2.86,0,0,1,1,.79c.21.3.27.53.17.7a15.75,15.75,0,0,1-2.29,2.47,11.23,11.23,0,0,1-2.93,1.94,7.51,7.51,0,0,1-1.69.44,5,5,0,0,1-2.53-.49,6.64,6.64,0,0,1-1.63-1.09,4.5,4.5,0,0,1-.85-1.05,5.09,5.09,0,0,1-.84-2.23q-1-5,.1-17.42.19-1.78.3-2.58a7.92,7.92,0,0,0-.85.05,62.52,62.52,0,0,0-12,1.59h-.05a2.62,2.62,0,0,1-2.19-.84,2.43,2.43,0,0,1-.54-.52.61.61,0,0,1-.15-.5.35.35,0,0,1,.3-.27A67.62,67.62,0,0,1,186.47,11c.43,0,1.08,0,1.94-.1l.71,0,.72,0,.85-6.44Q190.74,4.08,191.23,4.08Z" fill="#d75727"/></svg>
      </Link>
      <button className="toggle-btn" onClick={toggle} aria-haspopup="true"
        aria-controls="dropdown-menu" ref={activatorRef} >
      Menu
    </button>
    </div>
    <Links styleClass="nav-links">
    {/* <Categories/> */}
    </Links>
    <SocialLinks styleClass="nav-icons"/>
  </div>
  </div>
  </Wrapper>
}

const Wrapper = styled.nav`
.navbar {
  height: 5rem;
  display: flex;
  align-items: center;
  background: transparent;
}
.nav-center {
  width: 90vw;
  max-width: ${setMaxWidth};
  margin: 0 auto;
}
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4em;
}
.nav-logo {
  display: block;
  height: 100%;
}
.nav-logo #Logo {
  height: 100%;
}
.toggle-btn {
  height: 4em;
  width: 4em;
  background: ${setColor.orange};
  border: 2px ${setColor.orange} solid;
  border-radius: 50%;
  color: ${setColor.mainWhite};
  cursor: pointer;
  transition: ${setTransition};
  ${setFont.heading};
}
.toggle-btn:hover {
  color: ${setColor.primary5}
}
.nav-links {
  display: none;
}
.nav-icons {
  display: none;
}

@media screen and (min-width: 800px) {
  .toggle-btn {
    visibility: hidden;
  }
  .nav-center {
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 2rem;
    align-items: center;
  }
  .nav-links {
    display: flex;
    align-items: center;
  }

  .page-link {
    margin-right: 1rem;
    font-size:3rem;
  }
  .page-link {
    color:  ${setColor.mainBlack};
    font-weight: bold;
    letter-spacing: ${setLetterSpacing};
    font-size: 1.25rem;
    transition: ${setTransition};
    ${setFont.heading};
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: ${setRadius(1)};
  }
  .page-link:hover{
    background:  ${setColor.primary5};
    color:  ${setColor.primary10};
  }
  .page-link:focus{
    background: ${setColor.primary5};
    color:  ${setColor.primary10};
  }
  .nav-icons {
    display: flex;
    justify-content: space-between;
  }
  .nav-icons .social-icon {
    font-size: 1.5rem;
    transition: ${setTransition};
    margin-left: 0.5rem;
  }
  .nav-icons .social-icon:hover {
    color: ${setColor.primary5};
    transform: translateY(-5px);
  }
  .nav-icons .social-icon:focus  {
    color: ${setColor.primary5};
    transform: translateY(-5px);
  }
}
`

export default Navbar
