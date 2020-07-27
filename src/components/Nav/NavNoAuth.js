import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { GlobalStateContext } from '../../context/globalContext'

export const NavNoAuth = () => {
  return (
    <div className="hidden md:block md:ml-6">
      <div className="flex">
        <AnchorLink
          to={'/#features'}
          title="What's in the course"
          className="header-link ml-0"
        />
        <AnchorLink to={'/#about'} title="About" className="header-link" />
        <Link to={'/signup'} className="header-link header-btn-highlight">
          Signup
        </Link>
      </div>
    </div>
  )
}

export const NavNoAuthMobile = () => {
  const { setShowMobileNav } = useContext(GlobalStateContext)
  return (
    <div className="px-2 pt-2 pb-3">
      <Link
        to={'/#features'}
        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        onClick={() => {
          setShowMobileNav(false)
        }}
      >
        What&apos;s in the course
      </Link>
      <Link
        to={'/#about'}
        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        onClick={() => {
          setShowMobileNav(false)
        }}
      >
        About
      </Link>
      <Link
        to={'/signup'}
        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        onClick={() => {
          setShowMobileNav(false)
        }}
      >
        Signup
      </Link>
    </div>
  )
}
