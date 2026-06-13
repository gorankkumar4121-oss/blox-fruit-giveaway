import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {


  apiKey: "AIzaSyC0__o01Dd48J_U-SgS2qtxpX4w7Eoa0mw",


  authDomain: "giveaway-6b028.firebaseapp.com",


  projectId: "giveaway-6b028",


  storageBucket: "giveaway-6b028.firebasestorage.app",


  messagingSenderId: "108920918100",


  appId: "1:108920918100:web:075ca4b87ef447c66d9dc1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = async function(){

    const robloxUsername =
      document.getElementById("robloxUsername").value;

    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;

    try{
        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        alert("Login Successful");

    }catch(error){
        alert(error.message);
    }
}
