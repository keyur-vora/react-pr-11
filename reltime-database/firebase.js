import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBwbnBxMtI5VURn3yRHyNzmjJ9vumyxpf8",
  authDomain: "realtime-crud-c5f79.firebaseapp.com",
  databaseURL: "https://realtime-crud-c5f79-default-rtdb.firebaseio.com",
  projectId: "realtime-crud-c5f79",
  storageBucket: "realtime-crud-c5f79.appspot.com",
  messagingSenderId: "383551019906",
  appId: "1:383551019906:web:8c3068469696d642b40d9b",
  measurementId: "G-XVTX31HWM4"
};

export const app = initializeApp(firebaseConfig);