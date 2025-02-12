import React from 'react';
import { Link } from 'react-router-dom';

const AllFoodCard = ({ food }) => {
    const { _id, foodName, foodImage, foodCategory, price, quantity, foodOrigin, description, purchaseCount } = food;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    className='w-11/12 h-72 p-2 rounded-xl'
                    src={foodImage}
                    alt={foodName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{foodName}</h2>
                <p><strong>Price:</strong> {price} </p>
                <p><strong>Category:</strong> {foodCategory} </p>
                <p><strong>Food Origin:</strong> {foodOrigin} </p>
                <p><strong>Total Order:</strong> {purchaseCount || 0} </p>
                <div className="">
                    <Link to={`/foods/${_id}`}>
                        <button className="btn bg-gray-400 w-full text-white ">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllFoodCard;