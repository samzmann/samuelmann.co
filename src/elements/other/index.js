import React from 'react'

export const OrderedList = props => {
  const { children } = props
  return (
    <ol className="list-decimal pl-8 mb-4" {...props}>
      {children}
    </ol>
  )
}

export const UnorderedList = props => {
  const { children } = props
  return (
    <ul className="list-disc pl-8 mb-4" {...props}>
      {children}
    </ul>
  )
}

export const ListItem = props => {
  const { children } = props
  return (
    <li className="mb-2" {...props}>
      {children}
    </li>
  )
}

export const ExternalLink = props => {
  const { children } = props
  return (
    <a
      className="font-semibold underline cursor-pointer text-blue-500"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  )
}

export const Blockquote = props => {
  const { children } = props
  return (
    <blockquote
      className="border-l-4 border-gray-200 pl-8 text-gray-700"
      {...props}
    >
      {children}
    </blockquote>
  )
}
