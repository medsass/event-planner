import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh6SniIlZVcnulRJLN5XcfP3bESqPGNBM",
  authDomain: "event-booking-b54b4.firebaseapp.com",
  projectId: "event-booking-b54b4",
  storageBucket: "event-booking-b54b4.firebasestorage.app",
  messagingSenderId: "979264309580",
  appId: "1:979264309580:web:a4a1bf5baa1001b7f367e9",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// ✅ Firestore database
export const db = getFirestore(app)
