import * as firebase from 'firebase'
import { Alert } from 'react-native'

export async function registerUser(email, password, firstName, lastName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    const currentUser = firebase.auth().currentUser
    const db = firebase.firestore()
    db.collection('users').doc(currentUser.uid)
      .set({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
      })
  } catch (error) {
    Alert.alert("Somethng is wrong", error.message)
  }
}

export async function loginUser(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password)
  } catch (error) {
    Alert.alert("Somethng is wrong", error.message)
  }
}

