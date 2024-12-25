import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaMoon, FaRegUser } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';

const Navbar = () => {
    const { user, signOutUser } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [theme, setTheme] = useState('light'); // Default theme

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('Sign out successful');
            })
            .catch(() => {
                console.log('Sign out failed');
            });
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const links = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/gallery'>Gallery</NavLink></li>
            <li><NavLink to='/allFoods'>All Foods</NavLink></li>
        </>
    );

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
                <a className="btn btn-ghost text-xl">My Restaurant</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-2">
                {/* User Profile Dropdown */}
                {user ? (
                    <div className="relative">
                        <img
                            onClick={toggleDropdown}
                            className="w-8 h-8 rounded-full cursor-pointer"
                            src={user?.photoURL || 'https://via.placeholder.com/150'}
                            alt={user?.displayName || 'User Profile'}
                        />
                        {isDropdownOpen && (
                            <ul className="absolute -right-24 mt-4 w-48 bg-base-300 rounded-lg shadow-lg z-50">
                                <li>
                                    <NavLink
                                        to="/myFoods"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        My Foods
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/addFoods"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Add Food
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/my-order"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        My Orders
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>
                ) : (
                    <FaRegUser className="w-6 h-6 mr-2 text-gray-600" />
                )}

                {user ? (
                    <button onClick={handleSignOut} className="btn">
                        Sign Out
                    </button>
                ) : (
                    <>
                        <Link to='/register' className='mr-2'>Register</Link>
                        <Link to='/signin'>Sign-In</Link>
                    </>
                )}

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
