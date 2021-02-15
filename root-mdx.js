import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import {Headings, Code, Blockquote, PrismSetup} from './src/components/Complete'
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
/*
=============== 
Variables
===============
*/

:root {
  /* dark shades of primary color*/

  --clr-primary-1: hsl(180, 91%, 17%);
  --clr-primary-2: hsl(180, 84%, 25%);
  --clr-primary-3: hsl(180, 81%, 29%);
  --clr-primary-4: hsl(180, 77%, 34%);
  --clr-primary-5: hsl(180, 62%, 45%);
  /* lighter shades of primary color */
  --clr-primary-6: hsl(180, 57%, 50%);
  --clr-primary-7: hsl(180, 65%, 59%);
  --clr-primary-8: hsl(180, 80%, 74%);
  --clr-primary-9: hsl(180, 94%, 87%);
  --clr-primary-10: hsl(180, 87%, 94%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(125, 33%, 96%);
  --clr-green-dark: hsl(125, 67%, 35%);
  --clr-green-light: hsl(134, 41%, 88%);
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-pink-hot: #d84797;
  --clr-main-orange: #d75727;
  --clr-white: #fff;
  --clr-black: #0a0c10;
  --ff-primary: 'Roboto', sans-serif;
  --ff-secondary: 'Open Sans', sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 700px;
}
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
  font-family: var(--ff-secondary);
  background: var(--clr-white);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}

ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: var(--ff-primary);
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
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
  background: var(--clr-primary-5);
  color: var(--clr-primary-10);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  color: var(--clr-primary-1);
  background: var(--clr-primary-8);
}

.btn-danger {
  color: var(--clr-white);
  background: var(--clr-red-dark);
}
.btn-danger:hover {
  color: var(--clr-red-dark);
  background: var(--clr-red-light);
}
.center-btn {
  display: block;
  width: 12rem;
  text-align: center;
  margin: 3rem auto;
}

/* for accessibility eyes only */
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
.remove {
  display: none;
}
/* section */
.page-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
@media screen and (min-width: 992px) {
  .page-center {
    width: 95vw;
  }
}

.bg-grey {
  background: var(--clr-grey-10);
}
/* social links */

main {
  margin-top: -10rem;
}
/*
===============
Navbar
===============
*/
.navbar {
  height: 5rem;
  display: flex;
  align-items: center;
  background: transparent;
}
.nav-center {
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
}
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
height: 4em;
}
.nav-logo {
  display: block;
  height: 40px;
}
.nav-logo img {
  height: 100%;
}
.toggle-btn {
  height: 4em;
  width: 4em;
  background: var(--clr-main-orange);
  border: 2px var(--clr-main-orange) solid;
  border-radius: 50%;
  color: var(--clr-white);
  cursor: pointer;
  transition: var(--transition);
  font-family: var(--ff-secondary);
}
.toggle-btn:hover {
  color: var(--clr-primary-5);
}
.nav-links {
  display: none;
}
.nav-icons {
  display: none;
}

.github-icon {
  color: #1c1c1c;
}
.twitter-icon {
  color: #0084b4;
}
.email-icon {
  color: var(--clr-main-orange);
}
@media screen and (min-width: 800px) {
  .toggle-btn {
    visibility: hidden;
  }
  .nav-center {
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 2rem;
    align-items: center;
  }
  .nav-links {
    display: flex;
    align-items: center;
  }
  .page-link {
    margin-right: 1rem;
  }
  .page-link {
    color: var(--clr-black);
    font-weight: bold;
    letter-spacing: var(--spacing);
    font-size: 1rem;
    transition: var(--transition);
    font-family: var(--ff-secondary);
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  .page-link:hover{
    background: var(--clr-primary-5);
    color: var(--clr-primary-10);
  }
  .page-link:focus{
    background: var(--clr-primary-5);
    color: var(--clr-primary-10);
  }
  .nav-icons {
    display: flex;
    justify-content: space-between;
  }
  .nav-icons .social-icon {
    font-size: 1.5rem;
    transition: var(--transition);
    margin-left: 0.5rem;
  }
  .nav-icons .social-icon:hover {
    color: var(--clr-primary-5);
    transform: translateY(-5px);
  }
   .nav-icons .social-icon:focus  {
    color: var(--clr-primary-5);
    transform: translateY(-5px);
  }
}
/*
===============
Sidebar 
===============
*/
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--clr-main-orange);
  transition: var(--transition);
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
    width:100%;
    height:100%;
    visibility: visible;
}
.sidebar-links li {
  margin-bottom: 3rem;
}
.sidebar-links .page-link:hover {
    color: var(--clr-primary-5);
    transform: translateY(-5px);
}
.sidebar-links .page-link:focus {
    color: var(--clr-primary-5);
    transform: translateY(-5px);
}
.sidebar-links .page-link {
  font-size: 2rem;
  display: block;
  color: var(--clr-white);
  font-weight: 700;
}
.sidebar .categories {
  flex-direction: column;
  margin: 1rem 0;
}
.sidebar .category {
  color: var(--clr-grey-5);
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: capitalize;
  padding-left: 1rem;
  display: block;
  cursor: pointer;
}

@media screen and (min-width: 800px) {
  .sidebar {
    transform: translateX(-100%);
  }
}
.close-btn {
  position: absolute;
  color: var(--clr-white);
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: transparent;
  font-size: 3rem;
  cursor: pointer;
}
.close-btn:hover {
    color: var(--clr-primary-5);
    transform: translateY(-5px);
}
.close-btn:focus {
    color: var(--clr-primary-5);
    transform: translateY(-5px);
}
/*

/*
===============
Posts Component
===============
*/
.posts {
  width: 85vw;
  max-width: var(--max-width);
  margin: 0 auto;
  margin-bottom: 4rem;
}
.posts-title {
  font-weight: 700;
  text-transform: uppercase;
  color: #e12d39;
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
}

@media screen and (min-width: 992px) {
  .posts {
    width: 92vw;
  }
}
@media screen and (min-width: 1170px) {
  .posts-center {
    display: grid;
    grid-template-columns: 1fr 250px;
    column-gap: 1rem;
  }
}
/*
===============
Banner Component
===============
*/
.banner-icons {
  display: flex;
  justify-content: center;
}
.banner-icons a {
  font-size: 1.5rem;
  margin: 0 0.25rem;
}
.banner-icons li {
  transition: var(--transition);
}
.banner-icons li:hover {
  transform: translateY(-10%);
}

/*
===============
Single Pages
===============
*/
.newsletter-page,
.success-page,
.error-page {
  min-height: calc(100vh - 7rem);
}
.newsletter-page,
.success-page,
.error-page {
  display: grid;
  place-items: center;
  text-align: center;
}
/* success page */
.success-page {
  background: var(--clr-primary-10);
} 
.success-page h2 {
  margin-bottom: 1.5rem;
}
/* error page */
 .error-page {
  background: var(--clr-primary-10);
}
.error-page span {
  font-size: 10rem;
  color: var(--clr-black);
}
.error-page h3 {
  margin-bottom: 2rem;
  padding: 0 2rem;
}
/* newsletter page */
${'' /* .newsletter-page {
  display: grid;
  place-items: center;
} */}
.newsletter-page h2 {
  text-transform: initial;
  margin-bottom: 1rem;
}
.newsletter-page h4 {
  text-transform: initial;
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}
.contact-form {
  margin: 0 auto;
  justify-content: center;
  max-width: 800px;
  display: grid;
  grid-gap: 5px;
}
label {
  text-transform: capitalize;
  font-weight: bolder;
}
label input:focus,
select:focus,
textarea:focus {
  outline: 3px solid gold;
}
input,
select,
textarea {
  padding: 0.5rem;
  border: 0.5px solid var(--clr-grey-9);
  font-size: 1rem;
  margin: 0.25rem 0;
  border-radius: var(--radius);
  width: 100%;
  font-family: var(--ff-secondary);
  color: var(--clr-grey-5);
}

.submit-btn {
  grid-column: 2 / 3;
  font-weight: 400;
  text-transform: capitalize;
  border-color: var(--clr-primary-5);
  border-right: var(--clr-primary-5);
}
.submit-btn:hover {
  border-color: var(--clr-primary-8);
  border-right: var(--clr-primary-8);
}
@media screen and (min-width: 992px) {
  .contact-form {
    flex-direction: row;
  }
  .form-control {
    width: 20rem;
    border-radius: 0;

  }
  input[type='text'] {
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }

  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .success-page h2 {
    margin-top: 2rem;
  }
}

/*
===============
Testing Post and Components
===============
*/

.code {
  background: #1e1e1e;
  color: var(--clr-primary-5);
  padding: 1rem 1.5rem;
  border-radius: var(--radius);
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
  background: var(--clr-primary-10);
  padding: 2rem 1.5rem;
  color: var(--clr-grey-1);
  border-radius: var(--radius);
  border-left: 3px solid var(--clr-primary-5);
  color: var(--clr-black);
  position: relative;
}
.nice-text h4,
.nice-text p {
  color: var(--clr-black);
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
  background: var(--clr-white);
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 6px solid var(--clr-white);
  color: var(--clr-primary-5);
}
.mdx-page {
  width: 90vw;
  max-width: var(--fixed-width);
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
Footer
===============
*/
.footer {
  height: 12rem;
  text-align: center;
  display: grid;
  place-items: end center;
  position: relative;
  padding-bottom: 2rem;
}
.footer::after {
  content: '';
  position: absolute;
  bottom: 0;
  height: 12rem;
  z-index: -1;
  width: 100%;
  background: url('../assets/grass.svg');
  background-size: cover;
}

.footer-icons {
  display: flex;
  justify-content: center;
  line-height: 1;
  margin-bottom: 0.5rem;
}
.footer-icons a {
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: var(--transition);
}
.footer-icons li {
  transition: var(--transition);
}
.footer-icons li:hover {
  transform: translateY(-10%);
}
.footer p {
  margin-bottom: 0;
  color: var(--clr-black);
  text-transform: uppercase;
  letter-spacing: var(--spacing);
}
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

