import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAiaQDxbIfNQC4f8cM0lGGLSXkpCq28zaY",
  authDomain: "css-gallary.firebaseapp.com",
  projectId: "css-gallary",
  storageBucket: "css-gallary.appspot.com",
  messagingSenderId: "863315383457",
  appId: "1:863315383457:web:4a772384787d2114964ce0",
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
