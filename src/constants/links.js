import React from "react"
import { Link } from "gatsby"

const Links = ({ styleClass, children, linkHandler, clickHandler }) => {
  return (
    <ul className={styleClass}>
            {/* <li>
        <Link to="#main-content" className="page-link sr-only">
          Skip Link
        </Link>
      </li> */}
      <li>
        <Link to="/about-me" className="page-link" onClick={clickHandler} onKeyPress={linkHandler} >
          About
        </Link>
      </li>

      <li>
        <Link to="/posts" className="page-link" onClick={clickHandler} onKeyUp={linkHandler}>
          Blog
        </Link>
        {children}
      </li>
      {/* <li>
        <Link to="/about" className="page-link">
          Store
        </Link>
      </li> */}
      <li>
        <Link to="/contact" className="page-link" onClick={clickHandler} onKeyUp={linkHandler}>
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default Links
