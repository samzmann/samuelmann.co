import React from 'react'
import queryString from 'query-string'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AuthActionPage = props => {
  // console.log(props)
  // // need to import location from reach router see: https://dev.to/5t3ph/how-to-use-url-query-string-parameters-in-gatsby-a71
  // const queryParams = queryString.parse(location.search)
  // console.log(queryParams)

  return (
    <Layout>
      <SEO title="Side Project One" />
    </Layout>
  )
}

export default AuthActionPage
