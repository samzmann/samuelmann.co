import React from 'react'
import SEO from '../seo'
import Layout from '../layout'
import { LoremIpsum } from '../LoremIpsum'

export const LandingPageComponent = () => (
  <Layout>
    <SEO title="Home" />
    <LoremIpsum />
  </Layout>
)
