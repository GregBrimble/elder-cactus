import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class TagsPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const comics = data.allMarkdownRemark.edges
    const tags = [...new Set(comics.map(comic => comic.node.frontmatter.tags).flat())]

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Tags" />
        {/* <Bio /> */}
        {tags.map(tag => {
          return (
            <article key={tag}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={`/tags/${tag}`}>
                    {tag}
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

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`
