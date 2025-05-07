import React from 'react';
import { HashLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className='min-h-[100vh] flex items-center justify-center'>
            <HashLoader color="#0075ff" />
        </div>
    );
};

export default Loading;