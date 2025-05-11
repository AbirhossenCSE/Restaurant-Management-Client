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
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            {/* Image with price badge */}
            <div className="relative">
                <img
                    src={foodImage}
                    alt={foodName}
                    className="w-full h-56 object-cover"
                />
                <div className="absolute top-3 right-3 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded shadow">
                    ${parseFloat(price).toFixed(2)}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-2">
                <h3 className="text-xl font-bold text-gray-800">{foodName}</h3>

                <div className="flex items-center text-sm text-gray-500 gap-2">
                    <span>{foodCategory}</span>
                    <span className="text-gray-400">|</span>
                    <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-gray-400" />
                        {foodOrigin}
                    </span>
                </div>

                <p className="text-gray-600 text-sm mt-1">
                    {description.length > 100 ? description.slice(0, 100) + '...' : description}
                </p>

                <div className="flex justify-between items-center pt-3">
                    <p className="text-sm text-gray-500">
                        Sales: <span className="font-medium text-gray-700">{purchaseCount || 0}</span>
                    </p>
                    <Link to={`/foods/${_id}`}>
                        <button className="bg-neutral text-white px-4 py-2 text-sm rounded hover:bg-neutral-focus transition">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BestFoodCard;
