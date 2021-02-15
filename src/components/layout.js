import React, {useState} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle =()=> {
    setIsOpen(!isOpen)
  }
  return (
    <>
  <Navbar toggle={toggle} isOpen={isOpen} setIsOpen={setIsOpen}/>
  <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}/>
      <main id="#skip-main">{children}</main>
  <Footer/>
    </>
  )
}
export default Layout
