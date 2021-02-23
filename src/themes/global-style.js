import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import {setFont, setRadius, setMaxWidth, setTransition, setLetterSpacing, setFixedWidth, media} from './styles'

// Global Styles Template
export const GlobalStyle = createGlobalStyle`
  ${reset}
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-size: ${({theme}) => theme.phparagraph.fontsize};
  ${setFont.main}
  background: ${({theme}) => theme.mainWhite};
  color: ${({theme})=> theme.grey3};
  height: 100vh;
  }
h1,
h2,
h3,
h4 {
  ${({theme}) => theme.phletterspacing};
  text-transform: capitalize;
  line-height: ${({theme}) => theme.phlineheight};
  ${({theme}) => theme.phheadingmarginbottom};
  
}
h1{
  color:${({theme}) => theme.grey1};
  ${setFont.heading};
  font-size: ${({theme}) => theme.phheading1.fontsize};
}
h2 {
  color:${({theme}) => theme.grey1};
  ${setFont.subheading};
  font-size: ${({theme}) => theme.phheading2.fontsize};
}
h3 {
  color: ${({theme}) => theme.primary4};
  ${setFont.subheading};
  font-size: ${({theme}) => theme.phheading3.fontsize};
}
h4 {
  color: ${({theme}) => theme.primary4};
  ${setFont.subheading};
  font-size: ${({theme}) => theme.phheading4.fontsize};
}
p {
  ${setFont.main};
  font-size: ${({theme}) => theme.phparagraph.fontsize};
  margin-bottom: ${({theme}) => theme.phparagraph.marginbottom};
  line-height: ${({theme}) => theme.phlineheight};
}
ul {
  list-style-type: ${({theme}) => theme.ul};
}
::placeholder {
  color: ${({theme}) => theme.grey3};
  opacity: 1;
}
a {
  text-decoration: ${({theme}) => theme.a};
  color:${({theme})=> theme.hotPink};
}
${media.tablet`
h1 {  
    font-size: ${({theme}) => theme.heading1.fontsize};
    margin-bottom:${({theme}) => theme.headingmarginbottom};
  }
h2 {
  font-size: ${({theme}) => theme.heading2.fontsize};
  }
h3 {
  font-size: ${({theme}) => theme.heading3.fontsize};
  }
h4 {
  font-size: ${({theme}) => theme.heading4.fontsize};
  }
p {
  font-size: ${({theme}) => theme.paragraph.fontsize};
  line-height: ${({theme}) => theme.lineheight};
  }
h1,
h2,
h3,
h4 {
  line-height: ${({theme}) => theme.lineheight};
  margin-bottom:${({theme}) => theme.headingmarginbottom};
  }
`}
/*  global classes */
.btn,
.btn-danger {
  text-transform: uppercase;
  background: ${({theme}) => theme.hotPink};
  color: #fff;
  padding: 0.375rem 0.75rem;
  letter-spacing: ${setLetterSpacing};
  display: inline-block;
  ${setFont.heading}
  font-weight: 400;
  -webkit-transition: ${setTransition};
  transition: ${setTransition};
  font-size: ${({theme}) => theme.heading3.fontsize};
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: ${setRadius};
    border-color: ${({theme}) => theme.primary4};
}
.btn:hover, .btn:focus {
  color: ${({theme}) => theme.primary4};
  background: ${({theme}) => theme.yellow};
}
.btn-danger {
  color: ${({theme}) => theme.mainWhite};
  background: ${({theme}) => theme.darkRed};
}
.btn-danger:hover, .btn:focus{
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
${media.desktop `
  .page-center {
    width: 95vw;
  `
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

`