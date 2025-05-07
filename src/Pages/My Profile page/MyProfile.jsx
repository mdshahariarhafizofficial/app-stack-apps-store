import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import toast from 'react-hot-toast';
import userIcon from '../../assets/userIcon.png'
import { HelmetProvider } from 'react-helmet-async';

const MyProfile = () => {
    const {user, handleUpdatedUserProfile, setUser} = use(AuthContext);
    
    // Update Profile
    const updateProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        console.log(name, photo);
        
        handleUpdatedUserProfile({
            displayName: name,
            photoURL: photo
        })
        .then(()=>{
            setUser({...user, displayName: name, photoURL: photo})
            toast.success('Profile Update Successful!')
        })
        .catch((error)=>{
            toast.error(error.message)
            setUser(user)
        })

    }

    return (
        <div className='py-20'>
        <HelmetProvider>
            <title>App Store - My Profile</title>
        </HelmetProvider>
            <div className='grid grid-cols-12 gap-6 px-5 lg:px-0'>

                {/* Profile Info */}
                <div className='relative card bg-base-100 shadow-lg shadow-primary col-span-12 lg:col-span-8 md:col-span-6 items-center border-10 border-primary p-8 space-y-5'>
                    <img 
                    className='w-[150px] object-cover' 
                    src={`${user ? user.photoURL || userIcon : userIcon }`} 
                    alt="" />
                    <h2 className='text-xl lg:text-4xl md:text-3xl font-extrabold text-primary'>{user ? user.displayName : 'User Name'}</h2>
                    <p> <span className='text-xl font-bold'>Email:</span> <span className='font-semibold text-accent'>{user ? user.email : ''}</span> </p>
                    <p className='max-w-full text-center'> <span className='text-xl font-bold'>Photo Url:</span> <span className='font-semibold text-base text-accent'>{user && user.photoURL ? user.photoURL : 'Not Found'}</span> </p>

                    <div className={`absolute top-2 right-3 ${ user && user.emailVerified ?  'bg-green-500' : 'bg-red-500' } px-3 py-1 rounded-sm text-white font-bold`}>
                        {
                            user && user.emailVerified ?  'Verified' : 'Not Verified'
                        }
                    </div>
                </div>

                {/* Form */}
                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-lg shadow-primary border-10 border-primary p-10">
                        <form onSubmit={updateProfile} className="card-body">
                            <h2 className='text-4xl font-bold'>Edit Profile</h2>
                            <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input w-full" placeholder="Name" required />

                            {/* Photo Url */}
                            <label className="label">Photo URL</label>
                            <input type="url" name='photoUrl' className="input w-full" placeholder="Photo URL" required />
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