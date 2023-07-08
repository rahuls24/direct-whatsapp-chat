// Firebase setup
// Import the functions you need from the SDKs you need

import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAkXRlmdsi-GDzy8IO3XibMdWWAu71egmY',
	authDomain: 'direct-chatt.firebaseapp.com',
	projectId: 'direct-chatt',
	storageBucket: 'direct-chatt.appspot.com',
	messagingSenderId: '1034351870673',
	appId: '1:1034351870673:web:c91ad33dd140559e54fbf0',
	measurementId: 'G-LLTPKB3PPR',
};


export default function setupFirebase(){
// Initialize Firebase
const app = initializeApp(firebaseConfig);
return getAnalytics(app);
}