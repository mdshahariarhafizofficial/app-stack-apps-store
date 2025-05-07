import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { HashLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className='min-h-[100vh] flex items-center justify-center'>
                <HelmetProvider>
                    <title>Loading.....</title>
                </HelmetProvider>
            <HashLoader color="#0075ff" />
        </div>
    );
};

export default Loading;