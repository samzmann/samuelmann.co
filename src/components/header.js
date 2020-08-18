import React, { useContext } from 'react'

import { HeaderLogo } from './Nav/HeaderLogo'
import { NavNoAuthMobile } from './Nav/NavNoAuth'
import { GlobalStateContext } from '../context/globalContext'

const Header = () => {
  const { showMobileNav, setShowMobileNav } = useContext(GlobalStateContext)
  const toggleMobileNav = () => setShowMobileNav(prev => !prev)

  return (
    <nav className="sticky top-0 z-50 shadow">
      {/* Top Bar*/}
      <div className="max-w-7xl mx-auto px-2 md:hidden">
        <div className="relative flex items-center justify-between h-16">
          {/* Toggle for mobile menu*/}
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={toggleMobileNav}
            >
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    showMobileNav
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-between">
            <HeaderLogo />
          </div>
        </div>
      </div>

      {/* Mobile Nav that appears when toggled */}
      <div className={`${showMobileNav ? 'block' : 'hidden'} md:hidden`}>
        <NavNoAuthMobile />
      </div>
    </nav>
  )
}

export default Header
