import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import SEO from '../components/seo'
import styled from 'styled-components'
import {setColor} from '../styles'
const NotFoundPage = () => 
<Layout>
<SEO title="Error Page"/>
<Hero showChair/>
  <Section className="error-page">
    <div className="page-center">
      <span>404</span>
      <h3>Sorry, you're lost and you cannot be found.</h3>
      <Link to="/" className="btn">Be Safe</Link>
    </div>
  </Section>
</Layout>

const Section = styled.section`
.error-page {
  min-height: calc(100vh - 7rem);
  display: grid;
  place-items: center;
  text-align: center;
}
.error-page span {
  font-size: 10rem;
  color: ${setColor.mainBlack}
}
.error-page h3 {
  margin-bottom: 2rem;
  padding: 0 2rem;
}
`
export default NotFoundPage
