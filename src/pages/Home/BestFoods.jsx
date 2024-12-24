import React, { useEffect, useState } from 'react';
import BestFoodCard from './BestFoodCard';
import { Link } from 'react-router-dom';

const BestFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
            })
    }, [])

    return (
        <div className='w-11/12 mx-auto'>
            <div className='bg-base-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-12'>
                {
                    foods.map(food => <BestFoodCard key={food._id} food={food}></BestFoodCard>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to={'/allFoods'} className='btn m-10 bg-green-300'>See All Foods</Link>
            </div>
        </div>
    );
};

export default BestFoods;