module.exports = {
  siteMetadata: {
    title: `Side Project One`,
    description: `Have an idea for a side project? Started, but gave up? No matter if you’re a coder, maker, artist, designer, learn how to refine your ideas, stay motivated, document and finish your side projects.`,
    author: `Samuel Mann`,
  },
  plugins: [
    // TODO: Add analytics later
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-166931784-1',
    //     head: true,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/legal`,
        name: 'legal',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-theme-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyAmqvnABaIis94qXI0TRN4iG3iPaGcabgk',
          authDomain: 'samuelmann-co.firebaseapp.com',
          databaseURL: 'https://samuelmann-co.firebaseio.com',
          projectId: 'samuelmann-co',
          storageBucket: 'samuelmann-co.appspot.com',
          messagingSenderId: '382430918457',
          appId: '1:382430918457:web:02539d924d3946bcf0dae8',
          measurementId: 'G-4RD4K6D0MC',
        },
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
    `gatsby-plugin-mdx`,
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -50,
      },
    },
    // TODO: Add Mailchimp later
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint:
    //       'https://na.us18.list-manage.com/subscribe/post?u=4a1b1680cd9ecc75a54d622b0&amp;id=5656215446',
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
