import { div } from 'framer-motion/client';
import React from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer bg-base-300 p-10">
            <aside className='ml-24'>
                <img className='w-24 h-16 md:mx-auto' src="https://i.ibb.co/K0n3nVX/Foodlogo.jpg" alt="Food Planet Logo" />
                <p className="font-bold text-lg">
                    Food Planet Restaurant
                </p>
                <p>Deliciousness Delivered since 2020</p>
            </aside>
            <nav className=''>
                <h6 className="footer-title">Menu</h6>
                <li><NavLink to='/menu'>Menu</NavLink></li>
                <li><NavLink to='/contact'>Contact Us</NavLink></li>
            </nav>
            <nav>
                <h6 className="footer-title">Social Media</h6>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center gap-2">
                    <FaFacebook className="text-blue-600" size={20} /> Facebook
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center gap-2">
                    <FaYoutube className="text-red-600" size={20} /> YouTube
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
