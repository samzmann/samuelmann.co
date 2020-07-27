import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import { Header1, Header2, Header3, Paragraph } from '../../elements/text'
import {
  Blockquote,
  ExternalLink,
  ListItem,
  OrderedList,
  UnorderedList,
} from '../../elements/other'

export const MDX = ({ body }) => {
  return (
    <MDXProvider
      components={{
        h1: Header1,
        h2: Header2,
        h3: Header3,
        p: Paragraph,
        ul: UnorderedList,
        ol: OrderedList,
        li: ListItem,
        a: ExternalLink,
        blockquote: Blockquote,
      }}
    >
      <MDXRenderer>{body}</MDXRenderer>
    </MDXProvider>
  )
}
