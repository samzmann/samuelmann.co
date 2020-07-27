import React from 'react'

export const Header1 = props => {
  return (
    <>
      <h1 className="font-semibold text-4xl my-4" {...props}>
        {props.children}
      </h1>
      <div className="border border-b-2 border-gray-200" />
    </>
  )
}

export const Header2 = props => {
  return (
    <h2 className="font-semibold text-3xl mt-16 mb-4" {...props}>
      {props.children}
    </h2>
  )
}

export const Header3 = props => {
  return (
    <h3 className="font-semibold text-xl mt-8 mb-2" {...props}>
      {props.children}
    </h3>
  )
}

export const Paragraph = props => {
  return (
    <p className="mb-6 leading-loose" {...props}>
      {props.children}
    </p>
  )
}
