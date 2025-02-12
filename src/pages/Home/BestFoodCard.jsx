import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BestFoodCard = ({ food }) => {
    const {
        _id,
        foodName,
        foodImage,
        foodCategory,
        price,
        quantity,
        foodOrigin,
        description,
        purchaseCount,
    } = food;

    return (
        <div className="card bg-gray-200 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <figure className="relative">
                <img
                    src={foodImage}
                    alt={foodName}
                    className="w-full h-60 object-cover"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    ${parseFloat(price).toFixed(2)}
                </div>
            </figure>

            {/* Card Content */}
            <div className="card-body p-4">
                <h2 className="card-title text-xl font-bold text-gray-800">{foodName}</h2>

                {/* Category and Origin */}
                <div className="flex items-center space-x-2 mt-1">
                    <span className="text-sm text-gray-500">{foodCategory}</span>
                    <span className="text-gray-400">|</span>
                    <span className="flex items-center text-sm text-gray-500">
                        <FaMapMarkerAlt className="mr-1 text-gray-400" /> {foodOrigin}
                    </span>
                </div>

                {/* Description */}
                <p className="mt-2 text-gray-600 text-sm">
                    {description.length > 100 ? description.slice(0, 100) + '...' : description}
                </p>

                {/* Sales and Action */}
                <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                        Total Sales: <span className="font-semibold text-gray-700">{purchaseCount || 0}</span>
                    </div>
                    <Link to={`/foods/${_id}`}>
                        <button className="btn btn-neutral text-sm">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BestFoodCard;
