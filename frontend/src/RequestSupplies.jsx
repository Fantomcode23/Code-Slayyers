import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RequestSupplies = () => {
    const [category, setCategory] = useState('');
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/api/supplies', { category, itemName, quantity }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(response => {
            console.log(response.data);
            navigate('/recipient-dashboard');
        })
        .catch(error => console.error('Error requesting supplies:', error));
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Request Supplies</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="category" className="block text-gray-700">Category</label>
                    <input
                        type="text"
                        id="category"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="itemName" className="block text-gray-700">Item Name</label>
                    <input
                        type="text"
                        id="itemName"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="quantity" className="block text-gray-700">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            </form>
        </div>
    );
};

export default RequestSupplies;
