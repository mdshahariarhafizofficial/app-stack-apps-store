import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import App from '../App';
import Apps from '../Pages/Apps Page/Apps';
import NotFound from '../Pages/Error/NotFound';
import AppDetails from '../Pages/AppDetailsPage/AppDetails';

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
                hydrateFallbackElement: <p>Loading........</p>
            }
        ]
    },
    {
        path: "/*",
        element: <NotFound></NotFound>
    }

])

export default router;