import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD2n2Tw_wLhiNSgQfJ9t56xuHvpANMGduk",
  authDomain: "aplikasiskripsi-684cc.firebaseapp.com",
  projectId: "aplikasiskripsi-684cc",
  storageBucket: "aplikasiskripsi-684cc.firebasestorage.app",
  messagingSenderId: "1004727986378",
  appId: "1:1004727986378:web:d0f5cd9e97211f38de2c33",
  measurementId: "G-MHH1PFQ1CC"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
