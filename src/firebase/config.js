import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPgI2nHXDqe8_NamIuUJaopLQDXEuO9XY",
  authDomain: "blog-react-1e813.firebaseapp.com",
  projectId: "blog-react-1e813",
  storageBucket: "blog-react-1e813.appspot.com",
  messagingSenderId: "342368496283",
  appId: "1:342368496283:web:64c7062defd88c5f74743e",
  measurementId: "G-ZP4XMXVVHD"
};
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  


  const storage = getStorage(firebaseApp);
  // const projectFirestore = firebase.firestore();
  // const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { storage  } 