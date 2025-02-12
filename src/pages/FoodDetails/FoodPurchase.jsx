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
                icon: "error",
                title: "Invalid Quantity",
                text: "You cannot purchase more than the available stock.",
                position: "top-end",
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

        axios.post('https://restaurant-management-server-rho.vercel.app/food-purchase', purchaseData)
            .then(res => {
                if (res.data.success) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Order Confirmed",
                        showConfirmButton: false,
                        timer: 1500,
                    });

                    // Update the quantity state
                    setQuantity(prevQuantity => prevQuantity - purchaseQuantity);

                    navigate('/my-order');
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Purchase Failed",
                    text: err.response?.data?.message || "Something went wrong.",
                    position: "top-end",
                    timer: 2000,
                    showConfirmButton: false,
                    toast: true,
                });
            });
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl mt-20 text-center font-bold mb-6">Purchase Food</h2>
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
                    <label className="block font-semibold mb-2">Available Quantity</label>
                    <p className={`font-semibold ${quantity === 0 ? "text-red-500" : ""}`}>
                        {quantity > 0 ? quantity : "Stock Out"}
                    </p>
                </div>
                <div className="mb-4">
                    <label className="block font-semibold mb-2">Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        defaultValue={1}
                        min={1}
                        max={quantity}
                        disabled={quantity === 0}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                    disabled={quantity === 0}
                >
                    {quantity === 0 ? "Stock Out" : "Purchase"}
                </button>
            </form>
        </div>
    );
};

export default FoodPurchase;
