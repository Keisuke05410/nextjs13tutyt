// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA92HWs_chw08e7RBpQLClryhkDLNIJF-o',
  authDomain: 'next-ce259.firebaseapp.com',
  projectId: 'next-ce259',
  storageBucket: 'next-ce259.appspot.com',
  messagingSenderId: '898563203281',
  appId: '1:898563203281:web:c6ac4a159f7f3b4cffe5f0',
  measurementId: 'G-Z1G3KMWBRG',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app)
export const db = getFirestore(app)
