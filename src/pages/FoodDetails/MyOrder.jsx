import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import moment from 'moment';
import Swal from 'sweetalert2';
import { AiFillDelete } from 'react-icons/ai';
import { motion } from 'framer-motion';

const MyOrder = () => {
    const { user } = useAuth();
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get(`https://restaurant-management-server-rho.vercel.app/food-purchase?email=${user?.email}`)
            .then(res => {
                setFoods(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching orders:", err);
                setLoading(false);
            });
    }, [user.email]);

    const handleDelete = (orderId) => {
        Swal.fire({
            position: "top-end",
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`https://restaurant-management-server-rho.vercel.app/food-purchase/${orderId}`)
                    .then(() => {
                        setFoods(foods.filter((food) => food._id !== orderId));
                        Swal.fire({
                            position: "top-end",
                            title: "Deleted!",
                            text: "Your order has been deleted.",
                            icon: "success",
                            timer: 1500
                        });
                    });
            }
        });
    };

    return (
        <div className="max-w-6xl mx-auto">
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            ) : foods.length === 0 ? (
                <div className="flex justify-center items-center h-[80vh]">
                    <p className="text-4xl font-bold text-red-600">No Order Yet</p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <motion.h2
                        className="text-3xl text-center text-gray-600 font-bold mb-6 mt-20"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    >
                        You have Ordered {foods.length} food items
                    </motion.h2>

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
                                                src={food?.foodImage}
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
                                        {food.buyerName}
                                        <br />
                                        <span className="text-sm text-gray-500">{food.buyerEmail}</span>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {moment(food.buyingDate).format("MMMM Do YYYY, h:mm a")}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <button
                                            onClick={() => handleDelete(food._id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                        >
                                            <AiFillDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyOrder;
