import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BestFoodCard from './BestFoodCard';
import { Link } from 'react-router-dom';

const BestFoods = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch('https://restaurant-management-server-rho.vercel.app/foods-six')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
                setLoading(false); 
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <motion.h2
                className="text-center text-3xl font-bold text-gray-500 m-4 py-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                Top Sales Food Items
            </motion.h2>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-gray-500"></div>
                </div>
            ) : (
                <>
                    {/* Food Cards */}
                    <div className="bg-base-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {foods.map(food => (
                            <BestFoodCard key={food._id} food={food}></BestFoodCard>
                        ))}
                    </div>

                    {/* See All Foods Button */}
                    <div className="flex justify-center">
                        <Link to={'/allFoods'} className="btn m-10 bg-gray-400 text-white">
                            See All Foods
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default BestFoods;
