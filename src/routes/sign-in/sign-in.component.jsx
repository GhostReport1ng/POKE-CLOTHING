import { Fragment } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'


const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user)
        createUserDocumentFromAuth(user)
    }


    return (
        <Fragment>
            <div>
                <h1>Sign in Page</h1>
                <button onClick={logGoogleUser}>
                    Sign in with Google Popup
                </button>
            </div>
        </Fragment>
    )
}

export default SignIn