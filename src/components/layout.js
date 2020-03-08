import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, children, titleImage } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = <></>
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <Image fixed={titleImage.childImageSharp.fixed} />
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer
          style={{
            marginTop: rhythm(2),
          }}
        >
          © {new Date().getFullYear()}, Tim Lavoie
        </footer>
      </div>
    )
  }
}

export default Layout
