import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDOEdcfAEenTFXhOgxx41-3xLtPU8lA16g",
    authDomain: "exellent-2025.firebaseapp.com",
    projectId: "exellent-2025",
    storageBucket: "exellent-2025.firebasestorage.app",
    messagingSenderId: "413390145105",
    appId: "1:413390145105:web:05b3efc303f14f64a1da70"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
