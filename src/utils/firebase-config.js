import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDQJWsoy9qyTxY1JdEogpTWjucc83AFKCs",
  authDomain: "netflix-14ca1.firebaseapp.com",
  projectId: "netflix-14ca1",
  storageBucket: "netflix-14ca1.appspot.com",
  messagingSenderId: "463568295587",
  appId: "1:463568295587:web:ef133731aa23a35df85116",
  measurementId: "G-T93KEWB5NE"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);