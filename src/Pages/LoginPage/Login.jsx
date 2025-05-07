import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='min-h-[calc(100vh-412px)] px-5 md:px-0 py-16 flex items-center justify-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <form className="card-body">
                <h2 className='text-4xl font-bold text-center'>Login</h2>
                <fieldset className="fieldset">
                {/* Email */}
                <label className="label">Email</label>
                <input type="email" className="input w-full" placeholder="Email" />

                {/* Password */}
                <label className="label">Password</label>
                <input type="password" className="input w-full" placeholder="Password" />

                <div><a className="link link-hover">Forgot password?</a></div>
                {/* Submit button */}
                <button className="btn btn-primary mt-4">Login</button>
                <p className='font-medium text-sm mt-5 text-center'>Don't have any account? <Link className='text-primary font-bold' to="/register">Register</Link></p>
                <div className="divider">OR</div>
                {/* Google */}
                    <button type='button' className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                    </button>
                </fieldset>

            </form>
            </div>
        </div>
    );
};

export default Login;