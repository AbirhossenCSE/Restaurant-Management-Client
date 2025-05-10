import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const UpdateFood = () => {
    const food = useLoaderData();
    const navigate = useNavigate();
    const { _id, foodName, foodImage, foodCategory, price, quantity, foodOrigin, description } = food;

    const [formData, setFormData] = useState({
        foodName,
        foodImage,
        foodCategory,
        price,
        quantity,
        foodOrigin,
        description,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        axios
            .put(`https://restaurant-management-server-rho.vercel.app/foods/${_id}`, formData)
            .then(() => {
                Swal.fire(
                    'Updated!',
                    'The food item has been updated successfully.',
                    'success'
                );
                navigate('/myFoods'); // Redirect to "My Food" page
            })
            .catch((error) => {
                console.error('Error updating food:', error);
                Swal.fire(
                    'Error!',
                    'Failed to update the food item.',
                    'error'
                );
            });
    };

    return (
        <div className="max-w-4xl mx-auto bg-base-100 p-6 ">
            <h2 className="text-3xl mt-20 text-center text-gray-600 font-bold mb-6">Update Food: {foodName}</h2>
            <form onSubmit={handleUpdate} className="space-y-6">
                <div>
                    <label className="block font-medium mb-2">Food Name</label>
                    <input
                        type="text"
                        name="foodName"
                        value={formData.foodName}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-2">Food Image URL</label>
                    <input
                        type="url"
                        name="foodImage"
                        value={formData.foodImage}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-2">Food Category</label>
                    <input
                        type="text"
                        name="foodCategory"
                        value={formData.foodCategory}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-2">Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-2">Price</label>
                    <input
                        type="number"
                        step="0.01"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-2">Food Origin (Country)</label>
                    <input
                        type="text"
                        name="foodOrigin"
                        value={formData.foodOrigin}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-2">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border rounded px-4 py-2"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className=" w-full bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                    >
                        Update Food
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateFood;
