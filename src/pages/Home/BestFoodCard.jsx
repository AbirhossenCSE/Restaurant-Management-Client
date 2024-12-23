import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BestFoodCard = ({ food }) => {

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
                <p>Price: {price} </p>
                <p>Category: {foodCategory} </p>
                <p>Food Origin: {foodOrigin} </p>
                <div className="card-actions justify-end">
                    <Link to={`/foods/${_id}`}>
                        <button className="btn btn-primary">View More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BestFoodCard;