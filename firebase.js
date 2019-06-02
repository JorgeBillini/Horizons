import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxPnjMYH9QDVm9qVo04SoxzAtdFzggTAQ",
    authDomain: "horizons-12345.firebaseapp.com",
    databaseURL: "https://horizons-12345.firebaseio.com",
    projectId: "horizons-12345",
    storageBucket: "horizons-12345.appspot.com",
    messagingSenderId: "594980879025",
    appId: "1:594980879025:web:822e1554c26e17c2"
};

// Initialize Firebase
app.initializeApp(firebaseConfig);

export default app;