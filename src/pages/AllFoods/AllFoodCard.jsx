import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllFoodCard = ({ food }) => {
    const { _id, foodName, foodImage, foodCategory, price, foodOrigin, description, purchaseCount } = food;

    return (
        <div className="card bg-gray-200 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <figure className="relative">
                <img
                    src={foodImage}
                    alt={foodName}
                    className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded">
                    ${parseFloat(price).toFixed(2)}
                </div>
            </figure>

            {/* Card Content */}
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{foodName}</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <span>{foodCategory}</span>
                    <span className="text-gray-400">|</span>
                    <span className="flex items-center">
                        <FaMapMarkerAlt className="mr-1" /> {foodOrigin}
                    </span>
                </div>
                <p className="text-gray-700 text-sm mb-2">
                    {description.length > 100 ? description.slice(0, 100) + '...' : description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>
                        Total Order: <span className="font-semibold text-gray-800">{purchaseCount || 0}</span>
                    </span>
                    <Link to={`/foods/${_id}`} className="btn btn-neutral btn-sm">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllFoodCard;
