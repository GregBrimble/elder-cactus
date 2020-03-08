import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Layout from "../components/layout"
import SEO from "../components/seo"

class HomePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        titleImage={data.titleImage}
      >
        <SEO title="Home" />
        <Container>
          <Row>
            <Col sm={7}>
              <Link
                style={{ boxShadow: `none` }}
                to={data.latestBestOf.edges[0].node.fields.slug}
                state={{ bestOf: true }}
              >
                <Image
                  fluid={data.bestOfComics.childImageSharp.fluid}
                  alt={`Best of Comics`}
                ></Image>
              </Link>
              <a
                href={data.site.siteMetadata.social.store}
                target={`_blank`}
                rel={`noopener noreferrer`}
              >
                <Image
                  fluid={data.theStore.childImageSharp.fluid}
                  alt={`The Store`}
                ></Image>
              </a>
              {/* <Link style={{ boxShadow: `none` }} to={`/tags`}>
                <Image
                  fluid={data.comicGallery.childImageSharp.fluid}
                  alt={`Comic Gallery`}
                ></Image>
              </Link> */}
              {/* <a
                href={data.site.siteMetadata.social.knightQuest}
                target={`_blank`}
                rel={`noopener noreferrer`}
              >
                <Image
                  fluid={data.knightQuest.childImageSharp.fluid}
                  alt={`KnightQuest`}
                ></Image>
              </a> */}
            </Col>
            <Col sm={5}>
              <Link
                style={{ boxShadow: `none` }}
                to={data.latestArchive.edges[0].node.fields.slug}
                state={{ bestOf: false }}
              >
                <Image
                  fluid={data.theArchive.childImageSharp.fluid}
                  alt={`The Archive`}
                ></Image>
              </Link>
              {/* <a
                href={data.site.siteMetadata.social.reddit}
                target={`_blank`}
                rel={`noopener noreferrer`}
              >
                <Image
                  fluid={data.reddit.childImageSharp.fluid}
                  alt={`Subreddit`}
                ></Image>
              </a> */}
              {/* <a
                href={data.site.siteMetadata.social.patreon}
                target={`_blank`}
                rel={`noopener noreferrer`}
              >
                <Image
                  fluid={data.patreon.childImageSharp.fluid}
                  alt={`Patreon`}
                ></Image>
              </a> */}
              {/* <a
                href={data.site.siteMetadata.social.youTube}
                target={`_blank`}
                rel={`noopener noreferrer`}
              >
                <Image
                  fluid={data.youtube.childImageSharp.fluid}
                  alt={`YouTube`}
                ></Image>
              </a> */}
              <a
                href={data.site.siteMetadata.social.twitter}
                target={`_blank`}
                rel={`noopener noreferrer`}
              >
                <Image
                  fluid={data.twitter.childImageSharp.fluid}
                  alt={`Twitter`}
                ></Image>
              </a>
              <a
                href={data.site.siteMetadata.social.instagram}
                target={`_blank`}
                rel={`noopener noreferrer`}
              >
                <Image
                  fluid={data.instagram.childImageSharp.fluid}
                  alt={`Instagram`}
                ></Image>
              </a>
              <a
                href={data.site.siteMetadata.social.facebook}
                target={`_blank`}
                rel={`noopener noreferrer`}
              >
                <Image
                  fluid={data.facebook.childImageSharp.fluid}
                  alt={`Facebook`}
                ></Image>
              </a>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query {
    bestOfComics: file(absolutePath: { regex: "/button_Best-of-Comics.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    theStore: file(absolutePath: { regex: "/button_The-Store.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    theArchive: file(absolutePath: { regex: "/button_The-Archive.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    comicGallery: file(absolutePath: { regex: "/button_Comic-Gallery.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # knightQuest: file(absolutePath: { regex: "/button_KnightQuest.png/" }) {
    #   childImageSharp {
    #     fluid {
    #       ...GatsbyImageSharpFluid
    #     }
    #   }
    # }
    facebook: file(absolutePath: { regex: "/button_Facebook.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    # reddit: file(absolutePath: { regex: "/button_Reddit.png/" }) {
    #   childImageSharp {
    #     fluid {
    #       ...GatsbyImageSharpFluid
    #     }
    #   }
    # }
    # patreon: file(absolutePath: { regex: "/button_Patreon.png/" }) {
    #   childImageSharp {
    #     fluid {
    #       ...GatsbyImageSharpFluid
    #     }
    #   }
    # }
    # youtube: file(absolutePath: { regex: "/button_YouTube.png/" }) {
    #   childImageSharp {
    #     fluid {
    #       ...GatsbyImageSharpFluid
    #     }
    #   }
    # }
    twitter: file(absolutePath: { regex: "/button_Twitter.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instagram: file(absolutePath: { regex: "/button_Instagram.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
        social {
          # knightQuest
          store
          facebook
          # reddit
          # patreon
          # youTube
          twitter
          instagram
        }
      }
    }
    latestArchive: allMarkdownRemark(
      limit: 1
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
    latestBestOf: allMarkdownRemark(
      limit: 1
      filter: { frontmatter: { bestOf: { eq: true } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
    # titleImage: file(absolutePath: { regex: "/image_Title.png/" }) {
    #   childImageSharp {
    #     fixed(width: 400) {
    #       ...GatsbyImageSharpFixed
    #     }
    #   }
    # }
  }
`
