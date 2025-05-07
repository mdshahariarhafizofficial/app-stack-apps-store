import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BsClockFill } from 'react-icons/bs';
import { FaClock } from 'react-icons/fa';
import { FaSquarePhone } from 'react-icons/fa6';
import { IoIosMailOpen } from 'react-icons/io';

const ContactUs = () => {
    return (
        <div className='min-h-[70vh]'>
        <HelmetProvider>
            <title>App Store - Contact Us</title>
        </HelmetProvider>


            <div className='card shadow-sm p-6 mx-5 lg:mx-0 mb-20 mt-20 border-2 border-gray-200'>
                <h2 className='text-5xl font-bold text-center'>Looking for something?</h2>
            </div>

            <div className='grid grid-cols-12 gap-6 mb-20'>

                <div className='lg:col-span-5 col-span-12 lg:px-0 px-5 space-y-6'>

                    <div className="card shadow-sm p-6 bg-violet-600 flex-row gap-6">
                        <div>
                            <FaSquarePhone size={50} color='white' />
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold text-white'>+68 872-627-9735</h2>
                            <p className='text-xl font-semibold text-gray-300'>Free Support!</p>
                        </div>
                    </div>
                    <div className="card shadow-sm p-6 bg-primary flex-row gap-6">
                        <div>
                            <BsClockFill size={50} color='white' />
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold text-white'>Mon-Sat(10:00-19:00)</h2>
                            <p className='text-xl font-semibold text-gray-300'>Working Hours!</p>
                        </div>
                    </div>
                    <div className="card shadow-sm p-6 bg-amber-600 flex-row gap-6">
                        <div>
                            <IoIosMailOpen size={50} color='white' />
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold text-white'>appstore@gmail.com</h2>
                            <p className='text-xl font-semibold text-gray-300'>Support us!</p>
                        </div>
                    </div>

                </div>


                <div className='lg:col-span-7 col-span-12'>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl p-5">
                    <div className="card-body">
                        <fieldset className="fieldset space-y-6">
                        <input type="text" className="input w-full" placeholder="Name" />
                        <input type="email" className="input w-full" placeholder="Email" />
                        <textarea placeholder="Message" className="textarea textarea-2xl w-full"></textarea>
                        <button className="btn btn-neutral mt-4">Send Message</button>
                        </fieldset>
                    </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default ContactUs;