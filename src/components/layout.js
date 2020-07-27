/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../style/index.css'
import { LoadingOverlay } from './LoadingOverlay'
import { SideBar } from './Nav/SideBar'
import { AuthContext } from '../context/authContext'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { authInitialized, loggedIn } = useContext(AuthContext)

  const renderContent = () => {
    if (!authInitialized) {
      return null
    } else if (authInitialized && loggedIn) {
      return <SideBar content={children} />
    } else {
      return <main>{children}</main>
    }
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      {renderContent()}
      <LoadingOverlay />
      {/*<footer>*/}
      {/*  © {new Date().getFullYear()}, Built with*/}
      {/*  {` `}*/}
      {/*  <a href="https://www.gatsbyjs.org">Gatsby</a>*/}
      {/*</footer>*/}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
