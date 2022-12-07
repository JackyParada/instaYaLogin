
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




//Signup

const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //const name = document.querySelector("#signup-name").value;
    const email = document.querySelector("#signup-email").value;
    const password = document.querySelector("#signup-password").value;
    const passwordVerification = document.querySelector("#signup-password-verification").value;
    const minPasswordLength = 6;

    if(password == passwordVerification){

        if(password.length < minPasswordLength){
            alert("La contraseña debe contener minimo " + minPasswordLength+ " caracteres!");
        } else {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Clear the form
                signupForm.reset();

                //Close the modal
                $('#signupModal').modal('hide')
                
                const user = userCredential.user;
                //const user = userCredential.user;
                console.log("sign up" + user)
                
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
            });    
        }
                
    } else {
        alert("Tus contraseñas no coinciden");
    };
});








//Signin

const signinForm = document.querySelector("#signin-form");

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector("#signin-email").value;
    const password = document.querySelector("#signin-password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // SClear the form
        signupForm.reset();

        //Close the modal
        $('#signupModal').modal('hide')


        //console.log("sign in")
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        alert("Verifica tu usuario o contraseña");
        //const errorCode = error.code;
        //const errorMessage = error.message;
        // ..
    });    


});




//page Change

function indexPage() {
    location.replace("http://127.0.0.1:5500/index.html")
}

auth.onAuthStateChanged(user => {
    if(user){
        //console.log("El usuario si esta logeado")
        indexPage();
    } else { 
       // console.log("El usuario no esta logueado")
    }
})









