import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';


const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    // Create User
    const handleCreateUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // Login User
    const handleLoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    console.log(user);
    
    // Context Data
    const userInfo = {
        handleCreateUser,
        handleLoginUser,
        user,
        setUser,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;