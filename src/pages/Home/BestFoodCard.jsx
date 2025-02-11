import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BestFoodCard = ({ food }) => {

    const { _id, foodName, foodImage, foodCategory, price, quantity, foodOrigin, description, purchaseCount } = food;

    return (
        <div className="card card-compact bg-base-200 p-2 shadow-xl">
            <figure>
                <img
                    className='w-10/12 h-72 mt-2 rounded-xl transition-transform duration-300 hover:scale-110'
                    src={foodImage}
                    alt={foodName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title ml-2 font-bold">{foodName}</h2>
                <p className='mb-1 ml-2'><strong>Price:</strong> {price} </p>
                <p className='mb-1 ml-2'><strong>Category:</strong> {foodCategory} </p>
                <p className='mb-1 ml-2'><strong>Food Origin:</strong> {foodOrigin} </p>
                <p className='mb-1 ml-2'><strong>Total Sales:</strong> {purchaseCount || 0} </p>
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