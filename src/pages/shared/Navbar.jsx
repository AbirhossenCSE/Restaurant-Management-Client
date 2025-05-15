import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaMoon, FaRegUser } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';

const Navbar = () => {
    const { user, signOutUser } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser()
            .then(() => console.log('Sign out successful'))
            .catch(() => console.log('Sign out failed'));
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    const links = (
        <>
            <li><NavLink to='/' onClick={handleMobileLinkClick}>Home</NavLink></li>
            <li><NavLink to='/menu' onClick={handleMobileLinkClick}>Menu</NavLink></li>
            <li><NavLink to='/allFoods' onClick={handleMobileLinkClick}>All Foods</NavLink></li>
            <li><NavLink to='/gallery' onClick={handleMobileLinkClick}>Gallery</NavLink></li>
            <li><NavLink to='/contact' onClick={handleMobileLinkClick}>Contact Us</NavLink></li>
            {user && (
                <>
                    <li><NavLink to='/addFoods' onClick={handleMobileLinkClick}>Add Foods</NavLink></li>
                    <li><NavLink to='/profile' onClick={handleMobileLinkClick}>Profile</NavLink></li>
                </>
            )}
        </>
    );

    return (
        <div className="bg-base-300 bg-opacity-90 fixed top-0 left-0 right-0 z-50 shadow">
            <div className="navbar max-w-7xl mx-auto lg:px-10">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        {isMobileMenuOpen && (
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {links}
                            </ul>
                        )}
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                        <img className="w-9 h-9 rounded-full hidden md:flex" src="https://i.ibb.co.com/K0n3nVX/Foodlogo.jpg" alt="logo" />
                        <span className="font-bold text-xl">Food Planet</span>
                    </div>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end flex items-center gap-2">
                    {user ? (
                        <div className="relative">
                            <img
                                onClick={toggleDropdown}
                                className="w-8 h-8 rounded-full cursor-pointer"
                                src={user?.photoURL || 'https://via.placeholder.com/150'}
                                alt={user?.displayName || 'User'}
                            />
                            {isDropdownOpen && (
                                <ul className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow z-50">
                                    <li>
                                        <NavLink
                                            to="/myFoods"
                                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            My Foods
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/addFoods"
                                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            Add Food
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/my-order"
                                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            My Orders
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </div>
                    ) : (
                        <FaRegUser className="w-6 h-6 text-gray-600" />
                    )}

                    {user ? (
                        <button onClick={handleSignOut} className="btn btn-sm btn-outline">
                            Sign Out
                        </button>
                    ) : (
                        <Link to="/signin" className="btn btn-sm btn-outline">
                            Sign In
                        </Link>
                    )}

                    <button
                        onClick={toggleTheme}
                        className="btn btn-ghost btn-sm"
                        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        {theme === 'light' ? <FaMoon /> : <FiSun />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
