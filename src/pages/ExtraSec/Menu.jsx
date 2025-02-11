import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await axios.get('https://restaurant-management-server-rho.vercel.app/foods');
                setMenuItems(response.data);
            } catch (err) {
                setError('Failed to fetch menu items.');
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    if (loading) return <div><span className="loading loading-spinner loading-lg"></span></div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container w-8/12 mx-auto p-4">
            <motion.h2
                className="text-3xl text-center mt-5 font-bold p-12"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                Our Menu
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {menuItems.map((item) => (
                    <div key={item._id} className="bg-white shadow-lg rounded-lg p-4 transition-all duration-300 hover:scale-110 hover:bg-gray-300 hover:text-black">
                        <div className='flex items-center gap-2 p-2'>
                            <img className='w-10 h-10' src={item.foodImage} alt="" />
                            <h3 className="text-2xl font-bold">{item.foodName}</h3>
                        </div>
                        <p className="p-2">{item.description}</p>
                        <div className="flex justify-between p-2 items-center mt-4">
                            <span className="text-lg font-semibold">Price: ${item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
