import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCXt2Oz75Lr_aIX6t8KyhJb3_KLvtTTPug",
  authDomain: "crwn-db-ee2e7.firebaseapp.com",
  databaseURL: "https://crwn-db-ee2e7.firebaseio.com",
  projectId: "crwn-db-ee2e7",
  storageBucket: "crwn-db-ee2e7.appspot.com",
  messagingSenderId: "1008987951059",
  appId: "1:1008987951059:web:c7c0fe65f57076d77c6926",
  measurementId: "G-VY397Z5FH1"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const {displayName, email} = userAuth
    const createAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error createing user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
