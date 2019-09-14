module.exports = {
  siteMetadata: {
    title: `Elder Cactus`,
    author: `Tim Lavoie`,
    description: `Comic Strip created by college dropout, Tim Lavoie`,
    siteUrl: `https://www.eldercactus.com/`,
    social: {
      knightQuest: "https://www.youtube.com/watch?v=uiINuHxz160",
      facebook: "https://www.facebook.com/Elder-Cactus-Comics-106361110754353",
      reddit: "https://old.reddit.com/r/eldercactus/",
      patreon: "https://www.patreon.com/eldercactus",
      youTube: "https://www.youtube.com/channel/UCi-2kUme4vi-n4ST_9UVc1A",
      twitter: "https://twitter.com/eldercactus",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/comics`,
        name: `comics_posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/comics`,
        name: `comics`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elder Cactus`,
        short_name: `Elder Cactus`,
        start_url: `/`,
        background_color: `#e0c360`,
        theme_color: `#5ecc56`,
        display: `minimal-ui`,
        icon: `content/assets/favicon_ElderCactus.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
}
