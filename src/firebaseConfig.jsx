import firebase from 'firebase/app';
import '@firebase/firestore';
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const app = firebase.initializeApp({
      apiKey: "AIzaSyB6I_730hx9cvgnqxR8CuLbzBu4wfbvYM8",
      authDomain: "viviendas-sf-web.firebaseapp.com",
      projectId: "viviendas-sf-web",
      storageBucket: "viviendas-sf-web.appspot.com",
      messagingSenderId: "684134147042",
      appId: "1:684134147042:web:627f90d283203d7fbb0fbb",
      measurementId: "G-KYCKWRYJCK"
    });

  // Initialize Firebase
    export function getFirebase() {
        return app;
    }
    export function getFirestore() {
        return firebase.firestore(app);
    }