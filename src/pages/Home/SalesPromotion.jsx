import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SalesPromotion = () => {
    const [discountFoods, setDiscountFoods] = useState([]);
    const [loading, setLoading] = useState(true);


    // Discount rate, e.g., 20%
    const discountRate = 0.20;

    useEffect(() => {
        axios.get('https://restaurant-management-server-rho.vercel.app/foods')
            .then(res => {

                const foods = res.data.slice(0, 3);

                const discounted = foods.map(food => {
                    const originalPrice = parseFloat(food.price);
                    const discountedPrice = (originalPrice * (1 - discountRate)).toFixed(2);
                    return { ...food, discountedPrice };
                });
                setDiscountFoods(discounted);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching foods:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-gray-500"></div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl rounded-lg mx-auto py-10 px-4">
            <motion.h2
                className="text-center text-3xl font-bold text-gray-500 m-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                Our Offer
            </motion.h2>

            <motion.p
                className="text-center text-lg text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Enjoy exclusive deals on our top products – now at a special discount!
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {discountFoods.map(food => (
                    <motion.div
                        key={food._id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={food.foodImage}
                            alt={food.foodName}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold mb-2">{food.foodName}</h2>
                            <p className="text-gray-600 mb-2">{food.foodCategory}</p>
                            <p className="text-lg font-bold text-green-600">Now: ${food.discountedPrice}</p>
                            <p className="text-sm text-gray-500 line-through">Was: ${food.price}</p>

                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SalesPromotion;
