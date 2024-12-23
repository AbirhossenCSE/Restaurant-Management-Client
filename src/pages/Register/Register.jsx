import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SocialLogin from '../shared/SocialLogin';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';

const Register = () => {
    const { createUser, setUser } = useAuth();
    const navigate = useNavigate();

    // State to manage password visibility
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        // const form = e.target;
        // const email = form.email.value;
        // const password = form.password.value;
        // console.log(email, password);

        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');

        // password validation
        // Create user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    title: 'Registration Successful!',
                    text: 'You have successfully created an account.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                    setUser(user)
                }, 2000);
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    {/* animation */}
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="mx-auto mt-5 text-5xl font-bold">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-2 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <FaRegEye />
                                    ) : (
                                        <FaEyeSlash />
                                    )}
                                </button>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;