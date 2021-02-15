import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import Hero from '../components/Hero'
const Success = () => {
  return <Layout>
  <Hero showChair/>
    <section className="success-page">
      <div className="page-center">
        <h2>your submission was received!</h2>
        <p> I'll be in touch shortly.</p>
        <Link to="/" className="btn">back home</Link>
      </div>
    </section>
  </Layout>
}

export default Success
