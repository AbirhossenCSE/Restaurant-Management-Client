import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SocialLogin from '../shared/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import registerLottie from '../../assets/Lottile/register.json'
import Lottie from 'lottie-react';

const Register = () => {
    const { createUser, setUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // State to manage password visibility
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');

        // Validate password
        const passwordValidation = validatePassword(password);

        if (!passwordValidation.isValid) {
            Swal.fire({
                title: 'Validation Error',
                text: passwordValidation.message,
                icon: 'error',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
            return;
        }

        // Create user
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    title: 'Registration Successful!',
                    text: 'You have successfully created an account.',
                    icon: 'success',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 3000);
            })
            .catch(error => {
                Swal.fire({
                    title: 'Registration Failed',
                    text: 'Something went wrong. Please try again.',
                    icon: 'error',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
                console.log(error.message);
            });
    };

    // Function to validate password
    const validatePassword = (password) => {
        if (password.length < 6) {
            return { isValid: false, message: "Password must be at least 6 characters long." };
        }
        if (!/[A-Z]/.test(password)) {
            return { isValid: false, message: "Password must contain at least one uppercase letter." };
        }
        if (!/[a-z]/.test(password)) {
            return { isValid: false, message: "Password must contain at least one lowercase letter." };
        }
        return { isValid: true };
    };

    return (
        <div className="hero bg-base-100 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={registerLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="mx-auto mt-5 text-5xl font-bold">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    placeholder="Password"
                                    className="input input-bordered w-full"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-2 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaRegEye /> : <FaEyeSlash />}
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
                    <p className='text-center font-semibold'>
                        Already Have An Account? <Link className='text-red-500' to='/signin'>Sign-In</Link>
                    </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;
