import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import moment from 'moment';

const MyOrder = () => {
    const { user } = useAuth();
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        // Fetch orders only when user is available
        if (user?.email) {
            axios
                .get(`http://localhost:5000/food-purchase?email=${user.email}`)
                .then(res => {
                    setFoods(res.data);
                    setLoading(false); // Stop loading after fetching data
                })
                .catch(err => {
                    console.error("Error fetching orders:", err);
                    setLoading(false); // Stop loading even if there's an error
                });
        } else {
            setLoading(false); // Stop loading if user is not defined
        }
    }, [user?.email]);

    if (loading) {
        return (
            <span className="loading loading-spinner loading-lg"></span>
        );
    }

    return (
        <div className="max-w-6xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6">My Orders: {foods.length}</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">#</th>
                            <th className="border border-gray-300 px-4 py-2">Food Info</th>
                            <th className="border border-gray-300 px-4 py-2">Price</th>
                            <th className="border border-gray-300 px-4 py-2">Buyer</th>
                            <th className="border border-gray-300 px-4 py-2">Buying Date</th>
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
                                <td className="border border-gray-300 px-4 py-2 text-center">${food.price.toFixed(2)}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    {food.buyerName}
                                    <br />
                                    <span className="text-sm text-gray-500">{food.buyerEmail}</span>
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    {moment(food.buyingDate).format("MMMM Do YYYY, h:mm:ss a")}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <button
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

export default MyOrder;
