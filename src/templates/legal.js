import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { MDX } from '../components/MDX'

export default function LegalTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <div className="container mx-auto md:pl-12 md:pr-12 lg:pl-24 lg:pr-32 xl:pl-32 xl:pr-64">
        <MDX body={mdx.body} />
      </div>
    </Layout>
  )
}

export const legalQuery = graphql`
  query LegalByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      id
      frontmatter {
        path
        title
      }
    }
  }
`
