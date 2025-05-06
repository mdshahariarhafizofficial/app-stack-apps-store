import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import App from '../App';
import Apps from '../Pages/Apps Page/Apps';
import NotFound from '../Pages/Error/NotFound';
import AppDetails from '../Pages/AppDetailsPage/AppDetails';
import Register from '../Pages/RegisterPage/Register';
import Login from '../Pages/LoginPage/Login';

const router = createBrowserRouter([
    {
        path: '',
        Component: Root,
        children: [
            {
                index: true,
                Component: Apps,
                loader: () => fetch("../apps.json"),
                hydrateFallbackElement: <p>Loading........</p>
            },
            {
                path: 'my-profile',
                element: <p>Profile Page</p>
            },
            {
                path: "/app-details/:id",
                Component: AppDetails,
                loader: () => fetch("../apps.json"),
                hydrateFallbackElement: <p>Loading........</p>,
                errorElement: <NotFound></NotFound>
                
            },
            {
                path:'register',
                Component: Register,
            },
            {
                path: 'login',
                Component: Login
            },
        ]
    },
    {
        path: "/*",
        element: <NotFound></NotFound>
    }

])

export default router;