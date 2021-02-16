import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import {Headings, Code, Blockquote, PrismSetup} from './src/components/Complete'
import { createGlobalStyle } from 'styled-components';
import {setColor, setFont, setRadius, setMaxWidth, setTransition, setLetterSpacing, setFixedWidth} from './src/styles'

const GlobalStyle = createGlobalStyle`

/*
=============== 
Global Styles
===============
*/
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  ${setFont.main}
  background: ${setColor.mainWhite};
  color: ${setColor.grey1};
  line-height: 1.5;
  font-size: 0.875rem;
  height: 100vh;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
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
  font-size: 2.25rem;
  ${setFont.heading}
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
  color: ${setColor.grey3};
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 3rem;
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
  background: ${setColor.primary5};
  color: ${setColor.primary10};
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
  color: ${setColor.primary1};
  background: ${setColor.primary8};
}
.btn-danger {
  color: ${setColor.mainWhite};
  background: ${setColor.darkRed};
}
.btn-danger:hover {
  color: ${setColor.darkRed};
  background: ${setColor.lightRed};
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
  background: ${setColor.grey10};
}
/* social links */
${'' /* main {
  margin-top: -10rem;
} */}

/*
===============
Testing Post and Components
===============
*/
.code {
  background: #1e1e1e;
  color: ${setColor.primary5};
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
  background: ${setColor.primary10};
  padding: 2rem 1.5rem;
  color: ${setColor.grey1};
  border-radius: ${setRadius};
  border-left: 3px solid ${setColor.primary5};
  color: ${setColor.mainBlack};
  position: relative;
}
.nice-text h4,
.nice-text p {
  color: ${setColor.mainBlack};
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
  background: ${setColor.mainWhite};
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 6px solid ${setColor.mainWhite};
  color: ${setColor.primary5};
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
const components = {
h2: Headings.myH2,
h4: Headings.myH4,
inlineCode: Code,
blockquote: Blockquote,
pre: PrismSetup,
}

export const wrapMDX = ({element}) => {
  return <>
  <GlobalStyle/>
  <MDXProvider components={components}> {element}</MDXProvider>
  </>
}
