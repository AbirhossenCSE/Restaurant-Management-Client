import { div } from 'framer-motion/client';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
            <aside className='ml-24'>
                <img className='w-24 h-16 mx-auto' src="https://i.ibb.co/K0n3nVX/Foodlogo.jpg" alt="Food Planet Logo" />
                <p className="font-bold text-lg">
                    Food Planet Restaurant
                </p>
                <p>Deliciousness Delivered since 2020</p>
            </aside>
            <nav className=''>
                <h6 className="footer-title">Menu</h6>
                <a className="link link-hover">Appetizers</a>
                <a className="link link-hover">Main Courses</a>
                <a className="link link-hover">Desserts</a>
                <a className="link link-hover">Beverages</a>
            </nav>
            <nav>
                <h6 className="footer-title">About</h6>
                <a className="link link-hover">Our Story</a>
                <a className="link link-hover">Contact Us</a>
                <a className="link link-hover">Blog</a>
            </nav>
            <nav>
                <h6 className="footer-title">Customer Service</h6>
                <a className="link link-hover">FAQs</a>
                <a className="link link-hover">Delivery Info</a>
                <a className="link link-hover">Return Policy</a>
                <a className="link link-hover">Feedback</a>
            </nav>
        </footer>
    );
};

export default Footer;
