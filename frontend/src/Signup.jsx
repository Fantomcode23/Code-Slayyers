import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('donor');
    const [uniqueId, setUniqueId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/api/auth/signup', { name, email, password, address, role, uniqueId })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-lg w-full p-8 space-y-8 bg-white rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">Sign up for an account</h2>
                    <p className="mt-2 text-gray-600">Join us to access our amazing features ✌️</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                autoComplete="off"
                                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700">Email address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                autoComplete="off"
                                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                autoComplete="off"
                                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-gray-700">Address</label>
                            <input
                                type="text"
                                id="address"
                                placeholder="Enter your address"
                                autoComplete="off"
                                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="role" className="block text-gray-700">Role</label>
                            <select
                                id="role"
                                className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="donor">Donor</option>
                                <option value="recipient">Recipient</option>
                            </select>
                        </div>
                        {role === 'recipient' && (
                            <div>
                                <label htmlFor="uniqueId" className="block text-gray-700">Unique ID</label>
                                <input
                                    type="text"
                                    id="uniqueId"
                                    placeholder="Enter government ID"
                                    autoComplete="off"
                                    className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                                    value={uniqueId}
                                    onChange={(e) => setUniqueId(e.target.value)}
                                />
                            </div>
                        )}
                    </div>
                    <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">Already have an account? 
                    <Link to="/login" className="ml-1 text-blue-500 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
