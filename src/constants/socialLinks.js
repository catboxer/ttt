import React from "react"
import {Link} from 'gatsby'
import {
  FaEnvelope,
  FaGithubAlt,
  FaTwitter,
} from "react-icons/fa"
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
          <li>
        <a href="https://twitter.com/_the_this_that">
          <FaTwitter className="social-icon twitter-icon"></FaTwitter>
        </a>
      </li>
      <li>
        <a href="https://github.com/catboxer">
          <FaGithubAlt className="social-icon github-icon"></FaGithubAlt>
        </a>
      </li>
      <li>
        <Link to="/contact">
          <FaEnvelope className="social-icon email-icon"></FaEnvelope>
        </Link>
      </li>

    </ul>
  )
}
export default SocialLinks
