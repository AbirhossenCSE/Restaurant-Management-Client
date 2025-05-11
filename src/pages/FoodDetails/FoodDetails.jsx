import React from 'react';
import { FaDollarSign, FaUtensils, FaShoppingCart, FaGlobeAsia, FaBoxOpen, FaTags } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const {
        _id,
        foodName,
        foodImage,
        foodCategory,
        price,
        quantity,
        foodOrigin,
        description,
        purchaseCount
    } = useLoaderData();

    return (
        <div className="bg-base-100 py-32 px-4">
            <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col lg:flex-row">
                {/* Food Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={foodImage}
                        alt={foodName}
                        className="w-full h-full object-cover lg:rounded-l-xl"
                    />
                </div>

                {/* Details Section */}
                <div className="w-full lg:w-1/2 p-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{foodName}</h2>
                    <p className="text-gray-600 mb-6">{description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm md:text-base">
                        <p className="flex items-center gap-2">
                            <FaUtensils className="text-orange-500" /> <span className="font-semibold">Category:</span> {foodCategory}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaDollarSign className="text-green-500" /> <span className="font-semibold">Price:</span> ${price}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaBoxOpen className="text-blue-500" /> <span className="font-semibold">Available:</span> {quantity}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaShoppingCart className="text-purple-500" /> <span className="font-semibold">Sold:</span> {purchaseCount || 0}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaGlobeAsia className="text-yellow-600" /> <span className="font-semibold">Origin:</span> {foodOrigin}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Link to="/" className="w-full sm:w-1/2">
                            <button className="btn w-full btn-outline btn-neutral">Back to Home</button>
                        </Link>
                        <Link to={`/foodPurchase/${_id}`} className="w-full sm:w-1/2">
                            <button className="btn w-full btn-primary">Purchase Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
