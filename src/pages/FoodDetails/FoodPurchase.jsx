import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const FoodPurchase = () => {
    const { _id, foodName, price, quantity: initialQuantity } = useLoaderData();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(initialQuantity);

    const handlePurchase = (e) => {
        e.preventDefault();

        const purchaseQuantity = parseInt(e.target.quantity.value, 10);

        if (purchaseQuantity > quantity) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Quantity',
                text: 'You cannot purchase more than the available stock.',
                position: 'top-end',
                timer: 2000,
                showConfirmButton: false,
                toast: true,
            });
            return;
        }

        const purchaseData = {
            foodId: _id,
            foodName,
            price,
            quantity: purchaseQuantity,
            buyerName: user.displayName,
            buyerEmail: user.email,
            buyingDate: new Date(),
        };

        axios
            .post('https://restaurant-management-server-rho.vercel.app/food-purchase', purchaseData)
            .then((res) => {
                if (res.data.success) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Order Confirmed',
                        showConfirmButton: false,
                        timer: 1500,
                    });

                    setQuantity((prev) => prev - purchaseQuantity);
                    navigate('/my-order');
                }
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Purchase Failed',
                    text: err.response?.data?.message || 'Something went wrong.',
                    position: 'top-end',
                    timer: 2000,
                    showConfirmButton: false,
                    toast: true,
                });
            });
    };

    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center py-20 px-4">
            <div className="bg-white w-full max-w-lg p-8 rounded-xl shadow-xl">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Purchase Food</h2>
                <form onSubmit={handlePurchase} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Food Name</label>
                        <input
                            type="text"
                            value={foodName}
                            readOnly
                            className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded border border-gray-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Price</label>
                        <input
                            type="text"
                            value={`$${price}`}
                            readOnly
                            className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded border border-gray-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Available Quantity</label>
                        <span className={`font-semibold ${quantity === 0 ? 'text-red-500' : 'text-green-600'}`}>
                            {quantity > 0 ? quantity : 'Stock Out'}
                        </span>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Purchase Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            defaultValue={1}
                            min={1}
                            max={quantity}
                            disabled={quantity === 0}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={quantity === 0}
                        className={`w-full py-3 rounded font-semibold text-white transition-colors duration-300 ${
                            quantity === 0
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    >
                        {quantity === 0 ? 'Stock Out' : 'Confirm Purchase'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FoodPurchase;
