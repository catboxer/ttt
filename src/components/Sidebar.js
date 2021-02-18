import React, {useRef, useEffect} from 'react'
import Links from '../constants/links'
// import Categories from '../components/Categories'
import { IoMdClose } from 'react-icons/io'
import styled from 'styled-components'
import {setColor, setFont, setTransition} from '../themes/styles'
const FocusTrap = require('../../node_modules/focus-trap-react/dist/focus-trap-react');

const Sidebar = ({isOpen, setIsOpen,toggle}) => {

  const dropdownMenuRef= useRef(null)
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
    const addBlur = ()=>{
      listEl.querySelector('.page-link').blur()
      }
        if (isOpen){
          listEl.querySelector('.page-link').focus()
          listEl.addEventListener("mouseover", addBlur)
        } else if (isOpen && listEl && dropdownMenuRef){
            return () => {
              listEl.removeEventListener("mouseover", addBlur)
            }}  
    }, [isOpen])

    if (isOpen){
      return <Wrapper>
          <FocusTrap> 
            <aside className="sidebar showSidebar" onKeyUp={keyHandler}  aria-hidden="true" >
              <button className="close-btn" onClick={toggle}>
                <IoMdClose />
              </button>
              <div className="sidebar-container" ref={dropdownMenuRef} >
                <Links styleClass="sidebar-links" clickHandler={clickHandler} linkHandler={linkHandler}/>
              </div>  
            </aside>
          </FocusTrap>
      </Wrapper>
      
    } else {
      return <Wrapper className="sidebar"></Wrapper>
        
    }
}

/*
===============
Sidebar 
===============
*/
const Wrapper = styled.div`
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${setColor.orange};
  transition: ${setTransition};
  display: grid;
  align-items: center;
  padding-left: 2rem;
  z-index: 999;
  transform: translate(100%,-100%) scale(0.5);   
  border-radius:100%; 
  visibility: hidden;
}
.showSidebar {
    transform: translateY(0) scale(1); 
    border-radius:0; 
    visibility: visible;
}

.sidebar-container {
  width: 55%;
}
.sidebar-links li {
  margin-bottom: 3rem;
}

a {
    text-decoration: none;
}
.sidebar-links .page-link:hover {
    color: ${setColor.primary5};
    transform: translateY(-5px);
}
.sidebar-links .page-link:focus {
    color: ${setColor.primary5};
    transform: translateY(-5px);
}
.sidebar-links .page-link {
  ${setFont.heading};
  font-size: 2rem;
  display: block;
  color: ${setColor.mainWhite};
  font-weight: 700;
}
.sidebar .categories {
  flex-direction: column;
  margin: 1rem 0;
}
.sidebar .category {
  color: ${setColor.grey5};
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: capitalize;
  padding-left: 1rem;
  display: block;
  cursor: pointer;
}
.close-btn {
  position: absolute;
  color: ${setColor.mainWhite};
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: transparent;
  font-size: 3rem;
  cursor: pointer;
}
.close-btn:hover {
    color: ${setColor.primary5};
    transform: translateY(-5px);
}
.close-btn:focus {
    color: ${setColor.primary5};
    transform: translateY(-5px);
}
@media screen and (min-width: 800px) {
  .sidebar {
    transform: translateX(-100%);
  }
}

`

export default Sidebar