import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}





const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)

    const resetFormfields = () => {
        setFormFields(defaultFormFields)
    }

    const { displayName, email, password, confirmPassword } = formFields

    console.log(formFields)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match")
            return
        }

        try {

            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
                )
            console.log(user)

            await createUserDocumentFromAuth(user, { displayName })

            resetFormfields()

        } catch(error) {
            console.log('there was an error', error)
            alert(`${JSON.stringify(error.message).replace('Firebase:', '')}`)
        }



    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }



    return (
        <div>
            <h1>
                Sign up with your e-mail and password
            </h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} />

                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password} />

                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default SignUpForm