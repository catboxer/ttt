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
    <div className="nav-center">
      <div className="nav-header">
      <Link to="/" className="nav-logo">
      {/* <img src={logo} alt="the this that"/> */}
<svg id="Logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="199.14" height="35.52" viewBox="0 0 199.14 35.52"><path d="M36.85 1.97c.85.37 1.08.88.7 1.69a1.26 1.26 0 01-1.24.81 1.1 1.1 0 01-.47-.07 25.72 25.72 0 00-5.8-1.33l-12.62-.22a17.5 17.5 0 00-.39 2.94l1.21 21.79a11.09 11.09 0 001.16 4 1.14 1.14 0 01.08 1.84 1.18 1.18 0 01-1 .44 1.1 1.1 0 01-.85-.3c-.85-.73-1.62-2.71-2.17-6-.38-2.5-.77-5.8-1-9.83s-.31-7.34-.24-10a29.48 29.48 0 01.47-4.92h-.7l-3.87.22c-1.32.08-2.4.22-3.41.3s-1.85.15-2.63.22-1.45.19-1.84.26l-.7.07a1.61 1.61 0 01-1-.29A1.17 1.17 0 010 2.78a1.4 1.4 0 01.3-1 1.54 1.54 0 01.86-.52l.38-.07a8.21 8.21 0 001.09-.15 15.34 15.34 0 001.7-.07C4.95.89 5.65.82 6.5.75L9.05.53c.86-.08 1.86-.15 2.87-.22s2.09-.15 3.1-.15C25.16-.3 32.44.29 36.85 1.97z" fill="#d75727"/><path d="M25.24 1.61a3.31 3.31 0 011.31.44 5.89 5.89 0 011.09.8c.31.3.38.52.31.67-.55 1.54-.93 4.69-1.17 9.39a106.79 106.79 0 00.31 12.91 12.84 12.84 0 012.79-3.45 5.08 5.08 0 013.1-1.25 6.58 6.58 0 011.16.15h.16a5.53 5.53 0 011.62.73 4.27 4.27 0 011.09 1 7.69 7.69 0 01.61 1.17 23 23 0 01.47 2.64 23.31 23.31 0 00.46 2.86 3.67 3.67 0 001 1.84l.08.07c.31.29.46.51.46.73s-.15.3-.46.3a3.67 3.67 0 01-2.25-1 7 7 0 01-1.93-3.16 11.58 11.58 0 01-.47-3 8.92 8.92 0 00-.23-2 4.93 4.93 0 00-1.78.88 11.33 11.33 0 00-2.63 3.3 16.61 16.61 0 00-1.23 2.34 18.84 18.84 0 00-.78 2l-.23.74a.48.48 0 01-.46.22 2 2 0 01-1-.3 10.58 10.58 0 01-1.17-.66c-.31-.29-.54-.51-.54-.73a101.32 101.32 0 01-1.16-19.89c.23-4.69.61-7.92 1.16-9.53-.08-.14.07-.21.31-.21zm19.2 19.73a5.84 5.84 0 013 1 8.25 8.25 0 012.48 2.34l.07.08c.7 1.24 0 1.9-2 2.05h-.62a9.52 9.52 0 01-1.7-.22c-.7-.15-1.32-.29-1.78-.44a4.84 4.84 0 00-.47 1.91 4.19 4.19 0 00.62 2.79.36.36 0 00.23.07h.47a7.93 7.93 0 002.5-.63 10.93 10.93 0 002.55-1.47 4.58 4.58 0 001.63-1.61.67.67 0 01.46-.15 3.19 3.19 0 011.55.52 2.49 2.49 0 01.93.8c.23.3.23.52.15.66a9.58 9.58 0 01-4.57 3.23 8.14 8.14 0 01-3 .66h-.39a10.32 10.32 0 01-2.4-.58 7.87 7.87 0 01-2.63-1.84c-.08-.07-.08-.07-.08-.14a5.1 5.1 0 01-1.16-4 6 6 0 011.22-3.4 3.52 3.52 0 012.86-1.76h.08zm.69 3.38h.47a2.13 2.13 0 001.16-.3c.23-.22.31-.36.23-.58a1.23 1.23 0 00-.31-.44 3.21 3.21 0 00-2 1.32zM97.94 1.97c.85.37 1.08.88.7 1.69a1.26 1.26 0 01-1.24.81 1.1 1.1 0 01-.47-.07 25.85 25.85 0 00-5.8-1.33l-12.62-.22a17.5 17.5 0 00-.39 2.94l1.12 21.79a11.09 11.09 0 001.16 4 1.14 1.14 0 01.08 1.84 1.18 1.18 0 01-1 .44 1.1 1.1 0 01-.85-.3c-.85-.73-1.63-2.71-2.17-6-.38-2.5-.77-5.8-1-9.83s-.31-7.34-.24-10a29.48 29.48 0 01.47-4.92h-.7l-3.87.22c-1.32.08-2.4.22-3.41.3s-1.85.15-2.63.22-1.39.15-1.78.22l-.62.07a1.21 1.21 0 01-1-.22 1.38 1.38 0 01-.54-.81 1.43 1.43 0 01.31-.95 1.47 1.47 0 01.85-.51l.39-.08a9.66 9.66 0 001.08-.14c.47-.08 1-.08 1.63-.22s1.32-.15 2.17-.22l2.55-.22c.86-.08 1.86-.15 2.87-.22S75.08.1 76.09.1c10.15-.4 17.44.19 21.85 1.87z" fill="#d75727"/><path d="M86.33 1.61a3.31 3.31 0 011.31.44 5.89 5.89 0 011.09.8c.31.3.38.52.31.67-.55 1.54-.93 4.69-1.17 9.39a106.79 106.79 0 00.31 12.91 12.84 12.84 0 012.79-3.45 5.08 5.08 0 013.1-1.25 6.58 6.58 0 011.17.15h.15a5.46 5.46 0 011.63.73 4.08 4.08 0 011.08 1 7 7 0 01.62 1.17 23 23 0 01.47 2.64 23.31 23.31 0 00.46 2.86 3.67 3.67 0 001 1.84l.08.07c.31.29.46.51.46.73s-.15.3-.46.3a3.67 3.67 0 01-2.25-1 7 7 0 01-1.93-3.16 11.58 11.58 0 01-.47-3 8.92 8.92 0 00-.23-2 4.93 4.93 0 00-1.78.88 11.33 11.33 0 00-2.63 3.3 16.61 16.61 0 00-1.2 2.34 18.84 18.84 0 00-.78 2l-.23.74a.48.48 0 01-.46.22 2 2 0 01-1-.3 10.58 10.58 0 01-1.21-.66c-.31-.29-.54-.51-.54-.73a101.33 101.33 0 01-1.17-19.89c.24-4.69.62-7.92 1.17-9.53-.08-.14.07-.21.31-.21zm16.26 20.47a4.41 4.41 0 011.16.36 4.28 4.28 0 011.16.74 1 1 0 01.39.73c-.08 1-.08 2.2-.08 3.52a21.5 21.5 0 00.54 5.21l.08.07c.07.3-.08.44-.47.44a2.06 2.06 0 01-.85-.22 2.94 2.94 0 01-1.86-1.46 19.25 19.25 0 01-.62-5.58l.08-3.52c.12-.22.12-.29.47-.29zm1-3.75a1.24 1.24 0 011 .52 1.34 1.34 0 01-.08 2 1.08 1.08 0 01-.93.37 1.53 1.53 0 01-.93-.52 1.71 1.71 0 01-.31-1.1 1.35 1.35 0 01.39-.95 1.94 1.94 0 01.86-.32zm6.74 3.31a4.4 4.4 0 01.85.14 3.16 3.16 0 011.39.66 7.43 7.43 0 011.16.88 1.72 1.72 0 01.47.81 2 2 0 01.15.59c0 .22.08.51.08.88s-.39.44-1.24.14a3.36 3.36 0 01-1.95-1.46c-.08 0-.16.07-.24.22a3.14 3.14 0 00-1 1.32 3 3 0 00-.08.95 1.23 1.23 0 01.39.15 2 2 0 01.46.22 8.85 8.85 0 012.71 1.76 2.74 2.74 0 01.78 2.13v.07a3 3 0 01-2.56 2 6.92 6.92 0 01-2-.37 9.38 9.38 0 01-1.47-.8c-.47-.37-.78-.66-.85-1v-.07a2.57 2.57 0 010-1.11l.07-.58c.08-.3.39-.3 1.09-.08a3.09 3.09 0 012 1.47 2.41 2.41 0 00.62-.95 1.91 1.91 0 00-.08-.74H111l-.3-.14a5.22 5.22 0 01-.7-.3 8.13 8.13 0 01-.78-.36 5.61 5.61 0 01-1.54-1 2 2 0 01-.7-1 1.78 1.78 0 010-1.76 5.15 5.15 0 011.16-1.54 4.6 4.6 0 011.7-1h.24a.29.29 0 01.25-.13zm47.69-19.67c.85.37 1.09.88.7 1.69a1.25 1.25 0 01-1.24.81 1.06 1.06 0 01-.46-.07 26 26 0 00-5.78-1.33l-12.54-.22a17.5 17.5 0 00-.46 2.94l1.16 21.79a11.09 11.09 0 001.16 4 1.14 1.14 0 01.08 1.84 1.18 1.18 0 01-1 .44 1.1 1.1 0 01-.85-.3c-.85-.73-1.62-2.71-2.17-6-.38-2.5-.77-5.8-1-9.83s-.31-7.34-.24-10a29.48 29.48 0 01.47-4.92h-.7l-3.87.22c-1.32.08-2.4.22-3.41.3l-2.63.26c-.77.07-1.39.15-1.78.22l-.62.07a1.21 1.21 0 01-1-.22 1.38 1.38 0 01-.54-.81 1.43 1.43 0 01.31-.95 1.47 1.47 0 01.85-.51l.39-.08a10.07 10.07 0 001.09-.14c.46-.08 1-.08 1.62-.22s1.32-.15 2.17-.22l2.55-.22c.86-.08 1.86-.15 2.87-.22s2.09-.15 3.1-.15c10.16-.44 17.44.15 21.77 1.83z" fill="#d75727"/><path d="M146.49 1.61a3.31 3.31 0 011.31.44 5.89 5.89 0 011.09.8c.31.3.38.52.31.67-.55 1.54-.93 4.69-1.17 9.39a106.79 106.79 0 00.31 12.91 12.84 12.84 0 012.79-3.45 5.08 5.08 0 013.1-1.25 6.58 6.58 0 011.16.15h.16a5.53 5.53 0 011.62.73 4.27 4.27 0 011.07.97 7.69 7.69 0 01.61 1.17 23 23 0 01.47 2.64 23.31 23.31 0 00.46 2.86 3.67 3.67 0 001 1.84l.08.07c.31.29.46.51.46.73s-.15.3-.46.3a3.67 3.67 0 01-2.25-1 7 7 0 01-1.93-3.16 11.58 11.58 0 01-.47-3 8.92 8.92 0 00-.23-2 4.93 4.93 0 00-1.78.88 11.33 11.33 0 00-2.63 3.3 16.61 16.61 0 00-1.21 2.37 18.84 18.84 0 00-.78 2l-.23.74a.48.48 0 01-.46.22 2 2 0 01-1-.3 10.58 10.58 0 01-1.16-.73c-.31-.29-.54-.51-.54-.73a101.32 101.32 0 01-1.16-19.89c.23-4.69.61-7.92 1.16-9.53-.09-.07.05-.14.3-.14zm20.75 20.47a8.71 8.71 0 011.24.14 3.78 3.78 0 011.78.88l.15-.14c.08-.08.08-.15.16-.15.23-.22.31-.29.46-.29a1.54 1.54 0 011.16 0 1.78 1.78 0 01.7.22 3.45 3.45 0 011.39 1.1 1.1 1.1 0 01.31.44 3.34 3.34 0 01.16.66c0 .14.07.66.07 1.54a32.49 32.49 0 00.16 3.81 1.34 1.34 0 00.15.37.74.74 0 01.08.37 6 6 0 001-.22 18.44 18.44 0 003.4-1.62c.39-.29 1.09-.07 2.1.59.38.29.69.51.77.81s.15.44 0 .51a22.23 22.23 0 01-3.56 1.69 6.69 6.69 0 01-2.87.22 9.29 9.29 0 01-2.16-1 7 7 0 01-1.32-1.24 3.86 3.86 0 01-.7-1.91c0-.15-.08-.3-.08-.52a.87.87 0 00-.07-.36 10.54 10.54 0 00-.48.99 12.59 12.59 0 01-2.32 3.16 4.53 4.53 0 01-1.55.88 5.33 5.33 0 01-2.55-.22c-.24-.08-.47-.22-.7-.3a4.84 4.84 0 01-1.39-1.17 1.67 1.67 0 01-.47-.81 2.79 2.79 0 01-.31-1.47 8.26 8.26 0 01.85-3.22 8.38 8.38 0 012.17-2.79 3.39 3.39 0 012.27-.95zm2.4 2.2a4.06 4.06 0 00-1.86.73 7 7 0 00-2 2.57 6.49 6.49 0 00-.78 2.93v.3a2.42 2.42 0 00.85-.59 10 10 0 002.25-3 14.5 14.5 0 00.85-1.54 7.94 7.94 0 01.69-1.4zm17.88-20.47a3.31 3.31 0 011.16.29 5.23 5.23 0 011.09.74c.31.29.38.51.31.66-.23 1.17-.39 2.64-.62 4.47a51.2 51.2 0 017.2.44h.08a4.09 4.09 0 012.16 1.17c.24.3.31.52.16.66s-.39.23-.78.15a54.58 54.58 0 00-9.13-.29c-.16 1-.31 2.35-.47 4-.69 7.7-.77 13.06-.07 16.07a2.69 2.69 0 00.46 1.32 6.82 6.82 0 001.16-.3 9.76 9.76 0 002.63-1.68 13.91 13.91 0 002.17-2.21v-.07c.31-.37.93-.22 1.94.29a2.31 2.31 0 01.93.74c.23.29.23.51.15.66a15.43 15.43 0 01-2.24 2.35 12.76 12.76 0 01-2.87 1.83 14.47 14.47 0 01-1.62.44 4.94 4.94 0 01-2.48-.44 6 6 0 01-1.63-1 4.82 4.82 0 01-.85-1 5.48 5.48 0 01-.85-2c-.62-3.16-.62-8.51.08-16.29.15-1.1.23-1.91.31-2.42a3 3 0 00-.86.07 65.84 65.84 0 00-11.8 1.4h-.08a2.63 2.63 0 01-2.17-.81 1.75 1.75 0 01-.54-.51.53.53 0 01-.15-.44c0-.15.15-.22.31-.22a68.24 68.24 0 0112.15-1.54c.39 0 1.09 0 1.94-.08h1.39l.85-6c.12-.38.3-.45.58-.45z" fill="#d75727"/></svg>
      </Link>
      <button 
      className="toggle-btn" 
      onClick={toggle} 
      aria-controls="dropdown-menu" 
      ref={activatorRef} >
      Menu
    </button>
    </div>
    <Links styleClass="nav-links"/>
    <SocialLinks styleClass="nav-icons"/>
  </div>
  </Wrapper>
}

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  background: ${setColor.primary7};

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
