import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBrVTly3QAeIRoj84v8LIfqgRxc1xDqfRM",
  authDomain: "disneyplusclone-39efd.firebaseapp.com",
  projectId: "disneyplusclone-39efd",
  storageBucket: "disneyplusclone-39efd.appspot.com",
  messagingSenderId: "89987947820",
  appId: "1:89987947820:web:daee915dd59f1e72df2089",
  measurementId: "G-38J4S73YKK",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);
export { auth, provider, storage };
export default db;
