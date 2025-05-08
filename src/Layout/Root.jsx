import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Components/Header/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Loading from '../Pages/Loader/Loading';

const Root = () => {
  const {state} = useNavigation();
    return (
        <>
          <header>
            <div className='border-b-2 border-gray-300'>
                <nav className='max-w-[1280px] mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </div>
          </header>

          <main className='max-w-[1280px] mx-auto min-h-[calc(100vh-412px)]'>
            { state == 'loading' ? <Loading></Loading> : <Outlet></Outlet> }
          </main>

          <section className='max-w-[1280px] mx-auto'>
              <Footer></Footer>
          </section>
          
        </>
    );
};

export default Root;