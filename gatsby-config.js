/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'BackRoads',
    description:
      'Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to advanture',
    author: '@devtato',
    data: {
      name: 'nhan',
      age: 29,
    },
    twitterUsername: '@devtato',
    image: '/defaultBcg.jpeg',
    siteUrl: 'https://peaceful-leavitt-6caa25.netlify.com',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
  ],
}
