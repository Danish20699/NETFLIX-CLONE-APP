import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDtEJzRgO39U2ULX1KISkiTGIBWlXhFyhQ",
  authDomain: "netflix-clone-app-22e03.firebaseapp.com",
  projectId: "netflix-clone-app-22e03",
  storageBucket: "netflix-clone-app-22e03.appspot.com",
  messagingSenderId: "841930954428",
  appId: "1:841930954428:web:252aec41cc5a17cba8a2b9",
  measurementId: "G-2KJPJWPYX6"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
