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
    twitterUsername:`@thethisthatblog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `babel-plugin-styled-components`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-KPL7WHD",

      // Include GTM in development.
      //
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      //
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },

      // Specify optional GTM environment details.
      // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
      // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
      // dataLayerName: "YOUR_DATA_LAYER_NAME",

      // // Name of the event that is triggered
      // // on every Gatsby route change.
      // //
      // // Defaults to gatsby-route-change
      // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
    },
  },
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
      resolve: `gatsby-omni-font-loader`,
      options: {
        mode: `async`,
        enableListener: true,
        custom: [
      {
        /* Exact name of the font as defied in @font-face CSS rule */
        name: ['Open Sans', 'Open Sans Condensed', 'Roboto Slab'],
        /* Path to the font CSS file inside the "static" folder with @font-face definition */
        file: "/fonts/fonts.min.css",
      },
    ],
        },
      },
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
