import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BestFoodCard = ({ food }) => {

    const { _id, foodName, foodImage, foodCategory, price, quantity, foodOrigin, description, purchaseCount } = food;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
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
                        <button className="btn bg-[#cacfd2] w-full">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BestFoodCard;