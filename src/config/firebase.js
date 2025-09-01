import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBl02aqhQc30ZeawbNPjwGHLFFcSPEbrNw",
  authDomain: "ecomerse-d537d.firebaseapp.com",
  projectId: "ecomerse-d537d",
  storageBucket: "ecomerse-d537d.firebasestorage.app",
  messagingSenderId: "835903886344",
  appId: "1:835903886344:web:9fad7ae0227a5a5071adbd"
};


const app = initializeApp(firebaseConfig);

const database = getFirestore(app)

export default database