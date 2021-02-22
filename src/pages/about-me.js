import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import styled from 'styled-components'
import SEO from '../components/seo'
import {setRadius, setLetterSpacing, media} from '../themes/styles'
import {Link} from 'gatsby'
const AboutMe = () => {
  return <Layout>
  <SEO title="About Me"/>
  <Hero showChair/>
  <Wrapper>
<article id="main-content">
        <h1>About</h1>
        <h2>Purpose</h2>
        <p>There is a treasure trove of shared knowledge on the Internet. I still feel a sense of sci fi wonder everytime I reach out to solve a problem and someone's words guide me to a solution.  The biggest high I get is when I've been struggling --could be for hours-- and I read somone's words that blows open a door into a whole new world. </p>
        <p>I created this blog as a repository of educational materials I found most helpful while teaching myself Front End Development and to compensate for my ever increasing forgetting curve. Because I am not using many of the tools I am learning on a regular basis I found myself spending a lot more time searching for that one article or video I had watched a month ago instead of reviewing the concept. 
        Here you will find the articles and videos that I found useful plus examples of current projects and challenges.</p>
        
        <p>The resources I lean towards tend to use everyday 'simple' language to coherently explain complex concepts. I have learned from personal experience with my children that if you can't explain a concept to them, then you don't probably don't really understand it yourself. </p> <p>My interest is piqued by headless CMS and a JAMstack setup --because backend ugh!--. Some of my current topics include Vanilla Javascript, Gatsby, GraphQL, RESTAPIs, CSS, HTML, Accessibilty, SGV animation. </p>
        <p>On my sidebar you will see a few tweets from my <a href="https://twitter.com/i/lists/1351205591126048770" target="_blank" rel="noopener noreferrer">Twitter List</a> made up of people that posted or wrote or made something I learned from. Definitely a fun and enlightening list to follow.</p>
        <p>Sign up for my newsletter <Link to="/contact">here</Link> and I will deliver my resources to your inbox at sparse, random intervals.</p>
        <p><Link to="/contact">Contact me</Link> if you have a resource you've found invaluable and would like to share. I will acknowledge outright that my code is verbose and oftentimes inelegant. If you have a better way of doing things please send it my way! It could be a win-win where I get to learn something new and you will get a link back to your website.</p>
        <h2>My Background</h2>
        <p>I've always thought of myself as the creative sort. I spent my time in arts, design and fashion. After I'd had a baby I decided I wanted to stay at home so I launched a successful ecommerce business printing cool, local art on baby clothes. That was over 17 years ago.</p>
        <p>About three years ago I decided to teach myself to sew. My goal was to be able to sew out a unique romper I had designed that didn't have any fasteners. Learning to sew is one of the most difficult challenges I've undertaken. I purchased several industrial machines, hired people to come in and show me their production sewing methods, watched over a hundred youTube videos, worked under a designer who was also an expert seamstress, sewed out over 2,000 facemasks, altered clothing and taught myself how to make patterns, grade and work in optitex. I've come away from this experience knowing with certitude that I don't want to make anything that exists in the physical rhealm.</p>
        <p>My husband kept suggesting I learn Javascript but my mindset wasn't there yet. Last year I received a small grant from Propser Portland to work on my website and although I was grateful for the funding I came to recognize an ennui towards my clothing business very much akin to Henri's here in this video that I love watching whenever I'm feeling a little down. </p><iframe width="100%" height="315" src="https://www.youtube.com/embed/0M7ibPk37_U" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowFullScreen title="Sad Cat"> </iframe>
        <p>Towards the end of 2019 I started a class on Javascript that I never finished. In January of 2020 I started <a href="https://www.udemy.com/share/1013gGAkEbcFZTTQ==/" target="_blank" rel="noopener noreferrer">Angela Yu's Bootcamp Web Development class </a> and haven't looked back. Her teaching style was so in sync with my brain that I wonder if I would still be coding if I hadn't tried her class.</p>

        <p>Be well,</p>
        <p>Rosalee Rester</p>
</article>
    <article><Banner/></article>

    </Wrapper>
  </Layout>
}

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: ${({theme}) => theme.primary4};
      color: ${({theme}) => theme.mainWhite};
      border-radius: ${setRadius};
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: ${setLetterSpacing};
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: ${({theme}) => theme.grey5};
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: ${({theme}) => theme.grey9};
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  ${media.desktop `
    & {
      width: 92vw;
    }`
  }
  ${media.large `
    & {
      display: grid;
      grid-template-columns: 1fr 200px;
      column-gap: 4rem;
    }
    `
  }
`

export default AboutMe
