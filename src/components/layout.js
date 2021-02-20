import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return  <>
    <Navbar />
    <Sidebar />
        <main id="#main-content">{children}</main>
    <Footer/>
    </>
}

export default Layout
