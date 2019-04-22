const {
  name,
  siteTitle,
  siteDescription,
  siteKeyword,
  themeColor,
  backgroundColor,
  siteUrl,
  siteLogo,
  googleAnalyticsID
} = require("./site-config");
module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    siteUrl: siteUrl
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/data`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "image",
        path: `${__dirname}/src/static/images`
      }
    },
    "gatsby-transformer-json",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: googleAnalyticsID,
        head: true
      }
    },
    "gatsby-plugin-purgecss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: name,
        start_url: "/",
        background_color: backgroundColor,
        theme_color: themeColor,
        display: "standalone",
        icon: siteLogo,
        icons: [
          {
            src: "/images/sudip.png",
            sizes: `48x48`,
            type: `image/jpg`
          },
          {
            src: "/images/sudip.png",
            sizes: `192x192`,
            type: `image/jpg`
          },
          {
            src: "/images/sudip.png",
            sizes: `512x512`,
            type: `image/jpg`
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      siteMetadata: {
        siteUrl: "https://www.example.com"
      }
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline"
  ]
};
