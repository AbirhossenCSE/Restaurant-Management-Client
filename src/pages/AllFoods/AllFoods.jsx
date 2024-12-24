import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllFoodCard from './AllFoodCard';

const AllFoods = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/foods')
            .then(res => setFoods(res.data))
    }, [])

    return (
        <div className='bg-base-200 rounded-lg p-4'>
            <h2 className='text-3xl text-center font-bold p-12'>All Food Item</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    foods.map(food => <AllFoodCard key={food._id} food={food}></AllFoodCard>)
                }
            </div>
        </div>
    );
};

export default AllFoods;