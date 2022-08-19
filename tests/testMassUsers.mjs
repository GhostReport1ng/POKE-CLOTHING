import { initializeApp } from 'firebase/app';
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJFTfBINRrKmdr3MYKzW75QbX732DBC1A",
    authDomain: "testmassusers.firebaseapp.com",
    projectId: "testmassusers",
    storageBucket: "testmassusers.appspot.com",
    messagingSenderId: "443370816308",
    appId: "1:443370816308:web:81ac83db4cda696815db61",
    measurementId: "G-3149MP8Y0V"
  };
  
  // Initialize Firebase
//   eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);


const auth = getAuth();
const db = getFirestore()


const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
    ) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)

    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, 
                email, 
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
                console.log('error creating the user', error.message)
        }

    }

    return userDocRef;

}

const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    // console.log(auth)
    

    return await createUserWithEmailAndPassword(auth, email, password)

} 

for (let i = 0; i < 15; i++) {
    await createAuthUserWithEmailAndPassword(`${i}@asd.com`, 'asdasd')
}