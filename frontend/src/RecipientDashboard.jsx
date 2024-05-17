import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RecipientDashboard = () => {
    const [supplies, setSupplies] = useState([]);
    const [matches, setMatches] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/api/supplies', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(response => setSupplies(response.data))
        .catch(error => console.error('Error fetching supplies:', error));
    }, []);

    const handleRequestClick = () => {
        navigate('/request-supplies');
    };

    useEffect(() => {
        axios.get('http://localhost:3000/api/matches', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(response => setMatches(response.data))
        .catch(error => console.error('Error fetching matches:', error));
    }, []);

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
                <Navbar handleRequestClick={handleRequestClick} />
                <div className="p-8">
                    <h1 className="text-2xl font-bold mb-4">Recipient Dashboard</h1>
                    <h2 className="text-xl font-semibold mb-2">Requested Supplies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {supplies.map((supply) => (
                            <div key={supply._id} className="border p-4 rounded shadow">
                                <h3 className="font-bold">{supply.itemName}</h3>
                                <p>Category: {supply.category}</p>
                                <p>Quantity: {supply.quantity}</p>
                            </div>
                        ))}
                    </div>
                    <h2 className="text-xl font-semibold mb-2 mt-8">Matched Donations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {matches.map((match) => (
                            <div key={match._id} className="border p-4 rounded shadow">
                                <h3 className="font-bold">{match.itemName}</h3>
                                <p>Category: {match.category}</p>
                                <p>Quantity: {match.quantity}</p>
                                <p>Donor: {match.donorName}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Navbar = ({ handleRequestClick }) => (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <div className="text-center">
            <h1 className="text-2xl font-bold">LeftOverLove</h1>
        </div>
        <button
            onClick={handleRequestClick}
            className="bg-white text-blue-500 px-4 py-2 rounded"
        >
            Request Supplies
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
                <Link to="/recipient-dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/past-requests" className="block py-2 px-4 rounded hover:bg-gray-700">
                    Past Requests
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

export default RecipientDashboard;
