import React from 'react'
import Image from 'gatsby-image'
import { FaRegClock } from 'react-icons/fa'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {setRadius, setLetterSpacing, media} from '../../themes/styles'

const Post = ({frontmatter, excerpt, wordCount:{words}}) => {
  const {title, slug, image, date, category}=frontmatter;
const readTime= Math.ceil(words/200)
  return <Wrapper>
  <Image fluid={image.childImageSharp.fluid} className="img"/>
  <div className="info">
    <span className="category">{category}</span>
    <h2>{title}</h2>
    <div className="underline"></div>
    <p>{excerpt}</p>
    <Link to={`/posts/${slug}`} className="link">
      Continue Reading <IoMdArrowRoundForward/>
    </Link>
    <footer>
      <span className="date">
        <FaRegClock className="icon">
        </FaRegClock>
          {date}
      </span>
      <span> {readTime} min read, {words} words</span>
    </footer>
  </div>
  </Wrapper>
}

const Wrapper = styled.article`
  margin-bottom: 3rem;
  .info {
    text-align: center;
  }
  .img {
    margin-bottom: 1rem;
    border-radius: ${setRadius};
    height: 17rem;
  }
  .category {
    display: inline-block;
    margin-bottom: 1rem;
    background: hsl(125, 33%, 96%);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: ${setRadius};
    letter-spacing: ${setLetterSpacing};
    color: hsl(209, 34%, 30%);
  }
  h3 {
    font-weight: 400;
    margin-bottom: 1rem;
    text-transform: initial;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: ${({theme}) => theme.grey9};
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  /* p {
    color: ${({theme}) => theme.grey3};
    line-height: 1.8;
  } */
  .link {
    text-transform: uppercase;
    letter-spacing: ${setLetterSpacing};
    font-weight: 700;
    padding-bottom: 0.1rem;
    display: flex;
    align-items: center;
    svg {
      margin-left: 0.25rem;
      font-size: 1.2rem;
    }
  }
  /* .link:hover {
    border-color: ${({theme}) => theme.primary8};
    color: ${({theme}) => theme.primary8};
  } */
  footer {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid ${({theme}) => theme.grey4};
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({theme}) => theme.grey4};

    & .date {
      display: flex;
      align-items: center;
      & .icon {
        color: ${({theme}) => theme.primary4};
        margin-right: 0.5rem;
      }
    }
  }
  ${media.phone`
    .img {
      height: 20rem;
    }`
  }
  ${media.tablet`
    .img {
      height: 25rem;
    }`
  }
  ${media.desktop`
    & {
      display: grid;
      grid-template-columns: 30rem 1fr;
      column-gap: 1.5rem;
      .info {
        text-align: left;
      }
      .img {
        height: 100%;
        max-height: 20rem;
      }
      .underline {
        margin-left: 0;
        margin-right: 0;
      }
    }
    `
  }
`

export default Post
