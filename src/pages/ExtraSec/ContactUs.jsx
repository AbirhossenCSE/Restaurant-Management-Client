import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

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
        <div className="container max-w-4xl mx-auto mb-20 p-4">
            <motion.h2
                className="text-3xl text-center font-bold mt-8 p-12"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                Contact Us
            </motion.h2>
            <div className="md:w-2/3 p-4 mx-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full px-4 py-2 border rounded-lg"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-2 bg-gray-400 text-white rounded-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
