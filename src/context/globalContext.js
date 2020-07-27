import React, { useEffect, useState } from 'react'
import { auth, useAuth } from 'gatsby-theme-firebase'

import { AuthContext } from './authContext'
import { UserContext } from './userContext'
import { getUserById } from '../utils/api'

/**
 * TODO: Important, review all this context and remove what's not necessary (esp. Auth and User).
 * */

export const GlobalStateContext = React.createContext({
  globalLoading: true,
  setGlobalLoading: null,
  showMobileNav: false,
  setShowMobileNav: null,
})

export const GlobalContextProvider = ({ children }) => {
  const [authInitialized, setAuthInitialized] = useState(false)
  const [user, setUser] = useState(null)
  const [globalLoading, setGlobalLoading] = useState(true)
  const [showMobileNav, setShowMobileNav] = useState(false)

  const { profile: authUser, isLoading: authLoading } = useAuth()

  useEffect(() => {
    let isMounted = true

    const getUser = async () => {
      const user = await getUserById(authUser.uid)
      isMounted && setUser(user)
      isMounted && setAuthInitialized(true)
    }

    if (!authLoading && authUser && !user) {
      getUser()
    } else if (!authLoading && !authUser) {
      isMounted && setAuthInitialized(true)
    }

    return () => {
      isMounted = false
    }
  }, [authLoading, authUser, user])

  useEffect(() => {
    if (authInitialized) {
      setGlobalLoading(false)
    }
  }, [authInitialized])

  const logout = async () => {
    setGlobalLoading(true)

    await auth.signOut()
    setUser(null)

    setGlobalLoading(false)
  }

  return (
    <GlobalStateContext.Provider
      value={{
        globalLoading,
        setGlobalLoading,
        showMobileNav,
        setShowMobileNav,
      }}
    >
      <AuthContext.Provider
        value={{
          authUser,
          authLoading,
          authInitialized,
          loggedIn: authInitialized && authUser && !authLoading,
          logout,
        }}
      >
        <UserContext.Provider value={{ user, setUser }}>
          {children}
        </UserContext.Provider>
      </AuthContext.Provider>
    </GlobalStateContext.Provider>
  )
}
