import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { GlobalStateContext } from '../../context/globalContext'

export const NavNoAuth = () => {
  return (
    <div>
      <Link to={'/about'}>About</Link>
    </div>
  )
}

export const NavNoAuthMobile = () => {
  const { setShowMobileNav } = useContext(GlobalStateContext)
  return (
    <div className="px-2 pt-2 pb-3">
      <Link
        to={'/about'}
        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        onClick={() => {
          setShowMobileNav(false)
        }}
      >
        About
      </Link>
    </div>
  )
}
