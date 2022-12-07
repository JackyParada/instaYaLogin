////////////////////
//FIREBASE SCRIPTS//
////////////////////

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmsDHyQXvaeFdxe8qfff45Lowl_VQEmuY",
    authDomain: "fb-instaya.firebaseapp.com",
    projectId: "fb-instaya",
    storageBucket: "fb-instaya.appspot.com",
    messagingSenderId: "837447582894",
    appId: "1:837447582894:web:e2a03a19083dcbbb65593f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);





///////////////
//CUSTOM CODE//
///////////////


//Logout

const logout = document.querySelector("#logout");

logout.addEventListener('click', (e) => {
    e.preventDefault();
    
    signOut(auth)
    .then(() => {
        //console.log("sign out")
    })


});


//page Change

function introPage() {
    location.replace("http://127.0.0.1:5500/login.html")
}

auth.onAuthStateChanged(user => {
    if(user){
        //console.log("El usuario si esta logeado")
    } else { 
        //console.log("El usuario no esta logeado")
        introPage(); 
    }
})
