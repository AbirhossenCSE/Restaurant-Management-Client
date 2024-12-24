import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

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
            .post('http://localhost:5000/foods', dataToSubmit)
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
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-6">Add Food</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label className="block font-medium mb-1">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            value={formData.foodName}
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
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default AddFood;

