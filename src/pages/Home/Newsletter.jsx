import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(
                'https://restaurant-management-server-rho.vercel.app/newsletter',
                { email }
            );
            Swal.fire({
                icon: 'success',
                title: 'Subscribed!',
                text: 'Thank you for subscribing to our newsletter.',
                toast: true,
                position: 'top-end',
                timer: 3000,
                showConfirmButton: false,
            });
            setEmail('');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Subscription Failed',
                text: error.response?.data?.message || 'Please try again later.',
                toast: true,
                position: 'top-end',
                timer: 3000,
                showConfirmButton: false,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="max-w-full bg-base-200 mx-auto py-16 px-4 rounded-lg shadow-md text-center">
                <motion.h2
                    className="text-center text-3xl font-bold m-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                >
                    Subscribe to Our Newsletter
                </motion.h2>

                <p className="mb-8">
                    Stay updated with the latest news, exclusive offers, and upcoming events from Food Planet Restaurant.
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="input input-bordered w-full max-w-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Subscribing...' : 'Subscribe Now'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
