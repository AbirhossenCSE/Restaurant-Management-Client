import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const { _id, foodName, foodImage, foodCategory, price, quantity, foodOrigin, description } = useLoaderData();
    return (
        <div>
            <div className="card bg-base-200 w-4/6 mx-auto my-16 shadow-xl">
                <figure>
                    <img
                        src={foodImage}
                        alt={foodName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto">
                        {foodName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className='p-4 '>
                        <p><strong>Food Category:</strong> {foodCategory}</p>
                        <p className='flex items-center'>
                            <strong>Food Price:</strong> <FaDollarSign />{price}</p>
                        <p><strong>Available:</strong> {quantity}</p>
                        <p><strong>Food Origin:</strong> {foodOrigin}</p>
                        <p><strong>Description:</strong> {description}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/foodPurchase/${_id}`}>
                            <button className="btn btn-primary">Purchase Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;