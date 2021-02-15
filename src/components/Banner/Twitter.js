// import React from 'react'
// import Title from './Title'
// // import Image from 'gatsby-image'
// import styled from 'styled-components'
// import { graphql, useStaticQuery } from 'gatsby'
// //...GatsbyImageSharpFluid

// const Twitter = () => {
//   const data = useStaticQuery(query)
//   const {coderlist:{nodes:tweets}}=data;
// console.log(tweets)
//   return <Wrapper>
//   <Title title="Twitter Favs"/>

//           {tweets.map(tweet => {
//             const {
//                   id, 
//                   full_text,
//                   user:{
//                     name,
//                     screen_name,
//                     profile_image_url
//                     }, 
//                     entities:{
//                       urls:[{url}]
//                     },
//                     } = tweet
        


//             return <div key={id}>
//             <div>
//                   <a href="https://twitter.com/i/lists/1351205591126048770" target="_blank" rel="noopener noreferrer">
//                   view list
//                   </a>
//             </div>
//             {url}
//             <h4>{name}</h4>
//             <img src={profile_image_url} alt={name} className="images"/>
//             <h5>{screen_name}</h5>
//             <p>{full_text}</p>
          
//             </div> 
//           })}
//   </Wrapper>
// }
// const query = graphql`
// query TwitterList {
//   coderlist: allTwitterListsStatusesCodersList(limit: 6, filter: {user: {followers_count: {gt: 200}}, lang: {eq: "en"}, entities: {urls: {elemMatch: {url: {ne: ""}}}}}) {
//     nodes {
//       full_text
//       id
//       user {
//         name
//         profile_image_url
//         screen_name
//       }
//       entities {
//         urls {
//           url
//         }
//       }
//     }
//   }
// }
// `
// const Wrapper = styled.article`
//   .images {
//     /* display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     gap: 1rem; */
//     display: inline-block;
//     height: 3rem;
//     border: black 2px solid;
//     border-radius: 50%;
//   }
// `

// export default Twitter
