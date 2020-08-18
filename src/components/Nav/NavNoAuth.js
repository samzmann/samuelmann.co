import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { GlobalStateContext } from '../../context/globalContext'

const NavSections = [
  { title: 'Projects', link: '/projects' },
  { title: 'Work', link: '/work' },
]

const NavLinks = [
  { title: 'GitHub', url: 'https://github.com/LaVielle', icon: '' },
  {
    title: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/9957187',
    icon: '',
  },
]

export const MainNav = () => {
  const { setShowMobileNav } = useContext(GlobalStateContext)
  return (
    <div className="h-full flex flex-col px-2 md:px-4 lg:px-6 pt-2 pb-3 border-r-2 border-gray-200">
      <div
        className="w-full h-64 mb-8 md:mb-16"
        style={{ backgroundColor: 'salmon' }}
      />
      {NavSections.map(el => (
        <Link
          key={el.title}
          to={el.link}
          onClick={() => {
            setShowMobileNav(false)
          }}
          className="text-2xl md:text-3xl font-semibold mb-2 transition duration-200 ease-in-out hover:text-black border-b-4 border-black border-opacity-0 hover:border-opacity-100"
        >
          {el.title}
        </Link>
      ))}
    </div>
  )
}

export const NavNoAuth = () => <MainNav />

export const NavNoAuthMobile = () => <MainNav />
