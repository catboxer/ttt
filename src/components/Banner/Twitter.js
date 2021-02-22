import React from 'react'
import Title from './Title'
// import Image from 'gatsby-image'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
//...GatsbyImageSharpFluid

const Twitter = () => {
  const data = useStaticQuery(query)
  const {coderlist:{nodes:tweets}}=data;
  return <Wrapper>
  <Title title="Twitter Favs"/>
            <div className="twitter-link">
              <a href="https://twitter.com/i/lists/1351205591126048770" target="_blank" rel="noopener noreferrer">
                  View Full List On Twitter
              </a>
            </div>
          {tweets.map(tweet => {
            const {
                  id, 
                  full_text,
                  user:{
                    name,
                    screen_name,
                    profile_image_url_https
                    },
                    } = tweet
        


            return <div key={id}>
            <h3>{name}</h3>
            <img width="72px" height="72px" src={profile_image_url_https} alt={name} loading="lazy" className="images"/>
            <p>{screen_name}</p>
            <p>{full_text}</p>
          
            </div> 
          })}
  </Wrapper>
}
const query = graphql`
query TwitterList {
  coderlist: allTwitterListsStatusesCodersList(limit: 4, filter: {lang: {eq: "en"}, user: {followers_count: {gt: 300}}}) {
    nodes {
      full_text
      id
      user {
        name
        screen_name
        profile_image_url_https
      }
    }
  }
}
`
const Wrapper = styled.article`
  .images {
    display: inline-block;
    border: black 2px solid;
    border-radius: 50%;
  }
  .twitter-link {
    margin-bottom: 1rem;
  }
`

export default Twitter



// entities:{
//   urls:[{url}]
// },