import React, {useState} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'



const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle =()=> {
    setIsOpen(!isOpen)
    }

  const [theme, setTheme] = useState('light');
  const themeToggler =() => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return  <>
 <button className="theme-btn" onClick={themeToggler}>Switch Theme</button>
    <Navbar toggle={toggle} isOpen={isOpen} setIsOpen={setIsOpen}/>
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}/>
        <main id="#main-content">{children}</main>
    <Footer/>
    </>
}

export default Layout
