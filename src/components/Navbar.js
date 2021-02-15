import React, {useRef} from 'react'
import { Link } from 'gatsby'
import logo from '../assets/logo.svg'
import Links from '../constants/links'
import SocialLinks from '../constants/socialLinks'
//import Categories from './Categories'


const Navbar = ({toggle}) => {
const activatorRef = useRef(null)

  return <nav className="navbar">
  <div className="nav-center">
    <div className="nav-header">
      <Link to="/" className="nav-logo">
      <img src={logo} alt="the this that"/>
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
  </nav>
}

export default Navbar
