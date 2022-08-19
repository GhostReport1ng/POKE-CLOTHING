import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    displayName: null,
    setDisplayName: () => null,
})

export const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [displayName, setDisplayName] = useState(null)
    const value = { currentUser, setCurrentUser, displayName, setDisplayName }

    useEffect(() => {
        async function unsubscribe () { onAuthStateChangedListener((user) => {
            console.log(user)

            if (user) {
                createUserDocumentFromAuth(user)
            }
            
            setCurrentUser(user)
        })
        }
        
        unsubscribe()

    }, [])


    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}