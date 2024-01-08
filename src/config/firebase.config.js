import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsoHcCNHextmxoU608fY559-jTTuoXl-M",
  authDomain: "clean-co-189c1.firebaseapp.com",
  projectId: "clean-co-189c1",
  storageBucket: "clean-co-189c1.appspot.com",
  messagingSenderId: "908775392226",
  appId: "1:908775392226:web:8c390506267e6eecb82fbb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
