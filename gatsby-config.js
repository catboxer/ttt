require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata:{
    title: `Learning To Code`,
    description: `Over the past year I've been teaching myself to code and collected some invaluable resources. I share tips, pitfalls and more. So pull up a comfy chair and take a browse.`,
    titleTemplate: `%s | Rosalee Rester`,
    url:`http://thethisthat.com`,
    image:`mainImg.png`,
    twitterUsername:`@_the_this_that`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `babel-plugin-styled-components`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
     {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: process.env.GATSBY_TWITTER_API_KEY,
          consumer_secret: process.env.GATSBY_TWITTER_API_SECRET_KEY,
          bearer_token: process.env.GATSBY_TWITTER_BEARER_TOKEN,
        },
        queries: {
          codersList: {
            endpoint: "lists/statuses",
            params: {
              slug: "coding-resources-47311",
              owner_screen_name: "thethisthatblog",
              include_rts: false,
              exclude_replies: true,
              tweet_mode: "extended",
            },
          },
          // javascriptTweets: {
          //   endpoint: "search/tweets",
          //   params: {
          //     q: "#javascript",
          //     tweet_mode: "extended",
          //   },
          // },
          //  graphqlTweets: {
          //   endpoint: "search/tweets",
          //   params: {
          //     q: "#graphql",
          //     tweet_mode: "extended",
          //   },
          // },
          //  reactTweets: {
          //   endpoint: "search/tweets",
          //   params: {
          //     q: "#react",
          //     tweet_mode: "extended",
          //   },
          // },
          //  gatsbyjsTweets: {
          //   endpoint: "search/tweets",
          //   params: {
          //     q: "#gatsbyjs",
          //     tweet_mode: "extended",
          //   },
          // },
        },
      },
    },
  ],
}
