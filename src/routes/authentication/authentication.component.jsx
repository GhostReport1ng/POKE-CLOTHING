import { Fragment } from 'react'
// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'
import './authentication.styles.scss'





// import { 
//     auth,
//     createUserDocumentFromAuth 
// } from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sing-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'



const Authentication = () => {

    // useEffect (() => {

    //     const fetchData = async () => {

    //         const response = await getRedirectResult(auth)
    //         console.log('im running')
    //         console.log(response)

    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user)
    //             console.log(userDocRef)
    //         }
    //     }

    //     fetchData()

    // }, [])



    return (
        <Fragment>
            <div>
                <h1>
                
                    Sign in Page

                </h1>

                <div className='sign-in'>
                                        
                    <SignInForm />

                    <SignUpForm />                    

                </div>
            </div>
        </Fragment>
    )
}

export default Authentication;