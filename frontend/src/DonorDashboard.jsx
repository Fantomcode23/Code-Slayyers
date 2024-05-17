import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DonorDashboard = () => {
    const [donations, setDonations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3002/api/donations', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(response => setDonations(response.data))
        .catch(error => console.error('Error fetching donations:', error));
    }, []);

    const handleDonateClick = () => {
        navigate('/donate');
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
                <Navbar handleDonateClick={handleDonateClick} />
                <div className="p-8">
                    <h1 className="text-2xl font-bold mb-4">Donor Dashboard</h1>
                    <h2 className="text-xl font-semibold mb-2">Past Donations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {donations.map((donation) => (
                            <div key={donation._id} className="border p-4 rounded shadow">
                                <h3 className="font-bold">{donation.itemName}</h3>
                                <p>Category: {donation.category}</p>
                                <p>Quantity: {donation.quantity}</p>
                                <p>Expiry Date: {new Date(donation.expiryDate).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Navbar = ({ handleDonateClick }) => (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <div className="text-center">
            <h1 className="text-2xl font-bold">LeftOverLove</h1>
        </div>
        <button
            onClick={handleDonateClick}
            className="bg-white text-blue-500 px-4 py-2 rounded"
        >
            Donate
        </button>
    </nav>
);

const Sidebar = () => (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4">
            <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>
        <ul className="flex-1 p-4 space-y-4">
            <li>
                <Link to="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/past-donations" className="block py-2 px-4 rounded hover:bg-gray-700">
                    Past Donations
                </Link>
            </li>
            <li>
                <Link to="/profile" className="block py-2 px-4 rounded hover:bg-gray-700">
                    Profile
                </Link>
            </li>
            <li>
                <Link to="/settings" className="block py-2 px-4 rounded hover:bg-gray-700">
                    Settings
                </Link>
            </li>
        </ul>
    </div>
);

export default DonorDashboard;
