import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BestFoodCard from './BestFoodCard';
import { Link } from 'react-router-dom';

const BestFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('https://restaurant-management-server-rho.vercel.app/foods-six')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
            });
    }, []);

    return (
        <div className="w-11/12 mx-auto">
            <motion.h2
                className="text-center text-3xl font-bold text-gray-500 m-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                Top Sales Food Items
            </motion.h2>

            {/* Food Cards */}
            <div className="bg-base-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-12">
                {foods.map(food => (
                    <BestFoodCard key={food._id} food={food}></BestFoodCard>
                ))}
            </div>

            {/* See All Foods Button */}
            <div className="flex justify-center">
                <Link to={'/allFoods'} className="btn m-10 bg-green-300">
                    See All Foods
                </Link>
            </div>
        </div>
    );
};

export default BestFoods;
