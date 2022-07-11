import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoFezHt85NtXX7Os7NpFXUWLhTSutaj0k",
  authDomain: "timer-50378.firebaseapp.com",
  projectId: "timer-50378",
  storageBucket: "timer-50378.appspot.com",
  messagingSenderId: "927610809926",
  appId: "1:927610809926:web:72dc68e35d8f709fa06447",
  measurementId: "G-MWEQDY6Q7M",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
