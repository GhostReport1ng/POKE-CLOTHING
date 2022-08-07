import { Fragment } from 'react'
import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'


import { 
    auth,
    signInWithGooglePopup, 
    signInWithGoogleRedirect, 
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sing-up-form.component'



const SignIn = () => {

    useEffect (() => {

        const fetchData = async () => {

            const response = await getRedirectResult(auth)
            // console.log('im running')
            console.log(response)

            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user)
                console.log(userDocRef)
            }
        }

        fetchData()

    }, [])



    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        // console.log(user)
        createUserDocumentFromAuth(user)
    }




    return (
        <Fragment>
            <div>
                <h1>Sign in Page</h1>
                <button onClick={logGoogleUser}>
                    Sign in with Google Popup
                </button>
                <button onClick={signInWithGoogleRedirect}>
                    Sign in with Google Redirect
                </button>
                <SignUpForm />
            </div>
        </Fragment>
    )
}

export default SignIn