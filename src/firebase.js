// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjQkzbaj04dRP_pGs6Z0SCsucTY_CTLXM",
  authDomain: "swami-admin-backend.firebaseapp.com",
  projectId: "swami-admin-backend",
  storageBucket: "swami-admin-backend.firebasestorage.app",
  messagingSenderId: "524718890078",
  appId: "1:524718890078:web:37e24d7b892457761de8cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// ✅ EXPORT THESE
export const auth = getAuth(app);
export const db = getFirestore(app);