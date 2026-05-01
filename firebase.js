const firebaseConfig = {
    apiKey: "AIzaSyDtaxDpVA69m97ajqWwHhLO1hYyE_ZX6eE",
    authDomain: "e-commerce-website-7fa70.firebaseapp.com",
    projectId: "e-commerce-website-7fa70",
    storageBucket: "e-commerce-website-7fa70.firebasestorage.app",
    messagingSenderId: "698963952067",
    appId: "1:698963952067:web:f6a5b62f37434ce3d03d76"
  };
firebase.initializeApp(firebaseConfig);
const auth= firebase.auth();
const db= firebase.firestore();