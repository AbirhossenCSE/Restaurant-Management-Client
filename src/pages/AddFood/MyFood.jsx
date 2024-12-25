import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyFood = () => {
    const { user } = useAuth();
    const [foods, setFoods] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch all foods added by the current user based on email
        axios
            .get(`http://localhost:5000/myFood?email=${user?.email}`)
            .then((response) => {
                setFoods(response.data);
            })
            .catch((error) => {
                console.error('Error fetching foods:', error);
            });
    }, [user?.email]);

    const handleUpdate = (foodId) => {
        // Redirect to the update page
        navigate(`/update-food/${foodId}`);
    };

    const handleDelete = (foodId) => {
        if (window.confirm('Are you sure you want to delete this food item?')) {
            axios
                .delete(`http://localhost:5000/foods/${foodId}`)
                .then(() => {
                    setFoods(foods.filter((food) => food._id !== foodId));
                    alert('Food item deleted successfully.');
                })
                .catch((error) => {
                    console.error('Error deleting food:', error);
                    alert('Failed to delete food item.');
                });
        }
    };

    return (
        <div className="max-w-6xl mx-auto m-10">
            <h2 className="text-2xl font-bold mb-6">My Foods</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">#</th>
                            <th className="border border-gray-300 px-4 py-2">Food Info</th>
                            <th className="border border-gray-300 px-4 py-2">Price</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foods.map((food, index) => (
                            <tr key={food._id}>
                                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <div className="flex items-center">
                                        <img
                                            src={food.foodImage || "https://via.placeholder.com/50"}
                                            alt={food.foodName}
                                            className="w-12 h-12 rounded mr-4"
                                        />
                                        <div>
                                            <p className="font-semibold">{food.foodName}</p>
                                            <p className="text-sm text-gray-500">{food.foodCategory}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">${food.price}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <button
                                        onClick={() => handleUpdate(food._id)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(food._id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFood;
