import React from 'react';
import { Link } from 'react-router-dom';

const AllFoodCard = ({ food }) => {
    const { _id, foodName, foodImage, foodCategory, price, quantity, foodOrigin, description } = food;

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
                <div className="">
                    <Link to={`/foods/${_id}`}>
                        <button className="btn bg-[#cacfd2] w-full text-green-700 ">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllFoodCard;