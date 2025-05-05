import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import App from '../App';
import Apps from '../Pages/Apps Page/Apps';

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
        ]
    },
    {
        path: "/*",
        element: <h2>404 Error</h2>
    }

])

export default router;