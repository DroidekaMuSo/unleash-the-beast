// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXREuR3Ti50TkdClhlPHSl6rxanSCDsVk",
  authDomain: "unleash-the-beast-d4dfb.firebaseapp.com",
  projectId: "unleash-the-beast-d4dfb",
  storageBucket: "unleash-the-beast-d4dfb.appspot.com",
  messagingSenderId: "230623608798",
  appId: "1:230623608798:web:d268dcab5c075c35c4274f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)