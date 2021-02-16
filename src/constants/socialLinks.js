import React from "react"
import {Link} from 'gatsby'
import styled from 'styled-components'
import {setColor} from '../styles'
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
          <FaTwitter className="social-icon twitter-icon" aria-label={`link to my twitter account`}></FaTwitter>
        </a>
      </LineItem>
      <LineItem>
        <a href="https://github.com/catboxer" alt="github">
          <FaGithubAlt className="social-icon github-icon" aria-label={`link to my github account`}></FaGithubAlt>
        </a>
      </LineItem>
      <LineItem>
        <Link to="/contact">
          <FaEnvelope className="social-icon email-icon" aria-label={`link to my contact form`}></FaEnvelope>
        </Link>
      </LineItem>

    </ul>
  )
}

const LineItem = styled.li`

.github-icon {
  color: ${setColor.mainBlack};
}
.twitter-icon {
  color: ${setColor.twitter};
}
.email-icon {
  color: ${setColor.orange}
}`
export default SocialLinks
