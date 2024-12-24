import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const FoodPurchase = () => {
    const { _id, foodName, price, quantity } = useLoaderData();
    const { user } = useAuth();

    const handlePurchase = (e) => {
        e.preventDefault();
        const purchaseData = {
            foodId: _id,
            foodName,
            price,
            quantity: e.target.quantity.value,
            buyerName: user.displayName,
            buyerEmail: user.email,
            buyingDate: Date.now()
        };
        console.log("Purchase Data:", purchaseData);

        axios.post('http://localhost:5000/food-purchase', purchaseData )
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Order Conformed",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // navigate('/')
                }
            })
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl text-center font-bold mb-6">Purchase Food</h2>
            <form onSubmit={handlePurchase}>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Food Name</label>
                    <input
                        type="text"
                        value={foodName}
                        readOnly
                        className="w-full px-3 py-2 border rounded bg-gray-100"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Price</label>
                    <input
                        type="text"
                        value={`$${price}`}
                        readOnly
                        className="w-full px-3 py-2 border rounded bg-gray-100"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        defaultValue={1}
                        min={1}
                        max={quantity}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Buyer Name</label>
                    <input
                        type="text"
                        value={user.displayName}
                        readOnly
                        className="w-full px-3 py-2 border rounded bg-gray-100"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Buyer Email</label>
                    <input
                        type="email"
                        value={user.email}
                        readOnly
                        className="w-full px-3 py-2 border rounded bg-gray-100"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                >
                    Purchase
                </button>
            </form>
        </div>
    );
};

export default FoodPurchase;
