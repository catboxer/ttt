import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import {setFont, setRadius, setMaxWidth, setTransition, setLetterSpacing, setFixedWidth} from './styles'


export const GlobalStyle = createGlobalStyle`
  ${reset}
*,
*:after,
*:before {
  box-sizing: border-box;
}
html {
  ${setFont.main}
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-size: 16px;
  ${'' /* color: ${({theme}) => theme.mainBlack}; */}
}
${'' /* body {
  background: ${({theme}) => theme.mainWhite};
  line-height: 1.5;
  height: 100vh;
} */}
body {
  background: ${({theme}) => theme.mainWhite};
  color: ${({theme})=> theme.grey3};
  transition: all .50s linear;
  }
ul {
  list-style-type: none;
}
::placeholder {
  color: ${({theme}) => theme.grey3};
  opacity: 1;
}
a {
  text-decoration: none;
  color:${({theme})=> theme.hotPink};
}
h2,
h3,
h4 {
  letter-spacing: ${setLetterSpacing};
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  ${setFont.subheading}
}
h1 {
  font-size: 3rem;
  ${setFont.heading};
  margin-bottom: 1rem;
}
h2 {
  font-size: 1.75rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: ${({theme}) => theme.grey3};
}
@media screen and (min-width: 800px) {
  h1 {
    color:${({theme}) => theme.test.test1};
    font-size: ${({theme}) => theme.phheading1.fontsize};
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 2.25rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */
.btn,
.btn-danger {
  text-transform: uppercase;
  background: ${({theme}) => theme.primary4};
  color: ${({theme}) => theme.primary10};
  padding: 0.375rem 0.75rem;
  letter-spacing: ${setLetterSpacing};
  display: inline-block;
  font-weight: 400;
  -webkit-transition: ${setTransition};
  transition: ${setTransition};
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: ${setRadius};
}
.btn:hover {
  color: ${({theme}) => theme.primary1};
  background: ${({theme}) => theme.primary8};
}
.btn-danger {
  color: ${({theme}) => theme.mainWhite};
  background: ${({theme}) => theme.darkRed};
}
.btn-danger:hover {
  color: ${({theme}) => theme.darkRed};
  background: ${({theme}) => theme.lightRed};
}
.center-btn {
  display: block;
  width: 12rem;
  text-align: center;
  margin: 3rem auto;
}

/* section */
.page-center {
  width: 90vw;
  margin: 0 auto;
  max-width: ${setMaxWidth};
}
@media screen and (min-width: 992px) {
  .page-center {
    width: 95vw;
  }
}
.bg-grey {
  background: ${({theme}) => theme.grey10};
}
/*
===============
Testing Post and Components
===============
*/
.code {
  background: ${({theme}) => theme.grey1};
  color: ${({theme}) => theme.primary4};
  padding: 1rem 1.5rem;
  border-radius: ${setRadius};
  margin: 2rem 0;
  font-size: 1.2rem;
  overflow-x: scroll;
  position: relative;
}
.code pre {
  font-family: 'Courier New', Courier, monospace;
}
.code .token-line {
  line-height: 1.5;
}
.nice-text {
  background:${({theme}) => theme.primary10};
  padding: 2rem 1.5rem;
  color: ${({theme}) => theme.grey1};
  border-radius: ${setRadius};
  border-left: 3px solid ${({theme}) => theme.primary4};
  color: ${({theme}) => theme.mainBlack};
  position: relative;
}
.nice-text h4,
.nice-text p {
  color: ${({theme}) => theme.mainBlack};
}
.nice-text p {
  margin-bottom: 0;
}
@media screen and (min-width: 992px) {
  .nice-text {
    margin-left: -2rem;
    margin-right: -2rem;
  }
}
.nice-text-icon {
  position: absolute;
  top: 0;
  left: -3px;
  background: ${({theme}) => theme.mainWhite};
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 6px solid ${({theme}) => theme.mainWhite};
  color: ${({theme}) => theme.primary4};
}
.mdx-page {
  width: 90vw;
  max-width: ${setFixedWidth};
  margin: 4rem auto;
}
.mdx-img p {
  width: 20rem;
}
.mdx-img .gatsby-resp-image-image,
.mdx-img .gatsby-resp-image-background-image {
  border-radius: 50px;
  height: 20rem;
  object-fit: cover;
}
/*
===============
Accessibility
===============
*/
.sr-only {
position:absolute;
left:-10000px;
top:auto;
width:1px;
height:1px;
overflow:hidden;
}

.visually-hidden {
  border:0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

${'' /* #gatsby-focus-wrapper {
  height: 100vh;
} */}

`