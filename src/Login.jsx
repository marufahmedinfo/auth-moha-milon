import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const navigate = useNavigate();
    const { logInUser, googleSignUp } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        // Login User
        logInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                console.log('ERROR', error.message)
            })

    };

    const handleGoogleSIngIn = () => {
        googleSignUp()
        .then(result => {
            console.log(result.user)
            navigate('/')
        })
        .catch(error => console.log('ERROR', error.message))
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='ml-4 mb-4 mr-4 text-lg'>New to This Website? <Link to='/register'><span className='underline text-purple-700'>Register Now</span></Link></p>
                    <p>
                        <button onClick={handleGoogleSIngIn} className='btn btn-ghost'><FcGoogle size={30}/> SignIn WIth Google</button>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Login;