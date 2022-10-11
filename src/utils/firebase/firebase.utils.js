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
    apiKey: "AIzaSyAaawjEsezPQotRvU4IFi-qr9ZiY2Iuqtg",
    authDomain: "crown-clothing-db-ae3dc.firebaseapp.com",
    projectId: "crown-clothing-db-ae3dc",
    storageBucket: "crown-clothing-db-ae3dc.appspot.com",
    messagingSenderId: "27042194218",
    appId: "1:27042194218:web:c401ee1c4ded8df5dc7453"
  };
  
  // Initialize Firebase
//   eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const signInWithGoogleRedirect = () => {
    return signInWithRedirect(auth, googleProvider)
}



export const db = getFirestore()




export const createUserDocumentFromAuth = async (
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





export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    // console.log(auth)
    

    return await createUserWithEmailAndPassword(auth, email, password)

} 




export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}


export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = async (callback) => {
    onAuthStateChanged(auth, callback)
}