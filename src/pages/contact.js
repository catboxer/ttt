import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import SEO from '../components/seo'
import styled from 'styled-components'
import {setFont, setRadius} from '../themes/styles'
const NewsLetter = () => {
 
  return <Layout>
    <SEO title="Contact Page"/>
        <Hero showChair/>
          <Section >
          <div className="newsletter-page">
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
                    *Name:
                  </label>
                    <input 
                      id="name" 
                      type="text" 
                      name="name" 
                      placeholder="First & Last Name" 
                      className="form-control"
                      required
                    />
                  <label 
                    htmlFor="email"
                  >
                    *Email:
                  </label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email Address"  
                      className="form-control"
                      required
                    />
                  <label 
                  htmlFor="subject"
                  >
                    Re:
                  </label>

                    <select name="subject" className="form-control"  
                    id="subject">
                      <option value="General">General</option>
                      <option value="Comment">Comment</option>
                      <option value="Suggestion">Suggestion</option>
                      <option value="Web Services">Web Services</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Newsletter">Subscribe To Newsletter</option>
                      <option value="Other">Other</option>
                    </select>
                  
                  <label 
                    htmlFor="message"
                  >
                    Message:
                  </label>
                    
                  <textarea 
                    rows="8" 
                    id="message"
                    name="message"
                  />
                  
                  <button 
                    type="submit" 
                    className="btn form-control submit-btn"
                  >
                    Submit
                  </button>
                </form>
            </div>
            </div>
          </Section>
        </Layout>
      }
const Section = styled.div`

${'' /* .newsletter-page {
  display: grid;
  place-items: center;
} */}
.newsletter-page {
  min-height: calc(100vh - 7rem);
  display: grid;
  place-items: center;
  text-align: center;
}
.newsletter-page h1 {
  text-transform: initial;
  /* font-size: 2rem;
  margin-bottom: 1rem; */
}
.newsletter-page h2 {
  text-transform: initial;
  /* font-size: 1rem;
  margin-bottom: 1.25rem;
  color: ${({theme}) => theme.grey5}; */
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
input[type='text']:focus,
input[type='email']:focus,
select:focus,
textarea:focus {
  outline: 3px solid ${({theme}) => theme.yellow};
}

input,
select,
textarea {
  padding: 0.5rem;
  border: 0.5px solid ${({theme}) => theme.grey4};
  font-size: 1rem;
  margin: 0.25rem 0;
  border-radius: ${setRadius};
  width: 100%;
  ${setFont.main}
  color: ${({theme}) => theme.grey3};
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
}

.submit-btn {
  grid-column: 2 / 3;
  font-weight: 400;
  font-size: 1rem;
  text-transform: capitalize;
  border-color: ${({theme}) => theme.primary4};
  height: 3rem;
}
.submit-btn:hover {
  border-color: ${({theme}) => theme.primary8};;
}
@media screen and (min-width: 992px) {
  /* .contact-form {
    flex-direction: row;
  } */
  .form-control {
    width: 30rem;
  }
  /* input[type='text'] {
    border-top-left-radius: ${setRadius};
    border-bottom-left-radius: ${setRadius};
  }
  .submit-btn {
    border-top-right-radius: ${setRadius};
    border-bottom-right-radius: ${setRadius};
  } */
}
`
export default NewsLetter
