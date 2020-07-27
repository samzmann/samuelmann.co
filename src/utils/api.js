import { firestore } from 'gatsby-theme-firebase'

export const createUser = async user =>
  firestore.collection('users').doc(user.id).set(user)

export const getUserById = async id => {
  try {
    const doc = await firestore.collection('users').doc(id).get()
    if (doc.exists) {
      return doc.data()
    } else {
      throw new Error(`User doesn't exist`)
    }
  } catch (e) {
    console.log(`Error getting user ${id}: ${e}`)
    return null
  }
}
