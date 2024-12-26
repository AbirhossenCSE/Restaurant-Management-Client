import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { MdDelete } from 'react-icons/md';
import { motion } from 'framer-motion';

const MyFood = () => {
    const { user } = useAuth();
    const [foods, setFoods] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch all foods added by the current user based on email
        axios
            .get(`https://restaurant-management-server-rho.vercel.app/myFood?email=${user?.email}`)
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
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`https://restaurant-management-server-rho.vercel.app/foods/${foodId}`)
                    .then(() => {
                        setFoods(foods.filter((food) => food._id !== foodId));
                        Swal.fire(
                            'Deleted!',
                            'Your food item has been deleted.',
                            'success'
                        );
                    })
                    .catch((error) => {
                        console.error('Error deleting food:', error);
                        Swal.fire(
                            'Error!',
                            'Failed to delete the food item.',
                            'error'
                        );
                    });
            }
        });
    };




    return (
        <div className="max-w-6xl mx-auto m-10">
            {
                foods.length === 0 ? (
                    <p className='text-4xl font-bold text-center text-red-600 m-32'>No Food Added By You</p>
                ) : (
                    <div className="overflow-x-auto">
                        <motion.h2
                            className="text-3xl text-center text-gray-600 font-bold mb-6"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        >
                            My Foods
                        </motion.h2>
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
                                        <td className="flex border border-gray-300 px-2 py-2 text-center">

                                            <div className='w-1/2'>
                                                <Link to={`/update-food/${food._id}`}>
                                                    <button className="btn join-item w-full bg-gray-600 text-white">Update</button>
                                                </Link>
                                            </div>
                                            <div className='w-1/2'>
                                                <button
                                                    onClick={() => handleDelete(food._id)}
                                                    className="btn join-item w-full bg-gray-600 text-white"
                                                >
                                                    <MdDelete />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    );
};

export default MyFood;
