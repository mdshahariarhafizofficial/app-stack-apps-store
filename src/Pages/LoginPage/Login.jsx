import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import toast from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';


const Login = () => {
        const [ errorMessage, setErrorMessage ] = useState('');
        const {handleLoginUser, setUser, handleGoogleSingIn, passwordReset} = use(AuthContext);
        const navigate = useNavigate();
        const location = useLocation();
        
        // Handle Login
        const handleLogin = (e) =>{
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            
            
            // Password Validation
            const lowercase = /(?=.*[a-z])/;
            const uppercase = /(?=.*[A-Z])/;
            const digit = /(?=.*\d)/;
            const length = /.{6,}/;
            if (!lowercase.test(password)) {
                setErrorMessage("Must have a Lowercase letter in the password ");
                return
            }else if(!uppercase.test(password)){
                setErrorMessage('Must have a Uppercase letter in the password ');
                return
            }else if(!digit.test(password)){
                setErrorMessage("Must have a Digit in the password ");
                return
            }
            else if(!length.test(password)){
                setErrorMessage("Length must be at least 6 character");
                return
            }
            else{
                setErrorMessage('')
            }

            // Handle Login User
            handleLoginUser(email, password)
            .then( (result) => {
                setUser(result.user);
                toast.success('Login Successfully!')
                navigate(`${location.state ? location.state : '/'}`)
            } ).catch( (error) => {
                toast.error(error.message);
            } )

        }

    // Handle Google Sign In
        const addGoogleSingIn = () => {
            handleGoogleSingIn()
            .then((result)=>{
                setUser(result.user)
                toast.success("Sing In Successful!")
                navigate('/')
            }).catch((error)=>{
                toast.error(error.message)
            })
        }

    // Handle Password Reset
    const emailRef = useRef();

    const forgotPassword = ()=>{
        const email = emailRef.current.value;
        passwordReset(email)
        .then(()=>{
            toast.success("Password reset email sent!")
            window.location.href = "https://mail.google.com/";
        })
        .catch((error)=>{
            toast.error(error.message)
        })
    }
    

    return (
        <div className='min-h-[calc(100vh-412px)] px-5 md:px-0 py-16 flex items-center justify-center'>
            
            <HelmetProvider>
                <title>App Store - Login</title>
            </HelmetProvider>   

            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
                <h2 className='text-4xl font-bold text-center'>Login</h2>
                <fieldset className="fieldset">
                {/* Email */}
                <label className="label">Email</label>
                <input type="email" ref={emailRef} name='email' className="input w-full" placeholder="Email" required />

                {/* Password */}
                <label className="label">Password</label>
                <input type="password" name='password' className="input w-full" placeholder="Password" required />
                <p className='text-red-600 font-semibold'>{errorMessage}</p>

                <div><a onClick={forgotPassword} className="link link-hover">Forgot password?</a></div>
                {/* Submit button */}
                <button type='submit' className="btn btn-primary mt-4">Login</button>
                <p className='font-medium text-sm mt-5 text-center'>Don't have any account? <Link className='text-primary font-bold' to="/register">Register</Link></p>
                <div className="divider">OR</div>
                {/* Google */}
                    <button onClick={addGoogleSingIn} type='button' className="btn bg-white text-black border-[#e5e5e5]">
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