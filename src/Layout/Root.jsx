import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
          <h1>Root Layouts</h1>
          <Outlet></Outlet>  
        </>
    );
};

export default Root;