import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const { _id, foodName, foodImage, foodCategory, price, quantity, foodOrigin, description, purchaseCount } = useLoaderData();
    console.log(foodName, foodImage, foodCategory, price);

    return (
        <div>
            <div className="card bg-base-200 w-4/6 mx-auto shadow-xl">
                <figure>
                    <img
                        className='p-2 rounded-xl'
                        src={foodImage}
                        alt={foodName} />
                </figure>
                <div className="card-body">
                    <h2 className="text-4xl font-bold text-gray-500 mx-auto">
                        {foodName}
                    </h2>
                    <div className='p-4 '>
                        <p><strong>Food Category:</strong> {foodCategory}</p>
                        <p className='flex items-center'>
                            <strong>Food Price:</strong> <FaDollarSign />{price}</p>
                        <p><strong>Available:</strong> {quantity}</p>
                        <p><strong>Total Sold:</strong> {purchaseCount || 0}</p>
                        <p><strong>Food Origin:</strong> {foodOrigin}</p>
                        <p><strong>Description:</strong> {description}</p>
                    </div>
                    <div className="card-actions mx-4">
                        <Link to={'/'}>
                            <button className="btn btn-neutral w-full mr-6">Go Home</button>
                        </Link>
                        <Link to={`/foodPurchase/${_id}`}>
                            <button className="btn btn-neutral">Purchase Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;