import React from "react"
import {Link} from 'gatsby'
import styled from 'styled-components'
import {setTransition} from '../themes/styles'
import {
  FaEnvelope,
  FaGithubAlt,
  FaTwitter,
} from "react-icons/fa"

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
          <LineItem>
        <a href="https://twitter.com/_the_this_that" >
          <FaTwitter className="social-icon twitter-icon" aria-label={`link to my twitter account`}/>
        </a>
      </LineItem>
      <LineItem>
        <a href="https://github.com/catboxer" alt="github">
          <FaGithubAlt className="social-icon github-icon" aria-label={`link to my github account`}/>
        </a>
      </LineItem>
      <LineItem>
        <Link to="/contact">
          <FaEnvelope className="social-icon email-icon" aria-label={`link to my contact form`}/>
        </Link>
      </LineItem>

    </ul>
  )
}

const LineItem = styled.li`
  .social-icon {
    font-size: 1.5rem;
    transition: ${setTransition};
    margin-left: 0.5rem;
  }
  .social-icon:hover {
    transform: translateY(-5px);
  }
.social-icon:focus  {
    transform: translateY(-5px);
    color: ${({theme}) => theme.hotPink};
  }
  
.github-icon {
  color: ${({theme}) => theme.mainBlack};
}
.twitter-icon {
  color: ${({theme}) => theme.twitter};
}
.email-icon {
  color: ${({theme}) => theme.orange}
}`
export default SocialLinks
