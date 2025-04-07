import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyByHpdxu_aYC8KQtUNQ6o33hdzEW4ERsaw",
  authDomain: "portfolio-50767-default-rtdb.firebaseio.com",
  projectId: "portfolio-50767",
  // storageBucket: "portfolio-website-b4758.appspot.com",
  // messagingSenderId: "9920655685",
  // appId: "1:959370968910:web:8b57b773c2876c588ae81f"

};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();