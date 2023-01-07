import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCxs2uvzT23SJRK_LXdsZJ6Cw-GInA19bY",
  authDomain: "miniblog-776a1.firebaseapp.com",
  projectId: "miniblog-776a1",
  storageBucket: "miniblog-776a1.appspot.com",
  messagingSenderId: "1032027123013",
  appId: "1:1032027123013:web:d90929660476d64bf0222c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db}