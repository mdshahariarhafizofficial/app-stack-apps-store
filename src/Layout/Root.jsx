import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar/Navbar';

const Root = () => {
    return (
        <>
          <header>
            <div className='border-b-2 border-gray-300'>
                <nav className='max-w-[1280px] mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </div>
          </header>

          <main className='max-w-[1280px] mx-auto'>
            <Outlet></Outlet>  
          </main>

          <footer>
            
          </footer>
          
        </>
    );
};

export default Root;