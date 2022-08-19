import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import { useState } from "react"
import './sign-in-form.styles.scss'
import { 
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils'


const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(user)
    createUserDocumentFromAuth(user)
}

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {



    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields


    const resetFormfields = () => {
        setFormFields(defaultFormFields)
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormfields()
            
        }

        catch (error) {
            alert(JSON.stringify(error.message).replace('Firebase: ', ''))
        }

    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email" 
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email} 

                />
                <FormInput
                    label="Password" 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password} 

                />

                <div className="buttons-container">

                    <Button>Sign in</Button>
                    <Button type='button' buttonType='google' onClick={logGoogleUser}>
                    Google sign in
                    </Button>

                </div>
            </form>



            

        </div>
    )
}

export default SignInForm;