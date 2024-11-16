import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    
    const navigate = useNavigate();
    const { createUser,googleSignUp } = useContext(AuthContext)
    const handleregister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)
        // create User
        createUser(email, password)
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
                    <h1 className="text-4xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                    <form onSubmit={handleregister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" className="input input-bordered" name='name' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter Your email address" className="input input-bordered" name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter Your password" className="input input-bordered" name='password' required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className='ml-4 mb-4 mr-4 text-lg'>Already have an Account places? <Link to='/login'><span className='underline text-purple-700'>Login</span></Link></p>
                    <p>
                        <button onClick={handleGoogleSIngIn} className='btn btn-ghost'><FcGoogle size={30} /> SignUp WIth Google</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;