import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://restaurant-management-server-rho.vercel.app/contact', formData);
            Swal.fire({
                title: 'Message Sent!',
                text: response.data.message,
                icon: 'success',
                confirmButtonText: 'Okay',
            });
            setFormData({ name: '', email: '', message: '' }); 
        } catch (error) {
            Swal.fire({
                title: 'Oops!',
                text: 'Something went wrong. Please try again.',
                icon: 'error',
                confirmButtonText: 'Try Again',
            });
        }
    };

    return (
        <div className="container max-w-6xl mx-auto p-4">
            <motion.h2
                className="text-4xl text-center font-bold mt-24 mb-12"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                Contact Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left side - Contact Form */}
                <div className="p-4">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            rows="6"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Right side - Address */}
                <div className="p-10 bg-base-100 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4">Our Address</h3>
                    <p className="text-lg mb-4">
                        1234 Restaurant Street, <br />
                        Mirpur-1, Dhaka, Bangladesh
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                        <FaPhone />
                        <span className="text-lg"> +880123456789</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <HiOutlineMail className='w-5 h-5' />
                        <span className="text-lg">contact@restaurant.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
