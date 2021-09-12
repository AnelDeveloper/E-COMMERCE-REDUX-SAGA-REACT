

import firebase from 'firebase';


import 'firebase/firestore';
import 'firebase/auth';


const config =  {
    apiKey: "AIzaSyBdVR7ZYyvRBBxqgUNEB0c43JNCCL1e9Ns",
    authDomain: "e-comerce-db-bff1f.firebaseapp.com",
    projectId: "e-comerce-db-bff1f",
    storageBucket: "e-comerce-db-bff1f.apWpspot.com",
    messagingSenderId: "587596045892",
    appId: "1:587596045892:web:aed80e38dfce2a6b10e611",
    measurementId: "G-E8Y7JZED6H"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get(); 

    if(!snapShot.exists) {
      const { displayName , email } = userAuth;

      const createdAt = new Date();
      
      try {
        await userRef.set({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })

      }catch (error) {
        console.log(`error creating user `, error.message);


      }
    }

  return userRef;


  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;



