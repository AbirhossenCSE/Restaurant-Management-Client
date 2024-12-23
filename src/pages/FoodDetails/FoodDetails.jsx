import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const { _id, foodName, foodImage, foodCategory, price, quantity, foodOrigin, description } = useLoaderData();
    return (
        <div>
            <div className="card bg-base-100 w-4/6 mx-auto shadow-xl">
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
                        <p>Food Category: {foodCategory}</p>
                        <p>Food Price: {price}</p>
                        <p>Available: {quantity}</p>
                        <p>Food Origin: {foodOrigin}</p>
                        <p>Description: {description}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;