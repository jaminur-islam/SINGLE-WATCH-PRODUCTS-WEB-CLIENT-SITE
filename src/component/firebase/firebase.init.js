import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseAuthenticationInit = () =>{
  const app = initializeApp(firebaseConfig);
}

export default firebaseAuthenticationInit