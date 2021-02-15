import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
const NotFoundPage = () => 
<Layout>
<Hero showChair/>
  <section className="error-page">
    <div className="page-center">
      <span>404</span>
      <h3>Sorry, you're lost and you cannot be found.</h3>
      <Link to="/" className="btn">Be Safe</Link>
    </div>
  </section>
</Layout>
export default NotFoundPage
