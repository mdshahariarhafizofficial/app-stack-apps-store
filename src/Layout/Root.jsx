import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

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

          <main className='max-w-[1280px] mx-auto min-h-[calc(100vh-413.59px)]'>
            <Outlet></Outlet>  
          </main>

          <section className='max-w-[1280px] mx-auto'>
              <Footer></Footer>
          </section>
          
        </>
    );
};

export default Root;