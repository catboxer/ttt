import React, {useRef, useEffect} from 'react'
import Links from '../constants/links'
// import Categories from '../components/Categories'
import { IoMdClose } from 'react-icons/io'
const FocusTrap = require('../../node_modules/focus-trap-react/dist/focus-trap-react');

const Sidebar = ({isOpen, setIsOpen,toggle}) => {

  const dropdownMenuRef= useRef(null)
 // const closeBtnRef= useRef(null)
  const keyHandler =(event)=>{
      if (event.keyCode === 27 && isOpen) {
        setIsOpen(!isOpen)
        }
      }
  const linkHandler =(event)=>{
      if (event.keyCode === 13  && isOpen) {
        setIsOpen(!isOpen)   
        }
      }
    const clickHandler=()=>{
      if (isOpen) {
        setIsOpen(!isOpen)   
        }
      }
  
  useEffect(() => {
    const listEl=dropdownMenuRef.current

   // const currentPage = document.querySelector('*[aria-current^="page"]')
    const addBlur = ()=>{
      listEl.querySelector('.page-link').blur()
      }
        if (isOpen){
          listEl.querySelector('.visually-hidden').focus()
          listEl.querySelector('.visually-hidden').addClassName("remove")
          listEl.addEventListener("mouseover", addBlur)
        } else if (isOpen && listEl && dropdownMenuRef){
            return () => {
              listEl.removeEventListener("mouseover", addBlur)
            }}  
    }, [isOpen])

    if (isOpen){
      return <FocusTrap>
      <aside className="sidebar showSidebar" onKeyUp={keyHandler}  aria-hidden="true" >
   
        <button className="close-btn" onClick={toggle} aria-label="close menu" >
          <IoMdClose/>
        </button>
      <div className="sidebar-container" ref={dropdownMenuRef} >
        <Links styleClass="sidebar-links" clickHandler={clickHandler} linkHandler={linkHandler}/>
      </div>
      </aside> 
      </FocusTrap>
    } else {
      return <aside className="sidebar"></aside>
    }

// return <aside className={`sidebar  ${isOpen? "showSidebar":""}`}>
  
//     <button className="close-btn" onClick={toggle} >
//       <IoMdClose/>
//     </button>
//     <div className="sidebar-container" ref={dropdownMenuRef}>
//     <Links styleClass="sidebar-links" />

//     </div>
  
//   </aside>


}

export default Sidebar