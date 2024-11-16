import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firbase.config';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const name = 'Hello This is Maruf Ahmed';

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    };

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth);
    };

    const googleSignUp = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribeUser = onAuthStateChanged(auth, (currentUser) => {
            console.log('Current User', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribeUser()
        }
    }, [])
    // onAuthStateChanged(auth, (currentUser) => {
    //     if(currentUser){
    //         console.log('Currently Logged User', currentUser);
    //         setUser(currentUser)
    //     }
    //     else{
    //         console.log('No User Logged in');
    //         setUser(null)
    //     }
    // })



    const authInfo = {
        name,
        user,
        loading,
        createUser,
        logInUser,
        logOutUser,
        googleSignUp,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;