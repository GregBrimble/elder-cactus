module.exports = {
  siteMetadata: {
    title: `Elder Cactus`,
    author: `Tim Lavoie`,
    description: `Comic Strip created by college dropout, Tim Lavoie`,
    siteUrl: `https://www.eldercactus.com/`,
    social: {
      knightQuest: "https://www.youtube.com/watch?v=uiINuHxz160",
      store: "https://www.redbubble.com/people/eldercactus/shop",
      facebook: "https://www.facebook.com/Elder-Cactus-Comics-106361110754353",
      reddit: "https://old.reddit.com/r/eldercactus/",
      patreon: "https://www.patreon.com/eldercactus",
      youTube: "https://www.youtube.com/channel/UCi-2kUme4vi-n4ST_9UVc1A",
      twitter: "https://twitter.com/eldercactus",
      instagram: "https://www.instagram.com/eldercactus",
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cache`,
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 75,
      },
    },
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map((edge) =>
                Object.assign({}, edge.node.frontmatter, {
                  description: `<img src="${
                    edge.node.frontmatter.image.publicURL
                  }" title="${edge.node.frontmatter.title}" alt="${
                    edge.node.frontmatter.description || ""
                  }" />`,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                })
              ),
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      fields { slug }
                      frontmatter {
                        title
                        description
                        date
                        image {
                          publicURL
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Elder Cactus",
          },
        ],
      },
    },
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
