import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SocialLogin from '../shared/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import registerLottie from '../../assets/Lottile/register.json';
import Lottie from 'lottie-react';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, setUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');

        const passwordValidation = validatePassword(password);

        if (!passwordValidation.isValid) {
            toast.error(passwordValidation.message);
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success('Registration Successful!');
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/');
                }, 3000);
            })
            .catch(error => {
                toast.error('Registration Failed. Please try again.');
                console.log(error.message);
            });
    };

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
                    <Lottie className='w-96' animationData={registerLottie}></Lottie>
                </div>
                <div className="card bg-base-100 mt-16 w-full max-w-xl shrink-0 shadow-2xl">
                    <h1 className="mx-auto text-5xl font-bold">Register now!</h1>
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
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Register;
