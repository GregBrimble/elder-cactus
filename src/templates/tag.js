import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class TagTemplate extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const comics = data.allMarkdownRemark.edges

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        titleImage={data.titleImage}
      >
        <SEO title="Tags" />
        {comics.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                    fontSize: rhythm(0.9),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
              </header>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default TagTemplate

export const pageQuery = graphql`
  query($tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: $tag } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
    titleImage: file(absolutePath: { regex: "/image_Title.png/" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
