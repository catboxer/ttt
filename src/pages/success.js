import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Hero from '../components/Hero'
import styled from 'styled-components'
const Success = () => {
  return <Layout>
  <Hero showChair/>
    <Section id="main-content" className="success-page">
      <div className="page-center">
        <h2>your submission was received!</h2>
        <p> I'll be in touch shortly.</p>
        <Link to="/" className="btn">back home</Link>
      </div>
    </Section>
  </Layout>
}

const Section = styled.section`
.sucess-page {
  min-height: calc(100vh - 7rem);
}
.success-page{
  display: grid;
  place-items: center;
  text-align: center;
}
.success-page h2 {
  margin-bottom: 1.5rem;
}
@media screen and (min-width: 992px) {
.success-page h2 {
    margin-top: 2rem;
  }
}
`
export default Success
