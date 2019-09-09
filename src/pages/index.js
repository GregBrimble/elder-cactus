import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class HomePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
        <ul>
          <li>
            <Link style={{ boxShadow: `none` }} to={`/tags`}>Comics</Link>
          </li>
          <li>
            <a href={`https://www.reddit.com/`} target={`_blank`} rel={`noopener noreferrer`}>Reddit</a>
          </li>
          <li>
            <a href={`https://www.patreon.com/`} target={`_blank`} rel={`noopener noreferrer`}>Patreon</a>
          </li>
          <li>
            <a href={`https://www.youtube.com/`} target={`_blank`} rel={`noopener noreferrer`}>YouTube</a>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
