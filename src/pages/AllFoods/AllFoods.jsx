import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllFoodCard from './AllFoodCard';
import { motion } from 'framer-motion';

const AllFoods = () => {
    const [foods, setFoods] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://restaurant-management-server-rho.vercel.app/foods')
            .then(res => {
                setFoods(res.data);
                setLoading(false);
            });
    }, []);

    // Filter foods based on search query
    const filteredFoods = foods.filter(food =>
        food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='bg-base-200 rounded-lg p-4'>
            <motion.h2
                className="text-3xl text-center font-bold p-12"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                All Food Items
            </motion.h2>
            <div className='flex justify-center mb-6'>
                <input
                    type="text"
                    placeholder="Search food by name"
                    className="input input-bordered w-full max-w-md"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </div>
            {
                loading ? (<div className="flex justify-center items-center h-64">
                    <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-gray-500"></div>
                </div>) : (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {filteredFoods.map(food => (
                        <AllFoodCard key={food._id} food={food}></AllFoodCard>
                    ))}
                </div>)
            }

        </div>
    );
};

export default AllFoods;
