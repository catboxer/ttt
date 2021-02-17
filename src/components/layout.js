import React, {useState} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import {GlobalStyle} from "../themes/global-style"

//import { lightTheme, darkTheme } from "./Themes"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [theme, setTheme] = useState('light');
  const toggle =()=> {
    setIsOpen(!isOpen)
    }
  // const themeToggler = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light')
  //   }
  return  <>

  <GlobalStyle/>
{/* <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
 <button className="theme-btn" onClick={themeToggler}>Switch Theme</button> */}
    <Navbar toggle={toggle} isOpen={isOpen} setIsOpen={setIsOpen}/>
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}/>
        <main id="#main-content">{children}</main>
    <Footer/>
    </>
}

export default Layout
