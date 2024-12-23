import React, { useEffect, useState } from 'react';
import BestFoodCard from './BestFoodCard';

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
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    foods.map(food => <BestFoodCard key={food._id} food={food}></BestFoodCard>)
                }
            </div>
        </div>
    );
};

export default BestFoods;