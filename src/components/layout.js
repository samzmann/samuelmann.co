import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import '../style/index.css'
import { LoadingOverlay } from './LoadingOverlay'
import { SideBar } from './Nav/SideBar'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar content={children} />
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
