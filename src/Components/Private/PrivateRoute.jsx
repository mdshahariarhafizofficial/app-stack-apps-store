import React from 'react';
import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../../Pages/Loader/Loading';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext);
    const location = useLocation();
    
    
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children
    }
    else{
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

export default PrivateRoute;