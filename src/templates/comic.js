import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class ComicTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const image = post.frontmatter.image
    let section

    if (image) {
      if (!image.childImageSharp && image.extension === "svg") {
        section = (
          <img
            src={image.publicURL}
            alt={post.frontmatter.description}
            title={post.frontmatter.description}
          />
        )
      } else {
        section = (
          <Image
            fluid={image.childImageSharp.fluid}
            alt={post.frontmatter.description}
            title={post.frontmatter.description}
          />
        )
      }
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.title}
            </h1>
          </header>
          <section
            style={{
              marginBottom: rhythm(0.5),
            }}
          >
            {section}
          </section>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={previous.fields.slug}
                  rel="prev"
                >
                  <Image
                    fixed={this.props.data.previous.childImageSharp.fixed}
                    alt="Previous"
                  />
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={next.fields.slug}
                  rel="next"
                >
                  <Image
                    fixed={this.props.data.next.childImageSharp.fixed}
                    alt="Next"
                  />
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default ComicTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    previous: file(absolutePath: { regex: "/button_Previous.png/" }) {
      childImageSharp {
        fixed(width: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    next: file(absolutePath: { regex: "/button_Next.png/" }) {
      childImageSharp {
        fixed(width: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 680) {
              ...GatsbyImageSharpFluid
            }
          }
          extension
          publicURL
        }
      }
    }
  }
`
