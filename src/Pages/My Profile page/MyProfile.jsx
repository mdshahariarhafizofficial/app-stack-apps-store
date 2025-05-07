import React from 'react';
import { Link } from 'react-router';

const MyProfile = () => {
    return (
        <div className='py-20'>
            <div className='grid grid-cols-12 gap-6 px-5 lg:px-0'>

                {/* Profile Info */}
                <div className='card bg-base-100 shadow-lg shadow-primary col-span-12 lg:col-span-8 md:col-span-6 items-center border-10 border-primary p-10 space-y-5'>
                    <img className='w-[150px]' src="https://www.pngkey.com/png/detail/202-2024792_user-profile-icon-png-download-fa-user-circle.png" alt="" />
                    <h2 className='text-4xl font-extrabold text-primary'>User Name</h2>
                    <p>Email: admin@gmail.com</p>
                </div>

                {/* Form */}
                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-lg shadow-primary border-10 border-primary p-10">
                        <form className="card-body">
                            <h2 className='text-4xl font-bold'>Edit Profile</h2>
                            <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label">Name</label>
                            <input type="text" className="input w-full" placeholder="Name" />

                            {/* Photo Url */}
                            <label className="label">Photo URL</label>
                            <input type="url" className="input w-full" placeholder="Photo URL" />
                            {/* Submit button */}
                            <button className="btn btn-primary mt-4">Update Profile</button>
                            </fieldset>

                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default MyProfile;<h1>My Profile Page</h1>