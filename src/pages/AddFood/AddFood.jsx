import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const AddFood = () => {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        foodName: '',
        foodImage: '',
        foodCategory: '',
        quantity: '',
        price: '',
        foodOrigin: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add logged-in user's name and email to the form data
        const dataToSubmit = {
            ...formData,
            addBy: {
                name: user.displayName,
                email: user.email,
            },
        };

        // Post data to the server
        axios
            .post('https://restaurant-management-server-rho.vercel.app/foods', dataToSubmit)
            .then((res) => {
                if (res.status === 201) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Food Added Successfully',
                        text: `${formData.foodName} has been added to the database!`,
                    });
                    setFormData({
                        foodName: '',
                        foodImage: '',
                        foodCategory: '',
                        quantity: '',
                        price: '',
                        foodOrigin: '',
                        description: '',
                    });
                }
            })
            .catch((err) => {
                console.error('Error adding food:', err);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to add the food item. Please try again.',
                });
            });
    };

    return (
        <div className="max-w-4xl mx-auto mt-5 mb-10 p-6 bg-gray-100 rounded shadow">
            <motion.h2
                className="text-3xl text-center text-gray-600 font-bold mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                Add New Food Item
            </motion.h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label className="block font-medium mb-1">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            value={formData.foodName}
                            placeholder='Food Name'
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Food Image (URL)</label>
                        <input
                            type="text"
                            name="foodImage"
                            value={formData.foodImage}
                            placeholder='Image URL'
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Food Category</label>
                        <input
                            type="text"
                            name="foodCategory"
                            value={formData.foodCategory}
                            placeholder='Food Category'
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            placeholder='Quantity of food'
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Price ($)</label>
                        <input
                            type="number"
                            step="0.01"
                            name="price"
                            value={formData.price}
                            placeholder='Price'
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Food Origin (Country)</label>
                        <input
                            type="text"
                            name="foodOrigin"
                            value={formData.foodOrigin}
                            placeholder='Food Origin'
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            placeholder='Write Description'
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                    Add Food Item
                </button>
            </form>
        </div>
    );
};

export default AddFood;

