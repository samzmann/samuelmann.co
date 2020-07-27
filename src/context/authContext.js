import React from 'react'

export const AuthContext = React.createContext({
  authUser: null,
  authLoading: true,
  authInitialized: false,
  logout: null,
  loggedIn: false,
})

// /**
//  * useAuth
//  *
//  * ⚠️ Should only be mounted once on top level component (App.tsx).
//  *
//  * Listens to auth state changes, and returns auth user.
//  *
//  * */
// export const useAuth = setUser => {
//   const [authUser, setAuthUser] = useState(firebase.auth.currentUser)
//   const [authInitialized, setAuthInitialized] = useState(
//     !!firebase.auth.currentUser
//   )
//
//   useEffect(() => {
//     let isMounted = true
//
//     const authListener = firebase.auth.onAuthStateChanged(
//       async firebaseAuthUser => {
//         console.log("firebaseAuthUser", firebaseAuthUser)
//         isMounted && setAuthUser(firebaseAuthUser)
//         isMounted && setAuthInitialized(true)
//
//         if (firebaseAuthUser && !firebaseAuthUser.isAnonymous) {
//           // const user = await getUser(firebaseAuthUser.uid)
//           // setUser(user)
//         }
//
//         // if (!firebaseAuthUser) {
//         //   firebase.auth.signInAnonymously().catch(console.error)
//         // }
//       }
//     )
//
//     return () => {
//       isMounted = false
//
//       // call authListener to unsubscribe
//       authListener()
//     }
//   }, [])
//
//   return { authUser, authInitialized }
// }
