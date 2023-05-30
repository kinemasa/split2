import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth";
import  {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBS-gTt8ujXf7BPOw4eNBAAdKVZsfBF1A",
  authDomain: "split2-28502.firebaseapp.com",
  projectId: "split2-28502",
  storageBucket: "split2-28502.appspot.com",
  messagingSenderId: "426553817349",
  appId: "1:426553817349:web:c41f110491a3e62f871f6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth,provider,db};