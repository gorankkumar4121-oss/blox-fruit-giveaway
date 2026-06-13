import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
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

// Register
window.register = async function() {

  const username =
    document.getElementById("username").value;

  const password =
    document.getElementById("password").value;

  // Firebase Auth requires an email.
  const fakeEmail =
    username.toLowerCase() + "@mywebsite.com";

  try {
    await createUserWithEmailAndPassword(
      auth,
      fakeEmail,
      password
    );

    alert("Account Created Successfully");
  }
  catch(error){
    alert(error.message);
  }
};

// Login
window.login = async function() {

  const username =
    document.getElementById("username").value;

  const password =
    document.getElementById("password").value;

  const fakeEmail =
    username.toLowerCase() + "@mywebsite.com";

  try {
    await signInWithEmailAndPassword(
      auth,
      fakeEmail,
      password
    );

    alert("Login Successful");

    // Example:
    // window.location.href = "dashboard.html";

  }
  catch(error){
    alert(error.message);
  }
};
