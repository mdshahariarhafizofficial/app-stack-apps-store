import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    let name = "Fahad";
    // Context Data
    const userInfo = {
        name,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;