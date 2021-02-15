import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import SEO from '../components/seo'
const NewsLetter = () => {
 
  return <Layout>
    <SEO title="Contact Page"/>
        <Hero showChair/>
          <section className="newsletter-page">
            <div className="page-center">
            <h1>Contact Me</h1>

              <h2>Provide your information</h2>
                <form 
                action="/success" 
                name="contact" 
                method="post" 
                netlify-honeypot="bot-field" 
                data-netlify="true" 
                className="contact-form"
                >
                <input type="hidden" name="bot-field"/>
                <input type="hidden" name="form-name" value="contact"/>
                  <label 
                    htmlFor="name"
                  >
                    Name:
                  </label>
                    <input 
                      id="name" 
                      type="text" 
                      name="name" 
                     // aria-placeholder="Enter Your Name"
                      className="form-control"
                     // aria-required="true"
                      required
                    />
                  <label 
                    htmlFor="email"
                  >
                    Email:
                  </label>
                    <input 
                      type="email" 
                     // aria-placeholder="Enter Your Email"
                      name="email" 
                      className="form-control"
                     // aria-required="true"
                      required
                    />
                  <label 
                  htmlFor="subject"
                  >
                    What Is This Regarding?
                  </label>

                    <select 
                    name="subject" 
                    className="form-control"  
                    id="subject">
                      <option value="General">General</option>
                      <option value="Comment">Comment</option>
                      <option value="Web Services">Web Services</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  
                  <label 
                    htmlFor="txtboxMultiline"
                  >
                    Message:
                  </label>
                    
                  <textarea 
                    rows="8" 
                   // aria-placeholder="Enter Your Message"
                    id="txtboxMultiline"
                    name="message"
                  //  aria-required="true"
                    required
                  />
                  
                  <button 
                    type="submit" 
                    className="btn form-control submit-btn"
                  >
                    Submit
                  </button>
                </form>
            </div>
          </section>
        </Layout>
      }

export default NewsLetter