import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';
import toast from 'react-hot-toast';


const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    // Create User
    const handleCreateUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // Login User
    const handleLoginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Update user profile
    const handleUpdatedUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }


    // Current User
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    }, [] )

    // Handle Sing out
    const handleSingOut = () => {
        signOut(auth)
        .then(()=>{
            toast.success('Logout Out Successful!')
        }).catch((error)=>{
            toast.error(error.message)
        })
    } 

    console.log(user);
    
    // Context Data
    const userInfo = {
        handleCreateUser,
        handleLoginUser,
        handleUpdatedUserProfile,
        handleSingOut,
        user,
        setUser,
        setLoading,
        loading
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;