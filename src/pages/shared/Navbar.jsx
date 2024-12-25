import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaMoon, FaRegUser } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';

const Navbar = () => {
    const { user, signOutUser } = useAuth();
    // Default theme
    const [theme, setTheme] = useState('light');

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('successful');
            })
            .catch(error => {
                console.log('Failed');
            })
    }

    // Toggle theme function
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/gallery'>Gallery</NavLink></li>
        <li><NavLink to='/allFoods'>All Foods</NavLink></li>
        {user && (
            <>
                <li><NavLink to="/my-order">My Order</NavLink></li>
                <li><NavLink to="/addFoods">Add Food</NavLink></li>
                <li><NavLink to="/myFoods">My Foods</NavLink></li>

            </>
        )}

    </>
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">My Restaurant </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-4">
                <div className="relative group w-8 h-8 mr-5">
                    {user?.email ? (
                        <div className="flex flex-col items-center">
                            <img
                                className="w-8 h-8 rounded-full cursor-pointer"
                                src={user?.photoURL || 'https://via.placeholder.com/150'}
                                alt={user?.displayName || 'User Profile'}
                            />
                            <p className="absolute left-[-104px] bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {user?.displayName || 'Anonymous User'}
                            </p>
                        </div>
                    ) : (
                        <FaRegUser />
                    )}
                </div>
                {
                    user ? <>
                        <button onClick={handleSignOut} className='btn'>Sign Out</button>
                    </> : <>
                        <Link to='/register' className='mr-2'>Register</Link>
                        <Link to='/signin'>Sign-In</Link>
                    </>
                }
                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="btn btn-ghost"
                    title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                    {theme === 'light' ? <FaMoon /> : <FiSun />}
                </button>
            </div>
        </div>
    );
};

export default Navbar;